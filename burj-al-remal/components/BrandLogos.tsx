'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const BrandLogos = () => {
  const brands = [
    { name: 'Lexus', image: '/logos/WhatsApp Image 2026-01-25 at 7.12.42 PM (1).jpeg' },
    { name: 'Toyota', image: '/logos/WhatsApp Image 2026-01-25 at 7.12.42 PM.jpeg' },
    { name: 'Nissan', image: '/logos/WhatsApp Image 2026-01-25 at 7.12.43 PM.jpeg' },
    { name: 'Honda', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.05 PM.jpeg' },
    { name: 'Mitsubishi', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.06 PM (1).jpeg' },
    { name: 'Mazda', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.06 PM (2).jpeg' },
    { name: 'Suzuki', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.06 PM.jpeg' },
    { name: 'Hyundai', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.07 PM (1).jpeg' },
    { name: 'Kia', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.07 PM.jpeg' },
    { name: 'Audi', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.08 PM (1).jpeg' },
    { name: 'BMW', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.08 PM.jpeg' },
    { name: 'Mercedes-Benz', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.19 PM (1).jpeg' },
    { name: 'Isuzu', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.19 PM.jpeg' },
    { name: 'MG', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.20 PM.jpeg' },
    { name: 'Jeep', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.29 PM.jpeg' },
    { name: 'Chery', image: '/logos/WhatsApp Image 2026-01-25 at 7.13.30 PM.jpeg' },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Premium <span className="text-red-600">Brands</span> We Supply
          </h2>
          <p className="text-gray-600 text-lg">
            Genuine parts for all major automotive brands
          </p>
        </motion.div>

        {/* Desktop: Infinite Scroll Animation */}
        <div className="relative mb-12 hidden lg:block">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -100 * brands.length / 2],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex-shrink-0 bg-white rounded-xl p-6 w-48 h-32 flex items-center justify-center cursor-pointer transition-all shadow-md hover:shadow-xl hover:shadow-red-600/10 border border-gray-100"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 192px"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
        </div>

        {/* Grid View - All Devices */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-4 transition-all cursor-pointer shadow-md hover:shadow-xl hover:shadow-red-600/10 h-28 flex items-center justify-center border border-gray-100"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            <span className="text-red-600 font-semibold">16+</span> Trusted Automotive Brands
          </p>
          <p className="text-gray-500 mt-2">
            Genuine OEM and high-quality aftermarket parts
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandLogos;
