'use client';

import { useInView } from '@/hooks/useInView';
import ProductCard from './ProductCard';

const AnimatedProductCard = ({ product, index }) => {
  const [ref, isInView] = useInView({
    triggerOnce: true, // Animation triggers only once
  });

  const animationClass = isInView ? 'animate-fade-in-up' : 'opacity-0';
  const animationDelay = { animationDelay: `${index * 150}ms` };

  return (
    <div ref={ref} style={animationDelay} className={animationClass}>
      <ProductCard product={product} />
    </div>
  );
};

export default AnimatedProductCard;