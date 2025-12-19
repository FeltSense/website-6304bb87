'use client'

import { Beaker, Package, Leaf, ShieldCheck, RefreshCw, Award } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface Feature {
  icon: React.ElementType
  title: string
  description: string
  image: string
}

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features: Feature[] = [
    {
      icon: Beaker,
      title: 'Clinically Proven Results',
      description: 'Science-backed formulations deliver visible improvements in just 4 weeks. Real results you can see and feel.',
      image: '/images/features-benefits-feature-1766161921698.png'
    },
    {
      icon: Package,
      title: '100% Sustainable Packaging',
      description: 'Carbon-neutral shipping with fully recyclable materials. Beauty that cares for the planet as much as your skin.',
      image: '/images/features-benefits-feature-1766161922026.png'
    },
    {
      icon: Leaf,
      title: 'Clean, Transparent Ingredients',
      description: 'No harmful chemicals, no mysteries. Just pure, effective botanicals backed by rigorous testing.',
      image: '/images/features-benefits-feature-1766161929384.png'
    },
    {
      icon: ShieldCheck,
      title: 'Dermatologist Tested',
      description: 'Approved for all skin types, including sensitive. Clinical efficacy meets gentle care.',
      image: '/images/features-benefits-feature-1766161931519.png'
    },
    {
      icon: RefreshCw,
      title: 'Flexible Subscription',
      description: 'Save 15% with free shipping. Pause, skip, or cancel anytime. Skincare on your terms.',
      image: '/images/gallery-results-product-1766161929582.png'
    },
    {
      icon: Award,
      title: '30-Day Guarantee',
      description: 'Not loving it? Hassle-free returns within 30 days. Your satisfaction is our promise.',
      image: '/images/services-subscription-product-1766161939151.png'
    }
  ]

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-50 rounded-full mb-6">
            <span className="text-sm font-medium text-primary-600 tracking-wide uppercase">The Bloom & Wild Difference</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose <span className="text-primary-500">Bloom & Wild</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Where science meets nature. Clinical efficacy and sustainable practices bloom together for skincare that transforms.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-200/50 hover:-translate-y-2 hover:border-primary-200">
                  {/* Image background with overlay */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-primary-50/95" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-500 ${
                      hoveredIndex === index 
                        ? 'bg-primary-500 shadow-lg shadow-primary-500/40 scale-110' 
                        : 'bg-gradient-to-br from-primary-50 to-primary-100'
                    }`}>
                      <Icon className={`w-8 h-8 transition-colors duration-500 ${
                        hoveredIndex === index ? 'text-white' : 'text-primary-500'
                      }`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className={`h-1 rounded-full transition-all duration-500 ${
                        hoveredIndex === index 
                          ? 'w-full bg-gradient-to-r from-primary-500 to-accent-500' 
                          : 'w-12 bg-primary-200'
                      }`} />
                    </div>
                  </div>

                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-secondary-500/20 blur-xl" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Experience the perfect blend of nature and science
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span>Clinically Tested</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <span>Sustainably Sourced</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
              <span>Cruelty-Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}