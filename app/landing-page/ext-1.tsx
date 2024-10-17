"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "AI-Driven Insights",
        description:
            "Feedbacker AI provides intelligent feedback by analyzing user behavior and interactions. It delivers precise, actionable insights to help teams refine their projects quickly. Feedbacker AI identifies patterns, empowering users to make informed decisions that boost productivity and optimize performance.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Powered by AI
            </div>
        ),
    },
    {
        title: "Real-Time Feedback",
        description:
            "Feedbacker AI delivers instant feedback as you work, eliminating the wait for reviews. By providing real-time suggestions, it ensures that your team stays aligned and up-to-date, improving collaboration and reducing revision time, all while maintaining the accuracy and relevance of the feedback.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
                Instant updates
            </div>
        ),
    },
    {
        title: "Customizable Feedback",
        description:
            "With Feedbacker AI, you can tailor the feedback to suit your specific needs. The platform allows users to customize metrics, focus areas, and priorities, ensuring that the feedback aligns with project goals. This adaptability helps users receive feedback that’s relevant and aligned with their objectives.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Filter feedbacks
            </div>
        ),
    },
    {
        title: "Seamless Integration",
        description:
            "Feedbacker AI integrates smoothly into your existing workflow. Whether you're using project management tools, code editors, or communication platforms, Feedbacker AI works in harmony with your systems, delivering feedback where you need it most without disrupting your processes or requiring complex setups.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Easy integration
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="p-10">
            <StickyScroll content={content} />
        </div>
    );
}
