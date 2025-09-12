"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Shield, Server, Cloud, Zap, Award, Settings, Monitor } from "lucide-react"

type Project = {
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color: string
  impact: string
  technologies: string[]
  category: string
  features: string[]
  github?: string
}

const projects: Project[] = [
  {
  title: "AI-Powered IT Support Chatbot",
  description:
    "Developed an enterprise-grade IT Support Chatbot system (InfoTech Wizard) with a FastAPI backend and React frontend, enabling automated query handling, real-time chat, and integration with AI/ML models for intelligent responses.",
  icon: Monitor, // you can also use Zap or Cloud depending on your theme
  color: "from-sky-500 to-indigo-600",
  impact: "Production-ready architecture with minor optimizations",
  technologies: [
    "FastAPI",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "PyTorch",
    "Sentence-Transformers",
    "FAISS",
    "Pydantic"
  ],
  category: "AI & Automation",
  features: [
    "Retrieval-Augmented Generation (RAG) pipeline",
    "Containerized deployment with Docker",
    "Real-time chat interface with error handling",
    "Secure input validation and content filtering"
  ],
  github: "https://github.com/yourusername/infotech-wizard" // replace with actual repo
},
  {
    title: "IT Support Troubleshooting and Automation",
    description:
      "Engineered comprehensive PowerShell-based diagnostic frameworks and automated resolution workflows, integrating ServiceNow APIs with intelligent ticket routing systems.",
    icon: Zap,
    color: "from-blue-500 to-cyan-600",
    impact: "70% reduction in manual interventions",
    technologies: ["PowerShell", "ServiceNow API", "Automation", "Diagnostics"],
    category: "Automation",
    features: [
      "Automated ticket routing and prioritization",
      "PowerShell diagnostic frameworks",
      "ServiceNow API integration",
      "Intelligent resolution workflows",
    ],
    github: "https://github.com/yourusername/it-support-automation",
  },
  {
    title: "Active Directory Management Automation",
    description:
      "Architected enterprise-scale user provisioning systems with PowerShell DSC, implemented advanced Group Policy automation, and designed seamless Azure AD Connect hybrid identity solutions.",
    icon: Server,
    color: "from-green-500 to-emerald-600",
    impact: "Streamlined cloud integration",
    technologies: ["PowerShell DSC", "Active Directory", "Azure AD Connect", "Group Policy"],
    category: "Identity Management",
    features: [
      "Enterprise-scale user provisioning",
      "Advanced Group Policy automation",
      "Hybrid identity solutions",
      "Seamless cloud integration",
    ],
    github: "https://github.com/yourusername/ad-management-automation",
  },
  {
    title: "Cloud Automation and Virtualization",
    description:
      "Orchestrated multi-cloud infrastructure deployment using cutting-edge automation tools, containerized mission-critical applications with Docker/Kubernetes, and implemented Infrastructure as Code methodologies.",
    icon: Cloud,
    color: "from-purple-500 to-violet-600",
    impact: "Multi-cloud infrastructure deployment",
    technologies: ["Docker", "Kubernetes", "Infrastructure as Code", "Multi-Cloud"],
    category: "Cloud Infrastructure",
    features: [
      "Multi-cloud infrastructure orchestration",
      "Container deployment strategies",
      "Infrastructure as Code implementation",
      "Mission-critical application containerization",
    ],
    github: "https://github.com/yourusername/cloud-automation",
  },
  {
    title: "pfSense Firewall Lab Setup",
    description:
      "Configured advanced enterprise-grade network security laboratory featuring high-availability firewall clusters, sophisticated VPN tunneling protocols, VLAN segmentation strategies, and comprehensive network traffic analysis.",
    icon: Shield,
    color: "from-orange-500 to-red-600",
    impact: "Enterprise-grade security lab",
    technologies: ["pfSense", "VPN", "VLAN", "Network Security", "VirtualBox"],
    category: "Network Security",
    features: [
      "High-availability firewall clusters",
      "Advanced VPN tunneling protocols",
      "VLAN segmentation strategies",
      "Comprehensive traffic analysis",
    ],
    github: "https://github.com/yourusername/pfsense-lab",
  },
  {
    title: "ITSM Self-Service Portal",
    description:
      "Developed intelligent knowledge-driven support ecosystem using modern web technologies, integrated AI-powered assistance capabilities, and implemented smart workflow automation.",
    icon: Settings,
    color: "from-teal-500 to-green-600",
    impact: "45% ticket volume reduction",
    technologies: ["Web Technologies", "AI Integration", "Workflow Automation", "Knowledge Base"],
    category: "Service Management",
    features: [
      "AI-powered assistance capabilities",
      "Smart workflow automation",
      "Knowledge-driven support ecosystem",
      "Enhanced user experience design",
    ],
    github: "https://github.com/yourusername/itsm-portal",
  },
  {
    title: "Vulnerability Scanning with OpenVAS",
    description:
      "Deployed enterprise-grade security assessment infrastructure featuring automated vulnerability management pipelines, proactive threat detection mechanisms, and comprehensive compliance monitoring dashboards.",
    icon: Monitor,
    color: "from-indigo-500 to-purple-600",
    impact: "Continuous security posture improvement",
    technologies: ["OpenVAS", "Vulnerability Management", "Threat Detection", "Compliance"],
    category: "Security Assessment",
    features: [
      "Automated vulnerability management pipelines",
      "Proactive threat detection mechanisms",
      "Comprehensive compliance monitoring",
      "Security posture improvement dashboards",
    ],
    github: "https://github.com/yourusername/openvas-pipeline",
  },
]

const categories = [
  "All",
  "Automation",
  "Identity Management",
  "Cloud Infrastructure",
  "Network Security",
  "Service Management",
  "Security Assessment",
]

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
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
              Featured Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Relevant <span className="text-primary">Projects &amp; Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              A showcase of innovative IT solutions, automation projects, and security implementations that demonstrate
              my technical expertise and problem-solving capabilities.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Interested in My Work?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to discuss new opportunities, share insights about IT security and automation, or
                collaborate on innovative projects. Let's connect and explore how we can work together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {/* GitHub CTA with green border to match theme */}
                <Button
                  size="lg"
                  variant="outline"
                  className="group bg-transparent border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950/20"
                  asChild
                >
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View my GitHub profile"
                    className="flex items-center"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    View GitHub
                  </a>
                </Button>

                <Button variant="outline" size="lg" className="group bg-transparent" asChild>
                  <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View my LinkedIn profile"
                    className="flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 flex flex-col">
        <CardHeader className="pb-4">
          <div className="flex items-start gap-3 mb-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white flex-shrink-0`}
            >
              <project.icon className="w-5 h-5" />
            </motion.div>
            <div className="min-w-0">
              <Badge variant="outline" className="mb-2 text-xs">
                {project.category}
              </Badge>
              <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                {project.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col space-y-4">
          <p className="text-sm text-muted-foreground text-pretty leading-relaxed flex-1">{project.description}</p>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-primary">{project.impact}</span>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
              <ul className="space-y-1">
                {project.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-pretty">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Render ALL technologies (not just three) */}
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* GitHub button with green border to match theme */}
          {project.github && (
            <div className="pt-2">
              <Button
  asChild
  variant="outline"
  size="sm"
  className="group w-full justify-center border-primary text-primary hover:bg-primary dark:hover:bg-primary"
>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="flex items-center"
                >
                  <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
