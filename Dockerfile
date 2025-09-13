# syntax=docker/dockerfile:1.7

ARG NODE_VERSION=20.17.0

################################################################################
# Base image and workdir
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

################################################################################
# Production deps layer (cached)
FROM base AS DEPS
# Copy only manifests to leverage build cache
COPY package.json package-lock.json* npm-shrinkwrap.json* ./
# Install only prod deps for the runtime layer
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

################################################################################
# Builder (dev deps + build artifacts)
FROM base AS BUILDER
# Keep telemetry off & ensure key=value format for ENV
ENV NEXT_TELEMETRY_DISABLED=1

# Bring prod node_modules (useful for some builds)
COPY --from=DEPS /usr/src/app/node_modules ./node_modules
# Bring manifests and install full deps (incl. dev) for building
COPY package.json package-lock.json* npm-shrinkwrap.json* ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy the rest of your source
COPY . .

# Helpful: print versions & files if you need to debug
# RUN node -v && npm -v && ls -la

# Build the app (this is where your previous error occurs)
RUN npm run build

################################################################################
# Final runtime image (minimal)
FROM base AS FINAL
# Use key=value form
ENV NODE_ENV=production
# If you want to run on 3455, set PORT and expose it
ENV PORT=3455

# Copy runtime deps and build output
COPY --from=DEPS    /usr/src/app/node_modules ./node_modules
COPY --from=BUILDER /usr/src/app/.next        ./.next
COPY --from=BUILDER /usr/src/app/public       ./public
COPY package.json ./

# If you use Next.js "standalone" output, you can instead copy:
# COPY --from=BUILDER /usr/src/app/.next/standalone ./
# COPY --from=BUILDER /usr/src/app/.next/static     ./.next/static
# COPY --from=BUILDER /usr/src/app/public           ./public

# Switch to non-root after files are in place to avoid permission issues
USER node

EXPOSE 3455

# JSON form for CMD to satisfy linter and avoid signal issues
CMD ["npm", "start"]
