"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, Shield, Server, Users, Zap, CheckCircle, TrendingUp, Award } from "lucide-react"

const experiences = [
  {
    company: "Kontinental Establishment",
    location: "United States (Remote)",
    position: "IT Support & Administrator Specialist",
    type: "Remote, Part-time",
    period: "Mar 2023 to Dec 2024",
    icon: Shield,
    color: "from-green-500 to-emerald-600",
    achievements: [
      "Implemented security protocols achieving 99.5% security compliance",
      "Managed cloud security for AWS and Azure environments",
      "Improved cloud infrastructure security posture by 85%",
      "Reduced security incidents by 70% through endpoint protection",
      "Developed incident response procedures with 4-hour RTO",
    ],
    technologies: ["AWS", "Azure", "Endpoint Protection", "VPN", "IDS/IPS", "Disaster Recovery"],
  },
  {
    company: "Kontinental Establishment",
    location: "Karachi, Pakistan",
    position: "IT Support Engineer",
    type: "Remote",
    period: "Apr 2023 to Mar 2024",
    icon: Server,
    color: "from-blue-500 to-cyan-600",
    achievements: [
      "Managed 500+ IT support tickets monthly with 95% first-call resolution",
      "Administered 200+ endpoint devices using Microsoft Intune and Jamf Pro",
      "Reduced new user setup time by 75% through automation",
      "Achieved 99.5% inventory accuracy tracking $2.5M+ in hardware",
      "Saved 25 hours/week through PowerShell automation workflows",
    ],
    technologies: ["ServiceNow", "Microsoft Intune", "Jamf Pro", "PowerShell", "TeamViewer", "SCCM"],
  },
  {
    company: "Liberty Books (Pvt.) Ltd",
    location: "Karachi, Pakistan",
    position: "IT Support Specialist",
    type: "Full-time",
    period: "June 2022 to Oct 2022",
    icon: Users,
    color: "from-purple-500 to-violet-600",
    achievements: [
      "Provided Level 1 & 2 support for 180+ Windows workstations",
      "Maintained 98.5% system uptime with 15-minute average response time",
      "Achieved 90% user adoption rate for new collaboration platforms",
      "Reduced security incidents by 60% through Microsoft Defender deployment",
      "Improved asset tracking accuracy by 85% using automated discovery",
    ],
    technologies: ["Microsoft 365", "SharePoint", "Google Workspace", "Spiceworks", "ITIL 4"],
  },
  {
    company: "KTDMC",
    location: "Karachi, Pakistan",
    position: "IT Support and Administration Specialist",
    type: "Full-time",
    period: "Oct 2021 to May 2022",
    icon: Building2,
    color: "from-orange-500 to-red-600",
    achievements: [
      "Administered Active Directory for 250+ users with 100% patch compliance",
      "Reduced unauthorized access attempts by 80% through security policies",
      "Achieved 95% successful deployment rate using SCCM and MDT",
      "Improved data protection compliance by 90% with mobile device management",
      "Maintained 99.8% network uptime through proactive monitoring",
    ],
    technologies: ["Active Directory", "Azure AD", "SCCM", "PRTG", "VMware", "Microsoft Intune"],
  },
  {
    company: "Target Logistics International (Pvt.) Ltd",
    location: "Karachi, Pakistan",
    position: "IT Support Specialist",
    type: "Full-time",
    period: "July 2020 to Sept 2021",
    icon: TrendingUp,
    color: "from-teal-500 to-green-600",
    achievements: [
      "Managed help desk operations with 92% user satisfaction rate",
      "Coordinated hardware procurement worth $500K+ with lifecycle management",
      "Achieved 100% backup success rate using Veeam and Acronis",
      "Improved network performance by 25% across 3 office locations",
      "Extended hardware lifespan by 30% through predictive maintenance",
    ],
    technologies: ["ServiceDesk Plus", "Veeam", "VMware vSphere", "SolarWinds", "Asset Management"],
  },
  {
    company: "The Active Solutions",
    location: "Karachi, Pakistan",
    position: "IT Support Engineer",
    type: "Full-time",
    period: "Apr 2019 to Feb 2020",
    icon: Zap,
    color: "from-indigo-500 to-purple-600",
    achievements: [
      "Provided comprehensive end-user support with 96% user satisfaction",
      "Supported IT infrastructure projects with 15% performance improvement",
      "Reduced training time for new employees by 40% through documentation",
      "Improved system response time by 30% through network monitoring",
      "Prevented 12+ potential system failures through proactive monitoring",
    ],
    technologies: ["VMware", "Azure", "SharePoint", "OpManager", "Network Monitoring"],
  },
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
            My Journey Through <span className="text-primary">IT Security & Systems</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            From help desk operations to enterprise security engineering, here's how I've grown and delivered impact
            across different organizations and technologies.
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
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`p-3 rounded-lg bg-gradient-to-r ${experience.color} text-white flex-shrink-0`}
              >
                <experience.icon className="w-6 h-6" />
              </motion.div>

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
