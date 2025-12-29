import Image from 'next/image'
import Link from 'next/link'
import { Clock, Heart, Shield, Users } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpeg"
            alt="Memória Eternus - Serviços Funerários"
            fill
            className="object-cover object-[70%] md:object-right"
            priority
            quality={90}
          />
          {/* Overlay - mais escuro à esquerda, mais leve à direita */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>

        {/* Content - Alinhado à Esquerda */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 sm:pt-32 lg:pt-40 pb-20">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Main Title */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              <span className="text-gold-400">Memórias</span> que jamais serão esquecidas
            </h1>

            {/* Subtitle */}
            <p
              className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-white/80 italic animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <span className="text-gold-400 font-semibold not-italic">Eternus</span> saudades de quem já partiu
            </p>

            {/* Description */}
            <p
              className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '600ms' }}
            >
              Acompanhamos famílias em momentos de profunda dor, com respeito,
              dignidade e total profissionalismo.
            </p>

            {/* Buttons */}
            <div
              className="mt-8 flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up"
              style={{ animationDelay: '800ms' }}
            >
              <a
                href="https://wa.me/351928352824"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gold-400 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/20 hover:scale-105"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:animate-pulse">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar por WhatsApp
              </a>
              <Link
                href="/servicos"
                className="flex items-center gap-3 border-2 border-white/40 hover:border-gold-400 text-white hover:text-gold-400 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 hover:scale-105"
              >
                Nossos Serviços
              </Link>
            </div>

            {/* Availability Badge */}
            <div
              className="mt-10 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-full animate-fade-in-up"
              style={{ animationDelay: '1000ms' }}
            >
              <Clock className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-white/80">
                Disponível <span className="text-gold-400 font-medium">24h</span>, 7 dias por semana
              </span>
            </div>
          </div>
        </div>

        {/* Decorative corner - left only */}
        <div className="absolute top-40 left-8 w-16 h-16 border-l-2 border-t-2 border-gold-400/30 hidden lg:block" />
        <div className="absolute bottom-20 left-8 w-16 h-16 border-l-2 border-b-2 border-gold-400/30 hidden lg:block" />
      </section>

      {/* Sobre Nós Section */}
      <section className="relative bg-cream py-20 lg:py-32 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235C4A32' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              {/* Label */}
              <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] text-gold-600 uppercase mb-4">
                Sobre Nós
              </span>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brown-dark leading-tight mb-6">
                Uma empresa dedicada ao{' '}
                <span className="text-gold-600">acompanhamento</span> de famílias
              </h2>

              {/* Decorative line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[2px] bg-gold-400" />
                <div className="w-2 h-2 bg-gold-400 rotate-45" />
              </div>

              {/* Text */}
              <p className="text-base sm:text-lg text-brown-dark/80 leading-relaxed mb-8">
                Somos uma empresa funerária, dedicada a acompanhar famílias em momentos
                de profunda dor, com respeito, dignidade e total profissionalismo.
                A nossa missão é prestar um apoio completo e humano, assegurando que
                cada memória é conduzida com a serenidade e o cuidado que este momento exige.
              </p>

              {/* Link */}
              <Link
                href="/sobre-nos"
                className="group inline-flex items-center gap-3 text-gold-600 hover:text-gold-400 font-medium transition-colors duration-300"
              >
                <span>Conhecer mais sobre nós</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative">
              {/* Decorative frame - offset behind image */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full border-2 border-gold-400/40 rounded-sm" />

              {/* Image container with 3:4 ratio */}
              <div className="relative aspect-[3/4] bg-brown-dark/10 rounded-sm overflow-hidden shadow-2xl">
                {/* Placeholder - replace with actual image */}
                <Image
                  src="/images/sobre-nos.jpeg"
                  alt="Memória Eternus - Acompanhamento de famílias"
                  fill
                  className="object-cover"
                />

                {/* Subtle overlay for elegance */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/20 via-transparent to-transparent" />
              </div>

              {/* Corner accent */}
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-gold-400 hidden sm:block" />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-32 h-32 border-r-2 border-t-2 border-gold-400/20 hidden xl:block" />
        <div className="absolute bottom-20 left-0 w-24 h-24 border-l-2 border-b-2 border-gold-400/20 hidden xl:block" />
      </section>

      {/* Serviços Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Label */}
            <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] text-gold-600 uppercase mb-4">
              Serviços
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brown-dark leading-tight mb-6">
              Os Nossos <span className="text-gold-600">Serviços</span>
            </h2>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-gold-400" />
              <div className="w-2 h-2 bg-gold-400 rotate-45" />
              <div className="w-12 h-[2px] bg-gold-400" />
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-brown-dark/70 leading-relaxed">
              Cada serviço é preparado de forma personalizada, respeitando crenças,
              valores e vontades individuais.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Funeral Sepultura */}
            <Link
              href="/servicos/funeral-sepultura"
              className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/servicos/sepultura.jpeg"
                  alt="Funeral Sepultura"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Decorative line */}
                <div className="w-10 h-[2px] bg-gold-400 mb-4 transform origin-left transition-all duration-300 group-hover:w-16" />

                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white mb-2">
                  Funeral Sepultura
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Inumação em sepultura temporária ou perpétua
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-2 text-gold-400 text-sm font-medium opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Saber mais</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 2 - Funeral Jazigo */}
            <Link
              href="/servicos/funeral-jazigo"
              className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/servicos/jazigo.jpeg"
                  alt="Funeral Jazigo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Decorative line */}
                <div className="w-10 h-[2px] bg-gold-400 mb-4 transform origin-left transition-all duration-300 group-hover:w-16" />

                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white mb-2">
                  Funeral Jazigo
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Inumação em jazigo particular ou municipal
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-2 text-gold-400 text-sm font-medium opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Saber mais</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 3 - Funeral Cremação */}
            <Link
              href="/servicos/funeral-cremacao"
              className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 md:col-span-2 lg:col-span-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/servicos/cremacao.jpeg"
                  alt="Funeral Cremação"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Decorative line */}
                <div className="w-10 h-[2px] bg-gold-400 mb-4 transform origin-left transition-all duration-300 group-hover:w-16" />

                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white mb-2">
                  Funeral Cremação
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Serviço de cremação completo
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-2 text-gold-400 text-sm font-medium opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Saber mais</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Bottom Link */}
          <div className="mt-16 text-center">
            <Link
              href="/perante-a-morte"
              className="group inline-flex items-center gap-3 bg-cream hover:bg-gold-400 text-brown-dark hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <span>Perante a morte, o que fazer?</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="relative bg-brown-dark py-20 lg:py-32 overflow-hidden">
        {/* Subtle diagonal pattern */}
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
            {/* Label */}
            <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.25em] text-gold-400 uppercase mb-4">
              Os Nossos Valores
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white leading-tight mb-6">
              Por que nos <span className="text-gold-400">escolher</span>
            </h2>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[2px] bg-gold-400/50" />
              <div className="w-2 h-2 bg-gold-400 rotate-45" />
              <div className="w-12 h-[2px] bg-gold-400/50" />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 - Disponibilidade 24h */}
            <div className="group text-center p-6 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-gold-400/20 transition-all duration-500">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 mb-6 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
                <Clock className="w-7 h-7 text-gold-400" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-3">
                Disponibilidade 24h
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                Estamos disponíveis 24 horas por dia, 7 dias por semana, 365 dias por ano.
              </p>
            </div>

            {/* Value 2 - Empatia e Respeito */}
            <div className="group text-center p-6 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-gold-400/20 transition-all duration-500">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 mb-6 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
                <Heart className="w-7 h-7 text-gold-400" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-3">
                Empatia e Respeito
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                Tratamos cada família com a sensibilidade e o carinho que o momento exige.
              </p>
            </div>

            {/* Value 3 - Transparência Total */}
            <div className="group text-center p-6 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-gold-400/20 transition-all duration-500">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 mb-6 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
                <Shield className="w-7 h-7 text-gold-400" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-3">
                Transparência Total
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                Clareza em todos os processos, sem surpresas nem custos ocultos.
              </p>
            </div>

            {/* Value 4 - Equipa Experiente */}
            <div className="group text-center p-6 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-gold-400/20 transition-all duration-500">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 mb-6 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
                <Users className="w-7 h-7 text-gold-400" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-3">
                Equipa Experiente
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                Profissionais qualificados e dedicados ao serviço das famílias.
              </p>
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-20 left-8 w-20 h-20 border-l border-t border-gold-400/20 hidden xl:block" />
        <div className="absolute bottom-20 right-8 w-20 h-20 border-r border-b border-gold-400/20 hidden xl:block" />
      </section>

      {/* CTA Section */}
      <section className="relative bg-cream py-24 lg:py-36 overflow-hidden">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-400/5 via-transparent to-transparent" />

        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-40 0a40,40 0 1,0 80,0a40,40 0 1,0 -80,0' fill='none' stroke='%235C4A32' stroke-width='0.5'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="relative inline-block mb-8">
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl bg-gold-400/30 scale-150" />
            <Image
              src="/logo.svg"
              alt="Memória Eternus"
              width={120}
              height={120}
              className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-brown-dark leading-tight mb-6">
            Estamos aqui para o <span className="text-gold-600">ajudar</span>
          </h2>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-400" />
            <div className="w-2 h-2 bg-gold-400 rotate-45" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          {/* Text */}
          <p className="text-base sm:text-lg lg:text-xl text-brown-dark/70 leading-relaxed max-w-2xl mx-auto mb-10">
            Em caso de necessidade, contacte-nos a qualquer hora.
            A nossa equipa está pronta para prestar todo o apoio e orientação necessários.
          </p>

          {/* Button */}
          <div className="flex items-center justify-center">
            <a
              href="https://wa.me/351928352824"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gold-400/20 hover:-translate-y-0.5 min-w-[200px] justify-center"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Falar por WhatsApp</span>
            </a>
          </div>

          {/* Availability note */}
          <p className="mt-8 text-sm text-brown-dark/50 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Disponível 24 horas, 7 dias por semana</span>
          </p>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-16 left-16 w-24 h-24 border-l border-t border-gold-400/20 hidden xl:block" />
        <div className="absolute top-16 right-16 w-24 h-24 border-r border-t border-gold-400/20 hidden xl:block" />
        <div className="absolute bottom-16 left-16 w-24 h-24 border-l border-b border-gold-400/20 hidden xl:block" />
        <div className="absolute bottom-16 right-16 w-24 h-24 border-r border-b border-gold-400/20 hidden xl:block" />
      </section>
    </>
  )
}
