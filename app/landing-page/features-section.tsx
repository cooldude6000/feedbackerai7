"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Puzzle, Sliders, BarChart3, Shield, Expand, Headphones } from 'lucide-react'
import SparklesText from "@/components/ui/sparkles-text";

const features = [
  {
    title: 'Seamless Integrations',
    description: 'Easily integrate with your existing tools and services.',
    color: 'text-yellow-400',
    icon: Puzzle
  },
  {
    title: 'Customizable',
    description: 'Customize to fit your needs and preferences.',
    color: 'text-red-500',
    icon: Sliders
  },
  {
    title: 'Analytics',
    description: 'Track and analyze feedback to make informed decisions.',
    color: 'text-blue-500',
    icon: BarChart3
  },
  {
    title: 'Secure',
    description: 'Your data is safe and secure with us.',
    color: 'text-green-500',
    icon: Shield
  },
  {
    title: 'Scalable',
    description: 'Grow your business with Feedbacker AI as you scale.',
    color: 'text-purple-500',
    icon: Expand
  },
  {
    title: 'Fast Support',
    description: 'Get help when you need it with our fast support team.',
    color: 'text-pink-500',
    icon: Headphones
  }
]

interface FeatureProps {
  title: string;
  description: string;
  color: string;
  icon: React.ElementType;
}

const Feature = ({ title, description, color, icon: Icon }: FeatureProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`p-6 rounded-lg transition-colors duration-300 border border-gray-200 ${isHovered ? 'bg-black text-white' : 'bg-white'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center mb-2">
        <h3 className={`text-xl font-semibold ${isHovered ? color : 'text-gray-900'}`}>
          {title}
        </h3>
        <Icon className={`ml-2 w-6 h-6 ${isHovered ? color : 'text-gray-400'}`} />
      </div>
      <p className={isHovered ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
    </motion.div>
  )
}

const FeaturesSection = () => {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 my-24 flex items-center flex-col">
      <h2 className="mb-6 text-2xl font-bold"><SparklesText text="Features" /></h2>
      <div className="mb-8"></div> {/* Added gap below the word "Features" */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection