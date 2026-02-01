'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Wrench, Clock, Award, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import BrandLogos from '@/components/BrandLogos';

export default function Home() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Genuine and high-quality auto spare parts from trusted manufacturers',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Wide Range',
      description: 'Comprehensive selection for all major automotive brands',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across UAE',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expert Support',
      description: 'Professional guidance and technical support',
    },
  ];

  const stats = [
    { number: '5000+', label: 'Products' },
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Brands' },
    { number: '10+', label: 'Years Experience' },
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, rgba(227, 30, 36, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, rgba(227, 30, 36, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 0% 0%, rgba(227, 30, 36, 0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Premium Auto Spare Parts
                <br />
                <span className="text-red-600">For Every Brand</span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your trusted partner for genuine auto spare parts in UAE. Quality, reliability, and excellence in every product.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#c91a1f' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 group"
                >
                  <span>Explore Products</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: '#E31E24', color: '#E31E24' }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-red-600/10 rounded-full blur-xl"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-red-600/10 rounded-full blur-xl"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-red-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl md:text-5xl font-bold text-red-600 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-red-600">Burj Al Remal</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We provide the best quality auto spare parts with exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black p-8 rounded-2xl border border-red-600/20 hover:border-red-600 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-red-600 mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <BrandLogos />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 0% 0%, white 1px, transparent 1px)',
              'radial-gradient(circle at 100% 100%, white 1px, transparent 1px)',
              'radial-gradient(circle at 0% 0%, white 1px, transparent 1px)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ backgroundSize: '50px 50px' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for the best deals on premium auto spare parts
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center space-x-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
