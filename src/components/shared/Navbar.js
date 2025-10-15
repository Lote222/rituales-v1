'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useSiteConfig } from '@/context/SiteConfigContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const siteConfig = useSiteConfig();

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/#rituales', label: 'Rituales' },
    { href: '/circulo-de-la-suerte', label: 'Círculo de la Suerte' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/tips', label: 'Tips' },
  ];

  const contactLink = `https://wa.me/${siteConfig?.whatsapp_number}?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20rituales.`;

  return (
    <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-200/50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 text-2xl font-serif font-bold text-primary transition-colors">
          <Image
            src="/HerbolariaIcon.png"
            alt="Herbolaria Sagrada Logo"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span>Herbolaria Sagrada</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors duration-300 font-sans">
              {link.label}
            </Link>
          ))}
          <a
            href={contactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-3 !px-6 text-sm"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 pb-8">
          <div className="flex flex-col items-center space-y-6 pt-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-xl text-foreground hover:text-primary transition-colors duration-300">
                {link.label}
              </Link>
            ))}
            <a
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-background font-bold py-3 px-6 rounded-full text-lg hover:bg-emerald-600 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;