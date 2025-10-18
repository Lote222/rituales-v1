import React from 'react';

// Metadata para SEO
export const metadata = {
  title: "Términos y Condiciones - Sorteo de la Fortuna Botánica | Herbolaria Sagrada",
  description: "Consulta los términos y condiciones oficiales para participar en el Sorteo de la Fortuna Botánica de Herbolaria Sagrada.",
};

const TermsPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Encabezado */}
      <section className="relative py-20 md:py-32 text-center bg-cover bg-center" style={{backgroundImage: "url('/backgroundHer.jpg')"}}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Términos y Condiciones
          </h1>
          <p className="text-lg md:text-xl text-muted mt-4 max-w-3xl mx-auto">
            Reglas oficiales del Sorteo de la Fortuna Botánica de Herbolaria Sagrada.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Usamos clases de 'prose' para estilizar el texto largo */}
          <div className="prose prose-lg mx-auto text-black space-y-6">
            <h2 className="text-2xl font-serif text-primary">Introducción</h2>
            <p>
              Herbolaria Sagrada (&quot;La Compañía&quot;), con operaciones en Estados Unidos y presencia en América Latina, organiza periódicamente sorteos y promociones (en adelante, &quot;Sorteo de la Fortuna Botánica&quot;) como una forma de agradecimiento y recompensa a la lealtad de sus apreciados clientes.
            </p>
            
            <h2 className="text-2xl font-serif text-primary">Elegibilidad y Participación</h2>
            <p>
              La participación en el Sorteo de la Fortuna Botánica está abierta a clientes mayores de edad según la legislación de su país de residencia. Cada compra realizada de cualquier producto o servicio ofrecido por Herbolaria Sagrada a través de sus canales oficiales otorga automáticamente al cliente un (1) número único de participación para el próximo sorteo programado. No es necesaria ninguna acción adicional para inscribirse. La compra implica la aceptación automática de estos términos y condiciones.
            </p>

            <h2 className="text-2xl font-serif text-black">Naturaleza del Sorteo y Legalidad</h2>
            <p>
              El Sorteo de la Fortuna Botánica es una promoción comercial basada en el azar. Se ejecuta con estricto apego a las normativas de transparencia comercial aplicables en las jurisdicciones donde opera La Compañía, incluyendo Estados Unidos y los países relevantes de América Latina.
            </p>
            <p>
              La Compañía se compromete a seguir las directrices generales de entidades reguladoras  y los Departamentos Estatales de Control de Promociones (EE.UU.) en lo que respecta a la equidad, legalidad y protección al consumidor en actividades promocionales.
            </p>

            <h2 className="text-2xl font-serif text-primary">Selección de Ganadores y Premios</h2>
            <p>
              Los ganadores serán seleccionados de forma aleatoria en la fecha y hora indicadas para cada sorteo. Los resultados se publicarán en la sección &quot;Círculo de la Suerte&quot; de nuestro sitio web oficial. Los detalles específicos de los premios para cada sorteo se anunciarán previamente en el sitio. Los premios no son transferibles ni canjeables por efectivo.
            </p>

            <h2 className="text-2xl font-serif text-primary">Aceptación de Términos</h2>
            <p>
              La participación en el Sorteo constituye la aceptación total e incondicional de estos Términos y Condiciones. Cualquier incumplimiento de estas reglas puede resultar en la descalificación.
            </p>

            <h2 className="text-2xl font-serif text-primary">Consultas</h2>
            <p>
              Para cualquier duda o consulta sobre estos términos, por favor contáctanos a través de los canales indicados en nuestro sitio web.
            </p>
            <p className="text-sm italic">Última actualización: 18 de Octubre, 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
