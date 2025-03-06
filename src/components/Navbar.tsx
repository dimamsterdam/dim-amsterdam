import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
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

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { label: "Diensten", href: "/diensten" },
    { label: "Werkwijze", href: "/werkwijze" },
    { label: "Klant cases", href: "/klant-cases" },
    { label: "Over ons", href: "/over-ons" },
  ];

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
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-display font-bold tracking-tighter"
          >
            <span className="text-gradient">DIM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 link-underline ${
                  item.highlighted ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 btn-primary"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden flex items-center text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="animate-fade-in" />
            ) : (
              <Menu size={24} className="animate-fade-in" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-background z-40 animate-fade-in">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`text-lg font-medium py-2 px-4 hover:bg-accent rounded-md transition-colors duration-200 animate-slide-from-right ${
                  item.highlighted ? "text-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary mt-4 animate-slide-from-right"
              style={{ animationDelay: "0.25s" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
