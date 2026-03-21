'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-amber-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-amber-900">JRV OVERSEAS</h1>
            <p className="text-xs text-amber-700">Premium Exports</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <button
              onClick={() => scrollToSection('home')}
              className="px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-amber-900 hover:bg-amber-50 rounded"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-4 py-2 text-amber-900 hover:bg-amber-50 rounded"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-amber-900 hover:bg-amber-50 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-amber-900 hover:bg-amber-50 rounded"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
