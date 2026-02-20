'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formsubmit.co/ajax/geralmemoriaeternus@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gold-400/10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif font-semibold text-brown-dark mb-3">
          Mensagem Enviada
        </h3>
        <p className="text-brown-dark/60 mb-6">
          Obrigado pelo seu contacto. Responderemos o mais brevemente possível.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-gold-600 hover:text-gold-400 font-medium transition-colors"
        >
          Enviar nova mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gold-400/10">
      {/* Hidden fields for formsubmit.co */}
      <input type="hidden" name="_subject" value="Novo contacto via website Memória Eternus" />
      <input type="hidden" name="_template" value="table" />

      <h3 className="text-2xl font-serif font-semibold text-brown-dark mb-2">
        Envie-nos uma <span className="text-gold-600">Mensagem</span>
      </h3>
      <p className="text-sm text-brown-dark/50 mb-6">
        Preencha o formulário e entraremos em contacto consigo.
      </p>

      <div className="space-y-5">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-brown-dark mb-1.5">
            Nome <span className="text-gold-600">*</span>
          </label>
          <input
            type="text"
            id="nome"
            name="Nome"
            required
            placeholder="O seu nome completo"
            className="w-full px-4 py-3 rounded-xl border border-brown-dark/15 bg-cream/30 text-brown-dark placeholder:text-brown-dark/30 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-300 text-sm"
          />
        </div>

        {/* Email & Telefone - side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brown-dark mb-1.5">
              Email <span className="text-gold-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              required
              placeholder="email@exemplo.com"
              className="w-full px-4 py-3 rounded-xl border border-brown-dark/15 bg-cream/30 text-brown-dark placeholder:text-brown-dark/30 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-300 text-sm"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-brown-dark mb-1.5">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="Telefone"
              placeholder="912 345 678"
              className="w-full px-4 py-3 rounded-xl border border-brown-dark/15 bg-cream/30 text-brown-dark placeholder:text-brown-dark/30 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-300 text-sm"
            />
          </div>
        </div>

        {/* Assunto */}
        <div>
          <label htmlFor="assunto" className="block text-sm font-medium text-brown-dark mb-1.5">
            Assunto <span className="text-gold-600">*</span>
          </label>
          <select
            id="assunto"
            name="Assunto"
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-xl border border-brown-dark/15 bg-cream/30 text-brown-dark focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-300 text-sm appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235C4A32' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
            }}
          >
            <option value="" disabled>Selecione um assunto</option>
            <option value="Pedido de Informação">Pedido de Informação</option>
            <option value="Orçamento">Orçamento</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-brown-dark mb-1.5">
            Mensagem <span className="text-gold-600">*</span>
          </label>
          <textarea
            id="mensagem"
            name="Mensagem"
            required
            rows={5}
            placeholder="Escreva a sua mensagem aqui..."
            className="w-full px-4 py-3 rounded-xl border border-brown-dark/15 bg-cream/30 text-brown-dark placeholder:text-brown-dark/30 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-300 text-sm resize-none"
          />
        </div>
      </div>

      {/* Error message */}
      {status === 'error' && (
        <div className="mt-4 flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>Ocorreu um erro. Por favor, tente novamente ou contacte-nos por telefone.</span>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-8 w-full flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-600 disabled:bg-gold-400/60 text-white py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <>
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>A enviar...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Enviar Mensagem</span>
          </>
        )}
      </button>
    </form>
  )
}
