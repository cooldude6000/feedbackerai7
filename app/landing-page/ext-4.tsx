import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
    {
        name: "Messi",
        username: "@messi",
        body: "This is temp review",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Ronaldo",
        username: "@cr7",
        body: "This is temp review",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "Lebron James",
        username: "@kingjames",
        body: "This is temp review",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Michanel Jordan",
        username: "@jumpman",
        body: "This is temp review",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Sebastian Vettel",
        username: "@seb",
        body: "This is temp review",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "Max Verstappen",
        username: "@dudududu max",
        body: "This is temp review",
        img: "https://avatar.vercel.sh/james",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex h-[500px] w-screen flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <Marquee pauseOnHover className="[--duration:20s] w-screen">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s] w-screen">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}

