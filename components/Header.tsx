'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock, Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { name: 'Funeral Sepultura', href: '/servicos/funeral-sepultura' },
  { name: 'Funeral Jazigo', href: '/servicos/funeral-jazigo' },
  { name: 'Funeral Cremação', href: '/servicos/funeral-cremacao' },
]

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/sobre-nos' },
  { name: 'Serviços', href: '#', hasDropdown: true },
  { name: 'Florista', href: '/florista' },
  { name: 'Contactos', href: '/contactos' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef<HTMLElement>(null)

  // Calculate header height
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }
    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)
    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Scroll to top when navigating
  const handleNavClick = () => {
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-brown-dark text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
            {/* Phone Numbers */}
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <a
                href="tel:+351928352824"
                className="text-xs sm:text-sm hover:text-gold-400 transition-colors duration-300"
              >
                (+351) 928 352 824
              </a>
              <span className="text-cream/50">|</span>
              <a
                href="tel:+351928349178"
                className="text-xs sm:text-sm hover:text-gold-400 transition-colors duration-300"
              >
                (+351) 928 349 178
              </a>
            </div>

            {/* Hours & Email */}
            <div className="flex items-center gap-4 sm:gap-6 mt-1 sm:mt-0">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span className="text-xs sm:text-sm">24h / 7</span>
              </div>
              <a
                href="mailto:geralmemoriaeternus@gmail.com"
                className="hidden sm:flex items-center gap-2 hover:text-gold-400 transition-colors duration-300"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="text-sm">geralmemoriaeternus@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Símbolo */}
              <Image
                src="/logo.svg"
                alt=""
                width={60}
                height={60}
                className="h-12 sm:h-14 lg:h-16 w-auto"
                priority
              />

              {/* Brand Text */}
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs tracking-[0.3em] text-brown-dark/70 font-sans uppercase">
                  Memória
                </span>
                <span className="text-xl sm:text-2xl font-serif font-semibold text-brown-dark tracking-wide -mt-1">
                  ETERNUS
                </span>
                <span className="text-[7px] sm:text-[8px] tracking-[0.15em] text-brown-dark/60 font-sans uppercase -mt-0.5">
                  Serviços de Assistência Funerária
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        className="flex items-center gap-1 text-brown-dark hover:text-gold-600 transition-colors duration-300 font-medium text-sm py-2"
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            servicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${
                          servicesOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        <div className="bg-white rounded-lg shadow-xl border border-cream overflow-hidden min-w-[240px]">
                          {/* Decorative top border */}
                          <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400" />

                          <div className="p-2">
                            {services.map((service, index) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="block px-4 py-3 text-sm text-brown-dark hover:bg-cream hover:text-gold-600 rounded-md transition-all duration-200"
                              >
                                {service.name}
                              </Link>
                            ))}

                            {/* Separator */}
                            <div className="my-2 mx-4 border-t border-cream" />

                            <Link
                              href="/perante-a-morte"
                              className="block px-4 py-3 text-sm text-brown-dark hover:bg-cream hover:text-gold-600 rounded-md transition-all duration-200"
                            >
                              Perante a Morte, O Que Fazer?
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-brown-dark hover:text-gold-600 transition-colors duration-300 font-medium text-sm py-2"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/351928352824"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-600 text-white px-5 py-2.5 rounded-md font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/20"
              >
                <Phone className="w-4 h-4" />
                <span>Contactar Agora</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-brown-dark hover:text-gold-600 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 bottom-0 bg-white shadow-xl transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
        style={{ top: headerHeight }}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className={`transform transition-all duration-500 ${
                  mobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 75}ms` : '0ms' }}
              >
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full text-left text-xl font-serif text-brown-dark hover:text-gold-600 transition-colors duration-300 py-3 border-b border-brown-dark/10"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          mobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-4 py-2 space-y-1">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block text-base text-brown-dark/80 hover:text-gold-600 transition-colors duration-300 py-2"
                            onClick={handleNavClick}
                          >
                            {service.name}
                          </Link>
                        ))}
                        <div className="my-2 border-t border-brown-dark/10" />
                        <Link
                          href="/perante-a-morte"
                          className="block text-base text-brown-dark/80 hover:text-gold-600 transition-colors duration-300 py-2"
                          onClick={handleNavClick}
                        >
                          Perante a Morte, O Que Fazer?
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-xl font-serif text-brown-dark hover:text-gold-600 transition-colors duration-300 py-3 border-b border-brown-dark/10"
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div
            className={`mt-8 transform transition-all duration-500 ${
              mobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: mobileMenuOpen ? '400ms' : '0ms' }}
          >
            <a
              href="https://wa.me/351928352824"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-600 text-white px-6 py-4 rounded-lg font-medium text-base transition-all duration-300 shadow-lg shadow-gold-400/20"
            >
              <Phone className="w-5 h-5" />
              <span>Contactar Agora</span>
            </a>

            {/* Mobile Email */}
            <a
              href="mailto:geralmemoriaeternus@gmail.com"
              className="flex items-center justify-center gap-2 text-brown-dark/70 hover:text-gold-600 transition-colors duration-300 mt-4 text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>geralmemoriaeternus@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
