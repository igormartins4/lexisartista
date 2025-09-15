import { FadeInSection } from "../components/FadeInSection";
import { Countdown } from "../components/Countdown";

import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import fotoCapa from "../assets/Capa.png";
import fotoInicio from "../assets/inicio.jpg";
import logoPref from "../assets/logo-pref.png";

const countDownDate = "2025-09-26T00:00:00";
const currentYear = new Date().getFullYear();

export function PeitoSamboPage() {
  return (
    <div className="w-full h-full antialiased">
      <header className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4">
        <div className="absolute inset-0 z-0">
          <img
            src={fotoInicio}
            alt="Imagem promocional do single Peito Sambô"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-shadow-custom">
            Novo Single de Lexis
          </h1>

          <h2 className="text-amarelo text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-shadow-custom mt-2 mb-6">
            Peito Sambô
          </h2>
          <p className="text-lg md:text-2xl font-light max-w-2xl text-shadow-custom">
            Um samba que bate no coração: <br className="md:hidden" /> Peito
            Sambô chega dia 26/09.
          </p>
          <Countdown targetDate={countDownDate} />
          <a
            href="#"
            className="cta-button bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider"
          >
            O Pré-Save logo estará disponível
          </a>
        </div>
      </header>

      <main>
        <FadeInSection>
          <section
            id="video-teaser"
            className="py-16 md:py-24 bg-stone-800 text-white"
          >
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Assista ao Teaser
              </h3>

              <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/W2E1BlnVlX8"
                  title="Teaser Peito Sambô"
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
                <img
                  src={fotoCapa}
                  alt="Arte oficial do single Peito Sambô"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light italic">
                  “Peito Sambô é um samba que nasce do luto, mas celebra a vida
                  — um canto sobre memória, liberdade, acolhimento e fé.”
                </p>
                <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
                  <span className="text-lg font-bold">Siga Lexis:</span>
                  <div className="flex gap-4 text-2xl">
                    <a
                      href="https://www.instagram.com/lexisartista"
                      aria-label="Instagram"
                      className="social-icon transition-transform duration-300"
                    >
                      <div className="p-4 bg-amarelo rounded-full flex items-center justify-center">
                        <FaInstagram className="text-vinho" />
                      </div>
                    </a>
                    <a
                      href="https://www.tiktok.com/@lexisartista"
                      aria-label="TikTok"
                      className="social-icon transition-transform duration-300"
                    >
                      <div className="p-4 bg-amarelo rounded-full flex items-center justify-center">
                        <FaTiktok className="text-vinho" />
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/@lexisartista"
                      aria-label="YouTube"
                      className="social-icon transition-transform duration-300"
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

        {/* <FadeInSection>
          <section id="newsletter" className="py-16 md:py-24 bg-stone-200">
            <div className="container mx-auto px-4 text-center max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                Receba novidades em primeira mão!
              </h3>
              <p className="mb-8 text-stone-600">
                Seja o primeiro a saber de tudo sobre o lançamento e próximos
                shows.
              </p>
              <form action="#" method="POST" className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  required
                  className="w-full p-4 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  required
                  className="w-full p-4 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="Seu WhatsApp (opcional)"
                  className="w-full p-4 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                />
                <button
                  type="submit"
                  className="cta-button w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider"
                >
                  Quero receber!
                </button>
              </form>
            </div>
          </section>
        </FadeInSection> */}

        <FadeInSection>
          <section id="playlist" className="py-16 md:py-24 text-center">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                A inspiração por trás da música
              </h3>
              <p className="mb-8 text-stone-600 text-lg">
                "Versos d’Alma – ouça a playlist que inspira o novo single"
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
                  title="Sua Playlist do Spotify"
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
                Garanta que "Peito Sambô" esteja na sua playlist no dia do
                lançamento.
              </p>
              <a
                href="#"
                className="cta-button bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider"
              >
                <button disabled="disabled">
                  Pré-save disponível em breve
                </button>
              </a>
            </div>
          </section>
        </FadeInSection>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold mb-4">Apoio:</p>
          <div className="flex justify-center items-center gap-8 mb-8 opacity-70">
            <span className="text-xl font-bold">
              <img src={logoPref} alt="Logo FMIC" />
            </span>
          </div>
          <p>&copy; {currentYear} Lexis. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
