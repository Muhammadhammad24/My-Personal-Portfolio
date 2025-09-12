"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Zap, Award, TrendingUp, Clock, CheckCircle, Target } from "lucide-react"

const stats = [
  {
    icon: CheckCircle,
    value: "95%+",
    label: "Resolution Rate",
    description: "First-call resolution across all support tickets",
  },
  {
    icon: Clock,
    value: "60%",
    label: "Faster Response",
    description: "Improved response times through automation",
  },
  {
    icon: Shield,
    value: "99.5%",
    label: "Security Compliance",
    description: "Maintained security standards across networks",
  },
  {
    icon: TrendingUp,
    value: "4+",
    label: "Years Experience",
    description: "Professional IT and security expertise",
  },
]

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "Every solution prioritizes security and compliance, ensuring robust protection against evolving threats.",
  },
  {
    icon: Zap,
    title: "Automation Focused",
    description: "Streamlining processes through intelligent automation, reducing manual work and human error.",
  },
  {
    icon: Users,
    title: "User Empowerment",
    description: "Making complex technology simple and accessible, enabling teams to focus on their core objectives.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Delivering measurable improvements in system performance, security posture, and user satisfaction.",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Professional Summary
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Turning Technology Challenges Into <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              I believe great IT support isn't just about fixing problems—it's about empowering people and businesses to
              thrive in an increasingly digital world.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center space-y-2">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                  <CardContent className="p-0 space-y-3">
                    <stat.icon className="w-8 h-8 text-primary mx-auto" />
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="font-semibold text-foreground">{stat.label}</div>
                    <div className="text-sm text-muted-foreground text-pretty">{stat.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">My Journey in IT Security</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  From help desk to enterprise infrastructure, I've mastered every level of IT support. My journey began
                  with a simple belief: technology should empower, not frustrate.
                </p>
                <p>
                  Over the past 6 years, I've specialized in transforming complex IT challenges into streamlined
                  solutions. Whether it's implementing ServiceNow workflows, deploying PRTG monitoring systems, or
                  crafting PowerShell automation scripts, I find ways to make technology work smarter, not harder.
                </p>
                <p>
                  What drives me? Seeing that moment when complex technology becomes simple and seamless for users.
                  Every ticket resolved, every system optimized, every process automated is a step toward that goal.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Germany", "Remote Work", "Enterprise Scale", "Cloud Security", "ITIL Certified"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Values */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Core Values & Approach</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 p-4 rounded-lg hover:bg-card transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary mt-1" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground text-pretty">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Certifications Preview */}
          <motion.div variants={itemVariants} className="bg-card rounded-lg p-8 border border-primary/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Education</h4>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-foreground">Master of Science in Data Science</div>
                    <div className="text-sm text-muted-foreground">Georg-August-Universität Göttingen, Germany</div>
                    <div className="text-sm text-primary">2023 – 2025</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Bachelor of Science in Computer Science</div>
                    <div className="text-sm text-muted-foreground">University of Karachi, Pakistan</div>
                    <div className="text-sm text-primary">2016 – 2018</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Key Certifications</h4>
                <div className="space-y-2">
                  {[
                    "ITIL Foundation - IT Service Management",
                    "HDI Support Center Analyst",
                    "Information Security for IT Support",
                    "Linux Essentials - Administration",
                    "Windows Server Fundamentals",
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
