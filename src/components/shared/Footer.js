import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

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

const Footer = ({ email, phone }) => {
  return (
    <footer className="bg-background/50 border-t border-secondary/20 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-serif font-bold text-primary mb-2">Herbolaria Sagrada</h3>
            <p className="text-muted max-w-sm">
              Conectando con la sabiduría ancestral para manifestar un futuro radiante.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Contacto Directo</h4>
            <div className="space-y-2 text-muted">
              <p>Email: <a href={`mailto:${email}`} className="hover:text-primary transition-colors">{email}</a></p>
              <p>Teléfono: <span className="hover:text-primary transition-colors">{phone}</span></p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Síguenos</h4>
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
        <div className="border-t border-secondary/10 mt-8 pt-6 text-center text-muted/60">
          <p>&copy; {new Date().getFullYear()} Herbolaria Sagrada. Todos los derechos reservados.</p>
          <p className="text-sm mt-1">Diseñado con intención y magia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;