'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Leaf, Microscope, Recycle, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

interface Service {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  image: string
  gradient: string
}

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services: Service[] = [
    {
      id: 'personalized',
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Personalized Skincare Routines',
      description: 'Every skin is unique, like a fingerprint. Our science-backed assessment creates custom routines that adapt to your skin\'s changing needs through seasons and life stages.',
      features: [
        'AI-powered skin analysis',
        'Custom product recommendations',
        'Seasonal routine adjustments',
        'Progress tracking & insights'
      ],
      image: '/images/features-benefits-feature-1766161921698.png',
      gradient: 'from-primary-500/20 to-accent-500/20'
    },
    {
      id: 'subscription',
      icon: <Recycle className="w-6 h-6" />,
      title: 'Flexible Subscription Service',
      description: 'Never run out of your essentials. Our subscription model delivers your personalized products on your schedule, with zero waste packaging and carbon-neutral shipping.',
      features: [
        'Pause, skip, or cancel anytime',
        'Auto-refill based on usage',
        'Exclusive subscriber discounts',
        'Biodegradable packaging'
      ],
      image: '/images/services-subscription-product-1766161939151.png',
      gradient: 'from-secondary-500/20 to-primary-500/20'
    },
    {
      id: 'consultation',
      icon: <Microscope className="w-6 h-6" />,
      title: 'Expert Consultations',
      description: 'Connect with our team of dermatological advisors and botanists. Get professional guidance on ingredient efficacy, sustainable practices, and achieving your skin goals.',
      features: [
        'Virtual skin consultations',
        'Ingredient education sessions',
        'Routine optimization reviews',
        'Sustainability workshops'
      ],
      image: '/images/about-ingredients-feature-1766161940551.png',
      gradient: 'from-accent-500/20 to-secondary-500/20'
    },
    {
      id: 'community',
      icon: <Leaf className="w-6 h-6" />,
      title: 'Bloom Community Access',
      description: 'Join a thriving community of conscious skincare enthusiasts. Share your journey, learn from others, and participate in our sustainability initiatives.',
      features: [
        'Exclusive community forum',
        'Monthly masterclasses',
        'Early access to new products',
        'Sustainability challenges & rewards'
      ],
      image: '/images/gallery-results-product-1766161929582.png',
      gradient: 'from-primary-500/20 to-secondary-500/20'
    }
  ]

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-700">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Journey to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500">
              Radiant, Sustainable Beauty
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            More than skincare—it's a holistic approach to beauty that nurtures your skin and the planet. Every service is designed to support your unique skincare journey.
          </p>
        </div>

        {/* Service Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`group relative p-6 rounded-2xl transition-all duration-500 text-left ${
                activeService === index
                  ? 'bg-white shadow-xl scale-105'
                  : 'bg-white/50 hover:bg-white hover:shadow-lg'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-500 ${
                activeService === index
                  ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white'
                  : 'bg-gray-100 text-gray-600 group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-accent-500 group-hover:text-white'
              }`}>
                {service.icon}
              </div>
              <h3 className={`font-bold text-sm sm:text-base transition-colors duration-300 ${
                activeService === index ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
              }`}>
                {service.title}
              </h3>
              {activeService === index && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ${
                activeService === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1 space-y-8">
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${service.gradient}`}>
                    <div className="text-primary-600">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">What's Included</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 rounded-xl bg-white/80 hover:bg-white transition-colors duration-300 group"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-gray-700 font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2">
                  <div className={`relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${service.gradient} p-1 group hover:scale-[1.02] transition-all duration-500`}>
                    <div className="relative aspect-[4/3] bg-white rounded-[22px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-20 lg:mt-32 text-center">
          <div className="relative p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
            <div className="relative z-10">
              <Leaf className="w-16 h-16 text-white mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Routine?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Start your personalized skincare journey today. Choose the service that fits your lifestyle and let science and nature work their magic.
              </p>
              <button className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary-600 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}