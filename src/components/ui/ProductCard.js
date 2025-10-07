import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';

const ProductCard = forwardRef(({ product, className }, ref) => {
  return (
    <Link href={`/rituales/${product.id}`} className={`group block ${className}`} ref={ref}>
      <div className="relative bg-background rounded-xl overflow-hidden border border-stone-200 shadow-lg shadow-primary/5 transition-all duration-300 h-full product-card-container">
        <div className="relative z-10 p-6">
          <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
            <Image
              src={product.imageSrc}
              alt={`Imagen de ${product.name}`}
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h3 className="text-xl font-serif font-semibold text-primary mb-2 truncate">
              {product.name}
            </h3>
            <p className="text-muted-foreground line-clamp-3 mb-4 text-sm h-[60px]">
              {product.description}
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-primary font-semibold group-hover:underline">
                Ver Detalles
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;