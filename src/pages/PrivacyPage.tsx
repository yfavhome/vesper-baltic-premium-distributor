import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import PageHero from "@/components/shared/PageHero";

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy Policy — Vesper Group" description="Privacy Policy of Vesper Group. Learn how we collect, use, and protect your personal data." />
    <div className="section-padding py-24 md:py-32">
      <h1 className="text-display-md text-foreground mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-3xl text-muted-foreground space-y-6">
        <p className="text-body-lg">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">1. Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide when contacting us through our website, including your name, email address, phone number, and company name.</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">2. How We Use Your Information</h2>
        <p>We use the information we collect to respond to your inquiries, provide our distribution services, and improve our website experience.</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">3. Data Protection</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">4. Cookies</h2>
        <p>Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.</p>
        
        <h2 className="text-xl font-display text-foreground mt-8">5. Contact</h2>
        <p>For questions about this Privacy Policy, contact us at <a href="mailto:info@vesper.group" className="text-primary hover:underline">info@vesper.group</a>.</p>
      </div>
    </div>
  </Layout>
);

export default PrivacyPage;
