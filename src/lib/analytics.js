import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initAnalytics() {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

export function pageView(path) {
  ReactGA.send({ hitType: "pageview", page: path });
}

export function trackEvent(action, label, params = {}) {
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
