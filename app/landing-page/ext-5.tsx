"use client"

import React from "react"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"

const Sparkles = () => {
    const sparkles = Array.from({ length: 100 }).map((_, i) => (
        <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-200 rounded-full"
            initial={{
                opacity: 0,
                scale: 0,
                x: Math.random() * 500 - 150, // Spread across 500px width
                y: Math.random() * 200, // Keep within 100px height
            }}
            animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -50], // Move upwards
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
                ease: "easeInOut",
            }}
        />
    ))

    return <>{sparkles}</>
}

export default function LampDemo() {
    return (
        <LampContainer>
            <div className="relative">
                <Sparkles />
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-blue-500 to-blue-700 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Collect feedback <br /> the smart way
                </motion.h1>
            </div>
        </LampContainer>
    )
}
