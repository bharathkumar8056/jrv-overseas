'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Check } from 'lucide-react'

export default function ProductsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-accent/10 border-b border-border/30 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Our Premium Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Handpicked agricultural solutions and packaging materials meeting international quality standards.
          </p>
        </div>
      </section>

      {/* Kavuni Rice */}
      <section className="py-20 lg:py-32 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/karuppu-kavuni-rice.webp"
                alt="Organic Black Kavuni Rice"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Premium Product</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                  Organic Black Kavuni Rice
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experience the authentic taste and nutritional excellence of traditionally cultivated Tamil Nadu black rice. Grown without synthetic fertilizers and processed with care to preserve its purity and heritage value.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-foreground text-lg">Key Specifications</h3>
                <ul className="space-y-3">
                  {['100% Pure Organic', 'Naturally Cultivated', 'Premium Grade Quality', 'Export Standard Packaging'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/products/kavuni-rice"
                className="inline-block px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-2xl transition-all font-semibold flex items-center gap-2 w-fit"
              >
                View Details <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corrugated Boxes - COMMENTED OUT
      <section className="py-20 lg:py-32 bg-secondary/5 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 lg:order-2">
              <div>
                <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Premium Product</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                  Corrugated Carton Boxes
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Manufactured with premium corrugated cardboard for maximum durability and protection. Ideal for storage, transportation, and international export packaging requirements.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-foreground text-lg">Key Features</h3>
                <ul className="space-y-3">
                  {['High-Strength Durability', 'Export-Grade Material', 'Custom Dimensions Available', 'Competitive Pricing'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/products/corrugated-boxes"
                className="inline-block px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-2xl transition-all font-semibold flex items-center gap-2 w-fit"
              >
                View Details <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-96 lg:order-1">
              <Image
                src="/boxes.jpg"
                alt="Premium Corrugated Boxes"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Product Comparison */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Why Choose JRV Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our products combine traditional excellence with modern international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/30 hover:border-accent/50 transition-all">
              <div className="text-3xl font-bold text-primary mb-3">100%</div>
              <h3 className="text-lg font-bold text-foreground mb-2">Organic & Natural</h3>
              <p className="text-muted-foreground">No synthetic chemicals, pesticides, or harmful additives in any of our products.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30 hover:border-accent/50 transition-all">
              <div className="text-3xl font-bold text-accent mb-3">ISO</div>
              <h3 className="text-lg font-bold text-foreground mb-2">Certified Quality</h3>
              <p className="text-muted-foreground">International certifications ensuring export-grade quality and safety standards.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30 hover:border-accent/50 transition-all">
              <div className="text-3xl font-bold text-primary mb-3">Fast</div>
              <h3 className="text-lg font-bold text-foreground mb-2">Quick Production</h3>
              <p className="text-muted-foreground">Efficient lead times: Rice 10-20 days, Boxes 15-30 days from order confirmation.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30 hover:border-accent/50 transition-all">
              <div className="text-3xl font-bold text-accent mb-3">Global</div>
              <h3 className="text-lg font-bold text-foreground mb-2">Worldwide Delivery</h3>
              <p className="text-muted-foreground">Reliable logistics partners ensuring safe delivery to 30+ countries globally.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30 hover:border-accent/50 transition-all">
              <div className="text-3xl font-bold text-primary mb-3">Flexible</div>
              <h3 className="text-lg font-bold text-foreground mb-2">Custom Solutions</h3>
              <p className="text-muted-foreground">Tailored products and flexible payment terms for your specific business needs.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30 hover:border-accent/50 transition-all">
              <div className="text-3xl font-bold text-accent mb-3">Expert</div>
              <h3 className="text-lg font-bold text-foreground mb-2">Industry Experience</h3>
              <p className="text-muted-foreground">15+ years of agricultural export expertise and international market knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ordering Process */}
      <section className="py-20 lg:py-32 bg-secondary/5 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center text-balance">
            Simple Ordering Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Contact & Inquire',
                description: 'Reach out with your requirements and product specifications.',
              },
              {
                step: '2',
                title: 'Quote & Agreement',
                description: 'Receive competitive pricing and customize terms as needed.',
              },
              {
                step: '3',
                title: 'Payment & Confirmation',
                description: '30-50% advance payment to confirm your order.',
              },
              {
                step: '4',
                title: 'Production & Delivery',
                description: 'Fast production followed by secure international shipment.',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-background p-6 rounded-xl border border-border/30 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Order Premium Products?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our team for detailed product information, samples, or to place your bulk order.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-2xl transition-all font-semibold text-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
