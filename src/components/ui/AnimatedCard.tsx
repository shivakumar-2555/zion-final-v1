'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export function AnimatedCard({
  children,
  className = '',
  delay = 0,
  onHoverStart,
  onHoverEnd,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay,
          ease: 'easeOut',
        },
      }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        },
      }}
      whileTap={{
        scale: 0.98,
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={className}
    >
      {children}
    </motion.div>
  );
}
