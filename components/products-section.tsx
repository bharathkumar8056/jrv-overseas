'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: 1,
    name: 'Organic Black Kavuni Rice',
    image: '/karuppu-kavuni-rice.webp',
    description: 'Premium organic black Kavuni rice cultivated using traditional methods in Tamil Nadu. Grown without synthetic fertilizers, ensuring natural purity and exceptional nutritional value.',
    features: [
      'Organic & Natural',
      'High Nutritional Value',
      'Traditional Farming',
      'Export Grade',
      'Long Storage Life'
    ],
    moq: '1 Metric Ton',
    leadTime: '10-20 days'
  }
  // {
  //   id: 2,
  //   name: 'Corrugated Carton Boxes',
  //   image: '/boxes.jpg',
  //   description: 'High-quality corrugated cardboard packaging boxes designed for strength and durability. Perfect for storage, transportation, and export packaging purposes.',
  //   features: [
  //     'Premium Materials',
  //     'High Durability',
  //     'Customizable',
  //     'Structural Integrity',
  //     'International Standards'
  //   ],
  //   moq: '500-1000 units',
  //   leadTime: '15-30 days'
  // }
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold text-amber-950 font-serif">Our Products</h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Discover our premium product range crafted with excellence for international markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-shadow border-amber-100">
              <div className="relative h-64 md:h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-amber-950 font-serif mb-3">{product.name}</h3>
                  <p className="text-amber-800 text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-amber-900">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <span className="text-amber-900 font-bold">✓</span>
                        <span className="text-amber-800 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-amber-100">
                  <div>
                    <p className="text-xs text-amber-700 uppercase font-semibold">MOQ</p>
                    <p className="text-lg font-bold text-amber-950">{product.moq}</p>
                  </div>
                  <div>
                    <p className="text-xs text-amber-700 uppercase font-semibold">Lead Time</p>
                    <p className="text-lg font-bold text-amber-950">{product.leadTime}</p>
                  </div>
                </div>

                <Button className="w-full bg-amber-900 hover:bg-amber-950 text-white py-3 rounded-lg transition-colors text-base">
                  Inquire Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
