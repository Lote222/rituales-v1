'use client';

import { createContext, useContext } from 'react';

const SiteConfigContext = createContext(null);

export const SiteConfigProvider = ({ children, value }) => {
  return (
    <SiteConfigContext.Provider value={value}>
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = () => {
  const context = useContext(SiteConfigContext);
  if (context === null) {
    // Este es el error que ves cuando la configuración falla en el layout
    throw new Error('useSiteConfig debe ser usado dentro de un SiteConfigProvider con un valor válido.');
  }
  return context;
};