// src/context/SiteConfigContext.js
'use client';

import { createContext, useContext } from 'react';

// Se crea un contexto para almacenar la configuración del sitio.
const SiteConfigContext = createContext(null);

// El proveedor que envolverá nuestra aplicación.
export const SiteConfigProvider = ({ children, value }) => {
  return (
    <SiteConfigContext.Provider value={value}>
      {children}
    </SiteConfigContext.Provider>
  );
};

// Un "hook" personalizado para acceder fácilmente a la configuración desde cualquier componente cliente.
export const useSiteConfig = () => {
  const context = useContext(SiteConfigContext);
  if (context === null) {
    throw new Error('useSiteConfig debe ser usado dentro de un SiteConfigProvider');
  }
  return context;
};