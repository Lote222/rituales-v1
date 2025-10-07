import Accordion from '@/components/ui/Accordion';

const faqItems = [
  {
    question: '¿Los productos son 100% naturales?',
    answer: 'Absolutamente. Todos nuestros productos están elaborados con ingredientes de origen vegetal, resinas puras y aceites esenciales de la más alta calidad, sin aditivos sintéticos.'
  },
  {
    question: '¿Cómo funciona el sorteo semanal del "Círculo de la Suerte"?',
    answer: 'Cada compra de un ritual o producto en nuestra tienda te otorga automáticamente una participación en el sorteo de esa semana. La ganadora es anunciada cada lunes en nuestra página y redes sociales.'
  },
  {
    question: '¿Cuánto tiempo tarda en llegar mi pedido?',
    answer: 'Los pedidos se procesan en 1-2 días hábiles. El tiempo de envío estándar es de 3-5 días hábiles para la península. Recibirás un correo de confirmación con tu número de seguimiento.'
  },
  {
    question: '¿Puedo devolver un producto si no estoy satisfecha?',
    answer: 'Tu satisfacción es nuestra prioridad. Si por alguna razón no estás completamente satisfecha con tu compra, por favor, contacta con nuestro equipo de soporte dentro de los 14 días posteriores a la recepción de tu pedido para encontrar una solución.'
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Preguntas Frecuentes
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-12">
          Hemos reunido las dudas más comunes para que puedas realizar tu compra con total confianza y claridad.
        </p>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
};

export default FaqSection;