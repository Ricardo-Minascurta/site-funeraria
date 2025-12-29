import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, Clock, MessageCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contactos',
  description: 'Entre em contacto com a Memória Eternus. Disponíveis 24 horas por dia, 7 dias por semana. Telefone: (+351) 928 352 824. Email: geralmemoriaeternus@gmail.com',
  alternates: {
    canonical: '/contactos',
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    description: 'Disponível 24 horas',
    content: [
      { label: '(+351) 928 352 824', href: 'tel:+351928352824' },
      { label: '(+351) 928 349 178', href: 'tel:+351928349178' },
    ],
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Resposta rápida',
    content: [
      { label: '(+351) 928 352 824', href: 'https://wa.me/351928352824' },
    ],
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Para questões gerais',
    content: [
      { label: 'geralmemoriaeternus@gmail.com', href: 'mailto:geralmemoriaeternus@gmail.com' },
    ],
  },
  {
    icon: MapPin,
    title: 'Morada',
    description: 'Venha visitar-nos',
    content: [
      { label: 'Lisboa, Portugal', href: null },
    ],
  },
  {
    icon: Clock,
    title: 'Horário',
    description: 'Sempre disponíveis',
    content: [
      { label: '24 horas / 7 dias / 365 dias', href: null },
    ],
  },
]

export default function Contactos() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brown-dark pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%23C4A052' fill-opacity='1'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Label */}
          <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.3em] text-gold-400 uppercase mb-4">
            Contactos
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white leading-[1.1] mb-6">
            Fale <span className="text-gold-400">Connosco</span>
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-400" />
            <div className="w-2 h-2 bg-gold-400 rotate-45" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            Estamos disponíveis 24 horas por dia para o ajudar.
            Não hesite em contactar-nos a qualquer momento.
          </p>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z"
              fill="#F5F0E6"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <div className="mb-8">
                <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] text-gold-600 uppercase mb-3">
                  Informações de Contacto
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brown-dark">
                  Como nos <span className="text-gold-600">encontrar</span>
                </h2>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gold-400/10"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-gold-600" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-serif font-semibold text-brown-dark mb-1">
                            {info.title}
                          </h3>
                          <p className="text-sm text-brown-dark/50 mb-2">
                            {info.description}
                          </p>
                          <div className="space-y-1">
                            {info.content.map((item, idx) => (
                              item.href ? (
                                <a
                                  key={idx}
                                  href={item.href}
                                  target={item.href.startsWith('http') ? '_blank' : undefined}
                                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  className="block text-brown-dark/80 hover:text-gold-600 transition-colors duration-300 font-medium"
                                >
                                  {item.label}
                                </a>
                              ) : (
                                <span key={idx} className="block text-brown-dark/80 font-medium">
                                  {item.label}
                                </span>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column - Map & Social */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div>
                <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] text-gold-600 uppercase mb-3">
                  Localização
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brown-dark mb-6">
                  Onde <span className="text-gold-600">estamos</span>
                </h2>

                {/* Map Container */}
                <div className="relative aspect-[4/3] bg-brown-dark/5 rounded-2xl overflow-hidden border border-gold-400/10 shadow-lg">
                  {/* Placeholder pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gold-400/40 mx-auto mb-3" />
                      <p className="text-brown-dark/40 text-sm">
                        Mapa em breve
                      </p>
                    </div>
                  </div>

                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 via-transparent to-brown-dark/5" />
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gold-400/10">
                  <h3 className="text-lg font-serif font-semibold text-brown-dark mb-4">
                    Redes Sociais
                  </h3>

                  <p className="text-sm text-brown-dark/60 mb-6">
                    Siga-nos nas redes sociais para novidades e informações.
                  </p>

                  <div className="space-y-3">
                    {/* Facebook */}
                    <a
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-lg bg-cream/50 hover:bg-cream transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <span className="text-brown-dark group-hover:text-gold-600 transition-colors font-medium">
                        Facebook
                      </span>
                    </a>

                    {/* Instagram */}
                    <a
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-lg bg-cream/50 hover:bg-cream transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </div>
                      <span className="text-brown-dark group-hover:text-gold-600 transition-colors font-medium">
                        Instagram
                      </span>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-brown-dark py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.3em] text-gold-400 uppercase mb-4">
            Precisa de Ajuda Urgente?
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-white leading-tight mb-6">
            Estamos <span className="text-gold-400">sempre disponíveis</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Em caso de necessidade urgente, ligue diretamente. A nossa equipa está
            preparada para prestar todo o apoio necessário, a qualquer hora.
          </p>

          <div className="flex items-center justify-center">
            <a
              href="https://wa.me/351928352824"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px] justify-center"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Falar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
