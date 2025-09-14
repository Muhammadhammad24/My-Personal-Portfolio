"use client"

import React from "react"
import Image from "next/image"

const CompanyLogoData: Array<{ src: string; alt: string }> = [
    { src: "/icons/docker.svg", alt: "Docker" },
    { src: "/icons/kubernetes.svg", alt: "Kubernetes" },
    { src: "/icons/linux.svg", alt: "Linux" },
    { src: "/icons/pfsense.png", alt: "pfSense" },
    { src: "/icons/terraform.svg", alt: "Terraform" },
    { src: "/icons/oktaneww.jpeg", alt: "Okta" },
    { src: "/icons/python.svg", alt: "Python" },
    { src: "/icons/api.svg", alt: "API" },
    { src: "/icons/fortinet.jpeg", alt: "Fortinet"},
    { src: "/icons/GSuite.png", alt: "GSuite" },
    { src: "/icons/confluence.svg", alt: "confluence" },
    { src: "/icons/cisco.jpeg", alt: "cisco" },
    { src: "/icons/jira.svg", alt: "jira" },
    { src: "/icons/Microsoft-365.svg", alt: "Microsoft-365" },
    { src: "/icons/cloudflare.svg", alt: "cloudflare" },
    { src: "/icons/Kandji.svg", alt: "Kandji" },
    { src: "/icons/slack.svg", alt: "slack" },
    { src: "/icons/bash.svg", alt: "bash" },
    { src: "/icons/jamff.png", alt: "Jamf" },
    { src: "/icons/jumpcloud.jpeg", alt: "Jumpcloud" },
    { src: "/icons/intune.svg", alt: "Intune" },
    { src: "/icons/ubuntu.svg", alt: "ubuntu" },
    { src: "/icons/jenkins.jpeg", alt: "jenkins" },
    { src: "/icons/aws.jpeg", alt: "Aws" },
]

const InfiniteScrollingLogos = () => {
    return (
        <div className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl md:text-4xl font-bold text-balance text-center mb-12 text-foreground">
                    Technologies & <span className="text-primary">Tools</span>
                </h3>

                <div className="relative overflow-hidden">
                    {/* Gradient overlays */}
                    <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
                    
                    {/* Scrolling container */}
                    <div className="flex animate-scroll gap-6">
                        {/* First set of logos */}
                        {CompanyLogoData.map(({ src, alt }, index) => (
                            <div
                                key={`first-${index}`}
                                className="logo-container group"
                            >
                                <div className="logo-wrapper">
                                    <Image
                                        src={src || "/placeholder.svg"}
                                        alt={alt}
                                        width={48}
                                        height={48}
                                        className="logo-image"
                                        style={{
                                            objectFit: 'contain',
                                            maxWidth: '100%',
                                            height: 'auto'
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                        
                        {/* Duplicate set for seamless loop */}
                        {CompanyLogoData.map(({ src, alt }, index) => (
                            <div
                                key={`second-${index}`}
                                className="logo-container group"
                            >
                                <div className="logo-wrapper">
                                    <Image
                                        src={src || "/placeholder.svg"}
                                        alt={alt}
                                        width={48}
                                        height={48}
                                        className="logo-image"
                                        style={{
                                            objectFit: 'contain',
                                            maxWidth: '100%',
                                            height: 'auto'
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .logo-container {
                    flex-shrink: 0;
                    width: 72px;
                    height: 72px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 12px;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(6px);
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                }
                
                .logo-container:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: #22c55e;
                    transform: scale(1.05);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
                }
                
                .logo-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, 
                        transparent, 
                        rgba(255, 255, 255, 0.15), 
                        transparent
                    );
                    transition: left 0.4s ease;
                    z-index: 1;
                }
                
                .logo-container:hover::before {
                    left: 100%;
                }
                
                .logo-wrapper {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                }
                
                .logo-image {
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: contain !important;
                    transition: all 0.3s ease;
                    filter: brightness(1) contrast(1.1) saturate(1.2);
                }
                
                .group:hover .logo-image {
                    filter: brightness(1.1) contrast(1.2) saturate(1.4);
                    transform: scale(1.05);
                }
                
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-50% - 12px));
                    }
                }
                
                .animate-scroll {
                    animation: scroll 13s linear infinite;
                    will-change: transform;
                }
                
                /* Pause animation on hover over any icon */
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
                
                /* Ensure smooth animation performance */
                .animate-scroll * {
                    backface-visibility: hidden;
                    perspective: 1000px;
                }
            `}</style>
        </div>
    )
}

export default InfiniteScrollingLogos