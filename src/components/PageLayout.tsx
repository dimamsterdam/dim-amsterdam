
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
        Ga naar inhoud
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-24 md:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
