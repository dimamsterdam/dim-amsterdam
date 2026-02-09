
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { DesktopNavigation } from "./navbar/DesktopNavigation";
import { MobileNavigation } from "./navbar/MobileNavigation";
import { menuItems } from "@/data/navigationData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-display font-bold tracking-tighter text-foreground"
          >
            DIM
          </Link>

          <DesktopNavigation menuItems={menuItems} />
          
          {isMobile && <MobileNavigation menuItems={menuItems} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
