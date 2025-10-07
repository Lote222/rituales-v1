import Accordion from '@/components/ui/Accordion';

const allFaqItems = [
  // General Questions
  {
    question: '¿Qué es Herbolaria Sagrada?',
    answer: 'Herbolaria Sagrada es un espacio dedicado a reconectar con la sabiduría ancestral a través de productos 100% naturales. Ofrecemos rituales, sahumerios, y herramientas espirituales para purificar, manifestar y encontrar el equilibrio.'
  },
  {
    question: '¿Los productos son 100% naturales?',
    answer: 'Absolutamente. Todos nuestros productos están elaborados con ingredientes de origen vegetal, resinas puras y aceites esenciales de la más alta calidad, sin aditivos sintéticos, para asegurar una experiencia auténtica y respetuosa con la naturaleza.'
  },
  {
    question: '¿Son sus productos aptos para veganos?',
    answer: 'La gran mayoría de nuestros productos son veganos. No utilizamos ingredientes de origen animal. Si tienes alguna duda sobre un producto específico, no dudes en consultarnos.'
  },
  // Shipping and Orders
  {
    question: '¿Cuánto tiempo tarda en llegar mi pedido?',
    answer: 'Los pedidos se procesan en 1-2 días hábiles. El tiempo de envío estándar es de 3-5 días hábiles para la península. Recibirás un correo de confirmación con tu número de seguimiento tan pronto como tu pedido sea enviado.'
  },
  {
    question: '¿Hacen envíos internacionales?',
    answer: 'Actualmente, sólo realizamos envíos dentro de España (Península y Baleares). Estamos trabajando para poder ofrecer envíos internacionales en el futuro.'
  },
  {
    question: '¿Puedo modificar o cancelar mi pedido?',
    answer: 'Si necesitas modificar o cancelar tu pedido, por favor contáctanos lo antes posible. Si el pedido aún no ha sido procesado, haremos todo lo posible por ayudarte.'
  },
  // Returns and Satisfaction
  {
    question: '¿Cuál es su política de devoluciones?',
    answer: 'Tu satisfacción es nuestra prioridad. Si por alguna razón no estás completamente satisfecha con tu compra, por favor, contacta con nuestro equipo de soporte dentro de los 14 días posteriores a la recepción de tu pedido para que podamos ayudarte a encontrar una solución.'
  },
  // Sorteo
  {
    question: '¿Cómo funciona el sorteo semanal del "Círculo de la Suerte"?',
    answer: 'Es muy sencillo. Cada compra de un ritual o producto en nuestra tienda te otorga automáticamente una participación en el sorteo de esa semana. No necesitas hacer nada más. ¡Mucha suerte!'
  },
  {
    question: '¿Cómo se anuncian los ganadores?',
    answer: 'La ganadora o ganador es anunciado cada lunes en nuestra página "Círculo de la Suerte" y en nuestras redes sociales. También nos pondremos en contacto directo por correo electrónico.'
  },
];

const FaqPage = () => {
  return (
    <>
      <section className="relative py-20 md:py-32 text-center bg-cover bg-center" style={{backgroundImage: "url('/mystical-background.jpg')"}}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">Preguntas Frecuentes</h1>
          <p className="text-lg md:text-xl text-muted mt-4 max-w-3xl mx-auto">
            Todo lo que necesitas saber sobre nuestros tesoros sagrados y cómo podemos ayudarte en tu camino espiritual.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <Accordion items={allFaqItems} />
        </div>
      </section>
    </>
  );
};

export default FaqPage;