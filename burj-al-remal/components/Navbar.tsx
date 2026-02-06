'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const productCategories = [
    {
      name: 'Engine',
      href: '/products/engine',
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
      href: '/products/power-train',
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
      href: '/products/body',
      subcategories: ['A/C & Heater Parts', 'Body Parts', 'Fasteners'],
    },
    {
      name: 'Electrical',
      href: '/products/electrical',
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
      href: '/products/tools',
      subcategories: ['Garage Tools'],
    },
    {
      name: 'Accessories',
      href: '/products/accessories',
      subcategories: ['General Accessories', 'Electrical Accessories'],
    },
    {
      name: 'Liquids & Lubricants',
      href: '/products/liquids-lubricants',
      subcategories: ['Engine Oil', 'ATF Oil'],
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <Image
                src="/new-logo.png"
                alt="Burj Al Remal Logo"
                width={240}
                height={80}
                className="object-contain h-20 w-auto"
              />
            </motion.div>
          </Link>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.05, color: '#E31E24' }}
                className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer font-medium"
              >
                Home
              </motion.span>
            </Link>
            <Link href="/about">
              <motion.span
                whileHover={{ scale: 1.05, color: '#E31E24' }}
                className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer font-medium"
              >
                About
              </motion.span>
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium flex items-center space-x-1"
              >
                <span>Products</span>
                <motion.div
                  animate={{ rotate: productsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-visible"
                  >
                    {productCategories.map((category, index) => (
                      <div
                        key={category.name}
                        className="relative group"
                        onMouseEnter={() => setHoveredCategory(category.name)}
                      >
                        <Link href={category.href}>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ backgroundColor: '#E31E24', x: 5 }}
                            className="px-4 py-3 text-gray-700 hover:text-white transition-all cursor-pointer flex items-center justify-between"
                          >
                            <span>{category.name}</span>
                            <ChevronDown size={14} className="-rotate-90" />
                          </motion.div>
                        </Link>

                        {/* Subcategories Dropdown */}
                        <AnimatePresence>
                          {hoveredCategory === category.name && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-full top-0 -ml-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                              onMouseEnter={() => setHoveredCategory(category.name)}
                              onMouseLeave={() => setHoveredCategory(null)}
                            >
                              {category.subcategories.map((subcategory, subIndex) => (
                                <motion.div
                                  key={subcategory}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIndex * 0.03 }}
                                  whileHover={{ backgroundColor: '#c91a1f', x: 5 }}
                                  className="px-4 py-2 text-gray-600 text-sm hover:text-white transition-all cursor-pointer"
                                >
                                  {subcategory}
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05, color: '#E31E24' }}
                className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer font-medium"
              >
                Contact Us
              </motion.span>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#c91a1f' }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-red-600/30"
              >
                Get Quote
              </motion.button>
            </Link>
          </div>

          {/* Social Media Icons - Right */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, color: '#E31E24' }}
              href="#"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: '#E31E24' }}
              href="#"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: '#E31E24' }}
              href="#"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: '#E31E24' }}
              href="#"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-gray-500 hover:text-red-600 transition-colors"
              title="Follow us on TikTok"
              aria-label="TikTok"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
              </svg>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ x: 5, color: '#E31E24' }}
                  className="text-gray-700 py-2 font-medium"
                >
                  Home
                </motion.div>
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ x: 5, color: '#E31E24' }}
                  className="text-gray-700 py-2 font-medium"
                >
                  About
                </motion.div>
              </Link>

              <div>
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="text-gray-700 py-2 font-medium flex items-center space-x-2 w-full"
                >
                  <span>Products</span>
                  <motion.div
                    animate={{ rotate: productsOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-2"
                    >
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.div
                            whileHover={{ x: 5, color: '#E31E24' }}
                            className="text-gray-500 py-2 text-sm"
                          >
                            {category.name}
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ x: 5, color: '#E31E24' }}
                  className="text-gray-700 py-2 font-medium"
                >
                  Contact Us
                </motion.div>
              </Link>

              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold w-full shadow-lg shadow-red-600/30"
                >
                  Get Quote
                </motion.button>
              </Link>

              {/* Social Media Icons - Mobile */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200">
                <motion.a
                  whileHover={{ scale: 1.2, color: '#E31E24' }}
                  href="#"
                  className="text-gray-500 hover:text-red-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: '#E31E24' }}
                  href="#"
                  className="text-gray-500 hover:text-red-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: '#E31E24' }}
                  href="#"
                  className="text-gray-500 hover:text-red-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: '#E31E24' }}
                  href="#"
                  className="text-gray-500 hover:text-red-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="text-gray-500 hover:text-red-600 transition-colors"
                  title="Follow us on TikTok"
                  aria-label="TikTok"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
