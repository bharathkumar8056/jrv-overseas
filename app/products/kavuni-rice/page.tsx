'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Check, Truck, Clock, Package } from 'lucide-react'

export default function KavuniRicePage() {
  const specs = [
    { label: 'Minimum Order Quantity', value: '1 Metric Ton' },
    { label: 'Lead Time', value: '10-20 Business Days' },
    { label: 'Packaging', value: 'Export-Grade Bags' },
    { label: 'Certifications', value: 'Organic Certified' },
  ]

  const processSteps = [
    'Traditional organic farming methods in Tamil Nadu',
    'Harvesting without synthetic pesticides',
    'Cleaning and grading process',
    'Hygiene testing and quality verification',
    'Export-grade packaging and sealing',
    'Logistics coordination to port',
  ]

  const paymentTerms = [
    '30-50% advance payment at order confirmation',
    'Balance payment before shipment',
    'Accepted via Bank Wire (SWIFT), Letter of Credit (LC)',
    'Customized terms for long-term partnerships',
  ]

  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Premium Product</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                  Organic Black Kavuni Rice
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Pure, traditionally cultivated heritage rice from Tamil Nadu with superior nutritional value and authentic cultural significance.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, index) => (
                  <div key={index} className="bg-secondary/5 p-4 rounded-lg border border-border/30">
                    <p className="text-sm text-muted-foreground">{spec.label}</p>
                    <p className="font-bold text-foreground">{spec.value}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-2xl transition-all font-semibold"
              >
                Request Quote
              </Link>
            </div>

            <div className="relative h-96 lg:h-full">
              <Image
                src="/karuppu-kavuni-rice.webp"
                alt="Organic Black Kavuni Rice"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It's Made - Complete Process */}
      <section className="py-20 lg:py-32 bg-secondary/5 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              How Our Organic Black Kavuni Rice Is Made
            </h2>
            <div className="bg-background p-8 rounded-xl border border-border/30">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our Organic Black Kavuni Rice is cultivated using traditional farming methods in Tamil Nadu, India. The rice is grown without synthetic fertilizers or harmful chemicals, ensuring natural purity and high nutritional value. After harvesting, the grains undergo cleaning, grading, and sorting to remove impurities. The rice is then hygienically processed and packed using export-grade packaging standards to preserve freshness, nutritional value, and authenticity before international shipment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-background p-8 rounded-xl border border-border/30 hover:shadow-lg hover:border-accent/30 transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-lg font-semibold text-foreground">{step}</p>
              </div>
            ))}
          </div>

          <div className="relative h-96">
            <Image
              src="/farming-process.jpg"
              alt="Farming process"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-balance">
            Why Choose Our Kavuni Rice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-background p-8 rounded-xl border border-border/30">
              <Package className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Export-Grade Packaging</h3>
              <p className="text-muted-foreground">Durable bags designed to maintain quality during long-distance international transportation.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30">
              <Check className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">100% Organic Certified</h3>
              <p className="text-muted-foreground">Grown without synthetic fertilizers or harmful chemicals, ensuring natural purity and nutrition.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30">
              <Truck className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Reliable Logistics</h3>
              <p className="text-muted-foreground">Coordinated shipping with trusted logistics partners for safe, timely delivery worldwide.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30">
              <Clock className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Quick Lead Times</h3>
              <p className="text-muted-foreground">Standard production within 10-20 business days after order confirmation and advance payment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery & Shipping */}
      <section className="py-20 lg:py-32 bg-secondary/5 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">Delivery Information</h2>

          <div className="bg-background p-8 rounded-xl border border-border/30 mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              JRV Overseas ensures safe and efficient delivery of Organic Black Kavuni Rice to international markets. The rice is packed in durable export-grade bags designed to maintain quality during long-distance transportation. We coordinate with reliable logistics and freight partners to ensure smooth transportation from warehouse to port and final destination. Delivery timelines may vary depending on shipping method, order quantity, and destination country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border border-border/30">
              <h3 className="font-bold text-foreground mb-3">Sea Freight</h3>
              <p className="text-muted-foreground text-sm">Economical for large bulk orders. Standard transit time varies by destination.</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border/30">
              <h3 className="font-bold text-foreground mb-3">Air Freight</h3>
              <p className="text-muted-foreground text-sm">Available for urgent shipments and smaller orders requiring faster delivery.</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border/30">
              <h3 className="font-bold text-foreground mb-3">Documentation</h3>
              <p className="text-muted-foreground text-sm">Complete export documentation for customs clearance and trade compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Policy */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">Payment & Ordering</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Payment Methods</h3>
              <ul className="space-y-4">
                {[
                  'International Bank Wire Transfer (SWIFT)',
                  'Telegraphic Transfer (TT)',
                  'Letter of Credit (LC) from recognized banks',
                  'Other mutually agreed payment arrangements',
                ].map((method, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{method}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Payment Terms</h3>
              <ul className="space-y-4">
                {paymentTerms.map((term, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold text-foreground mb-2">Documentation Provided</h3>
            <p className="text-muted-foreground mb-4">Upon order confirmation, we provide comprehensive export documentation:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Proforma Invoice', 'Commercial Invoice', 'Packing List', 'Bill of Lading/Airway Bill'].map((doc) => (
                <li key={doc} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-foreground">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Order?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us for detailed pricing, samples, or to place your bulk order.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-primary rounded-lg hover:shadow-2xl transition-all font-semibold text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
