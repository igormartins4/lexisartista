import { FadeInSection } from "../components/FadeInSection";
import OptimizedImage from "../components/OptimizedImage";

import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import fotoInicio from "../assets/clave-de-sol/inicio.jpg";
import fotoCard from "../assets/clave-de-sol/card.png";
import fotoCapa from "../assets/clave-de-sol/capa.png";
import logosApoio from "../assets/clave-de-sol/logos-apoio.png";
import logosLinha1 from "../assets/clave-de-sol/logos-linha1.png";
import logosLinha2 from "../assets/clave-de-sol/logos-linha2.png";

const linkSingle = "https://sndo.ffm.to/b40ppqn";

const currentYear = new Date().getFullYear();

export function ClaveDeSolPage() {
  return (
    <div className="w-full h-full antialiased">
      <header className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={fotoInicio}
            alt="Imagem promocional do single Clave de Sol"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-shadow-custom">
            Novo Single de Lexis
          </h1>

          <h2 className="text-amarelo text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-shadow-custom mt-2 mb-6">
            Clave de Sol
          </h2>
          <p className="text-lg md:text-2xl font-light max-w-2xl text-shadow-custom mb-8">
            Um samba que encoraja a recomeçar.
          </p>
          <button>
            <a
              href={linkSingle}
              className="cta-button bg-amarelo hover:bg-amber-600 text-stone-900 font-bold py-4 px-10 rounded-full text-base lg:text-lg uppercase tracking-wider"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Single Disponível</span>
            </a>
          </button>
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
              <div className="md:w-1/2 text-center md:text-left text-red-950">
                <div>
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Samba d'Alma 🎶
                  </h3>
                  <div className="w-full leading-relaxed text-lg lg:text-xl">
                    <p className="mb-4">
                      <strong>Samba d'Alma</strong> é o projeto que apresenta o
                      single autoral <strong>"Clave de Sol"</strong>, de Lexis.
                      A música une samba e jazz para falar sobre recomeço, fé e
                      perseverança.
                    </p>
                    <p className="mb-4">
                      Produzido de forma colaborativa com jovens artistas e em
                      parceria com a <strong>CasaMus</strong>, o projeto
                      valoriza o samba, fortalece a cena cultural mineira e
                      promove representatividade feminina e negra — com
                      acessibilidade garantida em todos os conteúdos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section
            id="lyric-video"
            className="py-16 md:py-24 bg-stone-800 text-white"
          >
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Assista ao Lyric Video
              </h3>

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
                ></iframe>
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
                <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light italic">
                  "Essa música nasce quando eu entendo que crescer também é
                  aprender com a vida, com as dores e com as alegrias. Clave de
                  Sol fala sobre confiar no caminho, seguir firme nos sonhos e
                  deixar que a vida nos ensine o que realmente importa"
                </p>
                <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
                  <span className="text-lg font-bold">Siga Lexis:</span>
                  <div className="flex gap-4 text-2xl">
                    <a
                      href="https://www.instagram.com/lexisartista?igsh=bDJobnJvbXE0Mjlw&utm_source=qr"
                      aria-label="Instagram"
                      className="social-icon transition-transform duration-300"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="p-4 bg-amarelo rounded-full flex items-center justify-center">
                        <FaInstagram className="text-vinho" />
                      </div>
                    </a>

                    <a
                      href="http://www.youtube.com/@lexisartista"
                      aria-label="YouTube"
                      className="social-icon transition-transform duration-300"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="p-4 bg-amarelo rounded-full flex items-center justify-center">
                        <FaYoutube className="text-vinho" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="playlist" className="py-16 md:py-24 text-center">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Pra curtir os dias 🎉
              </h3>
              <p className="mb-8 text-stone-600 text-lg">
                "Folia de Luz" - Ouça a playlist de carnaval criada por Lexis
                com muito samba, mpb, fé, brasilidade e músicas que abraçam a
                alma.
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
                ></iframe>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section
            id="final-cta"
            className="py-16 md:py-24 bg-stone-800 text-white text-center"
          >
            <div className="container mx-auto px-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Não fique de fora!
              </h3>
              <p className="mb-8 text-stone-300 text-lg">
                Adicione já "Clave de Sol" na sua playlist!
              </p>
              <button>
                <a
                  href={linkSingle}
                  className="cta-button bg-amarelo hover:bg-amber-600 text-stone-900 font-bold py-4 px-10 rounded-full text-base lg:text-lg uppercase tracking-wider"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Single já Disponível</span>
                </a>
              </button>
            </div>
          </section>
        </FadeInSection>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold mb-4">Apoio:</p>
          {/* Desktop: imagem completa */}
          <div className="hidden md:flex justify-center items-center mb-8">
            <div className="bg-stone-800 p-8 rounded-lg">
              <OptimizedImage
                src={logosApoio}
                alt="Logos de apoio"
                className="max-w-2xl w-full"
              />
            </div>
          </div>
          {/* Mobile: duas linhas */}
          <div className="flex md:hidden flex-col items-center gap-6 mb-8 px-2">
            <div className="bg-stone-800 p-6 rounded-lg w-full">
              <OptimizedImage
                src={logosLinha1}
                alt="Logos de apoio - linha 1"
                className="w-full"
              />
            </div>
            <div className="bg-stone-800 p-6 rounded-lg w-full">
              <OptimizedImage
                src={logosLinha2}
                alt="Logos de apoio - linha 2"
                className="w-full"
              />
            </div>
          </div>
          <p>&copy; {currentYear} Lexis. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
