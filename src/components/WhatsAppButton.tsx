import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { trackCTAClick } from '../utils/analytics';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/923016672356"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCTAClick('WhatsApp', 'floating_button')}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-7 left-7 z-[9000] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[#25D366]/40 transition-shadow"
    >
      <MessageCircle size={30} fill="white" />
    </motion.a>
  );
};
