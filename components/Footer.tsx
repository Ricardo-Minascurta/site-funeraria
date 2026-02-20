import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ExternalLink } from 'lucide-react'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/sobre-nos' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Florista', href: '/florista' },
  { name: 'Contactos', href: '/contactos' },
]

const legalLinks = [
  { name: 'Política de Privacidade', href: '/politica-privacidade', external: false },
  { name: 'Livro de Reclamações', href: 'https://www.livroreclamacoes.pt/Inicio/', external: true },
  { name: 'Centro de Arbitragem Lisboa', href: 'http://www.centroarbitragemlisboa.pt/', external: true },
]

// WhatsApp SVG icon since lucide-react doesn't have it
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brown-dark">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: Logo + About */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.svg"
                alt=""
                width={50}
                height={50}
                className="h-12 w-auto brightness-0 invert opacity-90"
              />
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.3em] text-white/60 font-sans uppercase">
                  Memória
                </span>
                <span className="text-xl font-serif font-semibold text-white tracking-wide -mt-1">
                  ETERNUS
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-white/70 text-sm italic leading-relaxed mb-6">
              <span className="text-gold-400 font-medium not-italic">Memórias</span> que jamais serão esquecidas,{' '}
              <span className="text-gold-400 font-medium not-italic">Eternus</span> saudades de quem já partiu.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-gold-400 hover:border-gold-400 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/memoriaeternus?igsh=ZzdjN3I4bHh2dDZn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-gold-400 hover:border-gold-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/351928352824?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20os%20vossos%20serviços"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-gold-400 hover:border-gold-400 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-gold-400 font-serif text-lg mb-5">Navegação</h3>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-gold-400 transition-colors duration-300 text-sm w-fit"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h3 className="text-gold-400 font-serif text-lg mb-5">Contactos</h3>
            <div className="flex flex-col gap-4">
              {/* Phones */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+351928352824"
                    className="text-white/70 hover:text-gold-400 transition-colors duration-300 text-sm"
                  >
                    (+351) 928 352 824
                  </a>
                  <a
                    href="tel:+351928349178"
                    className="text-white/70 hover:text-gold-400 transition-colors duration-300 text-sm"
                  >
                    (+351) 928 349 178
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href="mailto:geralmemoriaeternus@gmail.com"
                  className="text-white/70 hover:text-gold-400 transition-colors duration-300 text-sm break-all"
                >
                  geralmemoriaeternus@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Rua [A Definir]<br />
                  Lisboa, Portugal
                </span>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  24h / 7 dias / 365 dias
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-gold-400 font-serif text-lg mb-5">Informação Legal</h3>
            <div className="flex flex-col gap-3">
              {legalLinks.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-gold-400 transition-colors duration-300 text-sm flex items-center gap-1.5 w-fit"
                  >
                    {item.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/70 hover:text-gold-400 transition-colors duration-300 text-sm w-fit"
                  >
                    {item.name}
                  </Link>
                )
              ))}

              {/* Razão Social & NIF */}
              <div className="mt-2 pt-3 border-t border-white/10 space-y-1">
                <span className="text-white/50 text-xs block">NIF: 519142608</span>
                <span className="text-white/40 text-[10px] block leading-tight">
                  MEMÓRIA ETERNUS - SERVIÇOS DE ASSISTÊNCIA FUNERÁRIA, UNIPESSOAL LDA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/50 text-xs text-center lg:text-left">
              © {currentYear} Memória Eternus. Todos os direitos reservados.
            </p>

            {/* Consumer Rights Notice */}
            <p className="text-white/40 text-xs text-center lg:text-right max-w-xl">
              Em caso de litígio o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de consumo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
