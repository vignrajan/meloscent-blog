import { Variants } from 'framer-motion';

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

export const staggerContainer: Variants = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const cardEntry: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const cardHover: Variants = {
  rest: { y: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
  hover: { y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.12)', transition: { duration: 0.25, ease: 'easeOut' } },
};

export const scrollReveal: Variants = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const resultRowVariants: Variants = {
  initial: { opacity: 0, x: -12 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

export const searchFocusVariants: Variants = {
  rest: { scale: 1 },
  focus: { scale: 1.01, transition: { duration: 0.2 } },
};

export const headerSlideDown: Variants = {
  initial: { y: -60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const mobileMenuVariants: Variants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.25 } },
};

export const mobileLinkVariants: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};
