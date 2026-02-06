'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const FreeConsultation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
      }, 3000);
    }, 2000);
  };

  return (
    <>
      {/* Sidebar Tab - Hidden on mobile */}
      <div className="hidden md:block fixed top-1/2 right-0 -translate-y-1/2 z-50 cursor-pointer">
        <motion.div
          whileHover={{ x: -5 }}
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-b from-red-600 to-red-700 text-white py-6 px-3 shadow-lg rounded-l-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div
            className="font-bold text-xs tracking-wider uppercase"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            Free Consultation
          </div>
        </motion.div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-white border-b border-gray-200 px-5 py-3 flex items-center justify-between rounded-t-2xl">
                <h3 className="text-xl font-bold text-gray-800">Free Consultation</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Form */}
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-500 text-green-700 px-4 py-6 rounded-lg text-center"
                  >
                    <p className="font-semibold">Thank you!</p>
                    <p className="text-sm mt-1">Your message has been sent successfully.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="modal-name" className="block text-sm font-semibold text-gray-800 mb-2">
                          Full Name *
                        </label>
                        <input
                          id="modal-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-800 mb-2">
                          Email Address *
                        </label>
                        <input
                          id="modal-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="modal-phone" className="block text-sm font-semibold text-gray-800 mb-2">
                          Phone Number *
                        </label>
                        <input
                          id="modal-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors duration-300"
                          placeholder="+971 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="modal-subject" className="block text-sm font-semibold text-gray-800 mb-2">
                          Subject *
                        </label>
                        <select
                          id="modal-subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors duration-300"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="quote">Request a Quote</option>
                          <option value="product">Product Information</option>
                          <option value="support">Technical Support</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modal-message" className="block text-sm font-semibold text-gray-800 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="modal-message"
                        name="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FreeConsultation;
