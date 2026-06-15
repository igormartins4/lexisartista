import { Helmet } from "react-helmet-async";
import capaPeitoSambo from "../assets/Capa.png";
import capaClaveDeSol from "../assets/clave-de-sol/capa.png";
import capaRaizes from "../assets/raizes/card.png";
import { PageFooter } from "../components/PageFooter";
import { SocialLinks } from "../components/SocialLinks";
import { trackClick } from "../lib/analytics";

const singles = [
  {
    href: "/raizes",
    label: "Raízes",
    description: "EP Raízes Melódicas",
    image: capaRaizes,
    isNew: true,
  },
  {
    href: "/clave-de-sol",
    label: "Clave de Sol",
    description: "Um samba que encoraja a recomeçar",
    image: capaClaveDeSol,
    isNew: false,
  },
  {
    href: "/peito-sambo",
    label: "Peito Sambô",
    description: "Um samba que bate no coração",
    image: capaPeitoSambo,
    isNew: false,
  },
];

const [featured, ...secondary] = singles;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Lexis | Cantora e Compositora de Samba</title>
        <meta
          name="description"
          content="Lexis é cantora e compositora brasileira de samba. Ouça seus singles 'Clave de Sol', 'Peito Sambô' e o EP 'Raízes'. Músicas autorais que unem samba, jazz, fé e brasilidade."
        />
        <link rel="canonical" href="https://lexisartista.com.br/" />
        <meta property="og:url" content="https://lexisartista.com.br/" />
        <meta property="og:title" content="Lexis | Cantora e Compositora de Samba" />
        <meta
          property="og:description"
          content="Lexis é cantora e compositora brasileira de samba. Ouça seus singles 'Clave de Sol', 'Peito Sambô' e o EP 'Raízes'."
        />
        <meta property="og:image" content="https://lexisartista.com.br/og-image.png" />
        <meta name="twitter:url" content="https://lexisartista.com.br/" />
        <meta name="twitter:title" content="Lexis | Cantora e Compositora de Samba" />
        <meta
          name="twitter:description"
          content="Lexis é cantora e compositora brasileira de samba. Ouça seus singles 'Clave de Sol', 'Peito Sambô' e o EP 'Raízes'."
        />
        <meta name="twitter:image" content="https://lexisartista.com.br/og-image.png" />
      </Helmet>

      <div className="min-h-screen bg-terra bg-grain text-white">
        <header className="pt-14 pb-10 px-4 text-center">
          <h1 className="font-principal text-8xl md:text-9xl text-amarelo leading-none">Lexis</h1>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="h-px w-10 bg-amarelo/30" aria-hidden="true" />
            <p className="text-white/40 text-xs uppercase tracking-[0.3em]">
              Cantora e Compositora
            </p>
            <span className="h-px w-10 bg-amarelo/30" aria-hidden="true" />
          </div>
        </header>

        <main className="container mx-auto px-4 pb-16">
          <section aria-labelledby="singles-heading" className="mb-14">
            <h2
              id="singles-heading"
              className="text-xs uppercase tracking-[0.35em] text-white/30 text-center mb-8"
            >
              Discografia
            </h2>

            {/* Bento: featured card (2/3) + secondary stack (1/3) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
              {/* Featured card */}
              <a
                href={featured.href}
                onClick={() => trackClick("single_card", featured.label)}
                className="md:col-span-2 group relative flex flex-col md:flex-row bg-terra-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-amarelo focus:ring-offset-2 focus:ring-offset-terra"
                aria-label={`Ver página de ${featured.label}`}
              >
                {featured.isNew && (
                  <span className="absolute top-4 right-4 z-10 bg-amarelo text-stone-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Novo
                  </span>
                )}
                <div className="aspect-square md:w-2/5 md:aspect-auto overflow-hidden shrink-0">
                  <img
                    src={featured.image}
                    alt={`Capa de ${featured.label}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between grow">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">single</p>
                    <h3 className="font-principal text-4xl md:text-5xl text-amarelo leading-none mb-3 group-hover:text-ambar transition-colors">
                      {featured.label}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base">{featured.description}</p>
                  </div>
                  <div className="mt-6 flex items-center text-amarelo font-semibold text-sm">
                    <span>Ouvir agora</span>
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

              {/* Secondary cards stacked */}
              <div className="flex flex-col gap-4 md:gap-5">
                {secondary.map((single) => (
                  <a
                    key={single.href}
                    href={single.href}
                    onClick={() => trackClick("single_card", single.label)}
                    className="flex-1 group relative flex flex-row md:flex-col bg-terra-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-amarelo focus:ring-offset-2 focus:ring-offset-terra"
                    aria-label={`Ver página de ${single.label}`}
                  >
                    {single.isNew && (
                      <span className="absolute top-3 right-3 z-10 bg-amarelo text-stone-900 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Novo
                      </span>
                    )}
                    <div className="w-28 shrink-0 md:w-auto md:aspect-video overflow-hidden">
                      <img
                        src={single.image}
                        alt={`Capa de ${single.label}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-center">
                      <h3 className="text-sm font-bold group-hover:text-amarelo transition-colors">
                        {single.label}
                      </h3>
                      <p className="text-white/40 text-xs mt-1">{single.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="social-heading" className="text-center">
            <h2
              id="social-heading"
              className="text-xs uppercase tracking-[0.35em] text-white/30 mb-8"
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
