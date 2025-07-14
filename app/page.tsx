"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Code, Gamepad2, Zap, User, Mail, Terminal, Shield, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [glitchText, setGlitchText] = useState("Kryptex")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
      const original = "Kryptex"
      let glitched = ""

      for (let i = 0; i < original.length; i++) {
        if (Math.random() < 0.3) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)]
        } else {
          glitched += original[i]
        }
      }

      setGlitchText(glitched)
      setTimeout(() => setGlitchText("Kryptex"), 200)
    }, 2500)

    return () => clearInterval(glitchInterval)
  }, [])

  const projects = [
    {
      title: "Roblox Admin System",
      description: "Advanced admin panel with custom commands and moderation tools",
      tech: ["Lua", "Roblox Studio", "DataStore"],
      github: "https://github.com/kryptex/roblox-admin",
      demo: "https://www.roblox.com/games/123456789",
      image: "/placeholder.svg?height=200&width=400",
      status: "Active",
    },
    {
      title: "Game Economy Script",
      description: "Complete economy system with shops, trading, and currency management",
      tech: ["Lua", "RemoteEvents", "GUI"],
      github: "https://github.com/kryptex/game-economy",
      demo: "https://www.roblox.com/games/987654321",
      image: "/placeholder.svg?height=200&width=400",
      status: "Updated",
    },
    {
      title: "Anti-Exploit System",
      description: "Robust security system to prevent cheating and exploits",
      tech: ["Lua", "ServerScript", "Security"],
      github: "https://github.com/kryptex/anti-exploit",
      demo: "https://devforum.roblox.com/t/anti-exploit-system",
      image: "/placeholder.svg?height=200&width=400",
      status: "Secure",
    },
    {
      title: "Custom GUI Framework",
      description: "Reusable UI components for Roblox game development",
      tech: ["Lua", "TweenService", "UI Design"],
      github: "https://github.com/kryptex/gui-framework",
      demo: "https://create.roblox.com/marketplace/asset/123456789",
      image: "/placeholder.svg?height=200&width=400",
      status: "Beta",
    },
  ]

  const skills = [
    { name: "Lua Scripting", level: 95, icon: Terminal },
    { name: "Roblox Studio", level: 90, icon: Gamepad2 },
    { name: "Game Development", level: 85, icon: Code },
    { name: "Security Systems", level: 80, icon: Shield },
    { name: "UI/UX Design", level: 75, icon: Cpu },
    { name: "Performance Optimization", level: 70, icon: Zap },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="border-r border-b border-cyan-500/10"
                  animate={{
                    borderColor: ["rgba(6, 182, 212, 0.1)", "rgba(156, 163, 175, 0.1)", "rgba(6, 182, 212, 0.1)"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-cyan-500/20"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-gray-300 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {glitchText}
          </motion.div>
          <div className="flex gap-6">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-cyan-400 transition-colors relative group font-mono text-sm uppercase tracking-wider bg-transparent border-none cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-gray-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold font-mono mb-4 bg-gradient-to-r from-cyan-400 to-gray-300 bg-clip-text text-transparent">
              {glitchText}
            </h1>
            <div className="flex justify-center items-center gap-2 text-sm font-mono text-cyan-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span>ONLINE</span>
              <div className="w-1 h-4 bg-cyan-400 animate-pulse" />
            </div>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-mono"
          >
            <span className="text-cyan-400">&gt;</span> Game Developer & Lua Specialist
            <br />
            <span className="text-gray-400">&gt;</span> Creating immersive Roblox experiences
            <br />
            <span className="text-cyan-400">&gt;</span> Security & Performance focused
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-600 to-gray-600 hover:from-cyan-700 hover:to-gray-700 text-white px-8 py-3 rounded-lg text-lg font-mono font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 border border-cyan-500/50"
              size="lg"
            >
              <Code className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <Button
              onClick={() => handleExternalLink("https://github.com/kryptex")}
              variant="outline"
              className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-black px-8 py-3 rounded-lg text-lg font-mono font-semibold transition-all duration-300 bg-transparent shadow-lg shadow-gray-500/25"
              size="lg"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono bg-gradient-to-r from-cyan-400 to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-gray-500 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-gray-500 rounded-lg flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-mono">Developer Profile</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 font-mono text-sm">
                    <span className="text-cyan-400">$</span> Passionate game developer specializing in Roblox and Lua
                    programming. I create immersive gaming experiences with focus on performance, security, and user
                    engagement. My expertise spans from complex game mechanics to intuitive user interfaces.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-mono">
                      <Gamepad2 className="w-3 h-3 mr-1" />
                      GAME_DEV
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-500/20 text-gray-300 border-gray-500/30 font-mono">
                      <Code className="w-3 h-3 mr-1" />
                      LUA_EXPERT
                    </Badge>
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-mono">
                      <Shield className="w-3 h-3 mr-1" />
                      SECURITY
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/30 rounded-lg p-4 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-gray-500 rounded-lg flex items-center justify-center">
                        <skill.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold font-mono text-sm">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 font-bold font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-gray-400 relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono bg-gradient-to-r from-cyan-400 to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-gray-500 mx-auto mb-8" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto font-mono">
              <span className="text-cyan-400">&gt;</span> Explore my latest Roblox games and development tools
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`font-mono text-xs ${
                          project.status === "Active"
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                            : project.status === "Updated"
                              ? "bg-gray-500/20 text-gray-300 border-gray-500/30"
                              : project.status === "Secure"
                                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                                : "bg-gray-500/20 text-gray-300 border-gray-500/30"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-black/50 rounded-lg backdrop-blur-sm hover:bg-cyan-500/50 transition-colors border border-cyan-500/30"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-black/50 rounded-lg backdrop-blur-sm hover:bg-gray-500/50 transition-colors border border-gray-500/30"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </motion.a>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors font-mono">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 font-mono text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-500/20 text-gray-300 border-gray-500/30 hover:bg-cyan-500/30 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-6">
        {/* Contact Section */}
      </section>
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono bg-gradient-to-r from-cyan-400 to-gray-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-gray-500 mx-auto mb-8" />
            <p className="text-gray-300 text-lg font-mono">
              <span className="text-cyan-400">&gt;</span> Ready to collaborate on your next Roblox project?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm text-center hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
              <CardContent className="p-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-gray-500 rounded-lg flex items-center justify-center"
                >
                  <Github className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">GitHub</h3>
                <p className="text-gray-300 mb-4 font-mono text-sm">Check out my repositories</p>
                <Button
                  onClick={() => handleExternalLink("https://github.com/kryptex")}
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black bg-transparent font-mono"
                >
                  Visit Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-500/20 backdrop-blur-sm text-center hover:border-gray-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25">
              <CardContent className="p-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gray-500 to-cyan-500 rounded-lg flex items-center justify-center"
                >
                  <Mail className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">Email</h3>
                <p className="text-gray-300 mb-4 font-mono text-sm">Let's discuss your project</p>
                <Button
                  onClick={() => handleExternalLink("mailto:kryptex@example.com")}
                  variant="outline"
                  className="border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white bg-transparent font-mono"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm text-center hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
              <CardContent className="p-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-gray-500 rounded-lg flex items-center justify-center"
                >
                  <Gamepad2 className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">Roblox</h3>
                <p className="text-gray-300 mb-4 font-mono text-sm">Play my games</p>
                <Button
                  onClick={() => handleExternalLink("https://www.roblox.com/users/123456789/profile")}
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white bg-transparent font-mono"
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-cyan-500/20">
        <div className="container mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 font-mono text-sm"
          >
            <span className="text-cyan-400">&copy;</span> 2024 Kryptex. Made with{" "}
            <span className="text-red-400">❤️</span> for the Roblox community.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
