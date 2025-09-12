"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Monitor, Shield, Cloud, Network, Code, Settings, Users, Zap, Award, Server } from "lucide-react"

const skillCategories = [
  {
    title: "Operating Systems",
    icon: Monitor,
    color: "from-blue-500 to-cyan-600",
    skills: [
      { name: "Windows 10/11", level: 95 },
      { name: "Windows Server 2019/2022", level: 90 },
      { name: "Linux (Ubuntu/CentOS)", level: 85 },
      { name: "macOS", level: 80 },
      { name: "iOS/Android", level: 85 },
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    color: "from-green-500 to-emerald-600",
    skills: [
      { name: "Microsoft Defender", level: 95 },
      { name: "Endpoint Protection", level: 90 },
      { name: "GDPR Compliance", level: 85 },
      { name: "Vulnerability Management", level: 88 },
      { name: "Incident Response", level: 90 },
    ],
  },
  {
    title: "Cloud & Virtualization",
    icon: Cloud,
    color: "from-purple-500 to-violet-600",
    skills: [
      { name: "Microsoft Azure", level: 90 },
      { name: "Microsoft 365 Admin", level: 95 },
      { name: "VMware vSphere", level: 85 },
      { name: "Hyper-V", level: 80 },
      { name: "AWS (Basics)", level: 75 },
    ],
  },
  {
    title: "System Administration",
    icon: Server,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "Active Directory", level: 95 },
      { name: "Azure AD/Entra ID", level: 90 },
      { name: "Microsoft Intune", level: 88 },
      { name: "Group Policy", level: 92 },
      { name: "Exchange Online", level: 85 },
    ],
  },
  {
    title: "Network & Monitoring",
    icon: Network,
    color: "from-teal-500 to-green-600",
    skills: [
      { name: "PRTG Network Monitor", level: 90 },
      { name: "SolarWinds", level: 85 },
      { name: "TCP/IP", level: 88 },
      { name: "VPN Configuration", level: 85 },
      { name: "Wireshark", level: 80 },
    ],
  },
  {
    title: "Automation & Scripting",
    icon: Code,
    color: "from-indigo-500 to-purple-600",
    skills: [
      { name: "PowerShell", level: 92 },
      { name: "Python (Basics)", level: 70 },
      { name: "Bash Scripting", level: 75 },
      { name: "Power Automate", level: 85 },
      { name: "Task Automation", level: 90 },
    ],
  },
  {
    title: "ITSM & Support Tools",
    icon: Settings,
    color: "from-pink-500 to-rose-600",
    skills: [
      { name: "ServiceNow", level: 90 },
      { name: "Jira Service Management", level: 85 },
      { name: "Zendesk", level: 88 },
      { name: "ITIL 4 Framework", level: 85 },
      { name: "Asset Management", level: 90 },
    ],
  },
  {
    title: "Collaboration Platforms",
    icon: Users,
    color: "from-yellow-500 to-orange-600",
    skills: [
      { name: "Microsoft Teams", level: 95 },
      { name: "SharePoint", level: 90 },
      { name: "Google Workspace", level: 85 },
      { name: "Zoom", level: 88 },
      { name: "Slack", level: 80 },
    ],
  },
]

const certifications = [
  {
    name: "ITIL Foundation - IT Service Management",
    issuer: "ITIL",
    icon: Award,
    color: "text-green-600",
  },
  {
    name: "HDI Support Center Analyst",
    issuer: "HDI",
    icon: Users,
    color: "text-blue-600",
  },
  {
    name: "Information Security for IT Support Technicians",
    issuer: "Security Institute",
    icon: Shield,
    color: "text-red-600",
  },
  {
    name: "Linux Essentials - Linux Administration",
    issuer: "Linux Professional Institute",
    icon: Monitor,
    color: "text-orange-600",
  },
  {
    name: "Windows Server Fundamentals",
    issuer: "Microsoft",
    icon: Server,
    color: "text-purple-600",
  },
  {
    name: "System Administration and IT Infrastructure Services",
    issuer: "Google",
    icon: Cloud,
    color: "text-teal-600",
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-muted/30" ref={ref}>
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
              <Zap className="w-4 h-4 mr-2" />
              Technical Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Skills & <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              A comprehensive overview of my technical skills, certifications, and expertise across various IT domains.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} index={index} />
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Professional Certifications</h3>
              <p className="text-muted-foreground">
                Industry-recognized certifications that validate my expertise and commitment to professional
                development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-primary/20 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <cert.icon className={`w-6 h-6 ${cert.color} flex-shrink-0 mt-1`} />
                    <div className="min-w-0">
                      <h4 className="font-semibold text-foreground text-sm leading-tight">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({ category, index }: { category: (typeof skillCategories)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}
            >
              <category.icon className="w-5 h-5" />
            </motion.div>
            <span className="text-lg group-hover:text-primary transition-colors">{category.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
              >
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}
