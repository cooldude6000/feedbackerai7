import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import HeaderMenu from "@/components/header-menu"
import ShimmerButton from "@/components/ui/shimmer-button";

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all bg-white/20 backdrop-blur-md">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b">
        <div className="flex h-14 items-center justify-between">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800 text-2xl font-bold animate-pulse">
            Feedbacker AI
          </h1>
          <div className="flex space-x-2">
            <SignedOut>
              <SignInButton>
                <Button className="bg-black px-6 py-3 rounded-full">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <ShimmerButton className="bg-black px-4 py-2">
                  Sign Up
                </ShimmerButton>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <HeaderMenu />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader;
