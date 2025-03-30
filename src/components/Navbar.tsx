import React, { useState, useEffect } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  description?: string;
}

interface NavMenuProps {
  label: string;
  items: NavItem[];
}

const services: NavItem[] = [
  {
    label: "Organisatieontwikkeling",
    href: "/diensten/organisatieontwikkeling",
    description: "Strategische begeleiding voor groei en innovatie."
  },
  {
    label: "Leiderschapsontwikkeling",
    href: "/diensten/leiderschapsontwikkeling",
    description: "Versterk uw leiders met impactvolle programma's."
  },
  {
    label: "Executive Coaching",
    href: "/diensten/executive-coaching",
    description: "Persoonlijke begeleiding voor top executives."
  }
];

const cases: NavItem[] = [
  {
    label: "Cultuurverandering",
    href: "/cases/cultuurverandering",
    description: "Succesverhalen van getransformeerde organisaties."
  },
  {
    label: "Samenwerking & Conflicthantering",
    href: "/cases/samenwerking-conflicthantering",
    description: "Verbeter de teamdynamiek en los conflicten op."
  },
  {
    label: "Herijking Visie & Strategie",
    href: "/cases/herijking-visie-strategie",
    description: "Ontwikkel een heldere en inspirerende toekomstvisie."
  },
  {
    label: "Leiderschapsprogramma",
    href: "/cases/leiderschapsprogramma",
    description: "Ontwikkel effectieve leiderschapskwaliteiten."
  },
  {
    label: "Intervisie Strategisch Leiderschap",
    href: "/cases/intervisie-strategisch-leiderschap",
    description: "Strategische intervisie voor leiders."
  },
  {
    label: "Teamontwikkeling",
    href: "/cases/teamontwikkeling",
    description: "Versterk de samenwerking en prestaties van teams."
  }
];

const contactButtonText = "Neem contact op";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isAtTop && !isOpen ? "bg-transparent" : "bg-white shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-24 md:h-28">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="DIM Logo" className="h-8 md:h-10" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavMenu label="Diensten" items={services} />
          <NavMenu label="Cases" items={cases} />
          <NavLink to="/referenties">Referenties</NavLink>
          <NavLink to="/over-ons">Over ons</NavLink>
          <Link to="/contact" className="ml-2">
            <Button>{contactButtonText}</Button>
          </Link>
        </nav>

        {/* Mobile navigation toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <img src="/logo.svg" alt="DIM Logo" className="h-8" />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {services.map((item) => (
              <NavLink key={item.href} to={item.href} onClick={closeMobileMenu}>
                {item.label}
              </NavLink>
            ))}
            {cases.map((item) => (
              <NavLink key={item.href} to={item.href} onClick={closeMobileMenu}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/referenties" onClick={closeMobileMenu}>Referenties</NavLink>
            <NavLink to="/over-ons" onClick={closeMobileMenu}>Over ons</NavLink>
            <Link to="/contact" onClick={closeMobileMenu}>
              <Button>{contactButtonText}</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "inline-block text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200",
        isActive ? "text-primary" : ""
      )
    }
  >
    {children}
  </RouterNavLink>
);

const NavMenu: React.FC<NavMenuProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 focus:outline-none flex items-center"
      >
        <span>{label}</span>
        <svg
          className={cn(
            "w-4 h-4 ml-1 transition-transform duration-200",
            isOpen ? "transform rotate-180" : ""
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={cn(
          "absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 origin-top-right z-10",
          isOpen ? "block" : "hidden"
        )}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
              role="menuitem"
              tabIndex={-1}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
