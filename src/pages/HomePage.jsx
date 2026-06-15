import { Helmet } from "react-helmet-async";
import { SocialLinks } from "../components/SocialLinks";
import { PageFooter } from "../components/PageFooter";

import { trackClick } from "../lib/analytics";

import capaClaveDeSol from "../assets/clave-de-sol/capa.png";
import capaPeitoSambo from "../assets/Capa.png";
import capaRaizes from "../assets/raizes/card.png";

const singles = [
  {
    href: "/clave-de-sol",
    label: "Clave de Sol",
    description: "Um samba que encoraja a recomeçar",
    image: capaClaveDeSol,
    isNew: true,
  },
  {
    href: "/peito-sambo",
    label: "Peito Sambô",
    description: "Um samba que bate no coração",
    image: capaPeitoSambo,
    isNew: false,
  },
  {
    href: "/raizes",
    label: "Raízes",
    description: "EP Raízes Melódicas",
    image: capaRaizes,
    isNew: true,
  },
];

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Lexis | Cantora e Compositora de Samba</title>
        <meta name="description" content="Lexis é cantora e compositora brasileira de samba. Ouça seus singles 'Clave de Sol', 'Peito Sambô' e o EP 'Raízes'. Músicas autorais que unem samba, jazz, fé e brasilidade." />
        <link rel="canonical" href="https://lexisartista.com.br/" />
        <meta property="og:url" content="https://lexisartista.com.br/" />
        <meta property="og:title" content="Lexis | Cantora e Compositora de Samba" />
        <meta property="og:description" content="Lexis é cantora e compositora brasileira de samba. Ouça seus singles 'Clave de Sol', 'Peito Sambô' e o EP 'Raízes'." />
        <meta property="og:image" content="https://lexisartista.com.br/og-image.png" />
        <meta name="twitter:url" content="https://lexisartista.com.br/" />
        <meta name="twitter:title" content="Lexis | Cantora e Compositora de Samba" />
        <meta name="twitter:description" content="Lexis é cantora e compositora brasileira de samba. Ouça seus singles 'Clave de Sol', 'Peito Sambô' e o EP 'Raízes'." />
        <meta name="twitter:image" content="https://lexisartista.com.br/og-image.png" />
      </Helmet>

      <div className="min-h-screen bg-linear-to-b from-stone-900 via-stone-800 to-stone-900 text-white">
        <header className="pt-14 pb-10 px-4 text-center">
          <h1 className="font-principal text-8xl md:text-9xl text-amarelo leading-none">
            Lexis
          </h1>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="h-px w-10 bg-amarelo/40" aria-hidden="true" />
            <p className="text-stone-400 text-xs uppercase tracking-[0.25em]">
              Cantora e Compositora
            </p>
            <span className="h-px w-10 bg-amarelo/40" aria-hidden="true" />
          </div>
        </header>

        <main className="container mx-auto px-4 pb-16">
          <section aria-labelledby="singles-heading" className="mb-14">
            <h2
              id="singles-heading"
              className="text-xs uppercase tracking-[0.3em] text-stone-500 text-center mb-8"
            >
              Discografia
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {singles.map((single) => (
                <a
                  key={single.href}
                  href={single.href}
                  onClick={() => trackClick("single_card", single.label)}
                  className="group relative block bg-stone-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-amarelo focus:ring-offset-2 focus:ring-offset-stone-900"
                  aria-label={`Ver página de ${single.label}`}
                >
                  {single.isNew && (
                    <span className="absolute top-4 right-4 z-10 bg-amarelo text-stone-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Novo
                    </span>
                  )}

                  <div className="aspect-square overflow-hidden">
                    <img
                      src={single.image}
                      alt={`Capa de ${single.label}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-amarelo transition-colors">
                      {single.label}
                    </h3>
                    <p className="text-stone-400 text-sm">{single.description}</p>
                    <div className="mt-4 flex items-center text-amarelo font-semibold text-sm">
                      <span>Saiba mais</span>
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section aria-labelledby="social-heading" className="text-center">
            <h2
              id="social-heading"
              className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-8"
            >
              Siga nas redes
            </h2>
            <SocialLinks variant="dark" />
          </section>
        </main>

        <PageFooter />
      </div>
    </>
  );
}
