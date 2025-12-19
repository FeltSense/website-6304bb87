'use client'

import { Check, Sparkles, Lock } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/pricing-options-product-1766161950242.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Limited Early Access</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Reserve Your
            <span className="block mt-2 bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Founding Member Spot
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience our breakthrough botanical formulations. 
            Exclusive pre-order benefits for early supporters.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500" />
            
            {/* Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Premium Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold text-sm shadow-lg">
                <Lock className="w-4 h-4" />
                <span>Exclusive Access</span>
              </div>

              <div className="p-8 md:p-12">
                {/* Title & Price */}
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Founding Member
                  </h3>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                      $29
                    </span>
                    <span className="text-2xl text-gray-500 line-through">$59</span>
                  </div>
                  <p className="text-lg text-gray-600">
                    One-time pre-order • Limited spots available
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-5 mb-10">
                  {[
                    'Early access to our Complete Skincare System',
                    'Exclusive 50% founding member discount',
                    'Personalized skin consultation with our botanists',
                    'Free shipping & botanical welcome gift',
                    'Lifetime priority support & member-only updates'
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center group-hover/item:scale-110 transition duration-300">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://buy.stripe.com/prod_TJtceEOGnyYvh1"
                  className="block w-full group/btn"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-6 px-8 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold text-xl shadow-2xl shadow-primary-500/50 hover:shadow-primary-500/70 transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Pre-Order for $29
                      <Sparkles className="w-6 h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </a>

                {/* Urgency Text */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600 font-medium">
                    <span className="text-primary-600 font-bold">487 members</span> have already secured their spot
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    🌱 Ships March 2025 • 30-day money-back guarantee
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-2 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500" />
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600"
        >
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary-500" />
            <span>Secure checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary-500" />
            <span>No hidden fees</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary-500" />
            <span>Carbon-neutral shipping</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}