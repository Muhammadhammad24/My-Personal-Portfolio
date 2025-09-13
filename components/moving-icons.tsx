"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimationControls } from "framer-motion"

const CompanyLogoData: Array<{ src: string; alt: string }> = [
    { src: "/icons/docker.svg", alt: "Docker" },
    { src: "/icons/kubernetes.svg", alt: "Kubernetes" },
    { src: "/icons/linux.svg", alt: "Linux" },
    { src: "/icons/pfsense.png", alt: "pfSense" },
    { src: "/icons/terraform.svg", alt: "Terraform" },
    { src: "/icons/OKTA_BIG.svg", alt: "Okta" },
    { src: "/icons/python.svg", alt: "Python" },
    { src: "/icons/api.svg", alt: "API" },
    { src: "/icons/jumpcloud-icon.svg", alt: "JumpCloud" },
]

const InfiniteScrollingLogos = () => {
    const [isHovered, setIsHovered] = useState(false)
    const controls = useAnimationControls()

    useEffect(() => {
        if (isHovered) {
            controls.stop()
        } else {
            controls.start({
                translateX: "-50%",
                transition: {
                    duration: 10,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                },
            })
        }
    }, [isHovered, controls])

    return (
        <div className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl md:text-4xl font-bold text-balance text-center mb-12 text-foreground">
                    Technologies & <span className="text-primary">Tools</span>
                </h3>

                <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-16 after:bg-gradient-to-l after:from-background after:to-transparent after:content-['']">
                    <motion.div animate={controls} initial={{ translateX: 0 }} className="flex flex-none gap-12 pr-12">
                        {[...new Array(2)].map((_, index) => (
                            <React.Fragment key={index}>
                                {CompanyLogoData.map(({ src, alt }) => (
                                    <div
                                        key={`${alt}-${index}`}
                                        className="flex items-center justify-center p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors duration-300"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <Image
                                            src={src || "/placeholder.svg"}
                                            alt={alt}
                                            className="h-8 w-auto flex-none opacity-70 hover:opacity-100 transition-opacity duration-300 filter dark:invert dark:brightness-110"
                                            width={100}
                                            height={32}
                                        />
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default InfiniteScrollingLogos