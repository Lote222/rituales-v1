// src/components/sorteo/SorteoDisplay.js
"use client";

// DESIGN: Se ha rediseñado por completo el componente de las balotas para que sea temático.
const NumberBall = ({ number, isLucky, delay }) => (
  <div
    className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full font-bold text-2xl md:text-3xl shadow-lg animate-fade-in-up
      ${isLucky 
        // Color dorado para la balota de la suerte, con texto oscuro para contraste.
        ? 'bg-amber-400 text-primary border-2 border-amber-200 shadow-amber-500/30' 
        // Color Verde Ancestral (primary) para las balotas normales, con texto claro.
        : 'bg-primary text-background border-2 border-emerald-700 shadow-primary/30'
      }`}
    style={{ animationDelay: `${delay}ms` }}
  >
    {number}
  </div>
);

const SorteoDisplay = ({ sorteo }) => {
  const formatDate = (dateString) => {
    // Se mantiene la lógica de formato de fecha.
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const date = new Date(dateString);
    const formatted = new Intl.DateTimeFormat('es-CO', options).format(date);
    return `Resultados del sorteo del ${formatted}`;
  };

  return (
    // DESIGN: El contenedor principal ahora usa un fondo 'secondary' y un borde sutil para integrarse mejor.
    <div className="w-full max-w-3xl mx-auto bg-secondary/40 rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-primary/10">
      
      {/* DESIGN: El título del premio usa el color 'primary' para mantener la identidad de marca. */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-widest uppercase text-primary/80">
        {sorteo.titulo_premio}
      </h2>

      {/* DESIGN: El monto del premio es el protagonista. Usamos un color dorado más intenso y un tamaño mayor. */}
      <p className="text-5xl md:text-7xl font-bold text-amber-500 my-4 drop-shadow-sm">
        {sorteo.monto_premio}
      </p>
      
      {/* DESIGN: El subtítulo usa 'text-muted' pero con un ligero toque del color primario. */}
      <p className="text-primary/60">{sorteo.subtitulo_sorteo || formatDate(sorteo.fecha_sorteo)}</p>

      {/* Las balotas ahora usarán el nuevo diseño. */}
      <div className="flex flex-wrap justify-center items-center gap-4 my-10">
        {sorteo.numeros_ganadores?.map((num, index) => (
          <NumberBall key={`${num}-${index}`} number={num} delay={100 * (index + 1)} />
        ))}
        {sorteo.numero_suerte && <NumberBall number={sorteo.numero_suerte} isLucky delay={600} />}
      </div>
      
      {/* DESIGN: El número del sorteo ahora tiene un estilo más elegante y menos prominente. */}
      {sorteo.numero_sorteo && (
        <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-6 py-2">
          <p className="text-lg font-semibold text-primary/80">{sorteo.numero_sorteo}</p>
        </div>
      )}
    </div>
  );
};

export default SorteoDisplay;