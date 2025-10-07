'use client';
import { products } from '@/lib/mockData';
import AnimatedProductCard from '@/components/ui/AnimatedProductCard';

const ProductsSection = () => {
  return (
    <section id="rituales" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Nuestros Rituales Sagrados
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Cada kit es una puerta a la transformación, preparado con ingredientes consagrados y una intención pura.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <AnimatedProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;