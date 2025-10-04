import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/rituales/${product.id}`}>
      <div className="group bg-background/50 rounded-lg overflow-hidden border border-secondary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-secondary/20 cursor-pointer">
        <div className="relative w-full h-72">
          <Image
            src={product.imageSrc}
            alt={`Imagen del ${product.name}`}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-serif font-semibold text-primary mb-2 truncate group-hover:text-yellow-300 transition-colors">
            {product.name}
          </h3>
          <p className="text-muted line-clamp-3 mb-4 h-[75px]">
            {product.description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-foreground">${product.price}</span>
            <span className="text-primary font-semibold group-hover:underline">
              Ver Detalles
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;