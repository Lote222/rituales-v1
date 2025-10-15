'use client';

import Link from 'next/link';
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import { useSiteConfig } from '@/context/SiteConfigContext';

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted hover:text-primary transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  const siteConfig = useSiteConfig();
  
  const email = siteConfig?.email_contact || '';
  const phone = siteConfig?.phone_contact || '';

  return (
    <footer className="bg-secondary border-t border-stone-200 mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif font-bold text-primary mb-3">Herbolaria Sagrada</h3>
            <p className="text-muted-foreground max-w-sm mx-auto md:mx-0">
              Conectando con la sabiduría ancestral para manifestar un futuro radiante.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-serif text-lg font-semibold text-primary mb-4">Contacto Directo</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: <a href={`mailto:${email}`} className="hover:text-primary transition-colors">{email}</a></p>
              <p>Teléfono: <span className="hover:text-primary transition-colors">{phone}</span></p>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-serif text-lg font-semibold text-primary mb-4">Síguenos</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <SocialIcon href="#">
                <Instagram size={22} strokeWidth={1.5} />
              </SocialIcon>
              <SocialIcon href="#">
                <Facebook size={22} strokeWidth={1.5} />
              </SocialIcon>
              <SocialIcon href="#">
                <Youtube size={22} strokeWidth={1.5} />
              </SocialIcon>
              <SocialIcon href="#">
                <Twitter size={22} strokeWidth={1.5} />
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/10 mt-12 pt-8 text-center">
          <div className="flex justify-center items-center space-x-6 mb-8">
            <Link href="/nosotros" className="text-muted-foreground/80 hover:text-primary transition-colors duration-300">Nosotros</Link>
            <Link href="/rituales" className="text-muted-foreground/80 hover:text-primary transition-colors duration-300">Rituales</Link>
            <Link href="/tips" className="text-muted-foreground/80 hover:text-primary transition-colors duration-300">Tips</Link>
            <Link href="/faq" className="text-muted-foreground/80 hover:text-primary transition-colors duration-300">Preguntas Frecuentes</Link>
          </div>
          <p className="text-muted-foreground/80">&copy; {new Date().getFullYear()} Herbolaria Sagrada. Todos los derechos reservados.</p>
          <p className="text-sm mt-2 text-muted-foreground/60">Diseñado con intención y magia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;