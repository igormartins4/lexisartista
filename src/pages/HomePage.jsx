import { Helmet } from "react-helmet-async";
import capaPeitoSambo from "../assets/Capa.png";
import capaClaveDeSol from "../assets/clave-de-sol/capa.png";
import capaRaizes from "../assets/raizes/card.png";
import { PageFooter } from "../components/PageFooter";
import { SocialLinks } from "../components/SocialLinks";
import { trackClick } from "../lib/analytics";

const LANCAMENTOS = [
  {
    href: "/raizes",
    label: "Raízes",
    type: "ep",
    descricao: "Um mergulho profundo na identidade, no calor humano e na conexão com a terra.",
    image: capaRaizes,
    isNovo: true,
  },
  {
    href: "/clave-de-sol",
    label: "Clave de Sol",
    type: "single",
    descricao: "Um samba que encoraja a recomeçar",
    image: capaClaveDeSol,
    isNovo: false,
  },
  {
    href: "/peito-sambo",
    label: "Peito Sambô",
    type: "single",
    descricao: "Um samba que bate no coração",
    image: capaPeitoSambo,
    isNovo: false,
  },
];

const PROXIMO_SHOW = {
  data: "25 de julho",
  hora: "19h",
  local: "NaCaza",
  cidade: "Contagem, MG",
  href: "/raizes#show",
};

const [destaque, ...demais] = LANCAMENTOS;

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
        {/* Banner: próximo show */}
        <a
          href={PROXIMO_SHOW.href}
          onClick={() => trackClick("banner_proximo_show")}
          className="block bg-amarelo text-terra hover:bg-ambar transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-terra"
          aria-label={`Próximo show: ${PROXIMO_SHOW.data}, ${PROXIMO_SHOW.hora}, ${PROXIMO_SHOW.local}, ${PROXIMO_SHOW.cidade}`}
        >
          <p className="text-center text-xs font-bold uppercase tracking-label py-2.5 px-4">
            <span className="mr-1">🎵</span>
            <span>Próximo show</span>
            <span className="mx-2 opacity-40">·</span>
            <span>
              {PROXIMO_SHOW.data} · {PROXIMO_SHOW.hora} · {PROXIMO_SHOW.local},{" "}
              {PROXIMO_SHOW.cidade}
            </span>
            <span className="ml-2 underline underline-offset-2 hidden sm:inline">
              Ver detalhes →
            </span>
          </p>
        </a>

        <header className="pt-12 pb-8 px-4 text-center">
          <h1 className="font-principal text-8xl md:text-9xl text-amarelo leading-none">Lexis</h1>
          <div className="flex items-center justify-center gap-3 mt-2 mb-4">
            <span className="h-px w-10 bg-amarelo/30" aria-hidden="true" />
            <p className="text-texto-decorativo text-xs uppercase tracking-label">
              Cantora e Compositora
            </p>
            <span className="h-px w-10 bg-amarelo/30" aria-hidden="true" />
          </div>
          <p className="text-texto-moderado text-sm max-w-xs mx-auto leading-relaxed">
            Samba autoral com fé, jazz e brasilidade — Minas Gerais.
          </p>
        </header>

        <main className="container mx-auto px-4 pb-16">
          {/* Lançamento em destaque */}
          <section aria-labelledby="destaque-heading" className="mb-6">
            <h2
              id="destaque-heading"
              className="text-xs uppercase tracking-label-wide text-texto-decorativo text-center mb-5"
            >
              Último lançamento
            </h2>

            <a
              href={destaque.href}
              onClick={() => trackClick("destaque_card", destaque.label)}
              className="group relative flex flex-col sm:flex-row bg-terra-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-amarelo focus:ring-offset-2 focus:ring-offset-terra max-w-5xl mx-auto"
              aria-label={`Ver página do ${destaque.type === "ep" ? "EP" : "single"} ${destaque.label}`}
            >
              {/* Imagem */}
              <div className="aspect-square sm:w-64 sm:shrink-0 md:w-80 overflow-hidden">
                <img
                  src={destaque.image}
                  alt={`Capa do ${destaque.type === "ep" ? "EP" : "single"} ${destaque.label}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 md:p-8 flex flex-col justify-between grow">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-amarelo text-terra text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Novo {destaque.type === "ep" ? "EP" : "Single"}
                    </span>
                    <span className="text-texto-decorativo text-xs uppercase tracking-label">
                      {destaque.type}
                    </span>
                  </div>
                  <h3 className="font-principal text-5xl md:text-6xl lg:text-7xl text-amarelo leading-none mb-4 group-hover:text-ambar transition-colors">
                    {destaque.label}
                  </h3>
                  <p className="text-texto-moderado text-base md:text-lg leading-relaxed max-w-md">
                    {destaque.descricao}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-amarelo font-semibold text-sm">
                  <span>Ouvir agora</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          </section>

          {/* Demais lançamentos */}
          <section aria-labelledby="discografia-heading" className="mb-14">
            <h2
              id="discografia-heading"
              className="text-xs uppercase tracking-label-wide text-texto-decorativo text-center mb-5 mt-10"
            >
              Discografia
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {demais.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => trackClick("discografia_card", item.label)}
                  className="group relative flex flex-row bg-terra-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-amarelo focus:ring-offset-2 focus:ring-offset-terra"
                  aria-label={`Ver página do ${item.type} ${item.label}`}
                >
                  {item.isNovo && (
                    <span className="absolute top-3 right-3 z-10 bg-amarelo text-terra text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      Novo
                    </span>
                  )}
                  {/* Thumbnail quadrado */}
                  <div className="w-24 sm:w-28 shrink-0 aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={`Capa de ${item.label}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-center gap-0.5">
                    <p className="text-texto-decorativo text-[10px] uppercase tracking-label">
                      {item.type}
                    </p>
                    <h3 className="text-sm font-bold group-hover:text-amarelo transition-colors leading-snug">
                      {item.label}
                    </h3>
                    <p className="text-texto-decorativo text-xs leading-snug">{item.descricao}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Redes sociais */}
          <section aria-labelledby="social-heading" className="text-center">
            <h2
              id="social-heading"
              className="text-xs uppercase tracking-label-wide text-texto-decorativo mb-8"
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
