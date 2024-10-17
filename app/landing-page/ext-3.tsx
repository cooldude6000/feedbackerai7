"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
    className,
}: {
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 md:shadow-xl", // Removed border class
                className,
            )}
            ref={containerRef}
        >
            <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
                <div className="flex flex-col justify-center gap-2">
                    <Circle ref={div1Ref}>
                        <Icons.user />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <Icons.user />
                    </Circle>
                    <Circle ref={div3Ref}>
                        <Icons.user />
                    </Circle>
                    <Circle ref={div4Ref}>
                        <Icons.user />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <Icons.user />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={div6Ref} className="size-16">
                        <Icons.openai />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={div7Ref}>
                        <Icons.admin />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div6Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div7Ref}
            />
        </div>
    );
}

const Icons = {
    admin: () => (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 120.26"><title>admin</title><path d="M47,70.06a19,19,0,0,1-1.66-2c-1.23-1.68-2.37-3.44-3.49-5.21L36.35,54c-2.1-3.1-3.21-5.86-3.21-8.08s1.25-5.12,3.76-5.75a152.65,152.65,0,0,1-.22-15.93,21.05,21.05,0,0,1,.66-3.65A21,21,0,0,1,46.75,8.64,24.2,24.2,0,0,1,51.84,6.2C55.05,5,53.5.12,57,0,65.34-.22,79,6.87,84.26,12.62a20.91,20.91,0,0,1,5.42,13.61l-.33,14.49a4.12,4.12,0,0,1,3,3c.44,1.77,0,4.2-1.55,7.64h0c0,.11-.11.11-.11.22L84.37,62c-1.44,2.36-2.92,4.75-4.58,7-2,2.63-3.59,2.16-1.91,4.68a22,22,0,0,0,8.29,6.66,8.55,8.55,0,0,0-1.19.22h0A7.29,7.29,0,0,0,80.38,84l-2.27,3.93a7.63,7.63,0,0,0-.93,2.77h0a7.61,7.61,0,0,0,.18,2.84l0,.18a7.45,7.45,0,0,0,1.27,2.57l.06.09q-.24.15-.48.33a7.3,7.3,0,0,0-2,2.26,7.39,7.39,0,0,0-.95,2.85,7.93,7.93,0,0,0,.2,2.86h0l1.15,4.37a5.51,5.51,0,0,0,.37,1,7.55,7.55,0,0,0,1,1.73c.1.13.21.25.32.37s.37.38.56.56H0c0-33,35.5-22.55,47.58-39.15,1.39-2.08,1-1.88-.55-3.55Zm74.74,23.68a1.92,1.92,0,0,0-.91-1.2,1.86,1.86,0,0,0-1.48-.18l-2.87.76a14.86,14.86,0,0,0-1.06-1.73,18.15,18.15,0,0,0-1.28-1.59L115.78,87a1.9,1.9,0,0,0-.71-2.65l-3.5-2a1.89,1.89,0,0,0-1.46-.2,1.87,1.87,0,0,0-1.18.91l-1.48,2.55a14.06,14.06,0,0,0-2-.45,15.22,15.22,0,0,0-2-.19l-.87-3.15a1.78,1.78,0,0,0-.87-1.17,1.89,1.89,0,0,0-1.49-.19l-3.87,1a1.9,1.9,0,0,0-1.19.91A1.86,1.86,0,0,0,95,83.88l.77,2.87A13.36,13.36,0,0,0,94,87.81a16.31,16.31,0,0,0-1.6,1.28l-2.79-1.62a1.9,1.9,0,0,0-1.47-.2,1.85,1.85,0,0,0-1.18.92l-2,3.5a1.87,1.87,0,0,0-.19,1.45,1.81,1.81,0,0,0,.9,1.19l2.55,1.48a15.58,15.58,0,0,0-.45,2,15.35,15.35,0,0,0-.2,2l-3.13.83a1.76,1.76,0,0,0-1.18.88,1.9,1.9,0,0,0-.19,1.48l1,3.9a1.91,1.91,0,0,0,.92,1.16,1.88,1.88,0,0,0,1.46.22l2.89-.79a14.86,14.86,0,0,0,1.06,1.73c.4.55.83,1.08,1.28,1.59l-1.61,2.79a1.91,1.91,0,0,0-.21,1.47,1.88,1.88,0,0,0,.92,1.18l3.5,2a2,2,0,0,0,2.65-.71L98.44,115a14.1,14.1,0,0,0,2,.46,17.27,17.27,0,0,0,2,.2l.83,3.13a1.82,1.82,0,0,0,.89,1.19,1.77,1.77,0,0,0,1.47.17l3.91-1a2,2,0,0,0,1.37-2.39l-.79-2.88a14.07,14.07,0,0,0,1.73-1.06,19.77,19.77,0,0,0,1.59-1.28l2.79,1.61a1.92,1.92,0,0,0,2.65-.71l2-3.5a2,2,0,0,0-.71-2.65l-2.55-1.47a17.82,17.82,0,0,0,.44-2,14.25,14.25,0,0,0,.2-2l3.14-.86a1.79,1.79,0,0,0,1.18-.88,1.86,1.86,0,0,0,.19-1.48l-1-3.87Zm-14.86-.29a8,8,0,0,1,2.36,2.08,7.78,7.78,0,0,1,1.55,5.76A8,8,0,0,1,105,108a7.87,7.87,0,0,1-3,.2,8.06,8.06,0,0,1-5.35-3.09,7.79,7.79,0,0,1-1.54-5.75A8,8,0,0,1,98.16,94a7.78,7.78,0,0,1,5.76-1.55,8.09,8.09,0,0,1,3,1Z" />
        </svg>
    ),
    openai: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
    ),
    user: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    ),
};
