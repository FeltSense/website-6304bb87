'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Youtube, Leaf, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { name: 'Shop All', href: '/shop' },
    { name: 'Best Sellers', href: '/bestsellers' },
    { name: 'New Arrivals', href: '/new' },
    { name: 'Subscription Box', href: '/subscription' },
    { name: 'Gift Sets', href: '/gifts' },
    { name: 'Travel Sizes', href: '/travel' },
  ]

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Ingredients', href: '/ingredients' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Clinical Results', href: '/results' },
    { name: 'Press', href: '/press' },
    { name: 'Careers', href: '/careers' },
  ]

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Track Order', href: '/track' },
    { name: 'Skin Quiz', href: '/quiz' },
    { name: 'Ingredient Glossary', href: '/glossary' },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Youtube', icon: Youtube, href: 'https://youtube.com' },
  ]

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/footer-main-background-1766161960412.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="pt-16 pb-12 border-b border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-2 group mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Bloom & Wild</span>
              </Link>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
                Science-backed, sustainable skincare that delivers visible results while caring for the planet. Clean ingredients meet clinical efficacy.
              </p>
              
              {/* Newsletter */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-white">Cultivate Your Glow</p>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    />
                  </div>
                  <button className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Product Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  {productLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-primary-500 transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-primary-500 transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  {supportLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-primary-500 transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-slate-500 text-sm order-2 sm:order-1">
            © {currentYear} Bloom & Wild. All rights reserved. 
            <span className="mx-2">•</span>
            <Link href="/privacy" className="hover:text-primary-500 transition-colors">Privacy</Link>
            <span className="mx-2">•</span>
            <Link href="/terms" className="hover:text-primary-500 transition-colors">Terms</Link>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="pb-8 pt-4 border-t border-slate-800">
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Leaf className="w-3 h-3 text-emerald-500" />
              </div>
              <span>100% Sustainable</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span>Cruelty-Free & Vegan</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span>Clinically Tested</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span>Carbon Neutral Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  )
}