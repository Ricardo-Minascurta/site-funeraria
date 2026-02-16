import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Florista',
  description: 'Coroas, ramos e arranjos florais para homenagens fúnebres. Flores frescas e naturais com entrega em Lisboa. Encomende por WhatsApp.',
  alternates: {
    canonical: '/florista',
  },
}

const produtos = [
  {
    nome: 'Coroa de Flores',
    descricao: 'Coroa clássica com flores naturais variadas, ideal para homenagens tradicionais.',
    imagem: '/images/florista/coroa dlores.jpg',
  },
  {
    nome: 'Cruz de Flores',
    descricao: 'Cruz decorada com flores selecionadas, símbolo de fé e esperança.',
    imagem: '/images/florista/cruz-porto-santo-final.jpg',
  },
  {
    nome: 'Palma de Flores',
    descricao: 'Arranjo alongado com flores naturais, uma homenagem elegante e simbólica.',
    imagem: '/images/florista/palma-terceira2.jpg',
  },
  {
    nome: 'Coração de Flores',
    descricao: 'Arranjo em forma de coração, uma forma carinhosa de homenagear quem partiu.',
    imagem: '/images/florista/coracao flores.jpg',
  },
]

export default function Florista() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/florista/hero-florista.jpeg"
            alt="Serviço de Florista - Memória Eternus"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark via-brown-dark/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-40">
          {/* Label */}
          <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.3em] text-gold-400 uppercase mb-4">
            Florista
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white leading-[1.1] mb-6">
            Serviço de <span className="text-gold-400">Florista</span>
          </h1>

          {/* Subtitle with line accent */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-gold-400" />
            <p className="text-lg sm:text-xl lg:text-2xl text-white/70 font-light max-w-xl">
              Flores para homenagear quem partiu
            </p>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* Products Section */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] text-gold-600 uppercase mb-4">
              Os Nossos Arranjos
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brown-dark leading-tight mb-6">
              Flores que <span className="text-gold-600">expressam sentimentos</span>
            </h2>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-gold-400" />
              <div className="w-2 h-2 bg-gold-400 rotate-45" />
              <div className="w-12 h-[2px] bg-gold-400" />
            </div>

            <p className="text-base sm:text-lg text-brown-dark/70 leading-relaxed">
              Cada arranjo é preparado com carinho e dedicação, utilizando flores frescas
              e naturais para homenagear de forma digna quem partiu.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto, index) => (
              <a
                key={index}
                href="https://coroastenreiro.com/flores-funerais/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gold-400/10"
              >
                {/* Image Container - 1:1 aspect ratio */}
                <div className="relative aspect-square overflow-hidden bg-brown-dark/5">
                  <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/10 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-brown-dark mb-2 group-hover:text-gold-600 transition-colors duration-300">
                    {produto.nome}
                  </h3>

                  <p className="text-brown-dark/70 text-sm leading-relaxed mb-4">
                    {produto.descricao}
                  </p>

                  <div className="flex items-center justify-end">
                    <span className="inline-flex items-center gap-2 text-sm text-brown-dark/60 group-hover:text-gold-600 transition-colors duration-300">
                      <span>Ver Flores</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-white rounded-xl p-8 shadow-md border border-gold-400/10 max-w-2xl">
              <p className="text-brown-dark/70 text-sm leading-relaxed mb-4">
                Arranjos personalizados mediante consulta. Todas as flores são naturais e frescas,
                podendo variar conforme disponibilidade sazonal.
              </p>

              <div className="flex items-center justify-center">
                <a
                  href="https://wa.me/351928352824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Encomendar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-brown-dark py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.3em] text-gold-400 uppercase mb-4">
            Encomendas Personalizadas
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-white leading-tight mb-6">
            Precisa de um arranjo <span className="text-gold-400">especial</span>?
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Criamos arranjos personalizados de acordo com os seus desejos.
            Contacte-nos para discutir as suas preferências e orçamento.
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
