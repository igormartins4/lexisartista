import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import fotoCapa from "../assets/clave-de-sol/capa.png";
import fotoCard from "../assets/clave-de-sol/card.png";
import fotoInicio from "../assets/clave-de-sol/inicio.jpg";
import logosApoio from "../assets/clave-de-sol/logos-apoio.png";
import logosLinha1 from "../assets/clave-de-sol/logos-linha1.png";
import logosLinha2 from "../assets/clave-de-sol/logos-linha2.png";
import { FadeInSection } from "../components/FadeInSection";
import OptimizedImage from "../components/OptimizedImage";
import { PageFooter } from "../components/PageFooter";
import { SocialLinks } from "../components/SocialLinks";
import { trackClick } from "../lib/analytics";

const linkSingle = "https://sndo.ffm.to/b40ppqn";

export function ClaveDeSolPage() {
  return (
    <>
      <Helmet>
        <title>Clave de Sol | Lexis - Single de Samba</title>
        <meta
          name="description"
          content="Clave de Sol é um samba que encoraja a recomeçar. Single autoral de Lexis que une samba e jazz para falar sobre recomeço, fé e perseverança. Projeto Samba d'Alma."
        />
        <link rel="canonical" href="https://lexisartista.com.br/clave-de-sol" />
        <meta property="og:type" content="music.song" />
        <meta property="og:url" content="https://lexisartista.com.br/clave-de-sol" />
        <meta property="og:title" content="Clave de Sol | Lexis - Single de Samba" />
        <meta
          property="og:description"
          content="Clave de Sol é um samba que encoraja a recomeçar. Single autoral de Lexis que une samba e jazz. Projeto Samba d'Alma."
        />
        <meta property="og:image" content="https://lexisartista.com.br/og-clave-de-sol.png" />
        <meta property="music:musician" content="Lexis" />
        <meta name="twitter:url" content="https://lexisartista.com.br/clave-de-sol" />
        <meta name="twitter:title" content="Clave de Sol | Lexis - Single de Samba" />
        <meta
          name="twitter:description"
          content="Clave de Sol é um samba que encoraja a recomeçar. Single autoral de Lexis que une samba e jazz."
        />
        <meta name="twitter:image" content="https://lexisartista.com.br/og-clave-de-sol.png" />
      </Helmet>

      <div className="w-full h-full antialiased">
        <header className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4">
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src={fotoInicio}
              alt="Imagem promocional do single Clave de Sol"
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
              Clave de Sol
            </h1>
            <p className="text-base md:text-xl font-light max-w-sm text-white/70 text-shadow-custom mb-10">
              Um samba que encoraja a recomeçar
            </p>
            <a
              href={linkSingle}
              onClick={() => trackClick("cta_single_disponivel_clave_de_sol")}
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
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2 m-2 lg:p-6">
                  <OptimizedImage
                    src={fotoCard}
                    alt="Card promocional Clave de Sol - Projeto Samba d'Alma"
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
                <div className="md:w-1/2 text-center md:text-left text-marrom">
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">Samba d'Alma</h2>
                  <div className="w-full leading-relaxed text-lg lg:text-xl">
                    <p className="mb-4">
                      <strong>Samba d'Alma</strong> é o projeto que apresenta o single autoral{" "}
                      <strong>"Clave de Sol"</strong>, de Lexis. A música une samba e jazz para
                      falar sobre recomeço, fé e perseverança.
                    </p>
                    <p className="mb-4">
                      Produzido de forma colaborativa com jovens artistas e em parceria com a{" "}
                      <strong>CasaMus</strong>, o projeto valoriza o samba, fortalece a cena
                      cultural mineira e promove representatividade feminina e negra — com
                      acessibilidade garantida em todos os conteúdos.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section id="lyric-video" className="py-16 md:py-24 bg-terra-card text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Assista ao Lyric Video</h2>
                <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/T8dVklm-TUs?si=obsaR-j_TtIEyTN0"
                    title="Lyric Video Clave de Sol"
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
            <section id="sobre" className="py-16 md:py-24">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2">
                  <OptimizedImage
                    src={fotoCapa}
                    alt="Arte oficial do single Clave de Sol"
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light italic text-marrom">
                    "Essa música nasce quando eu entendo que crescer também é aprender com a vida,
                    com as dores e com as alegrias. Clave de Sol fala sobre confiar no caminho,
                    seguir firme nos sonhos e deixar que a vida nos ensine o que realmente importa"
                  </p>
                  <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
                    <span className="text-lg font-bold text-marrom">Siga Lexis:</span>
                    <SocialLinks
                      variant="gold"
                      links={["instagram", "youtube"]}
                      analyticsContext="clave_de_sol"
                    />
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section id="playlist" className="py-16 md:py-24 text-center">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Pra curtir os dias</h2>
                <p className="mb-8 text-stone-600 text-lg">
                  "Folia de Luz" - Ouça a playlist de carnaval criada por Lexis com muito samba,
                  mpb, fé, brasilidade e músicas que abraçam a alma.
                </p>
                <div className="p-2">
                  <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/5SEMlUFreg6AjXYY5JBth1?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Playlist Folia de Luz"
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
                  Adicione já "Clave de Sol" na sua playlist!
                </p>
                <a
                  href={linkSingle}
                  onClick={() => trackClick("cta_single_ja_disponivel_clave_de_sol")}
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
          <div className="hidden md:flex justify-center items-center">
            <div className="bg-terra-card p-8 rounded-lg">
              <OptimizedImage src={logosApoio} alt="Logos de apoio" className="max-w-2xl w-full" />
            </div>
          </div>
          <div className="flex md:hidden flex-col items-center gap-6 px-2">
            <div className="bg-terra-card p-6 rounded-lg w-full">
              <OptimizedImage src={logosLinha1} alt="Logos de apoio - linha 1" className="w-full" />
            </div>
            <div className="bg-terra-card p-6 rounded-lg w-full">
              <OptimizedImage src={logosLinha2} alt="Logos de apoio - linha 2" className="w-full" />
            </div>
          </div>
        </PageFooter>
      </div>
    </>
  );
}
