import Link from 'next/link';
import { getSorteoFortunaData } from '@/lib/supabaseClient';
import SorteoDisplay from '@/components/sorteo/SorteoDisplay';
import CountdownTimer from '@/components/sorteo/CountdownTimer';

const HistoryList = ({ history }) => {
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-CO', options).format(date);
  };
  
  return (
    <div className="bg-background/50 border border-primary/20 rounded-lg p-6 md:p-8 mt-16">
      <h3 className="text-3xl font-serif font-bold text-center text-primary mb-8">
        Resultados Anteriores
      </h3>
      <div className="max-w-3xl mx-auto">
        {history && history.length > 0 ? (
          <ul className="space-y-6">
            {history.map((sorteo) => (
              <li key={sorteo.id} className="bg-background/30 p-4 rounded-lg border-l-4 border-secondary">
                <p className="text-sm text-muted capitalize">{formatDate(sorteo.fecha_sorteo)}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 gap-4">
                    <p className="font-semibold text-foreground text-lg">{sorteo.monto_premio}</p>
                    <div className="flex items-center gap-2">
                        {sorteo.numeros_ganadores?.map((num, i) => (
                            <span key={i} className="flex items-center justify-center w-8 h-8 text-sm rounded-full bg-blue-600 text-white font-bold">{num}</span>
                        ))}
                        {sorteo.numero_suerte && (
                             <span className="flex items-center justify-center w-8 h-8 text-sm rounded-full bg-yellow-400 text-gray-900 font-bold">{sorteo.numero_suerte}</span>
                        )}
                    </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-muted">Aún no hay historial de sorteos.</p>
        )}
      </div>
    </div>
  );
};

const SorteoPage = async () => {
  const { latestPastDraw, nextFutureDraw, history } = await getSorteoFortunaData(process.env.WEBSITE_SLUG);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="relative py-20 md:py-32 text-center bg-cover bg-center" style={{backgroundImage: "url('/backgroundHer.jpg')"}}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary">
            Sorteo de la Fortuna Botánica
          </h1>
          <p className="text-lg md:text-xl text-muted mt-4 max-w-3xl mx-auto">
            Por la compra de nuestros productos o servicios participa en el sorteo. ¡Anímate!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          {nextFutureDraw && (
            <div className="mb-20 text-center">
               <h2 className="text-4xl font-serif font-bold text-primary mb-4">
                Próximo Gran Premio
              </h2>
              <p className="text-2xl font-serif text-yellow-400 mb-8">
                {nextFutureDraw.monto_premio || 'Un Premio Increíble'}
              </p>
              <div className="max-w-2xl mx-auto">
                <CountdownTimer targetDate={nextFutureDraw.fecha_sorteo} />
              </div>
            </div>
          )}

          {latestPastDraw ? (
            <SorteoDisplay sorteo={latestPastDraw} />
          ) : (
            !nextFutureDraw && (
                <div className="text-center text-muted py-10 bg-background/50 border border-primary/20 rounded-lg">
                    <h2 className="text-3xl font-serif text-primary">Próximamente</h2>
                    <p>El resultado de nuestro próximo sorteo será revelado aquí.</p>
                </div>
            )
          )}

          <HistoryList history={history} />

          <div className="text-center mt-20">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              ¿Quieres ser el próximo?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              Cada ritual que adquieres te inscribe automáticamente en nuestro Sorteo de la Fortuna.
            </p>
            <Link href="/rituales">
              <span className="btn-primary">
                Compra un Ritual y Participa
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SorteoPage;