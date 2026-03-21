'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', phone: '', message: '' })
    
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold text-amber-950 font-serif">Get in Touch</h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Have questions about our products? We'd love to hear from you. Contact us for detailed information and quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-950 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase text-amber-700 font-semibold mb-2">Email</p>
                  <a href="mailto:ramraman882@gmail.com" className="text-lg text-amber-800 hover:text-amber-950">
                    ramraman882@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase text-amber-700 font-semibold mb-2">Phone</p>
                  <a href="tel:+919655872909" className="text-lg text-amber-800 hover:text-amber-950">
                    +91 9655872909
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase text-amber-700 font-semibold mb-2">Address</p>
                  <p className="text-amber-800 leading-relaxed">
                    4/83, Melappaniyur<br />
                    Pudukkottai 622412<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50/50 rounded-xl p-6 border border-amber-100">
              <h4 className="font-bold text-amber-950 mb-4">Business Hours</h4>
              <p className="text-amber-800 text-sm mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-amber-800 text-sm mb-2">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-amber-800 text-sm">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-amber-50/30 rounded-xl p-8 border border-amber-100">
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-amber-950 mb-2">Full Name *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white border-amber-200 focus:border-amber-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-950 mb-2">Email *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white border-amber-200 focus:border-amber-900"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-950 mb-2">Company Name</label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white border-amber-200 focus:border-amber-900"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-950 mb-2">Phone</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white border-amber-200 focus:border-amber-900"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-950 mb-2">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white border-amber-200 focus:border-amber-900 h-32"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-900 hover:bg-amber-950 text-white py-3 rounded-lg transition-colors text-base"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
