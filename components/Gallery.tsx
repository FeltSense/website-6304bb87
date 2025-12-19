'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

interface GalleryItem {
  id: number
  src: string
  alt: string
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const galleryItems: GalleryItem[] = [
    { id: 1, src: '/images/features-benefits-feature-1766161921698.png', alt: 'Botanical skincare ingredients' },
    { id: 2, src: '/images/features-benefits-feature-1766161922026.png', alt: 'Natural plant extracts' },
    { id: 3, src: '/images/features-benefits-feature-1766161929384.png', alt: 'Sustainable skincare formulation' },
    { id: 4, src: '/images/features-benefits-feature-1766161931519.png', alt: 'Clean beauty essentials' },
    { id: 5, src: '/images/gallery-results-product-1766161929582.png', alt: 'Visible skincare results' },
    { id: 6, src: '/images/services-subscription-product-1766161939151.png', alt: 'Premium skincare products' },
    { id: 7, src: '/images/about-ingredients-feature-1766161940551.png', alt: 'Organic ingredients sourcing' },
    { id: 8, src: '/images/about-ingredients-feature-1766161938516.png', alt: 'Natural botanicals' },
    { id: 9, src: '/images/testimonials-press-background-1766161951204.png', alt: 'Bloom & Wild featured press' },
    { id: 10, src: '/images/pricing-options-product-1766161950242.png', alt: 'Skincare product lineup' },
    { id: 11, src: '/images/cta-guarantee-background-1766161949998.png', alt: 'Quality guarantee promise' },
    { id: 12, src: '/images/footer-main-background-1766161960412.png', alt: 'Natural beauty philosophy' },
  ]

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-500 tracking-wider uppercase bg-primary-50 px-4 py-2 rounded-full">
              Visual Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Where Science Meets
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500">
              Natural Beauty
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of sustainable formulations, botanical ingredients, and real transformations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(item)}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-sm font-medium drop-shadow-lg">
                  {item.alt}
                </p>
              </div>
              <div className="absolute inset-0 ring-2 ring-primary-500/0 group-hover:ring-primary-500/50 rounded-2xl transition-all duration-500" />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
            style={{
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-primary-500 transition-colors duration-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <div
              className="relative max-w-6xl w-full aspect-square"
              onClick={(e) => e.stopPropagation()}
              style={{
                animation: 'scaleIn 0.4s ease-out'
              }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                className="object-contain rounded-lg"
                priority
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}