import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";

const CookiePage = () => (
  <Layout>
    <SEO title="Cookie Policy — Vesper Group" description="Cookie Policy for Vesper Group. Learn about the cookies we use and how to manage them." />
    <div className="section-padding py-24 md:py-32">
      <h1 className="text-display-md text-foreground mb-8">Cookie Policy</h1>
      <div className="prose prose-invert max-w-3xl text-muted-foreground space-y-6">
        <p className="text-body-lg">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">1. What Are Cookies</h2>
        <p>Cookies are small text files stored on your device when you visit our website. They help us improve your browsing experience.</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">2. Cookies We Use</h2>
        <p><strong className="text-foreground">Essential cookies:</strong> Required for the website to function (e.g., age verification).</p>
        <p><strong className="text-foreground">Analytics cookies:</strong> Help us understand how visitors use our website.</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">3. Managing Cookies</h2>
        <p>You can control cookies through your browser settings. Disabling cookies may affect some website functionality.</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">4. Contact</h2>
        <p>For questions about our Cookie Policy, contact us at <a href="mailto:info@vesper.group" className="text-primary hover:underline">info@vesper.group</a>.</p>
      </div>
    </div>
  </Layout>
);

export default CookiePage;
