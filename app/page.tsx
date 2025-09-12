import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsCarousel from "@/components/ProjectsCarousel"
import ContactSection from "@/components/ContactSection"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground stars">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsCarousel />
      <ContactSection />

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Đặng Quang Huy. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
