import type { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Eye, Award, Palette, Clock, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a Memória Eternus. Acompanhamos famílias em momentos difíceis com respeito, dignidade e profissionalismo há mais de 20 anos em Lisboa.',
  alternates: {
    canonical: '/sobre-nos',
  },
}

export default function SobreNos() {
  return (
    <>
      {/* Hero Section - Elegant dark with floating elements */}
      <section className="relative bg-brown-dark pt-40 pb-16 lg:py-32 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-400/3 rounded-full blur-3xl" />

        {/* Elegant grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(196, 160, 82, 0.1) 50px, rgba(196, 160, 82, 0.1) 51px),
                               repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(196, 160, 82, 0.1) 50px, rgba(196, 160, 82, 0.1) 51px)`,
            }}
          />
        </div>

        {/* Top decorative border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Floating logo above */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 blur-2xl bg-gold-400/20 scale-150 animate-pulse-slow" />
            <Image
              src="/logo.svg"
              alt=""
              width={80}
              height={80}
              className="relative w-16 h-16 sm:w-20 sm:h-20 opacity-60"
            />
          </div>

          {/* Label with line accents */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-gold-400/50" />
            <span className="text-xs sm:text-sm font-sans font-medium tracking-[0.3em] text-gold-400 uppercase">
              Sobre Nós
            </span>
            <div className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>

          {/* Title with enhanced typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-semibold text-white leading-tight mb-8">
            Quem <span className="text-gold-400 italic">Somos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto font-light">
            Uma história de dedicação, respeito e acompanhamento humano
          </p>
        </div>

        {/* Elegant corner frames */}
        <div className="absolute top-16 left-8 w-24 h-24 hidden lg:block">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold-400/40 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold-400/40 to-transparent" />
        </div>
        <div className="absolute top-16 right-8 w-24 h-24 hidden lg:block">
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-gold-400/40 to-transparent" />
          <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gold-400/40 to-transparent" />
        </div>
        <div className="absolute bottom-16 left-8 w-24 h-24 hidden lg:block">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-gold-400/30 to-transparent" />
          <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-gold-400/30 to-transparent" />
        </div>
        <div className="absolute bottom-16 right-8 w-24 h-24 hidden lg:block">
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-gold-400/30 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-gold-400/30 to-transparent" />
        </div>
      </section>

      {/* Missão Section */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div>
              {/* Label */}
              <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] text-gold-600 uppercase mb-4">
                A Nossa Missão
              </span>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brown-dark leading-tight mb-6">
                Acompanhar famílias com{' '}
                <span className="text-gold-600">dignidade</span>
              </h2>

              {/* Decorative line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[2px] bg-gold-400" />
                <div className="w-2 h-2 bg-gold-400 rotate-45" />
                <div className="w-12 h-[2px] bg-gold-400" />
              </div>

              {/* Text */}
              <div className="space-y-6 text-base sm:text-lg text-brown-dark/80 leading-relaxed">
                <p>
                  Somos uma empresa funerária, dedicada a acompanhar famílias em momentos
                  de profunda dor, com respeito, dignidade e total profissionalismo. A nossa
                  missão é prestar um apoio completo e humano, assegurando que cada memória
                  é conduzida com a serenidade e o cuidado que este momento exige.
                </p>
                <p>
                  Com uma equipa experiente e sensível, tratamos de todos os procedimentos
                  funerários com discrição, transparência e rigor, permitindo que as famílias
                  se concentrem no que realmente importa: homenagear quem parte.
                </p>
                <p className="font-medium text-brown-dark">
                  Estamos disponíveis 24 horas por dia, 7 dias por semana, 365 dias por ano.
                </p>
                <p className="italic text-gold-600 font-serif text-xl">
                  &ldquo;Cada despedida é única, tal como cada vida.&rdquo;
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full border-2 border-gold-400/40 rounded-sm" />

              {/* Image container */}
              <div className="relative aspect-[3/4] bg-brown-dark/10 rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/sobre-nos/sobre-nos-page.jpeg"
                  alt="A nossa missão - Memória Eternus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/20 via-transparent to-transparent" />
              </div>

              {/* Corner accent */}
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-gold-400 hidden sm:block" />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-32 h-32 border-r-2 border-t-2 border-gold-400/10 hidden xl:block" />
        <div className="absolute bottom-20 left-0 w-24 h-24 border-l-2 border-b-2 border-gold-400/10 hidden xl:block" />
      </section>

      {/* Significado do Nome Section */}
      <section className="relative bg-cream py-24 lg:py-32 overflow-hidden">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-400/5 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo - centered with flex */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-gold-400/20 scale-150" />
              <Image
                src="/logo.svg"
                alt="Memória Eternus"
                width={100}
                height={100}
                className="relative w-20 h-20 sm:w-24 sm:h-24"
              />
            </div>
          </div>

          {/* Label */}
          <p className="text-center text-xs sm:text-sm font-sans font-medium tracking-[0.25em] text-gold-600 uppercase mb-4">
            O Significado do Nome
          </p>

          {/* Title */}
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brown-dark leading-tight mb-8">
            <span className="text-gold-600">Eternus</span> significa eterno
          </h2>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-400" />
            <div className="w-2 h-2 bg-gold-400 rotate-45" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          {/* Description */}
          <p className="text-center text-lg sm:text-xl text-brown-dark/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            <span className="font-semibold text-brown-dark">Eternus</span> vem do latim e significa{' '}
            <em>eterno, sem fim, perpétuo</em>. Escolhemos este nome porque acreditamos que
            as memórias de quem amamos são verdadeiramente eternas — vivem em nós,
            nas histórias que contamos, nos momentos que partilhámos.
          </p>

          {/* Tagline - centered with flex */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/50 rounded-lg blur-sm" />
              <p className="relative text-center text-xl sm:text-2xl lg:text-3xl font-serif italic text-brown-dark leading-relaxed">
                <span className="text-gold-600 font-semibold not-italic">&ldquo;Memórias</span> que jamais serão esquecidas,
                <br />
                <span className="text-gold-600 font-semibold not-italic">Eternus</span> saudades de quem já partiu.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-16 left-16 w-24 h-24 border-l border-t border-gold-400/20 hidden xl:block" />
        <div className="absolute top-16 right-16 w-24 h-24 border-r border-t border-gold-400/20 hidden xl:block" />
        <div className="absolute bottom-16 left-16 w-24 h-24 border-l border-b border-gold-400/20 hidden xl:block" />
        <div className="absolute bottom-16 right-16 w-24 h-24 border-r border-b border-gold-400/20 hidden xl:block" />
      </section>

      {/* Valores Section */}
      <section className="relative bg-brown-dark py-20 lg:py-32 overflow-hidden">
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
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] text-gold-400 uppercase mb-4">
              Os Nossos Valores
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-tight mb-6">
              O que nos <span className="text-gold-400">define</span>
            </h2>

            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[2px] bg-gold-400/50" />
              <div className="w-2 h-2 bg-gold-400 rotate-45" />
              <div className="w-12 h-[2px] bg-gold-400/50" />
            </div>
          </div>

          {/* Values Grid - 3x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Empatia */}
            <div className="group text-center p-8 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-gold-400/20 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 mb-6 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
                <Heart className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-3">
                Empatia
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Colocamo-nos no lugar de cada família, oferecendo um apoio genuíno e compreensivo em cada momento.
              </p>
            </div>

            {/* Transparência */}
            <div className="group text-center p-8 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-gold-400/20 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 mb-6 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
                <Eye className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-3">
                Transparência
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Comunicamos de forma clara e honesta, sem custos ocultos ou surpresas indesejadas.
              </p>
            </div>

            {/* Profissionalismo */}
            <div className="group text-center p-8 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-gold-400/20 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 mb-6 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
                <Award className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-3">
                Profissionalismo
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Rigor e competência em todos os procedimentos, garantindo um serviço de excelência.
              </p>
            </div>

            {/* Personalização */}
            <div className="group text-center p-8 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-gold-400/20 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 mb-6 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
                <Palette className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-3">
                Personalização
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Cada cerimónia é única, adaptada aos desejos e valores de cada família.
              </p>
            </div>

            {/* Disponibilidade */}
            <div className="group text-center p-8 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-gold-400/20 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 mb-6 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
                <Clock className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-3">
                Disponibilidade
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Estamos sempre presentes, 24 horas por dia, 7 dias por semana, 365 dias por ano.
              </p>
            </div>

            {/* Serenidade */}
            <div className="group text-center p-8 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-gold-400/20 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 mb-6 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
                <Leaf className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-3">
                Serenidade
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Proporcionamos um ambiente de paz e tranquilidade em cada momento da despedida.
              </p>
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-20 left-8 w-20 h-20 border-l border-t border-gold-400/20 hidden xl:block" />
        <div className="absolute bottom-20 right-8 w-20 h-20 border-r border-b border-gold-400/20 hidden xl:block" />
      </section>
    </>
  )
}
