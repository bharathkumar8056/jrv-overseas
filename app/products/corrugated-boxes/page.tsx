'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Check, Truck, Clock, Package } from 'lucide-react'

export default function CorrugatedBoxesPage() {
  const specs = [
    { label: 'Minimum Order Quantity', value: '500-1000 Units' },
    { label: 'Lead Time', value: '15-30 Business Days' },
    { label: 'Customization', value: 'Custom Dimensions Available' },
    { label: 'Material', value: 'Premium Corrugated Cardboard' },
  ]

  const manufacturingSteps = [
    'Paper pulping and preparation',
    'Corrugation and board formation',
    'Precision cutting and shaping',
    'Structural assembly and folding',
    'Quality testing and inspection',
    'Bundling and packaging for shipment',
  ]

  const paymentTerms = [
    '30-50% advance payment at order confirmation',
    'Balance before dispatch or shipment',
    'Accepted via Bank Wire (SWIFT), Letter of Credit (LC)',
    'Flexible terms for repeat buyers and long-term contracts',
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
                  Corrugated Carton Boxes
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  High-strength, durable packaging solutions manufactured with premium corrugated cardboard for storage, transportation, and international export needs.
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
                src="/boxes.jpg"
                alt="Premium Corrugated Boxes"
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
              How Our Corrugated Carton Boxes Are Made
            </h2>
            <div className="bg-background p-8 rounded-xl border border-border/30">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our corrugated carton packaging boxes are manufactured using high-quality corrugated cardboard materials designed for strength, durability, and protective packaging. The manufacturing process includes paper pulping, corrugation, board formation, precision cutting, shaping, and structural testing. Each carton is inspected to ensure durability and suitability for storage, transportation, and export packaging purposes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {manufacturingSteps.map((step, index) => (
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
              src="/quality-assurance.jpg"
              alt="Quality assurance"
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
            Why Our Corrugated Boxes Excel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-background p-8 rounded-xl border border-border/30">
              <Package className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">High-Strength Durability</h3>
              <p className="text-muted-foreground">Manufactured from premium corrugated cardboard to withstand rough handling and long-distance transportation.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30">
              <Check className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Customization Options</h3>
              <p className="text-muted-foreground">Available in various dimensions and specifications tailored to your specific packaging requirements.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30">
              <Truck className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Export-Ready Quality</h3>
              <p className="text-muted-foreground">Meets international standards for storage and transportation in any climate or condition.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/30">
              <Clock className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Competitive Pricing</h3>
              <p className="text-muted-foreground">Bulk discounts available for large orders and long-term supply agreements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-20 lg:py-32 bg-secondary/5 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">Delivery Information</h2>

          <div className="bg-background p-8 rounded-xl border border-border/30 mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              JRV Overseas ensures efficient and reliable delivery of corrugated carton packaging boxes. The cartons are bundled and packed carefully to prevent structural damage during transportation. Our logistics partners manage safe dispatch and transportation based on the client's delivery location, shipping method, and order quantity. All shipments are handled with precision to maintain product integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border border-border/30">
              <h3 className="font-bold text-foreground mb-3">Road Transport</h3>
              <p className="text-muted-foreground text-sm">Domestic and regional shipments with quick turnaround times.</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border/30">
              <h3 className="font-bold text-foreground mb-3">Sea Freight</h3>
              <p className="text-muted-foreground text-sm">Cost-effective for large international shipments to any port.</p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border/30">
              <h3 className="font-bold text-foreground mb-3">Air Freight</h3>
              <p className="text-muted-foreground text-sm">Expedited delivery available for urgent orders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Ordering */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">Payment & Ordering</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Accepted Payment Methods</h3>
              <ul className="space-y-4">
                {[
                  'Bank Wire Transfer (SWIFT)',
                  'Telegraphic Transfer (TT)',
                  'Letter of Credit (LC) for bulk orders',
                  'Other internationally agreed payment solutions',
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
            <p className="text-muted-foreground mb-4">Upon order confirmation, we provide complete business documentation:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Proforma Invoice', 'Commercial Invoice', 'Packing List', 'Shipment Details'].map((doc) => (
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
            Place Your Order Today
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get competitive quotes for custom corrugated boxes tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-primary rounded-lg hover:shadow-2xl transition-all font-semibold text-lg"
          >
            Request Quote
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
