export default function PoliticaPrivacidade() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brown-dark pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden">
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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Label */}
          <span className="inline-block text-xs sm:text-sm font-sans font-medium tracking-[0.3em] text-gold-400 uppercase mb-4">
            Legal
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white leading-[1.1] mb-6">
            Política de <span className="text-gold-400">Privacidade</span>
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-400" />
            <div className="w-2 h-2 bg-gold-400 rotate-45" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-400" />
          </div>
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

      {/* Content Section */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gold-400/10 p-8 sm:p-10 lg:p-12">
            <div className="prose prose-lg max-w-none">
              {/* 1. Responsável pelo Tratamento */}
              <section className="mb-10">
                <h2 className="text-2xl font-serif font-semibold text-brown-dark mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 text-sm font-sans font-bold">
                    1
                  </span>
                  Responsável pelo Tratamento
                </h2>
                <div className="pl-11 text-brown-dark/70 leading-relaxed space-y-2">
                  <p>
                    <strong className="text-brown-dark">Memória Eternus</strong>
                  </p>
                  <p>Morada: Lisboa, Portugal</p>
                  <p>NIF: [A definir]</p>
                  <p>
                    A Memória Eternus é a entidade responsável pelo tratamento dos dados
                    pessoais recolhidos através deste website e dos seus serviços.
                  </p>
                </div>
              </section>

              {/* 2. Dados Recolhidos */}
              <section className="mb-10">
                <h2 className="text-2xl font-serif font-semibold text-brown-dark mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 text-sm font-sans font-bold">
                    2
                  </span>
                  Dados Recolhidos
                </h2>
                <div className="pl-11 text-brown-dark/70 leading-relaxed">
                  <p className="mb-3">
                    No âmbito da prestação dos nossos serviços, podemos recolher os seguintes
                    dados pessoais:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Nome completo</li>
                    <li>Número de telefone</li>
                    <li>Endereço de email</li>
                    <li>Morada</li>
                    <li>Outros dados necessários à prestação dos serviços funerários</li>
                  </ul>
                </div>
              </section>

              {/* 3. Finalidade */}
              <section className="mb-10">
                <h2 className="text-2xl font-serif font-semibold text-brown-dark mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 text-sm font-sans font-bold">
                    3
                  </span>
                  Finalidade do Tratamento
                </h2>
                <div className="pl-11 text-brown-dark/70 leading-relaxed">
                  <p className="mb-3">Os dados pessoais recolhidos são utilizados para:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Prestação de serviços funerários</li>
                    <li>Resposta a pedidos de contacto e informações</li>
                    <li>Cumprimento de obrigações legais e regulamentares</li>
                    <li>Gestão administrativa e contabilística</li>
                    <li>Comunicação de informações relevantes sobre os serviços</li>
                  </ul>
                </div>
              </section>

              {/* 4. Base Legal */}
              <section className="mb-10">
                <h2 className="text-2xl font-serif font-semibold text-brown-dark mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 text-sm font-sans font-bold">
                    4
                  </span>
                  Base Legal
                </h2>
                <div className="pl-11 text-brown-dark/70 leading-relaxed">
                  <p className="mb-3">
                    O tratamento dos dados pessoais tem como fundamento legal:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong className="text-brown-dark">Execução de contrato:</strong> para
                      a prestação dos serviços funerários contratados
                    </li>
                    <li>
                      <strong className="text-brown-dark">Obrigações legais:</strong> para
                      cumprimento de obrigações legais a que estamos sujeitos
                    </li>
                    <li>
                      <strong className="text-brown-dark">Consentimento:</strong> quando
                      aplicável, para finalidades específicas mediante autorização prévia
                    </li>
                  </ul>
                </div>
              </section>

              {/* 5. Conservação dos Dados */}
              <section className="mb-10">
                <h2 className="text-2xl font-serif font-semibold text-brown-dark mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 text-sm font-sans font-bold">
                    5
                  </span>
                  Conservação dos Dados
                </h2>
                <div className="pl-11 text-brown-dark/70 leading-relaxed">
                  <p>
                    Os dados pessoais são conservados pelo período estritamente necessário
                    para as finalidades para as quais foram recolhidos, ou pelo período
                    exigido por lei. Após este período, os dados serão eliminados de forma
                    segura.
                  </p>
                </div>
              </section>

              {/* 6. Direitos do Titular */}
              <section className="mb-10">
                <h2 className="text-2xl font-serif font-semibold text-brown-dark mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 text-sm font-sans font-bold">
                    6
                  </span>
                  Direitos do Titular
                </h2>
                <div className="pl-11 text-brown-dark/70 leading-relaxed">
                  <p className="mb-3">
                    Nos termos da legislação aplicável, o titular dos dados tem o direito de:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong className="text-brown-dark">Acesso:</strong> obter confirmação
                      sobre o tratamento dos seus dados e aceder aos mesmos
                    </li>
                    <li>
                      <strong className="text-brown-dark">Retificação:</strong> solicitar a
                      correção de dados inexatos ou incompletos
                    </li>
                    <li>
                      <strong className="text-brown-dark">Eliminação:</strong> solicitar o
                      apagamento dos dados, quando aplicável
                    </li>
                    <li>
                      <strong className="text-brown-dark">Portabilidade:</strong> receber os
                      dados num formato estruturado e de uso comum
                    </li>
                    <li>
                      <strong className="text-brown-dark">Oposição:</strong> opor-se ao
                      tratamento dos dados em determinadas circunstâncias
                    </li>
                    <li>
                      <strong className="text-brown-dark">Limitação:</strong> solicitar a
                      limitação do tratamento dos dados
                    </li>
                  </ul>
                </div>
              </section>

              {/* 7. Segurança */}
              <section className="mb-10">
                <h2 className="text-2xl font-serif font-semibold text-brown-dark mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 text-sm font-sans font-bold">
                    7
                  </span>
                  Segurança
                </h2>
                <div className="pl-11 text-brown-dark/70 leading-relaxed">
                  <p>
                    A Memória Eternus implementa medidas técnicas e organizativas adequadas
                    para proteger os dados pessoais contra acessos não autorizados, perda,
                    destruição ou alteração. Estas medidas são regularmente revistas e
                    atualizadas para garantir a segurança dos dados.
                  </p>
                </div>
              </section>

              {/* 8. Cookies */}
              <section className="mb-10">
                <h2 className="text-2xl font-serif font-semibold text-brown-dark mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 text-sm font-sans font-bold">
                    8
                  </span>
                  Cookies
                </h2>
                <div className="pl-11 text-brown-dark/70 leading-relaxed">
                  <p className="mb-3">
                    Este website pode utilizar cookies para melhorar a experiência de
                    navegação. Os cookies são pequenos ficheiros de texto armazenados no seu
                    dispositivo que nos permitem:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Garantir o funcionamento adequado do website</li>
                    <li>Memorizar as suas preferências</li>
                    <li>Analisar a utilização do website para melhorias</li>
                  </ul>
                  <p>
                    Pode gerir as suas preferências de cookies através das definições do seu
                    navegador.
                  </p>
                </div>
              </section>

              {/* 9. Reclamações */}
              <section className="mb-10">
                <h2 className="text-2xl font-serif font-semibold text-brown-dark mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 text-sm font-sans font-bold">
                    9
                  </span>
                  Reclamações
                </h2>
                <div className="pl-11 text-brown-dark/70 leading-relaxed">
                  <p>
                    Se considerar que o tratamento dos seus dados pessoais viola a legislação
                    aplicável, tem o direito de apresentar uma reclamação junto da Comissão
                    Nacional de Proteção de Dados (CNPD):
                  </p>
                  <p className="mt-3">
                    <a
                      href="https://www.cnpd.pt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-600 hover:text-gold-400 font-medium transition-colors"
                    >
                      www.cnpd.pt
                    </a>
                  </p>
                </div>
              </section>

              {/* 10. Contacto */}
              <section className="mb-6">
                <h2 className="text-2xl font-serif font-semibold text-brown-dark mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-600 text-sm font-sans font-bold">
                    10
                  </span>
                  Contacto
                </h2>
                <div className="pl-11 text-brown-dark/70 leading-relaxed">
                  <p className="mb-3">
                    Para exercer os seus direitos ou esclarecer qualquer questão relacionada
                    com o tratamento dos seus dados pessoais, pode contactar-nos através de:
                  </p>
                  <ul className="list-none space-y-2">
                    <li>
                      <strong className="text-brown-dark">Email:</strong>{' '}
                      <a
                        href="mailto:geralmemoriaeternus@gmail.com"
                        className="text-gold-600 hover:text-gold-400 transition-colors"
                      >
                        geralmemoriaeternus@gmail.com
                      </a>
                    </li>
                    <li>
                      <strong className="text-brown-dark">Telefone:</strong>{' '}
                      <a
                        href="tel:+351928352824"
                        className="text-gold-600 hover:text-gold-400 transition-colors"
                      >
                        (+351) 928 352 824
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Last Updated */}
            <div className="mt-12 pt-8 border-t border-gold-400/10">
              <p className="text-sm text-brown-dark/50 text-center">
                Última atualização: Janeiro 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
