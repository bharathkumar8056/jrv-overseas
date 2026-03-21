'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ArrowRight, Award, Leaf, Globe, TrendingUp } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Leaf,
      title: 'Organic & Pure',
      description: 'Cultivated using traditional farming methods without synthetic fertilizers or harmful chemicals.',
    },
    {
      icon: Award,
      title: 'Export Grade Quality',
      description: 'Premium products meeting international standards and certifications.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving international markets with reliable logistics and delivery.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Committed to sustainable agriculture and long-term partnerships.',
    },
  ]

  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero Section - Full Width */}
      <section className="relative overflow-hidden h-screen max-h-[600px] lg:max-h-[700px]">
        <Image
          src="/hero-banner.png"
          alt="Premium Black Kavuni Rice and Corrugated Boxes"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="space-y-8 max-w-2xl">
              <div className="space-y-4">
                <p className="text-white/90 font-semibold uppercase tracking-widest text-sm">Premium Exports from India</p>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight text-balance">
                  Experience Premium Quality, Globally Delivered
                </h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  JRV Overseas brings authentic Tamil Nadu agricultural excellence to the world with organic Kavuni rice and premium corrugated packaging solutions.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap pt-4">
                <Link
                  href="/products"
                  className="px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-2xl transition-all font-semibold flex items-center gap-2"
                >
                  Explore Products <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/5 py-20 lg:py-32 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">Why Choose Us</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver premium quality products backed by traditional farming expertise and modern international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-background p-8 rounded-xl border border-border/30 hover:shadow-lg hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Products</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Premium Quality Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Kavuni Rice */}
            <Link
              href="/products/kavuni-rice"
              className="group overflow-hidden rounded-2xl bg-white border border-border/30 hover:border-accent/50 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/karuppu-kavuni-rice.webp"
                  alt="Organic Black Kavuni Rice"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Organic Black Kavuni Rice</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Pure, naturally cultivated black rice with superior nutritional value and authentic Tamil Nadu heritage.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            {/* Corrugated Boxes */}
            <Link
              href="/products/corrugated-boxes"
              className="group overflow-hidden rounded-2xl bg-white border border-border/30 hover:border-accent/50 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/boxes.jpg"
                  alt="Premium Corrugated Boxes"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Corrugated Carton Boxes</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Premium quality packaging solutions for storage, transportation, and export requirements.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center text-white">
              <p className="text-4xl lg:text-5xl font-bold mb-2">100%</p>
              <p className="text-lg opacity-90">Organic Quality</p>
            </div>
            <div className="text-center text-white">
              <p className="text-4xl lg:text-5xl font-bold mb-2">30+</p>
              <p className="text-lg opacity-90">Countries Served</p>
            </div>
            <div className="text-center text-white">
              <p className="text-4xl lg:text-5xl font-bold mb-2">15+</p>
              <p className="text-lg opacity-90">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Export Quality Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Excellence</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Trusted by International Buyers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With years of experience in agricultural exports, we maintain the highest standards of quality, reliability, and customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/30 hover:border-accent/50 transition-all">
              <div className="text-4xl font-bold text-primary mb-3">100%</div>
              <h3 className="text-lg font-bold text-foreground mb-2">Organic & Natural</h3>
              <p className="text-muted-foreground">All products cultivated without synthetic chemicals or harmful additives, ensuring premium quality.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30 hover:border-accent/50 transition-all">
              <div className="text-4xl font-bold text-primary mb-3">ISO</div>
              <h3 className="text-lg font-bold text-foreground mb-2">Certified Quality</h3>
              <p className="text-muted-foreground">International standards compliance and certifications for export-grade packaging and products.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30 hover:border-accent/50 transition-all">
              <div className="text-4xl font-bold text-primary mb-3">24/7</div>
              <h3 className="text-lg font-bold text-foreground mb-2">Customer Support</h3>
              <p className="text-muted-foreground">Round-the-clock assistance for inquiries, orders, and post-delivery support for all clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Production & Delivery Timeline */}
      <section className="py-20 lg:py-32 bg-secondary/5 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center text-balance">
            Quick & Reliable Delivery Timeline
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/30">
              <h3 className="text-2xl font-bold text-primary mb-4">Organic Black Kavuni Rice</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Order to Processing: 2-3 Days</p>
                    <p className="text-sm text-muted-foreground">Order confirmation and advance payment processing</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Production Lead Time: 10-20 Days</p>
                    <p className="text-sm text-muted-foreground">Quality harvesting, cleaning, grading, and packaging</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Shipping: 15-45 Days</p>
                    <p className="text-sm text-muted-foreground">Depends on destination country and shipping method</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30">
              <h3 className="text-2xl font-bold text-primary mb-4">Corrugated Carton Boxes</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Order to Processing: 2-3 Days</p>
                    <p className="text-sm text-muted-foreground">Order confirmation and advance payment processing</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Production Lead Time: 15-30 Days</p>
                    <p className="text-sm text-muted-foreground">Manufacturing, quality control, and preparation</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Shipping: 10-40 Days</p>
                    <p className="text-sm text-muted-foreground">Based on logistics route and destination</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">Client Trust</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Satisfied International Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'European Importer',
                comment: 'Excellent quality and consistent delivery. JRV Overseas has been our reliable supplier for over 3 years.',
                rating: 5,
              },
              {
                name: 'Middle East Distributor',
                comment: 'Professional service, competitive pricing, and outstanding product quality. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Asian Wholesaler',
                comment: 'Prompt communication, flexible payment terms, and superior packaging. Best supplier we have worked with.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-background p-8 rounded-xl border border-border/30">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="text-primary text-lg">★</div>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.comment}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-secondary/5 border-b border-border/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for bulk orders, wholesale pricing, sample requests, or to discuss your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-2xl transition-all font-semibold text-lg"
          >
            Request a Quote Today
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
