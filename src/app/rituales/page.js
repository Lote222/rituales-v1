// src/app/rituales/page.js
import { products } from '@/lib/mockData';
import ProductCard from '@/components/ui/ProductCard';
import Image from 'next/image';

const AllRitualsPage = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <Image
          src="/backgroundHer.jpg" // Puedes cambiar esta imagen si quieres
          alt="Fondo de la página de rituales"
          fill
          style={{ objectFit: 'cover' }}
          quality={75}
          className="-z-10"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-10"></div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
            Todos Nuestros Rituales
          </h1>
          <p className="text-lg md:text-xl text-muted mt-4 max-w-3xl mx-auto">
            Encuentra la herramienta sagrada perfecta para tu intención. Cada paquete está consagrado y listo para transformar tu energía.
          </p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllRitualsPage;