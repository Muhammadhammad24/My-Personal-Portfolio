"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { toast } from "sonner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageCircle,
  Clock,
  Globe,
  CheckCircle,
  Calendar,
  ExternalLink,
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "muhammad24997@gmail.com",
    href: "mailto:muhammad24997@gmail.com",
    color: "text-blue-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+49 176 8733 3721",
    href: "tel:+4917687333721",
    color: "text-green-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Germany",
    href: null,
    color: "text-red-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mhammad24",
    href: "https://linkedin.com/in/mhammad24",
    color: "text-blue-700",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Muhammadhammad24",
    href: "https://github.com/Muhammadhammad24",
    color: "text-gray-700",
  },
 
  {
    icon: Globe,
    label: "Languages",
    value: "English (C1 Fluent), German (B1 Intermediate)",
    href: null,
    color: "text-purple-600",
  },
]

const availability = [
  {
    icon: CheckCircle,
    text: "Available for full-time and remote opportunities",
    color: "text-green-600",
  },
  {
    icon: Clock,
    text: "Open to hybrid work arrangements across Europe",
    color: "text-blue-600",
  },
  {
    icon: Calendar,
    text: "Currently pursuing Master's - Flexible schedule",
    color: "text-orange-600",
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you within 24 hours.')
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30" ref={ref}>
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
              <MessageCircle className="w-4 h-4 mr-2" />
              Let's Collaborate
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Ready to Transform Your <span className="text-primary">IT Operations?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Whether you need cloud infrastructure optimization, security automation, or enterprise-scale IT solutions - 
              I'm here to help revolutionize your technology operations with AI-driven approaches.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group"
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 p-4 rounded-lg hover:bg-card transition-colors duration-200"
                        >
                          <info.icon className={`w-5 h-5 ${info.color} group-hover:scale-110 transition-transform`} />
                          <div>
                            <div className="font-medium text-foreground">{info.label}</div>
                            <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                              {info.value}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 rounded-lg">
                          <info.icon className={`w-5 h-5 ${info.color}`} />
                          <div>
                            <div className="font-medium text-foreground">{info.label}</div>
                            <div className="text-sm text-muted-foreground">{info.value}</div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-card rounded-lg p-6 border border-primary/20">
                <h4 className="text-xl font-bold text-foreground mb-4">Current Status</h4>
                <div className="space-y-3">
                  {availability.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="text-sm text-muted-foreground">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats from Resume */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
                <h4 className="text-xl font-bold text-foreground mb-4">Impact & Achievements</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-xs text-muted-foreground">Automated Resolution</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">Endpoints Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">$2.3M+</div>
                    <div className="text-xs text-muted-foreground">Infrastructure Value</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="w-5 h-5 text-primary" />
                    Let's Discuss Your Project
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder=""
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder=""
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder=""
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                      <Send className={`w-4 h-4 mr-2 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      I typically respond within 24 hours. For urgent IT support matters, please call directly.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-20 pt-8 border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Muhammad Hammad - IT Service Engineer. Built with Next.js, Tailwind CSS, and Framer Motion.
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/mhammad24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Muhammadhammad24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:muhammad24997@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}