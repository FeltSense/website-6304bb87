'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { useState } from 'react'

export default function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const testimonials = [
    {
      id: 1,
      quote: "The Vitamin C serum transformed my skin in just two weeks. My complexion is brighter, and the dark spots have visibly faded. I love knowing it's clean and sustainable too.",
      name: "Sarah Chen",
      role: "Wellness Blogger",
      image: "/images/testimonial-testimonials-customers-0-1766161913752.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "Finally, a brand that doesn't compromise between efficacy and sustainability. The retinol alternative is as effective as prescription-strength without the irritation. My skin has never looked better.",
      name: "Emma Rodriguez",
      role: "Dermatology Nurse",
      image: "/images/testimonial-testimonials-customers-1-1766161914111.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "As someone with sensitive skin, finding products that actually work without causing reactions has been a journey. Bloom & Wild's gentle formulas deliver results without compromise. The science really shows.",
      name: "Maya Patel",
      role: "Environmental Scientist",
      image: "/images/testimonial-testimonials-customers-2-1766161914379.jpg",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-700">Real Results, Real People</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="text-primary-500">Clients</span> Say
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Discover how our science-backed formulas are transforming skincare routines and delivering visible results
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card */}
              <div className={`relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 h-full flex flex-col ${
                hoveredCard === index 
                  ? 'shadow-2xl shadow-primary-500/20 -translate-y-2' 
                  : 'shadow-lg hover:shadow-xl'
              }`}>
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary-500 text-primary-500 transition-transform duration-300"
                      style={{
                        animation: hoveredCard === index ? `starPop 0.3s ease-out ${i * 0.1}s both` : 'none'
                      }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-8 flex-grow">
                  <svg
                    className="absolute -top-2 -left-2 w-8 h-8 text-primary-200 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <p className="text-gray-700 leading-relaxed relative z-10 pl-6">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary-500/20 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="56px"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 opacity-0 -z-10 transition-opacity duration-500 ${
                  hoveredCard === index ? 'opacity-10' : ''
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
                <div className="text-primary-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">4.9★</div>
                <div className="text-primary-100">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-primary-100">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes starPop {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}