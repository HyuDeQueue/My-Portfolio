"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
        <p className="text-xl text-muted-foreground mb-12 text-pretty">
          Open to opportunities, mentoring, and discussions about technology and database architecture.
        </p>
        <div className="flex justify-center gap-6">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/HyuDeQueue" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.linkedin.com/in/dqh-hyudequeue/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.facebook.com/h.ngquang" target="_blank" rel="noopener noreferrer">
              <Mail className="w-5 h-5 mr-2" />
              Facebook
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
