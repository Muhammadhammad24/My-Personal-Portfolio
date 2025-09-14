"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Download, Mail, MapPin, Phone } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
  const handleDownloadCV = () => {
    console.log('Download CV clicked!')
    try {
      const link = document.createElement('a')
      link.href = '/cv/M_Hammad_Lebenslauf.pdf'
      link.download = 'Muhammad_Hammad_CV.pdf'
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      console.log('Download initiated')
    } catch (error) {
      console.error('Download error:', error)
    }
  }

  const handleGetInTouch = () => {
    console.log('Get in touch clicked!')
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-card to-muted"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2315803d' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <Badge variant="secondary" className="mb-4 animate-pulse">
                <Shield className="w-4 h-4 mr-2" />
                Available for Opportunities
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                <span className="text-foreground">Muhammad</span>{" "}
                <span className="text-primary">Hammad</span>
              </h1>

              <div className="text-xl md:text-2xl text-muted-foreground font-medium h-16">
                <TypeAnimation
                  sequence={[
                    "IT Service Engineer",
                    2000,
                    "System Administrator",
                    2000,
                    "IT Support Engineer",
                    2000,
                    "Cloud Security Specialist",
                    2000,
                    "DevSecOps",
                    2000,
                    "System Operation Engineer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                5+ years IT professional specializing in system administration,
                network engineering, and IT support managing 500+ endpoints
                through intelligent automation, predictive analytics,
                self-healing systems, and AI-driven orchestration. Implemented
                AI-driven automation achieving 95% automated resolution and 70%
                workload reduction through Machine Learning, Python, and Splunk
                AI.
                <br />
                <br />
                Career Objective: Revolutionizing IT operations by integrating AI
                chatbots, automated provisioning, and intelligent monitoring to
                achieve 80% automated support tickets and a zero-breach security
                posture.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+49 176 8733 3721</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>muhammad24997@gmail.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 relative z-10">
              <button
                onClick={handleGetInTouch}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 group cursor-pointer"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </button>
              <a
                href="/cv/M_Hammad_Lebenslauf.pdf"
                download="Muhammad_Hammad_CV.pdf"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 group cursor-pointer text-foreground no-underline"
                onClick={() => console.log('CV download link clicked!')}
              >
                <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {["Security", "Cloud", "Automation", "ITIL", "Azure", "PowerShell"].map(
                (skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                )
              )}
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Security Shield */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center relative"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-full"
                />

                <Shield className="w-32 h-32 md:w-40 md:h-40 text-primary drop-shadow-lg" />

                {/* Floating Icons */}
                {[
                  
                  
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: item.delay,
                    }}
                    className="absolute w-8 h-8 flex items-center justify-center text-2xl"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: `${item.radius}px 0px`,
                    }}
                  >
                    {typeof item.icon === "string" && item.icon.startsWith("/icons/") ? (
                      <img
                        src={item.icon}
                        alt="floating icon"
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      item.icon
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}