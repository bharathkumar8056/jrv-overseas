'use client'

export function AboutSection() {
  const values = [
    {
      title: 'Quality',
      description: 'Premium products meeting international export standards and certifications'
    },
    {
      title: 'Sustainability',
      description: 'Organic farming methods that respect the environment and preserve natural resources'
    },
    {
      title: 'Reliability',
      description: 'Consistent delivery with transparent communication and trusted partnerships'
    },
    {
      title: 'Innovation',
      description: 'Modern processing and packaging techniques combined with traditional expertise'
    }
  ]

  return (
    <section id="about" className="py-20 bg-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-amber-950 font-serif mb-6">About JRV Overseas</h2>
              <p className="text-lg text-amber-800 leading-relaxed mb-6">
                Based in Tamil Nadu, India, JRV Overseas is a leading international export company specializing in premium agricultural products and packaging solutions. With years of experience in global trade, we connect businesses worldwide with authentic, high-quality products.
              </p>
              <p className="text-lg text-amber-800 leading-relaxed">
                Our commitment to excellence, sustainable farming practices, and customer satisfaction has made us a trusted partner for businesses across 50+ countries.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-amber-950">Our Values</h3>
              <div className="grid grid-cols-1 gap-4">
                {values.map((value, idx) => (
                  <div key={idx} className="border-l-4 border-amber-900 pl-4">
                    <h4 className="font-bold text-amber-950 mb-2">{value.title}</h4>
                    <p className="text-amber-800">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
              <h3 className="text-2xl font-bold text-amber-950 mb-6">Company Information</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase text-amber-700 font-semibold mb-2">Organization</p>
                  <p className="text-lg font-bold text-amber-950">JRV OVERSEAS</p>
                </div>

                <div>
                  <p className="text-sm uppercase text-amber-700 font-semibold mb-2">Address</p>
                  <p className="text-amber-800">
                    4/83, Melappaniyur<br />
                    Pudukkottai 622412<br />
                    Tamil Nadu, India
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase text-amber-700 font-semibold mb-2">Email</p>
                  <p className="text-amber-800 hover:text-amber-950 cursor-pointer">ramraman882@gmail.com</p>
                </div>

                <div>
                  <p className="text-sm uppercase text-amber-700 font-semibold mb-2">Phone</p>
                  <p className="text-amber-800">+91 9655872909</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-900/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-amber-950 mb-2">50+</div>
                <p className="text-amber-800 text-sm">Countries Worldwide</p>
              </div>
              <div className="bg-amber-900/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-amber-950 mb-2">100%</div>
                <p className="text-amber-800 text-sm">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
