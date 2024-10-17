"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Supercharge",
        },
        {
            text: "your",
        },
        {
            text: "workflow",
        },
        {
            text: "with",
        },
        {
            text: "Feedbacker AI",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem] border-b ">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                Unlock smarter feedback, one step at a time
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button
                    className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
                    onClick={() => window.location.href = "/dashboard"}
                >
                    Join now
                </button>
                <button
                    className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
                    onClick={() => window.location.href = "/dashboard"}
                >
                    Signin
                </button>
            </div>
        </div>
    );
}