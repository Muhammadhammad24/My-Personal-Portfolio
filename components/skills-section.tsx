"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Monitor, Shield, Cloud, Network, Code, Settings, Users, Zap, Award, Server, Database, Bot } from "lucide-react"

const skillCategories = [
  {
    title: "Operating Systems & Server Platforms",
    icon: Monitor,
    color: "from-blue-500 to-cyan-600",
    skills: [
      { name: "Windows 10/11", level: 95 },
      { name: "Windows Server (2016/2019/2022)", level: 92 },
      { name: "Linux (Ubuntu/CentOS/RHEL)", level: 88 },
      { name: "VMware ESXi", level: 85 },
      { name: "macOS/iOS/iPadOS/Android", level: 85 },
    ],
  },
  {
    title: "Cybersecurity & Compliance",
    icon: Shield,
    color: "from-green-500 to-emerald-600",
    skills: [
      { name: "CrowdStrike Endpoint Security", level: 92 },
      { name: "Palo Alto Prisma", level: 88 },
      { name: "Splunk Enterprise Security", level: 90 },
      { name: "Zero Trust Architecture", level: 85 },
      { name: "GDPR/HIPAA Compliance", level: 88 },
    ],
  },
  {
    title: "Cloud Infrastructure & Virtualization",
    icon: Cloud,
    color: "from-purple-500 to-violet-600",
    skills: [
      { name: "Microsoft Azure", level: 92 },
      { name: "AWS (Amazon Web Services)", level: 88 },
      { name: "Google Cloud Platform", level: 85 },
      { name: "VMware vSphere/ESXi", level: 90 },
      { name: "Azure Virtual Desktop", level: 88 },
    ],
  },
  {
    title: "System Administration & Domain Management",
    icon: Server,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "Active Directory", level: 95 },
      { name: "Azure AD/Entra ID", level: 92 },
      { name: "Group Policy Management", level: 90 },
      { name: "Exchange Online", level: 88 },
      { name: "WSUS & Patch Management", level: 85 },
    ],
  },
  {
    title: "Network Administration & Infrastructure",
    icon: Network,
    color: "from-teal-500 to-green-600",
    skills: [
      { name: "TCP/IP, VLAN, DNS/DHCP", level: 90 },
      { name: "Cisco Meraki", level: 85 },
      { name: "Cisco/Juniper Routers/Switches", level: 88 },
      { name: "pfSense/SonicWall/Fortinet", level: 90 },
      { name: "VPN & Wi-Fi 6/7", level: 88 },
    ],
  },
  {
    title: "IT Automation & Scripting",
    icon: Code,
    color: "from-indigo-500 to-purple-600",
    skills: [
      { name: "PowerShell", level: 95 },
      { name: "Python", level: 88 },
      { name: "Bash/Batch Scripting", level: 85 },
      { name: "Power Automate", level: 90 },
      { name: "Terraform/Ansible", level: 85 },
    ],
  },
  {
    title: "Container & DevOps Technologies",
    icon: Bot,
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 85 },
      { name: "YAML Configuration", level: 90 },
      { name: "Infrastructure as Code", level: 88 },
      { name: "CI/CD Pipelines", level: 80 },
    ],
  },
  {
    title: "Device Management & Endpoint Security",
    icon: Settings,
    color: "from-pink-500 to-rose-600",
    skills: [
      { name: "Microsoft Intune", level: 92 },
      { name: "SCCM", level: 88 },
      { name: "Autopilot", level: 90 },
      { name: "VMware Workspace ONE UEM", level: 85 },
      { name: "Jamf Pro/Kandji (macOS)", level: 85 },
    ],
  },
  {
    title: "IT Service Management & Ticketing",
    icon: Database,
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "ServiceNow", level: 92 },
      { name: "Jira Service Management", level: 88 },
      { name: "Zendesk", level: 85 },
      { name: "ITIL 4 Framework", level: 90 },
      { name: "Freshservice", level: 85 },
    ],
  },
  {
    title: "System Monitoring & Performance",
    icon: Users,
    color: "from-yellow-500 to-orange-600",
    skills: [
      { name: "PRTG Network Monitor", level: 90 },
      { name: "SolarWinds", level: 88 },
      { name: "Datadog", level: 85 },
      { name: "Splunk Enterprise", level: 90 },
      { name: "Wireshark", level: 85 },
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
    name: "System Administration and IT Infrastructure Services",
    issuer: "Google",
    icon: Cloud,
    color: "text-blue-600",
  },
  {
    name: "Information Security for IT Support Technicians",
    issuer: "Security Institute",
    icon: Shield,
    color: "text-red-600",
  },
  {
    name: "Windows Server Fundamentals",
    issuer: "Microsoft",
    icon: Server,
    color: "text-purple-600",
  },
  {
    name: "HDI Support Center Analyst - Help Desk Best Practices",
    issuer: "HDI",
    icon: Users,
    color: "text-orange-600",
  },
  {
    name: "Linux Essentials - Linux Administration",
    issuer: "Linux Professional Institute",
    icon: Monitor,
    color: "text-teal-600",
  },
  {
    name: "Discovering Computer Networks",
    issuer: "Open Networking Lab",
    icon: Network,
    color: "text-cyan-600",
  },
  {
    name: "Successful IT Systems",
    issuer: "IT Systems Institute",
    icon: Settings,
    color: "text-indigo-600",
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
              Enterprise-Grade <span className="text-primary">Technical Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Comprehensive expertise in modern IT infrastructure, cloud technologies, automation, and enterprise security solutions 
              across 500+ endpoints and $2.3M+ infrastructure environments.
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
                Industry-recognized certifications validating expertise in IT service management, 
                cloud infrastructure, and enterprise security solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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

          {/* Technical Highlights */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Technology Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%+</div>
                <div className="text-sm text-muted-foreground">Automated Resolution</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Professional Certifications</div>
              </div>
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