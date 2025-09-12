"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink, Code, Star, GitFork, Calendar, Zap } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Roomify - Virtual Collaboration Platform",
    description:
      "A comprehensive virtual collaboration and interaction application for FPT University. Features real-time video conferencing, media sharing, and collaborative workspaces. Built with modern full-stack architecture including SFU server for optimized video streaming.",
    tech: ["JavaScript", "React", "Java", "WebRTC", "Node.js", "Real-time Communication"],
    stars: 0,
    forks: 3,
    link: "https://github.com/swd-roomify",
    type: "Full-Stack Platform",
    status: "Group Project",
    year: "2025",
    highlights: ["Real-time Video", "Media Sharing", "Collaborative Workspaces", "SFU Architecture"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Matchlent - Career & Job Matching Platform",
    description:
      "Comprehensive career development and job matching platform connecting employers with candidates. Features intelligent matching algorithms, career guidance tools, professional networking capabilities, and streamlined application processes. Built with modern full-stack architecture for scalability and enterprise use.",
    tech: [
      "Backend API",
      "Frontend Development",
      "Job Matching",
      "Algorithm Design",
      "Career Tools",
      "Professional Networking",
    ],
    stars: 0,
    forks: 2,
    link: "https://github.com/Three-Pog-Men/Matchlent-BE",
    type: "Full-Stack Platform",
    status: "Group Project",
    year: "2025",
    highlights: ["Smart Matching", "Career Guidance", "Professional Network", "Scalable Architecture"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Diamond Assessment System",
    description:
      "Enterprise-grade diamond assessment and valuation platform. Combines robust Java Spring Boot backend with modern React frontend. Features microservices architecture, real-time data visualization, interactive dashboards, and comprehensive database management for seamless diamond evaluation workflows.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "REST API", "Tailwind CSS", "Chart.js"],
    stars: 0,
    forks: 4,
    link: "https://github.com/Diamond-Assessment-System",
    type: "Full-Stack Enterprise",
    status: "Group Project",
    year: "2024",
    highlights: ["Microservices", "Data Visualization", "Enterprise Architecture", "Interactive Dashboards"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Sportunify",
    description:
      "A comprehensive sports management platform built with C# and modern web technologies. Features user management, event scheduling, and real-time updates for sports organizations.",
    tech: ["C#", ".NET", "SQL Server", "Web API"],
    stars: 3,
    forks: 3,
    link: "https://github.com/HyuDeQueue/Sportunify",
    type: "Full-Stack Application",
    status: "Group Project",
    year: "2024",
    highlights: ["Real-time Updates", "Event Management", "User Authentication"],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 5,
    title: "PetCenter",
    description:
      "Comprehensive pet management system developed as an academic project. Full-featured solution for pet care centers with appointment scheduling, medical records management, and customer relationship tools.",
    tech: ["Java", "Spring Framework", "MySQL", "Thymeleaf"],
    stars: 1,
    forks: 0,
    link: "https://github.com/HyuDeQueue/PetCenter",
    type: "Academic Project",
    status: "Learning Project",
    year: "2023",
    highlights: ["Appointment System", "Medical Records", "CRM Features"],
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 6,
    title: "HarmoniX",
    description:
      "Feature-rich music streaming and management application built with C#. Includes playlist management, audio streaming capabilities, user preference tracking, and modern desktop interface design.",
    tech: ["C#", "WPF", "Entity Framework", "SQLite"],
    stars: 1,
    forks: 0,
    link: "https://github.com/HyuDeQueue/HarmoniX",
    type: "Desktop Application",
    status: "Creative Project",
    year: "2023",
    highlights: ["Audio Streaming", "Playlist Management", "Desktop UI"],
    gradient: "from-violet-500/20 to-indigo-500/20",
  },
]

export default function ProjectsCarousel() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToProject = (index) => {
    setCurrentProject(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my development journey, from academic projects to enterprise solutions
          </p>
        </div>

        <div className="relative mb-8">
          <Card className="bg-card border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[currentProject].gradient} opacity-50`} />
            <CardContent className="relative p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="outline" className="border-primary/50">
                      {projects[currentProject].type}
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10">
                      <Calendar className="w-3 h-3 mr-1" />
                      {projects[currentProject].year}
                    </Badge>
                    <Badge variant="secondary" className="bg-green-600/30 text-white border-green-500/40 font-medium">
                      <Zap className="w-3 h-3 mr-1" />
                      {projects[currentProject].status}
                    </Badge>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">{projects[currentProject].title}</h3>

                  <p className="text-muted-foreground leading-relaxed text-base">
                    {projects[currentProject].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].highlights.map((highlight) => (
                        <Badge key={highlight} variant="outline" className="text-xs bg-primary/5">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-primary">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="font-medium">{projects[currentProject].stars}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <GitFork className="w-4 h-4 text-blue-400" />
                        <span className="font-medium">{projects[currentProject].forks}</span>
                      </div>
                    </div>
                    <Button asChild className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                      <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-secondary/20 rounded-lg border border-border flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                    <Code className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <div className="absolute bottom-4 left-4 text-xs text-muted-foreground font-mono">
                      {projects[currentProject].type.toLowerCase().replace(" ", "_")}.
                      {projects[currentProject].tech[0].toLowerCase()}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all"
            onClick={prevProject}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all"
            onClick={nextProject}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>

          {isAutoPlaying && (
            <div className="w-32 h-1 bg-muted rounded-full mx-auto overflow-hidden">
              <div
                className="h-full bg-primary rounded-full animate-pulse"
                style={{
                  animation: "progress 5s linear infinite",
                }}
              />
            </div>
          )}

          <div className="text-center">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  )
}
