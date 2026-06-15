import { Helmet } from "react-helmet-async";
import { FaInstagram, FaYoutube, FaTiktok, FaSpotify } from "react-icons/fa";

import { trackClick, trackOutbound } from "../lib/analytics";

import capaPeitoSambo from "../assets/Capa.png";
import capaClaveDeSol from "../assets/clave-de-sol/capa.png";
import capaRaizes from "../assets/raizes/card.png";

const currentYear = new Date().getFullYear();

export function HomePage() {
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

  const socialLinks = [
    {
      href: "https://www.instagram.com/lexisartista",
      label: "Instagram",
      icon: FaInstagram,
      ariaLabel: "Siga Lexis no Instagram",
    },
    {
      href: "https://www.youtube.com/@lexisartista",
      label: "YouTube",
      icon: FaYoutube,
      ariaLabel: "Inscreva-se no canal de Lexis no YouTube",
    },
    {
      href: "https://www.tiktok.com/@lexisartista",
      label: "TikTok",
      icon: FaTiktok,
      ariaLabel: "Siga Lexis no TikTok",
    },
    {
      href: "https://open.spotify.com/intl-pt/artist/5OJMapp4NOHTD7XtNJGcdy?si=bzYLaVDAScagj7LfOVZxAg",
      label: "Spotify",
      icon: FaSpotify,
      ariaLabel: "Ouça Lexis no Spotify",
    },
  ];

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
      {/* Header */}
      <header className="pt-12 pb-8 px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-2">
          Lexis
        </h1>
        <p className="text-stone-400 text-lg md:text-xl">
          Cantora e Compositora
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        {/* Singles Section */}
        <section aria-labelledby="singles-heading" className="mb-12">
          <h2
            id="singles-heading"
            className="text-2xl md:text-3xl font-bold text-center mb-8 text-amarelo"
          >
            Singles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {singles.map((single) => (
              <a
                key={single.href}
                href={single.href}
                onClick={() => trackClick("single_card", single.label)}
                className="group relative block bg-stone-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-amarelo focus:ring-offset-2 focus:ring-offset-stone-900"
                aria-label={`Ver página do single ${single.label}`}
              >
                {/* Badge Novo */}
                {single.isNew && (
                  <span className="absolute top-4 right-4 z-10 bg-amarelo text-stone-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Novo
                  </span>
                )}

                {/* Image Container */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={single.image}
                    alt={`Capa do single ${single.label}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-amarelo transition-colors">
                    {single.label}
                  </h3>
                  <p className="text-stone-400 text-sm md:text-base">
                    {single.description}
                  </p>

                  {/* CTA */}
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

        {/* Social Links Section */}
        <section aria-labelledby="social-heading" className="text-center">
          <h2
            id="social-heading"
            className="text-xl md:text-2xl font-bold mb-6 text-stone-300"
          >
            Siga nas redes
          </h2>

          <div className="flex justify-center items-center gap-4 flex-wrap">
            {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  onClick={() => trackOutbound(social.href, social.label)}
                  className="p-4 bg-stone-800 rounded-full hover:bg-amarelo hover:text-stone-900 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amarelo focus:ring-offset-2 focus:ring-offset-stone-900"
                >
                  <social.icon className="w-6 h-6" aria-hidden="true" />
                </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 py-8 px-4 text-center">
        <p className="text-stone-500 text-sm">
          &copy; {currentYear} Lexis. Todos os direitos reservados.
        </p>
      </footer>
    </div>
    </>
  );
}
