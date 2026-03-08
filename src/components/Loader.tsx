import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('dtz_seen');
    if (hasSeen) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('dtz_seen', '1');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const word = "DEVTIMIZE";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[99999] bg-[#080C14] flex items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center">
            <div className="flex gap-1 md:gap-2">
              {word.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.08, duration: 0.35 }}
                  className="font-display text-4xl md:text-7xl lg:text-8xl font-bold tracking-[0.18em] gradient-text"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <div className="w-40 md:w-60 h-[1.5px] bg-white/5 mt-8 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.4, duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
                className="h-full bg-acid-cyan shadow-[0_0_12px_#00E8FF,0_0_32px_rgba(0,232,255,0.4)]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              transition={{ delay: 1.8 }}
              className="mt-5 font-mono text-xs text-acid-cyan tracking-wider"
            >
              &gt; initializing devtimize.exe<span className="animate-pulse">_</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
