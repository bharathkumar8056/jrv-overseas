'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        quantity: '',
        message: '',
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 96558 72909',
      link: 'tel:+919655872909',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'ramraman882@gmail.com',
      link: 'mailto:ramraman882@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '4/83 Melappaniyur, Pudukkottai 622412, Tamil Nadu, India',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Sat: 9AM-6PM IST',
      link: '#',
    },
  ]

  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-accent/10 border-b border-border/30 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have questions about our products or ready to place an order? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 lg:py-24 bg-secondary/5 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a
                  key={index}
                  href={info.link}
                  className="bg-background p-6 rounded-xl border border-border/30 hover:border-accent/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">{info.title}</p>
                  <p className="font-bold text-foreground text-sm">{info.value}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Send Us Your Inquiry
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-accent/10 border border-accent/50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground mb-4">
                Your inquiry has been received. We'll contact you shortly to discuss your requirements.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-secondary/5 p-8 lg:p-12 rounded-xl border border-border/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:border-primary transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Product */}
                <div>
                  <label htmlFor="product" className="block text-sm font-semibold text-foreground mb-2">
                    Product Interest *
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a product</option>
                    <option value="kavuni-rice">Organic Black Kavuni Rice</option>
                    <option value="corrugated-boxes">Corrugated Carton Boxes</option>
                    <option value="both">Both Products</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold text-foreground mb-2">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g., 5 Metric Tons"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your requirements, questions, or bulk order details..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-2xl transition-all font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Inquiry
              </button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-secondary/5 border-y border-border/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center text-balance">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is the minimum order quantity?',
                //a: 'For Organic Kavuni Rice, MOQ is 1 Metric Ton. For Corrugated Boxes, MOQ is 500-1000 units depending on customization.',
                a: 'For Organic Kavuni Rice, MOQ is 1 Metric Ton.',
              },
              {
                q: 'What are your standard payment terms?',
                a: '30-50% advance payment at order confirmation, with balance due before shipment. We accept Bank Wire Transfer (SWIFT), Telegraphic Transfer (TT), and Letter of Credit (LC).',
              },
              {
                q: 'How long is the lead time?',
                a: 'For Rice: 10-20 business days. For Corrugated Boxes: 15-30 business days, depending on order volume and customization.',
              },
              {
                q: 'Do you provide samples?',
                a: 'Yes, we can provide product samples for evaluation. Contact us directly to arrange sample shipment.',
              },
              {
                q: 'Are your products certified organic?',
                a: 'Yes, our Organic Black Kavuni Rice is certified organic and grown without synthetic fertilizers or harmful chemicals.',
              },
              {
                q: 'What shipping methods are available?',
                a: 'We offer Sea Freight (economical for bulk), Air Freight (faster delivery), and Road Transport (for regional shipments).',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border/30">
                <h3 className="font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Call us directly or reach out via WhatsApp for instant communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919655872909"
              className="px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-2xl transition-all font-semibold"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919655872909?text=Hello! I am interested in your products."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
