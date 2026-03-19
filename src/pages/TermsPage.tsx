import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";

const TermsPage = () => (
  <Layout>
    <SEO title="Terms of Service — Vesper Group" description="Terms of Service for Vesper Group website. Read our terms and conditions for using our services." />
    <div className="section-padding py-24 md:py-32">
      <h1 className="text-display-md text-foreground mb-8">Terms of Service</h1>
      <div className="prose prose-invert max-w-3xl text-muted-foreground space-y-6">
        <p className="text-body-lg">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">1. Acceptance of Terms</h2>
        <p>By accessing and using the Vesper Group website, you accept and agree to be bound by these Terms of Service.</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">2. Age Requirement</h2>
        <p>This website contains information about alcoholic beverages. You must be at least 18 years of age to access this website.</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">3. Use of Content</h2>
        <p>All content on this website, including text, images, and logos, is the property of Vesper Group and may not be reproduced without written permission.</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">4. Limitation of Liability</h2>
        <p>Vesper Group shall not be liable for any damages arising from your use of this website or reliance on any information provided herein.</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">5. Contact</h2>
        <p>For questions about these Terms, contact us at <a href="mailto:info@vesper.group" className="text-primary hover:underline">info@vesper.group</a>.</p>
      </div>
    </div>
  </Layout>
);

export default TermsPage;
