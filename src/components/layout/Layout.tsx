import { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AgeVerification from "@/components/shared/AgeVerification";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AgeVerification />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/37122100200"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};

export default Layout;
