import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
    return (
        <div className="relative mx-20 max-w-full">
            <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/ep4nyQRi4HM?si=5gEwFbsfNZEDIkix"
                thumbnailSrc="/dashboard.png"
                thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/ep4nyQRi4HM?si=5gEwFbsfNZEDIkix"
                thumbnailSrc="/dashboard.png"
                thumbnailAlt="Hero Video"
            />
        </div>
    );
}
