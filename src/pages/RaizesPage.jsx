import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import fotoCard from "../assets/raizes/capa.png";
import fotoInicio from "../assets/raizes/inicio.jpg";
import logoSecult from "../assets/raizes/logo-secult-brasao.png";
import { Countdown } from "../components/Countdown";
import { FadeInSection } from "../components/FadeInSection";
import OptimizedImage from "../components/OptimizedImage";
import { PageFooter } from "../components/PageFooter";
import { SocialLinks } from "../components/SocialLinks";
import { useScrollDepth } from "../hooks/useScrollDepth";
import { trackClick } from "../lib/analytics";

const linkEP = "https://sndo.ffm.to/oxppavb";
const releaseDate = "2026-06-26T00:00:00";

export function RaizesPage() {
  useScrollDepth();
  return (
    <>
      <Helmet>
        <title>Raízes | Lexis - EP Raízes Melódicas</title>
        <meta
          name="description"
          content="Raízes é o novo EP da artista Lexis. Um projeto que celebra conexões, ancestralidade e música orgânica. Ouça o EP e venha para o show de lançamento em Contagem."
        />
        <meta
          name="keywords"
          content="Raízes, Lexis, EP, Raízes Melódicas, música, samba, MPB, show, lançamento, Contagem, Minas Gerais, música orgânica, instrumental acústico"
        />
        <meta name="author" content="Lexis" />
        <link rel="canonical" href="https://lexisartista.com.br/raizes" />
        <meta property="og:type" content="music.album" />
        <meta property="og:url" content="https://lexisartista.com.br/raizes" />
        <meta property="og:title" content="Raízes | Lexis - EP Raízes Melódicas" />
        <meta
          property="og:description"
          content="Raízes é o novo EP da artista Lexis. Um projeto que celebra conexões, ancestralidade e música orgânica. Lançamento em 2026."
        />
        <meta property="og:image" content="https://lexisartista.com.br/og-raizes.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Lexis Artista" />
        <meta property="music:release_date" content="2026-06-26" />
        <meta property="music:musician" content="https://lexisartista.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://lexisartista.com.br/raizes" />
        <meta name="twitter:title" content="Raízes | Lexis - EP Raízes Melódicas" />
        <meta
          name="twitter:description"
          content="Raízes é o novo EP da artista Lexis. Um projeto que celebra conexões, ancestralidade e música orgânica."
        />
        <meta name="twitter:image" content="https://lexisartista.com.br/og-raizes.png" />
        <meta name="twitter:image:alt" content="Capa do EP Raízes de Lexis" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MusicAlbum",
                "@id": "https://lexisartista.com.br/raizes#album",
                albumReleaseType: "https://schema.org/EPRelease",
                name: "Raízes Melódicas",
                description:
                  "EP de Lexis que mergulha na identidade, no calor humano e na conexão com a terra. Texturas orgânicas e instrumentação acústica.",
                url: "https://lexisartista.com.br/raizes",
                image: "https://lexisartista.com.br/og-raizes.png",
                genre: ["Samba", "MPB"],
                datePublished: "2026-06-26",
                byArtist: { "@id": "https://lexisartista.com.br/#artist" },
              },
              {
                "@type": "Event",
                "@id": "https://lexisartista.com.br/raizes#show",
                name: "Show de Lançamento — Raízes Melódicas",
                description: "Show de lançamento do EP Raízes Melódicas de Lexis.",
                startDate: "2026-07-25T19:00:00-03:00",
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                location: {
                  "@type": "Place",
                  name: "NaCaza",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Rua México, 119 — Bairro Glória",
                    addressLocality: "Contagem",
                    addressRegion: "MG",
                    addressCountry: "BR",
                  },
                },
                performer: { "@id": "https://lexisartista.com.br/#artist" },
                url: "https://lexisartista.com.br/raizes",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Lexis",
                    item: "https://lexisartista.com.br/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Raízes",
                    item: "https://lexisartista.com.br/raizes",
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="w-full h-full antialiased">
        <header className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4">
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src={fotoInicio}
              alt="Imagem promocional do EP Raízes"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-overlay pointer-events-none" />
          </div>

          <nav className="absolute top-0 left-0 z-20 p-5">
            <Link
              to="/"
              className="flex items-center gap-2 text-texto-moderado hover:text-amarelo transition-colors text-sm tracking-wide"
              aria-label="Voltar para página inicial"
            >
              ← Lexis
            </Link>
          </nav>

          <div className="relative z-10 text-center flex flex-col items-center px-4">
            <p className="text-xs uppercase tracking-[0.4em] text-texto-decorativo text-shadow-custom mb-6">
              — ep —
            </p>
            <h1 className="font-principal text-7xl md:text-hero lg:text-hero-xl text-amarelo text-shadow-custom leading-none mb-5">
              Raízes
            </h1>
            <p className="text-base md:text-xl font-light max-w-sm text-texto-suave text-shadow-custom mb-10">
              Projeto Raízes Melódicas
            </p>
            <a
              href={linkEP}
              onClick={() =>
                trackClick("cta_ouvir", {
                  release_name: "Raízes",
                  content_type: "ep",
                  section: "hero",
                })
              }
              className="cta-button bg-amarelo hover:bg-ambar text-terra font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ouça o EP
            </a>
          </div>
        </header>

        <main>
          <FadeInSection sectionName="sobre_ep">
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2 m-2 lg:p-6">
                  <OptimizedImage
                    src={fotoCard}
                    alt="Card promocional Raízes Melódicas"
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
                <div className="md:w-1/2 text-center md:text-left text-marrom">
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Raízes Melódicas
                  </h2>
                  <div className="w-full leading-relaxed text-lg lg:text-xl">
                    <p className="mb-4">
                      O EP Raízes é um mergulho profundo na identidade, no calor humano e na conexão
                      com a terra. Com texturas orgânicas e instrumentação acústica, Lexis traz em
                      "Raízes Melódicas" uma sonoridade autêntica.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection sectionName="lancamento_ep">
            <section className="py-16 md:py-24 bg-terra-card text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Lançamento do EP</h2>
                <p className="text-lg text-texto-decorativo mb-4 max-w-xl mx-auto">
                  Disponível agora em todas as plataformas
                </p>
                <Countdown targetDate={releaseDate} />
                <a
                  href={linkEP}
                  onClick={() =>
                    trackClick("cta_ouvir", {
                      release_name: "Raízes",
                      content_type: "ep",
                      section: "lancamento",
                    })
                  }
                  className="inline-block cta-button bg-amarelo hover:bg-ambar text-terra font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest mt-4"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ouça o EP
                </a>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection sectionName="show_lancamento">
            <section className="py-16 md:py-24 bg-terra-card text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Show de Lançamento do EP</h2>
                <p className="text-lg text-texto-decorativo mb-12 max-w-xl mx-auto">
                  Venha celebrar o lançamento de Raízes Melódicas ao vivo
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="bg-terra rounded-lg p-8 shadow-xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-amarelo mb-3">Data</p>
                    <p className="text-2xl font-bold">25/07/2026</p>
                  </div>
                  <div className="bg-terra rounded-lg p-8 shadow-xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-amarelo mb-3">Horário</p>
                    <p className="text-2xl font-bold">19hrs</p>
                  </div>
                  <div className="bg-terra rounded-lg p-8 shadow-xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-amarelo mb-3">Local</p>
                    <p className="text-lg font-bold">NaCaza</p>
                    <a
                      href="https://maps.app.goo.gl/mkYdx3cCWVzS2QFw9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-texto-decorativo hover:text-amarelo transition-colors underline underline-offset-2"
                    >
                      Rua México 119, bairro Glória - Contagem
                    </a>
                  </div>
                </div>
                <a
                  href="https://www.sympla.com.br/evento/raizes-show-de-lancamento-de-lexis/3468633?share_id=copiarlink"
                  onClick={() =>
                    trackClick("cta_sympla", {
                      release_name: "Raízes",
                      content_type: "show",
                      section: "show_lancamento",
                    })
                  }
                  className="inline-block cta-button bg-amarelo hover:bg-ambar text-terra font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest mt-8"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Adquirir Ingressos
                </a>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection sectionName="visualizers">
            <section className="py-16 md:py-24 bg-terra-card text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Visualizers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {[
                    { id: "sOrxJ5GR84Y", title: "Visualizer 1" },
                    { id: "FXks9X7o8yM", title: "Visualizer 2" },
                    { id: "MfxSQLakAz8", title: "Visualizer 3" },
                  ].map((video) => (
                    <div
                      key={video.id}
                      className="aspect-video rounded-lg overflow-hidden shadow-2xl"
                    >
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection sectionName="redes_sociais">
            <section className="py-16 md:py-24 text-center">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-vinho">Siga Lexis</h2>
                <SocialLinks
                  variant="gold"
                  links={["instagram", "tiktok", "youtube"]}
                  analyticsContext="raizes"
                />
              </div>
            </section>
          </FadeInSection>

          <FadeInSection sectionName="ver_mais">
            <section className="py-16 md:py-24 text-center">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-vinho">
                  Quer conhecer mais?
                </h2>
                <p className="mb-8 text-subtexto text-lg">
                  Explore outros trabalhos e descubra mais sobre a artista.
                </p>
                <Link
                  to="/"
                  className="inline-block bg-vinho hover:bg-vinho-escuro text-white font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest transition-colors focus:outline-none focus:ring-4 focus:ring-vinho focus:ring-offset-2"
                >
                  Conheça mais trabalhos da artista
                </Link>
              </div>
            </section>
          </FadeInSection>
        </main>

        <PageFooter>
          <p className="text-sm text-subtexto-claro mb-6 max-w-2xl mx-auto">
            Projeto realizado com recursos do Fundo Estadual de Cultura. FEC: 2025.2508.0186
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-subtexto-claro">Realização</p>
            <OptimizedImage
              src={logoSecult}
              alt="Secretaria de Estado de Cultura e Turismo de Minas Gerais"
              className="h-20 w-auto"
            />
          </div>
        </PageFooter>
      </div>
    </>
  );
}
