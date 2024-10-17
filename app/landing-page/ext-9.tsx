"use client";
import React from "react";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
    return (
        <div className="flex items-center justify-center rounded-2xl w-full">
            <TextRevealCard
                text="&copy; 2024 Feedbacker AI"
                revealText="Collect feedback smarter"
            >
            </TextRevealCard>
        </div>
    );
}
