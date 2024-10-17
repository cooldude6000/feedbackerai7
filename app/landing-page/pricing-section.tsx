'use client'

import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import SparklesText from "@/components/ui/sparkles-text";

export type PricingPlan = {
  title: string;
  price: number;
  description: string;
  isPopular: boolean;
  features: string[];
  url: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: "Free",
    price: 0,
    description: "For small teams just getting started",
    isPopular: false,
    url: "/dashboard",
    features: [
      "1 project",
      "AI powered analytics",
      "1GB storage",
      "E-mail support",
    ],
  },
  {
    title: "Monthly",
    price: 6.99,
    description: "For startups and small businesses",
    isPopular: true,
    url: "/payments/subscribe?plan=monthly",
    features: [
      "Unlimited projects",
      "AI powered analytics",
      "5GB storage",
      "Prority E-mail and call support",
    ],
  },
  {
    title: "Yearly",
    price: 49.99,
    description: "Upgrade to save more!",
    isPopular: false,
    url: "/payments/subscribe?plan=yearly",
    features: [
      "Unlimited projects",
      "AI powered analytics",
      "5GB storage",
      "Prority E-mail and call support",
    ],
  },
]

const PricingCard: React.FC<PricingPlan> = ({ title, price, description, isPopular, features, url }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "flex flex-col h-full p-6 rounded-lg transition-all duration-300 ease-in-out relative",
        isHovered ? "bg-black text-white" : "bg-white text-black border border-gray-200",
        isPopular && "overflow-hidden"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPopular && (
        <>
          <span className="absolute top-4 right-4 px-2 py-1 bg-blue-500 text-white text-sm rounded-full z-10">
            Most Popular
          </span>
          <div className="absolute -inset-[2px] rounded-lg overflow-hidden">
            <div className="violet-wave"></div>
          </div>
        </>
      )}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-4xl font-bold mt-4">${price}{price === 0 || price === 49.99 ? '' : '/mo'}</p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="inline-flex items-center justify-center w-5 h-5 mr-2 bg-green-500 rounded-full">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>
        {title !== "Monthly" && (
          <Button
            className={cn(
              "mt-6 w-full transition-colors duration-300 ease-in-out",
              isHovered ? "bg-white text-black hover:bg-black hover:text-white" : "bg-black text-white hover:bg-white hover:text-black"
            )}
            onClick={() => window.location.href = '/dashboard'}
          >
            {title === "Free" ? "Get Started" : "Subscribe Now"}
          </Button>
        )}
        {title === "Monthly" && (
          <GlowingButton />
        )}
      </div>
    </div>
  )
}

const GlowingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative mt-6">
      <Button
        className={`
          relative overflow-hidden transition-all duration-300 ease-in-out
          bg-yellow-500 text-yellow-900 hover:bg-yellow-400 hover:text-yellow-900
          transform hover:scale-110 hover:-translate-y-1
          ${isHovered ? 'animate-bulge' : ''}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.location.href = '/dashboard'}
      >
        Select Plan
        <div className="glitter"></div>
        {isHovered && (
          <>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="spark"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 1000}ms`,
                }}
              ></div>
            ))}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="light-ray"
                style={{
                  transform: `rotate(${i * 30}deg)`,
                  animationDelay: `${i * 100}ms`,
                }}
              ></div>
            ))}
          </>
        )}
      </Button>
    </div>
  )
}

const PricingSection: React.FC = () => {
  return (
    <div className="text-center p-8">
      <h1 className="capitalize text-3xl"><SparklesText text="Pricing" /></h1>
      <h2 className="font-extrabold text-3xl mb-8 pt-3">
        Flexible Pricing to Fit Your Needs
      </h2>
      <div className="mt-10 grid items-center grid-cols-1 gap-8 md:grid-cols-3 max-w-screen-xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
      <style jsx global>{`
        @keyframes bulge {
          0%, 100% { transform: scale(1.1) translateY(-4px); }
          50% { transform: scale(1.15) translateY(-6px); }
        }

        @keyframes glitter {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes spark {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1) rotate(180deg); opacity: 1; }
          100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }

        @keyframes emit-light {
          0% { transform: scaleX(1) translateY(0); opacity: 0.7; }
          100% { transform: scaleX(1.5) translateY(-60px); opacity: 0; }
        }

        @keyframes wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-bulge {
          animation: bulge 0.6s infinite;
        }

        .glitter {
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.8) 50%, transparent 55%);
          animation: glitter 2s infinite;
          pointer-events: none;
        }

        .spark {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: white;
          border-radius: 50%;
          animation: spark 1s infinite;
          pointer-events: none;
        }

        .light-ray {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120px;
          height: 20px;
          background: linear-gradient(to right, rgba(255, 255, 0, 0.8), transparent);
          transform-origin: 0 50%;
          animation: emit-light 2s infinite;
          pointer-events: none;
        }

        .violet-wave {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, violet, transparent);
          animation: wave 3s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default PricingSection