'use client';

import { useEffect } from 'react';
import Image from 'next/image';

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="#2E4034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="#2E4034" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TipModal = ({ tip, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!tip) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FDFBF5] rounded-2xl shadow-custom-light w-11/12 max-w-2xl mx-auto transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        style={{ animationFillMode: 'forwards' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#EAF0E5] transition-colors duration-200"
          aria-label="Cerrar modal"
        >
          <CloseIcon />
        </button>

        <div className="relative w-full h-64">
          <Image
            src={tip.imageSrc}
            alt={`Imagen para: ${tip.title}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl"
          />
        </div>

        <div className="p-8">
          <h3 className="font-serif text-3xl font-semibold text-primary mb-4">
            {tip.title}
          </h3>
          <div className="font-sans text-muted leading-[1.6]">
            {tip.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipModal;