'use client'

import React from "react"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Image from "next/image"
import { useMediaQuery } from 'react-responsive'

export function HeroScrollDemo() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-2xl sm:text-4xl font-semibold text-black dark:text-white mb-4 sm:mb-8">
                            Unleash the power of
                        </h1>
                        <div className="mb-6 sm:mb-12">
                            <span className="text-3xl sm:text-4xl md:text-[6rem] font-bold leading-none">
                                AI-driven feedback
                            </span>
                        </div>
                    </>
                }
            >
                <div className="relative w-full h-48 sm:h-72 md:h-96 lg:h-[720px] mt-6 sm:mt-12">
                    <Image
                        src={isMobile ? "/dash_mobile2.png" : "/ai_summarize.png"}
                        alt="hero"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="left top"
                        className="rounded-2xl"
                        draggable={false}
                        priority
                    />
                </div>
            </ContainerScroll>
        </div>
    )
}