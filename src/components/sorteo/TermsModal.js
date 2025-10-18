'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const TermsModal = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-background border border-secondary rounded-2xl shadow-xl w-full max-w-lg mx-auto transform animate-fade-in-up p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-primary"
          aria-label="Cerrar modal"
        >
          <X size={24} />
        </button>

        <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
          Resumen de Términos del Sorteo
        </h3>
        <div className="font-sans text-muted space-y-3 text-sm">
          <p>• Al comprar cualquier producto, participas automáticamente en el Sorteo de la Fortuna Botánica.</p>
          <p>• Recibirás un número único por cada compra para el próximo sorteo programado.</p>
          <p>• Los sorteos son promociones legales basadas en el azar.</p>
          <p>• Los resultados se publican en esta página. Si ganas, te contactaremos.</p>
        </div>
        <div className="mt-6 text-center">
          <Link href="/terms" onClick={onClose} className="font-semibold text-primary hover:text-emerald-500 transition-colors">
            Leer Términos Completos →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
