import { products } from '@/lib/mockData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

// This function generates the static paths for each ritual
export async function generateStaticParams() {
  return products.map((product) => ({
    ritualId: product.id.toString(),
  }));
}

// This function gets the data for a specific ritual
const getProductData = (id) => {
  const product = products.find((p) => p.id.toString() === id);
  return product;
};

const WhatsAppButton = ({ productName, whatsappNumber }) => {
  const message = `Hola, estoy interesado en el "${productName}". Quisiera más información para comprarlo.`;
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center bg-primary text-background font-bold text-xl py-4 px-8 rounded-full hover:bg-emerald-600 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
    >
      Comprar por WhatsApp
    </a>
  );
};

const ProductDetailPage = ({ params }) => {
  const { ritualId } = params;
  const product = getProductData(ritualId);

  // In a real app, the WhatsApp number would come from the layout fetch
  const mockWhatsappNumber = "+1234567890";

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Image Gallery */}
        <div className="sticky top-28">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-secondary/20 shadow-lg">
            <Image
              src={product.imageSrc}
              alt={`Imagen del ${product.name}`}
              layout="fill"
              objectFit="cover"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          {/* Placeholder for multiple images */}
          <div className="flex justify-center space-x-4 mt-4">
            <div className="w-20 h-20 border-2 border-primary rounded-md bg-cover bg-center" style={{backgroundImage: `url(${product.imageSrc})`}}></div>
            <div className="w-20 h-20 border-2 border-secondary/20 rounded-md bg-gray-700"></div>
            <div className="w-20 h-20 border-2 border-secondary/20 rounded-md bg-gray-700"></div>
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="bg-background/50 border border-secondary/20 rounded-lg p-6 mb-6">
            <h3 className="font-serif text-2xl text-primary font-semibold mb-4">
              Ingredientes Sagrados
            </h3>
            <ul className="space-y-3">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center text-muted">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="font-serif text-2xl text-primary font-semibold mb-4">
              Testimonios de Clientes
            </h3>
            <div className="bg-background/50 border border-secondary/20 rounded-lg p-6 text-center italic text-muted">
              <p>&quot;Este ritual cambió mi vida. Sentí una paz y una claridad que no había experimentado antes.&quot;</p>
              <p className="font-semibold text-foreground mt-2">- Cliente Satisfecho</p>
            </div>
          </div>

          <div className="sticky bottom-6">
             <WhatsAppButton productName={product.name} whatsappNumber={mockWhatsappNumber} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;