'use client'

import { useState } from 'react'
import { Plus, Minus, Leaf, Droplet, Sparkles, Shield } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  icon: any
}

const faqs: FAQItem[] = [
  {
    question: "What makes Bloom & Wild different from other skincare brands?",
    answer: "We bridge the gap between clean beauty and clinical efficacy. Every formula is backed by peer-reviewed research and sustainability certifications. We use botanical actives at concentrations proven to deliver results, never compromising planet health for skin health. Our transparency extends from ingredient sourcing to carbon-neutral shipping.",
    icon: Leaf
  },
  {
    question: "How long until I see visible results?",
    answer: "Most customers notice improved hydration and radiance within 7-10 days. For deeper concerns like fine lines or hyperpigmentation, clinical studies show significant improvement at 4-6 weeks with consistent use. Remember, sustainable skincare works with your skin's natural renewal cycle - lasting results take patience, but they're worth the journey.",
    icon: Sparkles
  },
  {
    question: "Are your products suitable for sensitive skin?",
    answer: "Absolutely. We formulate without common irritants like synthetic fragrances, sulfates, and parabens. Each product undergoes dermatological testing and patch testing on sensitive skin. Our botanical actives are selected for both efficacy and gentleness. However, everyone's skin is unique - we recommend patch testing any new product before full application.",
    icon: Shield
  },
  {
    question: "What does 'science-backed' actually mean for your formulas?",
    answer: "Every active ingredient we use has published clinical research demonstrating its efficacy. We don't rely on marketing claims - we reference peer-reviewed studies. Our in-house team includes cosmetic chemists and botanists who formulate at concentrations proven effective in laboratories. We're transparent about the science, sharing research links on every product page.",
    icon: Droplet
  },
  {
    question: "How are your products sustainable?",
    answer: "Sustainability is embedded in every decision. We use renewable botanicals from regenerative farms, recyclable glass packaging, and carbon-neutral shipping. Our manufacturing facilities run on renewable energy, and we're a certified B-Corp. We're also plastic-neutral - removing as much plastic from the environment as we use. Beauty shouldn't cost the earth.",
    icon: Leaf
  },
  {
    question: "Can I use multiple Bloom & Wild products together?",
    answer: "Yes! Our products are designed to layer beautifully. We recommend starting with your lightest consistency (serums) and building to richest (creams). For a complete routine, cleanse, apply treatment serums, moisturize, then protect with SPF during day. If you're new to active ingredients, introduce one product at a time over 2-3 weeks to let your skin adapt.",
    icon: Sparkles
  },
  {
    question: "Do you test on animals?",
    answer: "Never. We're certified cruelty-free and Leaping Bunny approved. We use advanced in-vitro testing methods and human clinical trials to validate our formulas. Our commitment extends to our supply chain - every ingredient supplier must be cruelty-free certified. Beauty should never cause harm.",
    icon: Shield
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 60-day satisfaction guarantee. If you're not delighted with your results, return even opened products for a full refund. We believe in our formulas and want you to have time to see real results. Your skin journey is unique, and we're here to support it every step of the way.",
    icon: Droplet
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-gradient-to-br from-amber-50 via-white to-pink-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600">Common Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Skin Journey,
            <span className="block text-primary-500 mt-2">Answered</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            From formulation science to sustainability practices, we believe in complete transparency. 
            Find answers to your questions or reach out to our skincare experts.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 md:gap-6">
            {faqs.map((faq, index) => {
              const Icon = faq.icon
              const isOpen = openIndex === index
              
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 md:px-8 py-6 md:py-7 flex items-start gap-4 text-left transition-colors"
                  >
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' 
                        : 'bg-gray-100 text-gray-500 group-hover:bg-primary-50 group-hover:text-primary-500'
                    }`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>

                    {/* Question */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg md:text-xl font-semibold mb-1 transition-colors ${
                        isOpen ? 'text-primary-500' : 'text-gray-900 group-hover:text-primary-500'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    {/* Toggle Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? 'bg-primary-500 text-white rotate-180' 
                          : 'bg-gray-100 text-gray-500 group-hover:bg-primary-50 group-hover:text-primary-500'
                      }`}>
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-7 pl-20 md:pl-24">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="max-w-3xl mx-auto mt-16 md:mt-20 text-center">
          <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Our skincare experts are here to help you find the perfect routine for your unique skin journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-500 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Chat with Expert
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                Browse Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}