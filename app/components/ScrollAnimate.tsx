'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export default function ScrollAnimate(props: Props) {
  const { children, ...others } = props;
  const ref = useRef(null);
  const elementInView = useInView(ref, { amount: 0.1, once: true });

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (elementInView) {
      mainControls.start('visible');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementInView]);

  return (
    <motion.section
      ref={ref}
      initial='hidden'
      variants={variants}
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      exit={'exit'}
      {...others}
    >
      {children}
    </motion.section>
  );
}
