"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
    const tabs = [
        {
            title: "Projects",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Projects Tab</p>
                    <DummyContent imageSrc="/projects.png" />
                </div>
            ),
        },
        {
            title: "Dashboard",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Dashboard tab</p>
                    <DummyContent imageSrc="/dashboard.png" />
                </div>
            ),
        },
        {
            title: "AI summarize",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>AI summarize button</p>
                    <DummyContent imageSrc="/summarize_button.png" />
                </div>
            ),
        },
        {
            title: "AI summarizer",
            value: "content",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>AI summarizer tab</p>
                    <DummyContent imageSrc="/ai_summarize.png" />
                </div>
            ),
        },
        {
            title: "Script",
            value: "content2",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Script tab</p>
                    <DummyContent imageSrc="/scripts.png" />
                </div>
            ),
        },
        {
            title: "Billing",
            value: "random",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Billing tab</p>
                    <DummyContent imageSrc="/billing.png" />
                </div>
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}

const DummyContent = ({ imageSrc }: { imageSrc: string }) => {
    return (
        <Image
            src={imageSrc}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
