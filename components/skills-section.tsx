"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Monitor, Shield, Cloud, Network, Code, Settings, Users, Zap, Award, 
  Server, Database, Bot, FileCode, Terminal, Wrench, Globe, Lock, 
  HardDrive, Cpu, MemoryStick, Smartphone, Wifi, Router, CheckCircle,
  Key, Eye, AlertTriangle, Activity, BarChart3, Search, Mail, 
  MessageSquare, Calendar, FileText, Video, Headphones, Phone,
  Container, GitBranch, Cog, Layers, Package, 
  Folder, Share2, Download, Upload, RefreshCw
} from "lucide-react"

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

const skillCategories: Record<string, SkillCategory> = {
  "Operating Systems": {
    icon: Monitor,
    skills: [
      { name: "Windows 10/11", level: 95, icon: Monitor },
      { name: "Windows Server (2016/2019/2022)", level: 95, icon: Server },
      { name: "macOS", level: 88, icon: Monitor },
      { name: "Linux (Ubuntu/CentOS/RHEL)", level: 90, icon: Terminal },
      { name: "VMware ESXi", level: 92, icon: Container },
      { name: "iOS/iPadOS/Android", level: 85, icon: Smartphone },
    ],
  },
  "Technical Support": {
    icon: Users,
    skills: [
      { name: "L1/L2/L3 Support", level: 95, icon: Users },
      { name: "Remote Tools (TeamViewer/AnyDesk)", level: 92, icon: Monitor },
      { name: "Incident Resolution", level: 90, icon: CheckCircle },
      { name: "User Training", level: 88, icon: Users },
      { name: "Help Desk Operations", level: 95, icon: MessageSquare },
      { name: "End-User Support", level: 92, icon: Users },
    ],
  },
  "System Administration": {
    icon: Server,
    skills: [
      { name: "Active Directory", level: 95, icon: Database },
      { name: "Azure AD/Entra ID", level: 92, icon: Cloud },
      { name: "Group Policy", level: 90, icon: Settings },
      { name: "Exchange", level: 88, icon: Mail },
      { name: "LDAP", level: 85, icon: Key },
      { name: "WSUS", level: 88, icon: Download },
    ],
  },
  "Network Infrastructure": {
    icon: Network,
    skills: [
      { name: "TCP/IP, VLAN, DNS/DHCP", level: 92, icon: Network },
      { name: "Cisco Meraki", level: 88, icon: Router },
      { name: "Cisco/Juniper Routers/Switches", level: 85, icon: Router },
      { name: "VPN", level: 90, icon: Shield },
      { name: "Firewalls (pfSense/SonicWall/Fortinet)", level: 92, icon: Shield },
      { name: "Wi-Fi 6/7, SNMP", level: 88, icon: Wifi },
    ],
  },
  "Cybersecurity & Compliance": {
    icon: Shield,
    skills: [
      { name: "Microsoft Defender", level: 95, icon: Shield },
      { name: "Endpoint Security (CrowdStrike)", level: 92, icon: Lock },
      { name: "Palo Alto Prisma", level: 88, icon: Eye },
      { name: "Okta", level: 85, icon: Key },
      { name: "Splunk", level: 90, icon: Search },
      { name: "Zero Trust, MFA/SSO", level: 88, icon: Key },
    ],
  },
  "Hardware Troubleshooting": {
    icon: Wrench,
    skills: [
      { name: "Desktop/Laptop", level: 95, icon: Monitor },
      { name: "Storage (M1, M2, SSD, HDD)", level: 92, icon: HardDrive },
      { name: "Server Hardware", level: 88, icon: Server },
      { name: "Network Hardware", level: 85, icon: Router },
      { name: "RAM, Power Supply", level: 90, icon: MemoryStick },
      { name: "BIOS/UEFI, Boot Failures", level: 92, icon: Cpu },
    ],
  },
  "Data Protection": {
    icon: Database,
    skills: [
      { name: "Veeam", level: 88, icon: Database },
      { name: "Acronis", level: 85, icon: RefreshCw },
      { name: "Azure/AWS Backup", level: 90, icon: Cloud },
      { name: "Windows Backup", level: 92, icon: HardDrive },
      { name: "File Recovery", level: 88, icon: Folder },
      { name: "Disaster Recovery", level: 85, icon: AlertTriangle },
    ],
  },
  "Cloud Infrastructure": {
    icon: Cloud,
    skills: [
      { name: "Microsoft Azure", level: 95, icon: Cloud },
      { name: "AWS", level: 88, icon: Cloud },
      { name: "Google Cloud Platform", level: 85, icon: Cloud },
      { name: "VMware vSphere/ESXi", level: 92, icon: Container },
      { name: "Hyper-V", level: 90, icon: Layers },
      { name: "Docker, Kubernetes", level: 85, icon: Package },
    ],
  },
  "Service Management": {
    icon: Award,
    skills: [
      { name: "ServiceNow", level: 92, icon: Settings },
      { name: "Jira Service Management", level: 88, icon: FileText },
      { name: "Zendesk", level: 85, icon: Users },
      { name: "Freshservice", level: 85, icon: Settings },
      { name: "ITIL Framework", level: 90, icon: Award },
      { name: "SLA/Incident Management", level: 92, icon: Calendar },
    ],
  },
  "Automation & Scripting": {
    icon: Code,
    skills: [
      { name: "PowerShell", level: 95, icon: Terminal },
      { name: "Python", level: 88, icon: Code },
      { name: "Bash/Batch", level: 85, icon: FileCode },
      { name: "Power Automate", level: 90, icon: Bot },
      { name: "Ansible", level: 85, icon: Settings },
      { name: "Terraform", level: 85, icon: GitBranch },
    ],
  },
  "Device Management": {
    icon: Settings,
    skills: [
      { name: "Microsoft Intune", level: 95, icon: Smartphone },
      { name: "SCCM", level: 92, icon: Database },
      { name: "Autopilot", level: 90, icon: Settings },
      { name: "VMware Workspace ONE UEM", level: 85, icon: Smartphone },
      { name: "Jamf Pro, Kandji", level: 85, icon: Monitor },
      { name: "Apple Business Manager", level: 80, icon: Settings },
    ],
  },
  "System Monitoring": {
    icon: Monitor,
    skills: [
      { name: "PRTG", level: 90, icon: BarChart3 },
      { name: "SolarWinds", level: 88, icon: Activity },
      { name: "Wireshark", level: 85, icon: Activity },
      { name: "Datadog", level: 85, icon: BarChart3 },
      { name: "New Relic", level: 80, icon: Activity },
      { name: "Splunk Enterprise", level: 88, icon: Search },
    ],
  },
  "Enterprise Applications": {
    icon: Globe,
    skills: [
      { name: "M365 (Teams/SharePoint/OneDrive)", level: 95, icon: Share2 },
      { name: "Google Workspace", level: 88, icon: Globe },
      { name: "Zoom Enterprise", level: 90, icon: Video },
      { name: "Slack", level: 85, icon: MessageSquare },
      { name: "Confluence", level: 85, icon: FileText },
      { name: "VPN Clients", level: 92, icon: Network },
    ],
  },
}

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
  const [activeTab, setActiveTab] = useState("Operating Systems")

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
    <section id="skills" className="py-20 bg-background" ref={ref}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-foreground">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              I've worked with a variety of technologies and tools throughout my career. Here's a 
              breakdown of my technical skills and proficiency levels.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex flex-wrap justify-center gap-2 p-2 bg-muted/30 rounded-lg">
              {Object.entries(skillCategories).map(([category, data]) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-card"
                  }`}
                >
                  <data.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category}</span>
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {skillCategories[activeTab]?.skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
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
                <div className="text-3xl font-bold text-primary mb-2">13</div>
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

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-0 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <skill.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-sm font-semibold text-primary">{skill.level}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                className="w-full bg-muted rounded-full h-2 overflow-hidden"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}