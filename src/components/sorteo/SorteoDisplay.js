"use client";

const NumberBall = ({ number, isLucky, delay }) => (
  <div
    className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full font-bold text-2xl md:text-3xl shadow-lg animate-fade-in-up ${isLucky ? 'bg-yellow-400 text-gray-900 border-2 border-yellow-200' : 'bg-blue-600 text-white border-2 border-blue-400'}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    {number}
  </div>
);

const SorteoDisplay = ({ sorteo }) => {
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const date = new Date(dateString);
    const formatted = new Intl.DateTimeFormat('es-CO', options).format(date);
    return `Resultados del sorteo del ${formatted}`;
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-800/50 rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-primary/20">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-widest uppercase text-gray-300">
        {sorteo.titulo_premio}
      </h2>
      <p className="text-5xl md:text-7xl font-bold text-yellow-400 my-4">
        {sorteo.monto_premio}
      </p>
      <p className="text-gray-400">{sorteo.subtitulo_sorteo || formatDate(sorteo.fecha_sorteo)}</p>

      <div className="flex flex-wrap justify-center items-center gap-4 my-10">
        {sorteo.numeros_ganadores?.map((num, index) => (
          <NumberBall key={`${num}-${index}`} number={num} delay={100 * (index + 1)} />
        ))}
        {sorteo.numero_suerte && <NumberBall number={sorteo.numero_suerte} isLucky delay={600} />}
      </div>
      
      {sorteo.numero_sorteo && (
        <div className="inline-block bg-gray-700/50 rounded-full px-6 py-2">
          <p className="text-lg font-semibold text-gray-300">{sorteo.numero_sorteo}</p>
        </div>
      )}
    </div>
  );
};

export default SorteoDisplay;