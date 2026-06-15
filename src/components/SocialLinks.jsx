import { FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import { trackOutbound } from "../lib/analytics";

const SOCIALS = {
  instagram: {
    href: "https://www.instagram.com/lexisartista",
    label: "Instagram",
    icon: FaInstagram,
    ariaLabel: "Siga Lexis no Instagram",
  },
  tiktok: {
    href: "https://www.tiktok.com/@lexisartista",
    label: "TikTok",
    icon: FaTiktok,
    ariaLabel: "Siga Lexis no TikTok",
  },
  youtube: {
    href: "https://www.youtube.com/@lexisartista",
    label: "YouTube",
    icon: FaYoutube,
    ariaLabel: "Inscreva-se no canal de Lexis no YouTube",
  },
  spotify: {
    href: "https://open.spotify.com/intl-pt/artist/5OJMapp4NOHTD7XtNJGcdy?si=bzYLaVDAScagj7LfOVZxAg",
    label: "Spotify",
    icon: FaSpotify,
    ariaLabel: "Ouça Lexis no Spotify",
  },
};

/**
 * variant "dark"  — ícones sobre fundo escuro (bg-terra-card, hover → amarelo)
 * variant "gold"  — ícones sobre círculo amarelo com ícone vinho (destaques)
 */
export function SocialLinks({
  links = ["instagram", "tiktok", "youtube", "spotify"],
  variant = "dark",
  analyticsContext = "",
  label,
  align = "center",
}) {
  const alignClass = align === "start" ? "justify-start" : "justify-center";
  const items = links.map((key) => SOCIALS[key]).filter(Boolean);

  return (
    <div className={`flex items-center gap-4 flex-wrap ${alignClass}`}>
      {label && <span className="text-lg font-bold">{label}</span>}
      {items.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            onClick={() => trackOutbound(social.href, social.label.toLowerCase(), analyticsContext)}
            className={
              variant === "gold"
                ? "social-icon transition-transform duration-300"
                : "p-4 bg-terra-card rounded-full hover:bg-amarelo hover:text-terra transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amarelo focus:ring-offset-2 focus:ring-offset-terra"
            }
          >
            {variant === "gold" ? (
              <div className="p-4 bg-amarelo rounded-full flex items-center justify-center">
                <Icon className="text-vinho w-6 h-6" aria-hidden="true" />
              </div>
            ) : (
              <Icon className="w-6 h-6" aria-hidden="true" />
            )}
          </a>
        );
      })}
    </div>
  );
}
