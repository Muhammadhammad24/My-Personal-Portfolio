"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Zap, Award, TrendingUp, Clock, CheckCircle, Target, Bot, Cloud } from "lucide-react"

const stats = [
  {
    icon: Bot,
    value: "95%",
    label: "Automated Resolution",
    description: "AI-driven automation achieving automated resolution across infrastructure",
  },
  {
    icon: Clock,
    value: "70%",
    label: "Workload Reduction", 
    description: "Through Machine Learning, Python, and Splunk AI implementation",
  },
  {
    icon: Shield,
    value: "99.2%",
    label: "Threat Detection",
    description: "Security accuracy with Zero Trust and incident response optimization",
  },
  {
    icon: Users,
    value: "500+",
    label: "Endpoints Managed",
    description: "Through intelligent automation and predictive analytics",
  },
]

const values = [
  {
    icon: Cloud,
    title: "AI-Driven Operations",
    description:
      "Revolutionizing IT operations by integrating AI chatbots, automated provisioning, and intelligent monitoring for enterprise-scale solutions.",
  },
  {
    icon: Shield,
    title: "Zero Trust Security",
    description: "Implementing cutting-edge security with CrowdStrike, Okta MFA/SSO, and Splunk Enterprise Security for 99.2% threat detection accuracy.",
  },
  {
    icon: Zap,
    title: "Infrastructure Automation",
    description: "Deploying cloud infrastructure with Docker/Kubernetes, Terraform/Ansible, cutting deployment time from 6 hours to 90 minutes.",
  },
  {
    icon: Target,
    title: "Enterprise Scale Impact",
    description: "Managing $2.3M+ infrastructure across 12 international locations with predictive asset lifecycle analytics.",
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
              IT Service Engineer • Germany
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Revolutionizing IT Operations with <span className="text-primary">AI-Driven Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              5+ years IT professional specializing in system administration, network engineering, and IT support. 
              Achieving 80% automated support tickets and zero-breach security posture through intelligent automation.
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
              <h3 className="text-2xl font-bold text-foreground">My Journey in Enterprise IT</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  From managing complex cloud infrastructures across Azure, AWS, and Google Cloud Platform to implementing 
                  Zero Trust security architectures - my expertise spans the full spectrum of modern IT operations.
                </p>
                <p>
                  Currently pursuing Master's in Data Science & Informatik at Georg-August-Universität Göttingen while 
                  remotely managing $2.3M+ infrastructure for international organizations. I specialize in PowerShell, 
                  Python automation, and Terraform/Ansible deployments that have cut deployment times from 6 hours to 90 minutes.
                </p>
                <p>
                  My approach? Leverage AI-driven orchestration, predictive analytics, and self-healing systems to transform 
                  traditional IT operations into intelligent, automated ecosystems that prevent issues before they occur.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Germany-Based", "Remote Expert", "Cloud Native", "AI Automation", "ITIL Certified", "Zero Trust"].map((tag) => (
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
              <h3 className="text-2xl font-bold text-foreground">Technical Philosophy & Approach</h3>
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
                    <div className="font-semibold text-foreground">Master of Science in Data Science & Informatik</div>
                    <div className="text-sm text-muted-foreground">Georg-August-Universität Göttingen, Germany</div>
                    <div className="text-sm text-primary">2023 – 2025</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Bachelor of Science in Computer Science</div>
                    <div className="text-sm text-muted-foreground">University of Karachi, Pakistan</div>
                    <div className="text-sm text-primary">2016 – 2019</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Key Certifications</h4>
                <div className="space-y-2">
                  {[
                    "ITIL Foundation - IT Service Management",
                    "System Administration & IT Infrastructure - Google",
                    "Information Security for IT Support Technicians",
                    "Windows Server Fundamentals - Microsoft",
                    "HDI Support Center Analyst",
                    "Linux Essentials - Administration",
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