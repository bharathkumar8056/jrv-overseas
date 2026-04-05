'use client'

import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MapPin, Phone, Mail, Leaf, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: 'Organic Excellence',
      description: 'Committed to natural, sustainable agricultural practices without synthetic chemicals or harmful additives.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Every product meets rigorous international standards and quality certifications for export markets.',
    },
    {
      icon: Globe,
      title: 'Global Partnership',
      description: 'Building long-term relationships with international buyers through transparency and reliability.',
    },
  ]

  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-accent/10 border-b border-border/30 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            About JRV Overseas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Your trusted partner for premium organic agricultural products from Tamil Nadu, India.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/farming-process.jpg"
                alt="Our farming heritage"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Our Story & Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                JRV Overseas is dedicated to bringing authentic Tamil Nadu agricultural excellence to the global market. With deep roots in traditional farming practices and modern export standards, we cultivate premium organic Kavuni rice.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to bridge the gap between traditional farming heritage and international market demands. We believe in sustainable agriculture, fair practices, and delivering products that bring pride to every buyer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're seeking premium organic rice for your market exports, JRV Overseas is your trusted partner for quality, reliability, and authentic cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-32 bg-secondary/5 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do in our business and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-background p-8 rounded-xl border border-border/30 hover:shadow-lg hover:border-accent/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">
            Company Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">4/83 Melappaniyur<br/>Pudukkottai 622412<br/>Tamil Nadu, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:+919360915741" className="text-primary hover:text-accent transition-colors">
                        +91 93609 15741
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:ramraman882@gmail.com" className="text-primary hover:text-accent transition-colors">
                        ramraman882@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our Specialties</h3>
              <ul className="space-y-3">
                {[
                  'Organic Black Kavuni Rice - Premium quality, traditionally cultivated',
                  'Corrugated Carton Boxes - Export-grade, custom dimensions available',
                  'International Export - Serving 30+ countries worldwide',
                  'Bulk Orders - Competitive pricing for large volume orders',
                  'Custom Solutions - Tailored products for specific requirements',
                  'Quality Assurance - Rigorous testing and certification processes',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Payment Policies */}
      <section className="py-20 lg:py-32 bg-secondary/5 border-y border-border/30" id="shipping">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">
            Shipping & Payment Policies
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" id="payment">
            {/* Shipping Policy */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Shipping Policy</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  JRV Overseas follows international shipping standards to ensure safe and reliable transportation of all products.
                </p>
                <div className="space-y-3">
                  <div className="bg-background p-4 rounded-lg border border-border/30">
                    <p className="font-semibold text-foreground mb-2">Sea Freight</p>
                    <p className="text-sm text-muted-foreground">Most economical for bulk orders. Requires standard documentation and customs clearance.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border/30">
                    <p className="font-semibold text-foreground mb-2">Air Freight</p>
                    <p className="text-sm text-muted-foreground">Available for urgent orders and smaller shipments requiring faster delivery.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border/30">
                    <p className="font-semibold text-foreground mb-2">Documentation</p>
                    <p className="text-sm text-muted-foreground">Complete export documentation provided including invoices, packing lists, and shipping details.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Policy */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Payment Policy</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We follow secure and internationally accepted payment practices for safe global transactions.
                </p>
                <div className="space-y-3">
                  <div className="bg-background p-4 rounded-lg border border-border/30">
                    <p className="font-semibold text-foreground mb-2">Accepted Methods</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• International Bank Wire Transfer (SWIFT)</li>
                      <li>• Telegraphic Transfer (TT)</li>
                      <li>• Letter of Credit (LC)</li>
                    </ul>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border/30">
                    <p className="font-semibold text-foreground mb-2">Payment Terms</p>
                    <p className="text-sm text-muted-foreground">30-50% advance payment at order confirmation. Balance before shipment or against shipping documents.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border/30">
                    <p className="font-semibold text-foreground mb-2">Customized Terms</p>
                    <p className="text-sm text-muted-foreground">For large volume orders and long-term partnerships, terms can be negotiated.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">15+</p>
              <p className="text-lg text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-accent mb-2">30+</p>
              <p className="text-lg text-muted-foreground">Countries Served</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">1000+</p>
              <p className="text-lg text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-accent mb-2">100%</p>
              <p className="text-lg text-muted-foreground">Organic Quality</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
