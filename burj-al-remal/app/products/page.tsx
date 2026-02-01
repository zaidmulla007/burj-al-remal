'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Package } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const productCategories = [
    {
      name: 'Engine',
      icon: '🔧',
      subcategories: [
        'Engine Components',
        'Gaskets',
        'Mountings',
        'Belts',
        'Filters',
        'Lubrication Parts',
        'Cooling System Parts',
        'Fuel System Parts',
        'Manifolds',
      ],
    },
    {
      name: 'Power Train',
      icon: '⚙️',
      subcategories: [
        'Brake & Wheel Parts',
        'Clutch',
        'Final Drive',
        'Gear Box',
        'Steering',
        'Suspension',
      ],
    },
    {
      name: 'Body',
      icon: '🚗',
      subcategories: [
        'A/C & Heater Parts',
        'Body Parts',
        'Fasteners',
      ],
    },
    {
      name: 'Electrical',
      icon: '⚡',
      subcategories: [
        'Battery',
        'Electronic Control Units',
        'Horn',
        'Ignition System',
        'Lamps & Mirrors',
        'Switches, Relays & Connectors',
        'Starting & Charging System',
      ],
    },
    {
      name: 'Tools',
      icon: '🔨',
      subcategories: ['Garage Tools'],
    },
    {
      name: 'Accessories',
      icon: '🎯',
      subcategories: ['Auto Accessories'],
    },
    {
      name: 'Liquids & Lubricants',
      icon: '🛢️',
      subcategories: ['Engine Oil', 'ATF Oil'],
    },
  ];

  const filteredCategories = productCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.subcategories.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-red-600/10 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-red-600">Products</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Premium auto spare parts for all major brands
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-red-600/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-all"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-900 rounded-2xl border border-red-600/20 hover:border-red-600 transition-all overflow-hidden"
              >
                {/* Category Header */}
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(227, 30, 36, 0.1)' }}
                  onClick={() => setExpandedCategory(expandedCategory === category.name ? null : category.name)}
                  className="p-6 cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="text-4xl"
                    >
                      {category.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                      <p className="text-gray-400 text-sm">{category.subcategories.length} subcategories</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCategory === category.name ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-red-600" size={24} />
                  </motion.div>
                </motion.div>

                {/* Subcategories */}
                <AnimatePresence>
                  {expandedCategory === category.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-red-600/20 bg-black"
                    >
                      <div className="p-4 space-y-2">
                        {category.subcategories.map((subcategory, subIndex) => (
                          <motion.div
                            key={subcategory}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                            whileHover={{ x: 5, backgroundColor: 'rgba(227, 30, 36, 0.1)' }}
                            className="p-3 rounded-lg text-gray-300 hover:text-white transition-all cursor-pointer flex items-center space-x-2"
                          >
                            <Package size={16} className="text-red-600" />
                            <span>{subcategory}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-xl">No products found matching your search.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* All Categories List */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Complete Product <span className="text-red-600">Catalog</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Browse our extensive range of automotive parts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl border border-red-600/20"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.subcategories.map((subcategory) => (
                    <motion.div
                      key={subcategory}
                      whileHover={{ x: 5, color: '#E31E24' }}
                      className="text-gray-400 hover:text-red-600 transition-all cursor-pointer flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                      <span className="text-sm">{subcategory}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Contact us directly and our team will help you find the exact part you need
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg"
              >
                Contact Us Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
