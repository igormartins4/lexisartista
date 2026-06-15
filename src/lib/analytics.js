import ReactGA from "react-ga4";

let initialized = false;

export function initAnalytics() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!id) return;
  ReactGA.initialize(id);
  initialized = true;
}

// Visualização de página (chamado automaticamente pelo PageTracker)
export function pageView(path, title) {
  if (!initialized) return;
  ReactGA.send({ hitType: "pageview", page: path, title });
}

// Evento GA4 genérico — event_name + params object
export function trackEvent(eventName, params = {}) {
  if (!initialized) return;
  ReactGA.event(eventName, params);
}

/**
 * Clique em CTA, card ou elemento interativo.
 *
 * @param {string} action  - ação: "cta_ouvir", "card_click", "banner_show", etc.
 * @param {object} params  - dimensões: release_name, content_type, section, position, etc.
 *
 * @example
 * trackClick("cta_ouvir", { release_name: "Raízes", content_type: "ep", section: "hero" })
 * trackClick("card_click", { release_name: "Clave de Sol", content_type: "single", position: "discografia" })
 */
export function trackClick(action, params = {}) {
  trackEvent("cta_click", { action, ...params });
}

/**
 * Clique em link externo (rede social, plataforma de streaming).
 *
 * @param {string} url       - URL de destino
 * @param {string} platform  - "instagram", "tiktok", "youtube", "spotify", etc.
 * @param {string} context   - página/seção de origem, ex: "peito_sambo", "homepage"
 */
export function trackOutbound(url, platform, context = "") {
  trackEvent("outbound_click", { platform, context, url });
}

/**
 * Seção que entrou no viewport pela primeira vez.
 * Chamado automaticamente pelo FadeInSection quando `sectionName` é passado.
 *
 * @param {string} sectionName - nome da seção: "video_clipe", "sobre", "playlist", etc.
 * @param {object} params       - dimensões extras: release_name, content_type, etc.
 */
export function trackSectionView(sectionName, params = {}) {
  trackEvent("section_view", { section_name: sectionName, ...params });
}

/**
 * Marco de profundidade de scroll (25 / 50 / 75 / 100 %).
 * Chamado automaticamente pelo hook useScrollDepth.
 *
 * @param {number} depth    - percentual: 25, 50, 75 ou 100
 * @param {string} pagePath - pathname da rota atual
 */
export function trackScrollDepth(depth, pagePath) {
  trackEvent("scroll_depth", { percent_scrolled: depth, page_path: pagePath });
}
