import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/shared/SEO";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO title="Page Not Found — 404" description="The page you're looking for doesn't exist. Return to Vesper Group's homepage to explore our premium beverage distribution services." />
      <div className="flex min-h-[60vh] items-center justify-center section-padding">
        <div className="text-center">
          <p className="text-label text-primary mb-4">404 Error</p>
          <h1 className="text-display-md text-foreground mb-4">Page Not Found</h1>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={16} />
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
