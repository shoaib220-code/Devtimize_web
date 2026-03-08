import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      onClick={scrollToTop}
      className="fixed bottom-24 right-7 z-[8000] w-10 h-10 bg-bg-raised border border-bg-stroke rounded-full flex items-center justify-center text-text-secondary hover:text-acid-cyan hover:border-acid-cyan transition-all"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};
