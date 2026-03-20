import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
}

const SITE_URL = "https://vesper-baltic-premium-distributor.lovable.app";

const SEO = ({ title, description, ogImage }: SEOProps) => {
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

    if (ogImage) {
      setMeta('meta[property="og:image"]', ogImage);
      setMeta('meta[name="twitter:image"]', ogImage);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${SITE_URL}${location.pathname}`);
    }
  }, [title, description, ogImage, location.pathname]);

  return null;
};

export default SEO;
