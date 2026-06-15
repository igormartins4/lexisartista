import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
let initialized = false;

export function initAnalytics() {
  if (!GA_MEASUREMENT_ID) return;
  ReactGA.initialize(GA_MEASUREMENT_ID, { testMode: false });
  initialized = true;
}

export function pageView(path) {
  if (!initialized) return;
  ReactGA.send({ hitType: "pageview", page: path });
}

export function trackEvent(action, label, params = {}) {
  if (!initialized) return;
  ReactGA.event({
    category: "engagement",
    action,
    label,
    ...params,
  });
}

export function trackClick(label, params = {}) {
  trackEvent("click", label, params);
}

export function trackOutbound(url, label) {
  trackEvent("outbound_click", label, { url });
}
