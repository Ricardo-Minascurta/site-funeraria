import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight, Clock, Flower2, Phone, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Funeral com Sepultura',
  description: 'Serviço de funeral com sepultura em cemitério. Inclui recolha, preparação, caixão, documentação e coordenação completa. Disponível 24h em Lisboa.',
  alternates: {
    canonical: '/servicos/funeral-sepultura',
  },
}

const includedServices = [
  'Recolha e transporte do corpo',
  'Tratamento e preparação do corpo',
  'Urna funerária de qualidade',
  'Tratamento de toda a documentação legal',
  'Coordenação com o cemitério',
  'Organização da cerimónia fúnebre',
  'Coroa de flores natural',
  'Acompanhamento dedicado à família',
]

const otherServices = [
  {
    name: 'Funeral Jazigo',
    description: 'Inumação em jazigo particular ou municipal',
    href: '/servicos/funeral-jazigo',
  },
  {
    name: 'Funeral Cremação',
    description: 'Serviço de cremação completo',
    href: '/servicos/funeral-cremacao',
  },
  {
    name: 'Florista',
    description: 'Coroas, ramos e arranjos florais',
    href: '/florista',
  },
]

export default function FuneralSepultura() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[55vh] lg:min-h-[65vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/servicos/sepultura.jpeg"
            alt="Funeral Sepultura - Memória Eternus"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Lighter overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark via-brown-dark/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-40">
          {/* Service label */}
          <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.3em] text-gold-400 uppercase mb-4">
            Serviços
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white leading-[1.1] mb-6">
            Funeral <span className="text-gold-400">Sepultura</span>
          </h1>

          {/* Subtitle with line accent */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-gold-400" />
            <p className="text-lg sm:text-xl lg:text-2xl text-white/70 font-light max-w-xl">
              Inumação em sepultura temporária ou perpétua
            </p>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* Main Content */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div>
                <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] text-gold-600 uppercase mb-4">
                  Sobre Este Serviço
                </span>

                <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brown-dark leading-tight mb-6">
                  Serviço Completo de{' '}
                  <span className="text-gold-600">Inumação</span>
                </h2>

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-[2px] bg-gold-400" />
                  <div className="w-2 h-2 bg-gold-400 rotate-45" />
                  <div className="w-12 h-[2px] bg-gold-400" />
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-brown-dark/80 leading-relaxed mb-6">
                    O serviço de funeral com sepultura é uma das formas mais tradicionais
                    de despedida, permitindo que a família tenha um local físico para
                    homenagear e recordar o seu ente querido. Na Memória Eternus,
                    tratamos de todos os detalhes com o máximo respeito e profissionalismo.
                  </p>
                  <p className="text-brown-dark/80 leading-relaxed">
                    Acompanhamos a família em todo o processo, desde a recolha do corpo
                    até à cerimónia final, garantindo que cada momento é conduzido
                    com dignidade e serenidade.
                  </p>
                </div>

                {/* Download Catálogo */}
                <a
                  href="/catalogos/Memória Eternus Urnas de Sepultura.pdf"
                  download
                  className="group inline-flex items-center gap-3 bg-brown-dark hover:bg-gold-600 text-white px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg mt-8"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  <span>Ver Catálogo de Urnas de Sepultura</span>
                </a>
              </div>

              {/* Types Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Sepultura Temporária */}
                <div className="group bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gold-400/10">
                  <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center mb-5">
                    <Clock className="w-6 h-6 text-gold-600" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-brown-dark mb-3">
                    Sepultura Temporária
                  </h3>

                  <p className="text-brown-dark/70 text-sm leading-relaxed">
                    Concessão por período determinado (geralmente 3 a 5 anos),
                    renovável ou com posterior trasladação para jazigo ou ossário.
                    Opção económica que respeita as tradições.
                  </p>
                </div>

                {/* Sepultura Perpétua */}
                <div className="group bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gold-400/10">
                  <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center mb-5">
                    <svg
                      className="w-6 h-6 text-gold-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-brown-dark mb-3">
                    Sepultura Perpétua
                  </h3>

                  <p className="text-brown-dark/70 text-sm leading-relaxed">
                    Concessão permanente que garante um local de repouso definitivo.
                    Ideal para famílias que desejam manter a memória do ente querido
                    num espaço próprio e duradouro.
                  </p>
                </div>
              </div>

              {/* What's Included Card */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Top decorative bar */}
                <div className="h-1.5 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400" />

                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-brown-dark flex items-center justify-center">
                      <Check className="w-7 h-7 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-semibold text-brown-dark">
                        O Que Está Incluído
                      </h3>
                      <p className="text-brown-dark/60 text-sm">
                        Serviço completo sem preocupações
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {includedServices.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg bg-cream/50 hover:bg-cream transition-colors duration-300"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3.5 h-3.5 text-gold-600" />
                        </div>
                        <span className="text-brown-dark/80 text-sm leading-relaxed">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Note */}
                  <div className="mt-8 pt-6 border-t border-brown-dark/10">
                    <p className="text-sm text-brown-dark/60 italic">
                      * Serviços adicionais podem ser incluídos mediante consulta.
                      Cada funeral é personalizado de acordo com os desejos da família.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* CTA Card */}
              <div className="sticky top-32">
                <div className="bg-brown-dark rounded-2xl p-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-gold-400" />
                      </div>
                      <span className="text-gold-400 text-sm font-medium tracking-wide uppercase">
                        24h Disponível
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-semibold text-white mb-3">
                      Precisa de Ajuda?
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      Estamos aqui para o apoiar. Contacte-nos a qualquer hora
                      para esclarecer dúvidas ou iniciar o processo.
                    </p>

                    <a
                      href="https://wa.me/351928352824"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 w-full bg-gold-400 hover:bg-gold-600 text-white py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Falar por WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Other Services Card */}
                <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gold-400/10">
                  <h4 className="text-lg font-serif font-semibold text-brown-dark mb-5 flex items-center gap-2">
                    <Flower2 className="w-5 h-5 text-gold-600" />
                    Outros Serviços
                  </h4>

                  <div className="space-y-3">
                    {otherServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="group flex items-center justify-between p-4 rounded-xl bg-cream/50 hover:bg-cream transition-all duration-300"
                      >
                        <div>
                          <h5 className="font-medium text-brown-dark group-hover:text-gold-600 transition-colors">
                            {service.name}
                          </h5>
                          <p className="text-xs text-brown-dark/60 mt-0.5">
                            {service.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
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
            Apoio Personalizado
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-white leading-tight mb-6">
            Cada família merece um{' '}
            <span className="text-gold-400">acompanhamento único</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Contacte-nos para saber mais sobre este serviço ou para esclarecer
            qualquer dúvida. Estamos aqui para ajudar.
          </p>

          <a
            href="https://wa.me/351928352824"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Falar Connosco</span>
          </a>
        </div>
      </section>
    </>
  )
}
