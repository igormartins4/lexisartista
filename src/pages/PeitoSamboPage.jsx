import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import fotoCapa from "../assets/Capa.png";
import fotoInicio from "../assets/inicio.jpg";
import logoPref from "../assets/logo-pref.png";
import { FadeInSection } from "../components/FadeInSection";
import OptimizedImage from "../components/OptimizedImage";
import { PageFooter } from "../components/PageFooter";
import { SocialLinks } from "../components/SocialLinks";
import { trackClick } from "../lib/analytics";

const linkPreSave = "https://musicpro.live/s/7900279496364";

export function PeitoSamboPage() {
  return (
    <>
      <Helmet>
        <title>Peito Sambô | Lexis - Single de Samba</title>
        <meta
          name="description"
          content="Peito Sambô é um samba que bate no coração. Single autoral de Lexis que nasce do luto, mas celebra a vida — um canto sobre memória, liberdade, acolhimento e fé."
        />
        <link rel="canonical" href="https://lexisartista.com.br/peito-sambo" />
        <meta property="og:type" content="music.song" />
        <meta property="og:url" content="https://lexisartista.com.br/peito-sambo" />
        <meta property="og:title" content="Peito Sambô | Lexis - Single de Samba" />
        <meta
          property="og:description"
          content="Peito Sambô é um samba que bate no coração. Single autoral de Lexis sobre memória, liberdade, acolhimento e fé."
        />
        <meta property="og:image" content="https://lexisartista.com.br/og-peito-sambo.png" />
        <meta property="music:musician" content="Lexis" />
        <meta name="twitter:url" content="https://lexisartista.com.br/peito-sambo" />
        <meta name="twitter:title" content="Peito Sambô | Lexis - Single de Samba" />
        <meta
          name="twitter:description"
          content="Peito Sambô é um samba que bate no coração. Single autoral de Lexis sobre memória, liberdade, acolhimento e fé."
        />
        <meta name="twitter:image" content="https://lexisartista.com.br/og-peito-sambo.png" />
      </Helmet>

      <div className="w-full h-full antialiased">
        <header className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4">
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src={fotoInicio}
              alt="Imagem promocional do single Peito Sambô"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/65 pointer-events-none" />
          </div>

          <nav className="absolute top-0 left-0 z-20 p-5">
            <Link
              to="/"
              className="flex items-center gap-2 text-white/60 hover:text-amarelo transition-colors text-sm tracking-wide"
              aria-label="Voltar para página inicial"
            >
              ← Lexis
            </Link>
          </nav>

          <div className="relative z-10 text-center flex flex-col items-center px-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50 text-shadow-custom mb-6">
              — single —
            </p>
            <h1 className="font-principal text-7xl md:text-[9rem] lg:text-[11rem] text-amarelo text-shadow-custom leading-none mb-5">
              Peito Sambô
            </h1>
            <p className="text-base md:text-xl font-light max-w-sm text-white/70 text-shadow-custom mb-10">
              Um samba que bate no coração
            </p>
            <a
              href={linkPreSave}
              onClick={() => trackClick("cta_single_disponivel_peito_sambo")}
              className="cta-button bg-amarelo hover:bg-ambar text-stone-900 font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest"
              rel="noopener noreferrer"
              target="_blank"
            >
              Single Disponível
            </a>
          </div>
        </header>

        <main>
          <FadeInSection>
            <section id="video-clipe" className="py-16 md:py-24 bg-terra-card text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Assista ao Videoclipe</h2>
                <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ELcPAH_zdL0?si=_m-yD12IFKurqGRs"
                    title="Clipe Peito Sambô"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2 m-2 lg:p-6">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-xl w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/BSm2aWmMy6o?si=BqnIHBUMDAhm4pRE"
                      title="Workshop SAMBA EM CENA: Vozes da Comunidade"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left text-marrom">
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Workshop "SAMBA EM CENA: Vozes da Comunidade"
                  </h2>
                  <div className="w-full leading-relaxed text-lg lg:text-xl">
                    <p className="mb-4">
                      Este vídeo é o <strong>Workshop Online</strong> do projeto "SAMBA EM CENA:
                      Vozes da Comunidade", pensado como contrapartida formativa e, ao mesmo tempo,
                      como um registro audiovisual do processo vivido ao longo da realização do
                      projeto.
                    </p>
                    <p className="mb-4">
                      Mais do que um workshop tradicional, este conteúdo se constrói como um{" "}
                      <strong>compilado de memórias, bastidores e percepções</strong>, reunindo
                      entrevistas com a equipe, imagens do desenvolvimento do projeto e relatos de
                      quem fez tudo isso acontecer.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section id="sobre" className="py-16 md:py-24">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2">
                  <OptimizedImage
                    src={fotoCapa}
                    alt="Arte oficial do single Peito Sambô"
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light italic text-marrom">
                    "Peito Sambô é um samba que nasce do luto, mas celebra a vida — um canto sobre
                    memória, liberdade, acolhimento e fé."
                  </p>
                  <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
                    <span className="text-lg font-bold text-marrom">Siga Lexis:</span>
                    <SocialLinks
                      variant="gold"
                      links={["instagram", "tiktok", "youtube"]}
                      analyticsContext="peito_sambo"
                    />
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section id="playlist" className="py-16 md:py-24 text-center">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  A inspiração por trás da música
                </h2>
                <p className="mb-8 text-stone-600 text-lg">
                  "Versos d'Alma – ouça a playlist que inspira o novo single"
                </p>
                <div className="p-2">
                  <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/7w6hY3UFY1CbUsGp5h1m9r?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Playlist Versos d'Alma"
                  />
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section id="final-cta" className="py-16 md:py-24 bg-terra-card text-white text-center">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Não fique de fora!</h2>
                <p className="mb-8 text-white/60 text-lg">
                  Adicione já "Peito Sambô" na sua playlist!
                </p>
                <a
                  href={linkPreSave}
                  onClick={() => trackClick("cta_single_ja_disponivel_peito_sambo")}
                  className="cta-button bg-amarelo hover:bg-ambar text-stone-900 font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Single já Disponível
                </a>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section className="py-16 md:py-24 text-center">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-vinho">
                  Quer conhecer mais?
                </h2>
                <p className="mb-8 text-stone-600 text-lg">
                  Explore outros trabalhos e descubra mais sobre a artista.
                </p>
                <Link
                  to="/"
                  className="inline-block bg-vinho hover:bg-red-900 text-white font-bold py-4 px-10 rounded-full text-sm uppercase tracking-widest transition-colors"
                >
                  Conheça mais trabalhos da artista
                </Link>
              </div>
            </section>
          </FadeInSection>
        </main>

        <PageFooter>
          <p className="font-bold text-stone-300 mb-4">Apoio:</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <OptimizedImage src={logoPref} alt="Logo Prefeitura" />
          </div>
        </PageFooter>
      </div>
    </>
  );
}
