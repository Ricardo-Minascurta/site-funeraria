import type { Metadata } from 'next'
import Image from 'next/image'
import { FileText, Building2, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Falecimento: Como Proceder',
  description: 'Guia completo sobre como proceder em caso de falecimento. Passos a seguir, documentação necessária e como a Memória Eternus pode ajudar.',
  alternates: {
    canonical: '/perante-a-morte',
  },
}

const services = [
  {
    icon: FileText,
    title: 'Documentação',
    description: 'Certidão de óbito, licenças de enterramento, registos civis',
  },
  {
    icon: Building2,
    title: 'Coordenação',
    description: 'Cemitério, crematório, igreja ou outro local de cerimónia',
  },
  {
    icon: Users,
    title: 'Apoio Familiar',
    description: 'Orientação e suporte em todas as decisões necessárias',
  },
  {
    icon: Clock,
    title: 'Disponibilidade 24h',
    description: 'Estamos sempre disponíveis, a qualquer hora do dia ou da noite',
  },
]

export default function PeranteAMorte() {
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
            Guia
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-tight mb-6">
            Falecimento: <span className="text-gold-400">Como Proceder?</span>
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-400" />
            <div className="w-2 h-2 bg-gold-400 rotate-45" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            Sabemos que é um momento difícil. Este guia ajuda a compreender os passos necessários.
          </p>
        </div>
      </section>

      {/* Highlight Bar */}
      <section className="bg-gold-400 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-brown-dark font-medium text-sm sm:text-base">
            A Memória Eternus trata de todos os procedimentos por si. Ligue-nos a qualquer hora:{' '}
            <a
              href="https://wa.me/351928352824?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20os%20vossos%20serviços"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              (+351) 928 352 824
            </a>
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1 */}
          <div className="mb-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold-400 flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
                1
              </div>
              <div className="flex-1 pt-2">
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brown-dark mb-4">
                  Se o óbito ocorrer em <span className="text-gold-600">casa</span>
                </h2>
                <div className="space-y-4 text-brown-dark/80">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold-600" />
                    </div>
                    <p>
                      Contacte imediatamente o <strong className="text-brown-dark">112 (INEM)</strong> ou o Centro de Saúde da área
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold-600" />
                    </div>
                    <p>
                      Um médico irá verificar e <strong className="text-brown-dark">certificar o óbito</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold-600" />
                    </div>
                    <p>
                      De seguida, <strong className="text-brown-dark">contacte-nos</strong> — tratamos de tudo o resto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 my-12">
            <div className="w-24 h-px bg-gold-400/30" />
            <div className="w-2 h-2 bg-gold-400/50 rotate-45" />
            <div className="w-24 h-px bg-gold-400/30" />
          </div>

          {/* Step 2 */}
          <div className="mb-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold-400 flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
                2
              </div>
              <div className="flex-1 pt-2">
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brown-dark mb-4">
                  Se o óbito ocorrer no <span className="text-gold-600">hospital ou lar</span>
                </h2>
                <div className="space-y-4 text-brown-dark/80">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold-600" />
                    </div>
                    <p>
                      A instituição trata da <strong className="text-brown-dark">certificação do óbito</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold-600" />
                    </div>
                    <p>
                      <strong className="text-brown-dark">Contacte-nos</strong> para procedermos à remoção do corpo e iniciar o processo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 my-12">
            <div className="w-24 h-px bg-gold-400/30" />
            <div className="w-2 h-2 bg-gold-400/50 rotate-45" />
            <div className="w-24 h-px bg-gold-400/30" />
          </div>

          {/* Step 3 */}
          <div className="mb-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold-400 flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
                3
              </div>
              <div className="flex-1 pt-2">
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brown-dark mb-4">
                  Documentos <span className="text-gold-600">necessários</span>
                </h2>
                <div className="space-y-4 text-brown-dark/80">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold-600" />
                    </div>
                    <p>
                      <strong className="text-brown-dark">Cartão de Cidadão</strong> do falecido
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold-600" />
                    </div>
                    <p>
                      <strong className="text-brown-dark">Cartão de Cidadão</strong> de quem trata do funeral
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold-600" />
                    </div>
                    <p>
                      <strong className="text-brown-dark">Local de inumação ou cremação</strong> pretendido
                    </p>
                  </div>
                </div>

                {/* Note */}
                <div className="mt-6 p-4 bg-white rounded-lg border border-gold-400/20 shadow-sm">
                  <p className="text-brown-dark/70 text-sm italic">
                    Não se preocupe se não tiver todos os documentos. A nossa equipa ajuda a obter o que for necessário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Card Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-2xl p-8 sm:p-12 shadow-lg border border-gold-400/10">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] text-gold-600 uppercase mb-3">
                Apoio Completo
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brown-dark">
                O Que a Memória Eternus <span className="text-gold-600">Trata Por Si</span>
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gold-400/10 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-400/10 mb-4 group-hover:bg-gold-400/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-gold-600" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-brown-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-brown-dark/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-brown-dark py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 blur-3xl bg-gold-400/20 scale-150" />
            <Image
              src="/logo.svg"
              alt="Memória Eternus"
              width={100}
              height={100}
              className="relative w-20 h-20 sm:w-24 sm:h-24"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-white leading-tight mb-6">
            Estamos Aqui Para <span className="text-gold-400">Ajudar</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Em caso de necessidade, contacte-nos a qualquer hora. A nossa equipa está preparada para prestar todo o apoio necessário.
          </p>

          <div className="flex items-center justify-center">
            <a
              href="https://wa.me/351928352824?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20os%20vossos%20serviços"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Falar por WhatsApp</span>
            </a>
          </div>

          {/* Availability note */}
          <p className="mt-8 text-sm text-white/40 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Disponível 24 horas, 7 dias por semana</span>
          </p>
        </div>
      </section>
    </>
  )
}
