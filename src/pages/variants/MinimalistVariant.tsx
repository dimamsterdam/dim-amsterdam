
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MinimalistHeroSection from "@/components/minimalist/MinimalistHeroSection";
import ClientLogoBar from "@/components/ClientLogoBar";
import ImpactStats from "@/components/ImpactStats";
import MinimalistTestimonialsSection from "@/components/minimalist/MinimalistTestimonialsSection";
import WhatWeDoSection from "@/components/minimalist/WhatWeDoSection";
import ValuesSection from "@/components/minimalist/ValuesSection";
import NewsletterSection from "@/components/minimalist/NewsletterSection";

const MinimalistVariant = () => {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth'
          });
        }
      }
    };
    document.addEventListener('click', handleLinkClick);
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <MinimalistHeroSection />
        <ClientLogoBar />
        <ImpactStats />
        <MinimalistTestimonialsSection />
        <WhatWeDoSection />
        <ValuesSection />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default MinimalistVariant;
