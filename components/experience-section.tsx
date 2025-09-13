"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, Shield, Server, Users, Zap, CheckCircle, TrendingUp, Award } from "lucide-react"

const experiences = [
  {
    company: "Kontinental Establishment",
    location: "New York, United States",
    position: "IT Support & Administration Specialist",
    type: "Remote",
    period: "Apr 2023 - Present",
    icon: Shield,
    companyIcon: "/icons/kontinental.jpg",
    color: "from-green-500 to-emerald-600",
    achievements: [
      "Managed cloud infrastructure across Azure, AWS, Google Cloud Platform with Docker/Kubernetes, Terraform/Ansible cutting deployment time from 6 hours to 90 minutes",
      "Configured Zero Trust security using CrowdStrike, Okta MFA/SSO, Splunk Enterprise Security achieving 99.2% threat detection accuracy",
      "Developed automation scripts in PowerShell, Python, Power Automate for $2.3M+ infrastructure saving 25 hours/week manual work",
      "Administered 190+ endpoints via Intune, Autopilot, Jamf Pro cutting setup time by 75% from 3 hours to 25 minutes",
      "Deployed monitoring via Datadog, New Relic, Splunk maintaining 99.7% uptime and 100% SLA compliance"
    ],
    technologies: ["Azure", "AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Ansible", "CrowdStrike", "Okta", "Splunk", "PowerShell", "Python"]
  },
  {
    company: "Liberty Books (Pvt.) Ltd",
    location: "Karachi, Pakistan",
    position: "IT Support Specialist",
    type: "Full-time",
    period: "June 2022 to Oct 2022",
    icon: Users,
    companyIcon: "/icons/libertybooks.svg",
    color: "from-purple-500 to-violet-600",
    achievements: [
      "Managed international device ecosystem via SCCM, MDT, VMware Workspace ONE UEM for 520+ Windows 10/11 workstations across 18 countries",
      "Deployed M365 (Teams/SharePoint/OneDrive/Outlook), Google Workspace for 520+ users achieving 90% adoption rate and 43% productivity improvement",
      "Engineered mobile device management via Intune, MDM for 520+ iOS/iPadOS/Android devices cutting setup time by 71%",
      "Streamlined ITSM operations via Freshservice, Jira Service Management processing 1,200+ monthly tickets at 94% resolution rate",
      "Maintained GDPR/HIPAA compliance for $3.2M asset portfolio achieving 100% compliance and 85% asset tracking accuracy"
    ],
    technologies: ["SCCM", "MDT", "VMware Workspace ONE", "M365", "Google Workspace", "Intune", "Freshservice", "Jira SM", "ITIL 4"]
  },
  {
    company: "KTDMC",
    location: "Karachi, Pakistan",
    position: "IT Support and Administration Specialist",
    type: "Full-time",
    period: "Oct 2021 to May 2022",
    icon: Building2,
    companyIcon: "/icons/ktdmc.svg",
    color: "from-orange-500 to-red-600",
    achievements: [
      "Architected virtualized infrastructure with VMware vSphere/ESXi, Hyper-V for 265+ government endpoints achieving 95% deployment success",
      "Built network infrastructure leveraging Cisco/Juniper routers/switches, Cisco Meraki wireless cutting unauthorized access by 80%",
      "Deployed monitoring via PRTG Network Monitor, SolarWinds maintaining 99.8% uptime and cutting troubleshooting time from 4 hours to 90 minutes",
      "Protected $1.2M+ government data through Veeam, Acronis achieving 4-hour RTO and 100% backup success rate",
      "Administered hybrid identity management using AD, Azure AD for 265+ accounts cutting provisioning from 2 hours to 20 minutes"
    ],
    technologies: ["VMware vSphere", "Hyper-V", "Cisco Meraki", "pfSense", "PRTG", "SolarWinds", "Veeam", "Active Directory", "Azure AD"]
  },
  {
    company: "Target Logistics International (Pvt.) Ltd",
    location: "Karachi, Pakistan",
    position: "IT Support Specialist",
    type: "Full-time",
    period: "July 2020 to Sept 2021",
    icon: "/icons/targetlogistics.svg",
    companyIcon: "/icons/targetlogistics.svg",
    color: "from-teal-500 to-green-600",
    achievements: [
      "Operated help desk via ManageEngine ServiceDesk processing 285+ monthly tickets with 92% satisfaction cutting resolution time from 6 hours to 2.5 hours",
      "Coordinated $420K+ hardware lifecycle through ManageEngine AssetExplorer extending hardware lifespan by 30%",
      "Deployed backup using Veeam, Acronis for 25+ critical servers with 100% backup success across 3 office locations",
      "Implemented SolarWinds NPM, ManageEngine OpManager handling 180+ annual changes boosting network performance by 25%",
      "Configured Task Scheduler workflows for 45+ routine tasks across 155+ devices supporting desktop/laptop diagnostics"
    ],
    technologies: ["ManageEngine ServiceDesk", "ManageEngine AssetExplorer", "Veeam", "Acronis", "SolarWinds NPM", "VMware vSphere", "Task Scheduler"]
  },
  {
    company: "The Active Solutions",
    location: "Karachi, Pakistan",
    position: "IT Engineer",
    type: "Full-time",
    period: "Apr 2019 to Feb 2020",
    icon: Zap,
    companyIcon: "/icons/activesolution.svg",
    color: "from-indigo-500 to-purple-600",
    achievements: [
      "Delivered L1/L2/L3 support via osTicket, TeamViewer for 125+ Windows 10 workstations maintaining 96% user satisfaction",
      "Supported infrastructure projects using VMware vSphere, VirtualBox improving system performance by 15%",
      "Created technical documentation via SharePoint Online, Confluence developing 50+ procedures reducing training time by 40%",
      "Implemented network monitoring through ManageEngine OpManager, Nagios improving response time by 30%",
      "Performed desktop/laptop diagnostics on 125+ devices including 15+ macOS systems implementing Bash/Batch scripting for 20+ routine tasks"
    ],
    technologies: ["osTicket", "TeamViewer", "VMware vSphere", "SharePoint", "Confluence", "ManageEngine OpManager", "Nagios", "Bash/Batch"]
  }
]

export default function ExperienceSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const timelineProgress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

  return (
    <section id="experience" className="py-20 bg-background" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Award className="w-4 h-4 mr-2" />
            Professional Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            My Journey Through <span className="text-primary">Enterprise IT Operations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            5+ years of hands-on experience managing enterprise infrastructure, cloud platforms, and security operations 
            across multiple organizations serving 500+ endpoints and $2.3M+ in technology assets.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border/30">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-secondary to-primary origin-top shadow-lg"
              style={{
                height: timelineProgress,
              }}
              initial={{ height: "0%" }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({
  experience,
  index,
  isLeft,
}: {
  experience: (typeof experiences)[0]
  index: number
  isLeft: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
    >
      {/* Timeline Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
        className={`absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} border-4 border-background z-10 shadow-lg`}
      />

      {/* Content Card */}
      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
        <Card className="hover:shadow-xl transition-all duration-300 border-primary/20 group">
          <CardContent className="p-6 space-y-4">
            {/* Header */}
            <div className="flex items-start gap-4">
              {/* Company Logo */}
              <div className="w-12 h-12 rounded-lg border border-border flex items-center justify-center bg-white p-1">
                <img
                  src={experience.companyIcon}
                  alt={`${experience.company} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {experience.position}
                </h3>
                <div className="text-primary font-semibold">{experience.company}</div>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-1">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {experience.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {experience.period}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {experience.type}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Key Achievements
              </h4>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-pretty">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  )
}