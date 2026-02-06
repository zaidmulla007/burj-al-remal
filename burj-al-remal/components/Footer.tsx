'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const productCategories = [
    'Engine',
    'Power Train',
    'Body',
    'Electrical',
    'Tools',
    'Accessories',
    'Liquids & Lubricants',
  ];

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/new-logo.png"
              alt="Burj Al Remal Logo"
              width={180}
              height={60}
              className="object-contain mb-4"
            />
            <p className="text-gray-600 mb-4">
              Your trusted partner for premium auto spare parts. Quality parts for all major automotive brands.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, color: '#E31E24' }}
                href="#"
                className="text-gray-500 hover:text-red-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#E31E24' }}
                href="#"
                className="text-gray-500 hover:text-red-600"
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
                className="text-gray-500 hover:text-red-600"
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
                className="text-gray-500 hover:text-red-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-500 hover:text-red-600"
                title="Follow us on TikTok"
                aria-label="TikTok"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-red-600">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <motion.span
                    whileHover={{ x: 5, color: '#E31E24' }}
                    className="text-gray-600 hover:text-red-600 transition-all cursor-pointer inline-block"
                  >
                    Home
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <motion.span
                    whileHover={{ x: 5, color: '#E31E24' }}
                    className="text-gray-600 hover:text-red-600 transition-all cursor-pointer inline-block"
                  >
                    About Us
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <motion.span
                    whileHover={{ x: 5, color: '#E31E24' }}
                    className="text-gray-600 hover:text-red-600 transition-all cursor-pointer inline-block"
                  >
                    Products
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <motion.span
                    whileHover={{ x: 5, color: '#E31E24' }}
                    className="text-gray-600 hover:text-red-600 transition-all cursor-pointer inline-block"
                  >
                    Contact Us
                  </motion.span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-red-600">Products</h4>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category}>
                  <motion.span
                    whileHover={{ x: 5, color: '#E31E24' }}
                    className="text-gray-600 hover:text-red-600 transition-all cursor-pointer inline-block text-sm"
                  >
                    {category}
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-red-600">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-red-600 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-600 text-sm">
                  Al Sajaa Industrial Area, Sharjah, UAE
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-red-600 flex-shrink-0" size={18} />
                <div className="text-gray-600 text-sm">
                  <div>+971 544313168</div>
                  <div>+971 554956941</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-red-600 flex-shrink-0" size={18} />
                <span className="text-gray-600 text-sm break-all">
                  burjalremal2025@gmail.com
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-300 mt-8 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Burj Al Remal Auto Spare Parts TR LLC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
