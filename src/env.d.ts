/// <reference types="astro/client" />

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  trustLeaderAnalytics?: {
    send: (name: string, parameters?: Record<string, string | number | boolean>) => void;
  };
}

