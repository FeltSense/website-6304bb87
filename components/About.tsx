'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Leaf, Award, Heart, Sparkles } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Leaf, value: '98%', label: 'Natural Ingredients' },
    { icon: Award, value: '15+', label: 'Clinical Studies' },
    { icon: Heart, value: '50K+', label: 'Happy Customers' },
    { icon: Sparkles, value: '100%', label: 'Cruelty-Free' }
  ]

  const values = [
    {
      title: 'Science Meets Nature',
      description: 'Every formula is backed by rigorous clinical testing while harnessing the power of botanical ingredients.',
      image: '/images/about-ingredients-feature-1766161940551.png'
    },
    {
      title: 'Sustainable Beauty',
      description: 'From recyclable packaging to carbon-neutral shipping, we care for your skin and the planet in equal measure.',
      image: '/images/about-ingredients-feature-1766161938516.png'
    }
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-semibold mb-6">
            Our Story
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
            Where Science Blooms
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Born from a simple belief: that skincare shouldn't force you to choose between efficacy and ethics. 
            We've spent years perfecting formulas that deliver visible results while nurturing both skin and planet.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 mix-blend-overlay z-10" />
              <Image
                src="/images/features-benefits-feature-1766161921698.png"
                alt="Bloom & Wild natural skincare ingredients"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600">Clean Formulas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Rooted in Research, <span className="text-primary-500">Grown with Care</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by dermatologists and botanists who refused to compromise, Bloom & Wild emerged from years of research into how nature and science can work in perfect harmony. We've created a new standard where clean ingredients meet clinical efficacy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every ingredient is meticulously sourced from sustainable farms. Every formula undergoes rigorous testing. Every product is designed to deliver real, visible results you can see and feel—without harmful chemicals or environmental guilt.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This is skincare that grows with you, adapting to your skin's changing needs while respecting the delicate balance of our ecosystem. Because true beauty flourishes when we nurture ourselves and our planet together.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span className="text-sm font-medium text-primary-500">Dermatologist Approved</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary-500/10 rounded-full">
                <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                <span className="text-sm font-medium text-secondary-500">Carbon Neutral</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-accent-500/10 rounded-full">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                <span className="text-sm font-medium text-accent-500">Vegan Certified</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <div className="space-y-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/2]">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}