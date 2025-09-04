import React, { useState, useEffect, useRef } from 'react';

// --- CSS Customizado (mesmo da versão HTML) ---
const CustomStyles = () => (
  <style>{`
    body {
        font-family: 'Inter', sans-serif;
        background-color: #FFF8F0; /* A warm off-white */
        color: #4A2E2C; /* A deep brown for text */
    }
    .text-shadow-custom {
        text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
    }
    .countdown-item {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .cta-button {
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    .cta-button:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
    .social-icon:hover {
        transform: scale(1.2);
        color: #D97706; /* Amber-600 */
    }
    /* Animation for elements on scroll */
    .fade-in-section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .fade-in-section.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
  `}</style>
);

// --- Componentes de Ícones SVG ---
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path><path d="M12 2v10"></path><path d="M12 12a4 4 0 1 1-4-4"></path></svg>
);
const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);


// --- Componente de Animação de Scroll ---
const FadeInSection = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        }, { rootMargin: '0px 0px -100px 0px' });
        
        const { current } = domRef;
        observer.observe(current);

        return () => observer.unobserve(current);
    }, []);

    return (
        <div ref={domRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

// --- Componente Countdown ---
const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isLaunched, setIsLaunched] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);
            if (!Object.keys(newTimeLeft).length) {
                setIsLaunched(true);
            }
        }, 1000);

        return () => clearTimeout(timer);
    });

    if (isLaunched) {
        return (
            <div className="text-center w-full py-4">
                <h3 className="text-3xl font-bold uppercase">Já disponível!</h3>
            </div>
        );
    }

    const formatTime = (value) => String(value).padStart(2, '0');

    return (
        <div className="flex justify-center gap-2 md:gap-4 my-8 text-center">
            <div className="countdown-item rounded-lg p-3 md:p-4 w-20 md:w-24">
                <span className="text-3xl md:text-4xl font-bold">{formatTime(timeLeft.days)}</span>
                <span className="block text-xs uppercase">Dias</span>
            </div>
            <div className="countdown-item rounded-lg p-3 md:p-4 w-20 md:w-24">
                <span className="text-3xl md:text-4xl font-bold">{formatTime(timeLeft.hours)}</span>
                <span className="block text-xs uppercase">Horas</span>
            </div>
            <div className="countdown-item rounded-lg p-3 md:p-4 w-20 md:w-24">
                <span className="text-3xl md:text-4xl font-bold">{formatTime(timeLeft.minutes)}</span>
                <span className="block text-xs uppercase">Minutos</span>
            </div>
            <div className="countdown-item rounded-lg p-3 md:p-4 w-20 md:w-24">
                <span className="text-3xl md:text-4xl font-bold">{formatTime(timeLeft.seconds)}</span>
                <span className="block text-xs uppercase">Segundos</span>
            </div>
        </div>
    );
};


// --- Componente Principal ---
function App() {
  const countDownDate = "2025-09-26T00:00:00";
  const currentYear = new Date().getFullYear();

  return (
    <>
      <CustomStyles />
      <div className="antialiased">
        <header className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4">
          <div className="absolute inset-0 z-0">
            <img src="https://placehold.co/1920x1080/6E2C00/FFF8F0?text=Foto+Promocional" alt="Imagem promocional do single Peito Sambô" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-shadow-custom">Novo Single de Lexis</h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-shadow-custom mt-2 mb-6" style={{ color: '#FBBF24' }}>Peito Sambô</h2>
            <p className="text-lg md:text-2xl font-light max-w-2xl text-shadow-custom">Um samba que bate no coração: <br className="md:hidden"/> Peito Sambô chega dia 26/09.</p>
            <Countdown targetDate={countDownDate} />
            <a href="#" className="cta-button bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider">
                Faça o pré-save agora
            </a>
          </div>
        </header>

        <main>
          <FadeInSection>
            <section id="video-teaser" className="py-16 md:py-24 bg-stone-800 text-white">
              <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-8">Assista ao Teaser</h3>
                <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                  <video className="w-full h-full object-cover" controls autoPlay muted loop poster="https://placehold.co/1280x720/D97706/FFFFFF?text=Teaser+Video">
                    {/* <source src="your-video.mp4" type="video/mp4" /> */}
                  </video>
                </div>
              </div>
            </section>
          </FadeInSection>
          
          <FadeInSection>
            <section id="sobre" className="py-16 md:py-24">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/2">
                  <img src="https://placehold.co/600x600/D97706/FFFFFF?text=Arte+do+Single" alt="Arte oficial do single Peito Sambô" className="rounded-lg shadow-xl w-full" />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light italic">
                      “Peito Sambô é um samba que nasce do luto, mas celebra a vida — um canto sobre memória, liberdade, acolhimento e fé.”
                  </p>
                  <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
                    <span className="text-lg font-bold">Siga Lexis:</span>
                    <div className="flex gap-4 text-2xl text-stone-600">
                      <a href="#" aria-label="Instagram" className="social-icon transition-transform duration-300"><InstagramIcon /></a>
                      <a href="#" aria-label="TikTok" className="social-icon transition-transform duration-300"><TikTokIcon /></a>
                      <a href="#" aria-label="YouTube" className="social-icon transition-transform duration-300"><YouTubeIcon /></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section id="newsletter" className="py-16 md:py-24 bg-stone-200">
              <div className="container mx-auto px-4 text-center max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">Receba novidades em primeira mão!</h3>
                  <p className="mb-8 text-stone-600">Seja o primeiro a saber de tudo sobre o lançamento e próximos shows.</p>
                  <form action="#" method="POST" className="space-y-4">
                      <input type="text" name="name" placeholder="Seu nome" required className="w-full p-4 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition" />
                      <input type="email" name="email" placeholder="Seu melhor e-mail" required className="w-full p-4 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition" />
                      <input type="tel" name="whatsapp" placeholder="Seu WhatsApp (opcional)" className="w-full p-4 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition" />
                      <button type="submit" className="cta-button w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider">
                          Quero receber!
                      </button>
                  </form>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section id="playlist" className="py-16 md:py-24 text-center">
              <div className="container mx-auto px-4">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">A inspiração por trás da música</h3>
                  <p className="mb-8 text-stone-600 text-lg">"Versos d’Alma – ouça a playlist que inspira o novo single"</p>
                  <a href="#" className="cta-button inline-block bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider">
                      Ouvir no Spotify
                  </a>
              </div>
            </section>
          </FadeInSection>
          
          <FadeInSection>
            <section id="final-cta" className="py-16 md:py-24 bg-stone-800 text-white text-center">
              <div className="container mx-auto px-4">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Não fique de fora!</h3>
                  <p className="mb-8 text-stone-300 text-lg">Garanta que "Peito Sambô" esteja na sua playlist no dia do lançamento.</p>
                  <a href="#" className="cta-button bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider">
                      Faça o pré-save agora
                  </a>
              </div>
            </section>
          </FadeInSection>
        </main>
        
        <footer className="bg-stone-900 text-stone-400 py-12">
            <div className="container mx-auto px-4 text-center">
                <p className="font-bold mb-4">Apoio:</p>
                <div className="flex justify-center items-center gap-8 mb-8 opacity-70">
                    <span className="text-xl font-bold">FMIC</span>
                    <span className="text-xl font-bold">Casa Mus</span>
                </div>
                <p>&copy; {currentYear} Lexis. Todos os direitos reservados.</p>
            </div>
        </footer>
      </div>
    </>
  )
}

export default App;
