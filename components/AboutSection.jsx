"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, GraduationCap, Target, Heart, Lightbulb, Server } from "lucide-react"

export default function AboutSection() {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                        <CardContent className="p-6">
                            <GraduationCap className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Education & Current Status</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>🎓 FPT University (2022-2025)</li>
                                <li>📚 Software Engineering Major</li>
                                <li>💼 Backend Developer</li>
                                <li>🔍 Actively seeking full-time opportunities</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                        <CardContent className="p-6">
                            <Target className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Career Goals</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>🎯 DevOps Engineer</li>
                                <li>🏗️ Infrastructure Automation Expert</li>
                                <li>📊 CI/CD Pipeline Specialist</li>
                                <li>🚀 Cloud Architecture Leader</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                        <CardContent className="p-6">
                            <Heart className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Interests & Passion</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>💾 Database Optimization</li>
                                <li>🔧 System Architecture</li>
                                <li>📈 Performance Tuning</li>
                                <li>🌐 Scalable Backend Systems</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                        <CardContent className="p-6">
                            <Code className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-sm mb-2 text-muted-foreground">Programming Languages</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Java", "JavaScript", "C#", "SQL", "Python"].map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-sm mb-2 text-muted-foreground">Frameworks & Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Spring Boot", "React", ".NET", "Node.js", "Express"].map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-sm mb-2 text-muted-foreground">Databases & Tools</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["SQL Server", "PostgreSQL", "MySQL", "Docker", "Postman", "Git"].map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                        <CardContent className="p-6">
                            <Lightbulb className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Philosophy & Approach</h3>
                            <div className="space-y-4 text-muted-foreground">
                                <p className="text-sm leading-relaxed">
                                    "Code is like humor. When you have to explain it, it's bad. Keep it simple, keep it working."
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="text-sm">Clean, maintainable code</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="text-sm">Scalable system design</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="text-sm">Continuous learning mindset</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="text-sm">Collaborative team player</span>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed mt-4">
                                    Currently exploring advanced database concepts, microservices architecture, and cloud technologies to
                                    build robust, enterprise-level solutions.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                        <Server className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-3">Technical Hobbies & Self-Hosting</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Beyond professional development, I'm passionate about self-hosting and managing my own infrastructure.
                                    I enjoy setting up and maintaining various services on my home lab setup.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-medium text-sm">Jenkins CI/CD</h4>
                                            <p className="text-xs text-muted-foreground">
                                                Automated build pipelines and deployment workflows
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-medium text-sm">Taiga Project Management</h4>
                                            <p className="text-xs text-muted-foreground">Agile project tracking and team collaboration</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-medium text-sm">RocketChat Communication</h4>
                                            <p className="text-xs text-muted-foreground">
                                                Self-hosted team messaging and collaboration platform
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-medium text-sm">Grafana Monitoring</h4>
                                            <p className="text-xs text-muted-foreground">
                                                Visualize metrics and logs for system observability
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-medium text-sm">Nginx Reverse Proxy</h4>
                                            <p className="text-xs text-muted-foreground">
                                                Web server and reverse proxy for efficient traffic routing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-medium text-sm">Infrastructure & DevOps Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Docker",
                                        "Linux Administration",
                                        "Nginx",
                                        "SSL/TLS",
                                        "Network Configuration",
                                        "Backup Strategies",
                                        "Monitoring",
                                        "Security Hardening",
                                    ].map((skill) => (
                                        <Badge key={skill} variant="outline" className="text-xs">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed mt-4">
                                    This hands-on experience with infrastructure management gives me valuable insights into deployment,
                                    scalability, and system reliability that I apply to my software development work.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
