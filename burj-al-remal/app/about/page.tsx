'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Wrench, Shield, Clock, ThumbsUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Quality First',
      description: 'We never compromise on the quality of our products. Every part is carefully selected and tested.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Customer Satisfaction',
      description: 'Our customers are at the heart of everything we do. We strive to exceed expectations.',
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Reliability',
      description: 'Count on us for timely delivery and consistent service quality.',
    },
    {
      icon: <ThumbsUp className="w-10 h-10" />,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through honest business practices.',
    },
  ];

  const timeline = [
    { year: '2015', event: 'Company Founded', description: 'Started our journey in auto spare parts industry' },
    { year: '2017', event: 'Expanded Inventory', description: 'Added 20+ new automotive brands to our portfolio' },
    { year: '2020', event: 'New Facility', description: 'Opened state-of-the-art warehouse in Al Sajaa' },
    { year: '2023', event: 'Digital Transformation', description: 'Launched online ordering system' },
    { year: '2025', event: 'Grand Opening', description: 'New showroom and expanded services' },
  ];

  return (
    <main className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-black to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-red-600">Burj Al Remal</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner in automotive excellence since 2015
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-red-600">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Burj Al Remal Auto Spare Parts TR LLC was established with a clear vision: to provide the UAE automotive industry with the highest quality spare parts and exceptional service.
                </p>
                <p>
                  Since our inception, we have grown to become one of the most trusted names in the industry, serving thousands of satisfied customers across the Emirates.
                </p>
                <p>
                  Our state-of-the-art facility in Al Sajaa Industrial Area, Sharjah, houses an extensive inventory of genuine and high-quality spare parts for all major automotive brands.
                </p>
                <p>
                  We combine traditional values of trust and reliability with modern technology to deliver an unparalleled customer experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-600 p-8 rounded-2xl text-center"
                >
                  <div className="text-4xl font-bold text-white mb-2">10+</div>
                  <div className="text-white/90">Years Experience</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black border border-red-600/20 p-8 rounded-2xl text-center"
                >
                  <div className="text-4xl font-bold text-red-600 mb-2">5000+</div>
                  <div className="text-gray-400">Products</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black border border-red-600/20 p-8 rounded-2xl text-center"
                >
                  <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-600 p-8 rounded-2xl text-center"
                >
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/90">Brands</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-red-600 to-red-700 p-10 rounded-2xl"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-white mb-6"
              >
                <Target className="w-16 h-16" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/90 text-lg">
                To provide our customers with the highest quality automotive spare parts, exceptional service, and expert guidance, ensuring their vehicles perform at their best while building long-term relationships based on trust and reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-zinc-900 border border-red-600/20 p-10 rounded-2xl"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-red-600 mb-6"
              >
                <Eye className="w-16 h-16" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg">
                To become the leading automotive spare parts supplier in the UAE, recognized for our commitment to quality, innovation, and customer satisfaction, while continuously expanding our product range and services to meet evolving market needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="text-red-600">Core Values</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black p-8 rounded-2xl border border-red-600/20 hover:border-red-600 transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-red-600 mb-4 inline-block"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-red-600">Journey</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Milestones that shaped our success
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-600/20 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-zinc-900 p-6 rounded-xl border border-red-600/20 hover:border-red-600 transition-all"
                    >
                      <div className="text-2xl font-bold text-red-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.event}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="w-4 h-4 bg-red-600 rounded-full border-4 border-black hidden md:block"
                  />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us for their automotive needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
