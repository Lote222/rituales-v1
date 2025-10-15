'use client'; // <-- Convertimos este componente a Cliente para que pueda usar hooks

import Image from 'next/image';
// FIX: Eliminamos Link ya que no lo usaremos
// import Link from 'next/link'; 
import { forwardRef } from 'react';
// FIX: Importamos el hook para usar la configuración del sitio (el número de WhatsApp)
import { useSiteConfig } from '@/context/SiteConfigContext';

// --- Nuevo Componente de Botón ---
const WhatsAppButton = ({ productName, whatsappNumber }) => {
  // Mensaje pre-establecido que incluye el nombre del ritual
  const message = `Hola, estoy interesado en el ritual "${productName}".`;
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block w-full text-center bg-primary text-background font-semibold py-3 px-6 rounded-lg hover:bg-emerald-600 transition-all duration-300"
    >
      Pedir por WhatsApp
    </a>
  );
};


const ProductCard = forwardRef(({ product, className }, ref) => {
  // Obtenemos la configuración del sitio (incluyendo el whatsapp_number)
  const siteConfig = useSiteConfig();
  const whatsappNumber = siteConfig?.whatsapp_number || '';

  return (
    // FIX: Ya no es un componente Link, sino un div normal
    <div className={`group block ${className}`} ref={ref}>
      <div className="relative bg-background rounded-xl overflow-hidden border border-stone-200 shadow-lg shadow-primary/5 transition-all duration-300 h-full flex flex-col product-card-container">
        <div className="relative z-10 p-6 flex flex-col flex-grow">
          <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
            <Image
              src={product.imageSrc}
              alt={`Imagen de ${product.name}`}
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col flex-grow">
            <h3 className="text-xl font-serif font-semibold text-primary mb-2">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm h-auto flex-grow">
              {product.description}
            </p>
            {/* FIX: Se reemplaza "Ver Detalles" por el botón de WhatsApp */}
            <WhatsAppButton productName={product.name} whatsappNumber={whatsappNumber} />
          </div>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;