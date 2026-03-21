'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Leaf, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-secondary/10 to-secondary/5 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">JRV Overseas</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium organic agricultural and packaging exports from Tamil Nadu, India to global markets.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/products/kavuni-rice" className="hover:text-primary transition">Organic Kavuni Rice</Link></li>
              <li><Link href="/products/corrugated-boxes" className="hover:text-primary transition">Corrugated Boxes</Link></li>
              <li><Link href="/products" className="hover:text-primary transition">All Products</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">Our Story</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <a href="tel:+919655872909" className="hover:text-primary transition">+91 96558 72909</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <a href="mailto:ramraman882@gmail.com" className="hover:text-primary transition">ramraman882@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-xs">Melappaniyur, Pudukkottai 622412, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8">
          <div className="mb-8 pb-8 border-b border-border/30">
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
              <div>
                <p className="text-xs text-muted-foreground mb-3">Developed by</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Link
                      href="https://www.instagram.com/bkb_incorporation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition"
                    >
                      <Instagram className="w-4 h-4" />
                      BKB Incorporation
                    </Link>
                  </div>
                  <p className="text-xs text-muted-foreground">in association with</p>
                  <div className="flex items-center gap-2">
                    <Link
                      href="https://www.instagram.com/brandsparksm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition"
                    >
                      <Instagram className="w-4 h-4" />
                      Brandspark
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} JRV Overseas. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-xs">
              <a href="#" className="hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition">Terms of Service</a>
              <a href="#" className="hover:text-primary transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
