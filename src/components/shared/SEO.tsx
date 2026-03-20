import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://vesper-baltic-premium-distributor.lovable.app";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const SEO = ({ title, description, ogImage, jsonLd }: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title.includes("Vesper") ? title : `${title} | Vesper Group`;
    document.title = fullTitle;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);

    const image = ogImage || DEFAULT_OG_IMAGE;
    setMeta('meta[property="og:image"]', image);
    setMeta('meta[name="twitter:image"]', image);

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${SITE_URL}${location.pathname}`);
    }

    // JSON-LD structured data
    // Remove previous dynamic JSON-LD
    document.querySelectorAll('script[data-seo-jsonld]').forEach(el => el.remove());

    const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    
    // Always add Organization schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Vesper Group",
      "url": SITE_URL,
      "logo": `${SITE_URL}/favicon.ico`,
      "description": "Premium beverage distribution across the Baltic region. Connecting world-class brands with retail and HoReCa channels.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jelgavas ceļš 20, Tīraine",
        "addressLocality": "Mārupes novads",
        "postalCode": "LV-2167",
        "addressCountry": "LV"
      },
      "telephone": "+37122100200",
      "email": "info@vesper.group",
      "sameAs": [
        "https://www.instagram.com/vespergroup/",
        "https://www.facebook.com/vespergroup/"
      ]
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Vesper Group",
      "image": DEFAULT_OG_IMAGE,
      "url": SITE_URL,
      "telephone": "+37122100200",
      "email": "info@vesper.group",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jelgavas ceļš 20, Tīraine",
        "addressLocality": "Mārupes novads",
        "postalCode": "LV-2167",
        "addressCountry": "LV"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      "priceRange": "$$"
    };

    const allSchemas = [orgSchema, localBusinessSchema, ...schemas];

    allSchemas.forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach(el => el.remove());
    };
  }, [title, description, ogImage, jsonLd, location.pathname]);

  return null;
};

export default SEO;
