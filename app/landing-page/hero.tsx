import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Cover } from "@/components/ui/cover";
import {
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import Link from "next/link";
import { LogIn, Github } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="grow">
      <div className="container mx-auto px-4 mb-24 mt-4 flex flex-col md:flex-row justify-center">
        <div className="flex flex-col max-w-sm justify-center">
          <div className="mb-8">
            <h1 className="mb-5 text-5xl font-extrabold leading-tight">Collect your feedback <Cover>seamlessly</Cover></h1>
            <p className="text-gray-500 texl-lg">Easily integrate Feedbacker AI and start collecting feedback today.</p>
          </div>
          <div>
            <SignedOut>
              <RainbowButton>
              <SignUpButton>
                <div className="flex gap-3">
                <Button>
                  <LogIn className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
                </div>
              </SignUpButton>
              </RainbowButton>
            </SignedOut>
            <SignedIn>
              <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
          </div>
        </div>
        <div className="flex-1 max-w-lg">
          <Image src={'/feedbacker1.gif'} alt="demo" layout={'responsive'} width={155} height={155} unoptimized={true} />
        </div>
      </div>
    </section>
  )
}

export default Hero;