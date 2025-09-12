"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Wrench } from "lucide-react" // đổi icon từ Database sang Wrench (DevOps vibe)

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6">
            <Wrench className="w-16 h-16 text-primary mx-auto mb-4 float-animation" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Đặng Quang Huy
            <span className="block text-primary text-3xl md:text-4xl mt-2">Software Engineering</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            An ordinary university student pursuing the dream of becoming a Devops engineer. Passionate about backend
            development, infrastructure automation, and scalable systems.
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <Badge variant="secondary" className="text-sm">
              🎯 Focusing
            </Badge>
            <Badge variant="outline" className="text-sm">
              FPT University 2022-2025
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
