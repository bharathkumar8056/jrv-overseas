'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-amber-950 leading-tight font-serif">
                Premium Global Exports
              </h1>
              <p className="text-xl text-amber-800 max-w-lg">
                Delivering authentic organic Kavuni rice and premium corrugated packaging solutions from Tamil Nadu to the world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  const element = document.getElementById('products')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-amber-900 hover:bg-amber-950 text-white px-8 py-3 text-lg rounded-lg transition-colors"
              >
                Explore Products
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById('contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border-2 border-amber-900 text-amber-900 hover:bg-amber-50 px-8 py-3 text-lg rounded-lg transition-colors"
                variant="outline"
              >
                Get in Touch
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-amber-900">15+</div>
                <p className="text-sm text-amber-700">Years Experience</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-amber-900">50+</div>
                <p className="text-sm text-amber-700">Countries Served</p>
              </div>
            </div>
          </div>

          {/* Right Banner */}
          <div className="relative h-96 md:h-full min-h-96 order-1 md:order-2">
            <Image
              src="/hero-banner.jpg"
              alt="JRV Overseas - Agricultural exports"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
