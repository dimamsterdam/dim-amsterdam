import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface SubMenuItem {
  label: string;
  href: string;
}

interface ServiceMenuItem extends SubMenuItem {
  subItems?: SubMenuItem[];
}

interface MenuItem {
  label: string;
  href?: string;
  dropdown?: boolean;
  items?: (ServiceMenuItem | SubMenuItem)[];
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
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

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  const serviceItems: SubMenuItem[] = [
    { label: "Organisatieontwikkeling", href: "/diensten/organisatieontwikkeling" },
    { label: "Leiderschaps- & Teamontwikkeling", href: "/diensten/leiderschapsontwikkeling" },
    { label: "Executive Coaching", href: "/diensten/executive-coaching" },
  ];

  const caseItems: ServiceMenuItem[] = [
    { 
      label: "Organisatieontwikkeling", 
      href: "/diensten/organisatieontwikkeling",
      subItems: [
        { label: "Case: Cultuurverandering", href: "/cases/cultuurverandering" },
        { label: "Case: Samenwerking & Conflicthantering", href: "/cases/samenwerking-conflicthantering" },
        { label: "Case: Herijking visie & strategie", href: "/cases/herijking-visie-strategie" },
      ]
    },
    { 
      label: "Leiderschaps- & Teamontwikkeling", 
      href: "/diensten/leiderschapsontwikkeling",
      subItems: [
        { label: "Case: Leiderschapsprogramma", href: "/cases/leiderschapsprogramma" },
        { label: "Case: Intervisie & Strategisch Leiderschap", href: "/cases/intervisie-strategisch-leiderschap" },
        { label: "Case: Teamontwikkeling", href: "/cases/teamontwikkeling" },
      ]
    },
  ];

  const menuItems: MenuItem[] = [
    {
      label: "Aanbod",
      dropdown: true,
      items: serviceItems,
    },
    { 
      label: "Klant cases", 
      dropdown: true,
      items: caseItems
    },
    { label: "Referenties", href: "/referenties" },
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
          <Link
            to="/"
            className="text-2xl font-display font-bold tracking-tighter"
          >
            <span className="text-gradient">DIM</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              item.dropdown ? (
                <HoverCard key={index} openDelay={0} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <div className="group relative px-3 py-2 text-sm font-semibold transition-colors duration-200 link-underline text-foreground hover:text-primary flex items-center cursor-pointer">
                      {item.label}
                      <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent align="center" className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg p-0 w-auto">
                    <div className="py-2">
                      {item.items?.map((subItem, subIndex) => (
                        'subItems' in subItem ? (
                          <div key={subIndex} className="relative group">
                            <Link 
                              to={subItem.href} 
                              className="flex items-center justify-between cursor-pointer w-full px-4 py-2 text-sm hover:bg-accent rounded-md"
                            >
                              <span>{subItem.label}</span>
                              <ChevronRight size={14} className="ml-2" />
                            </Link>
                            <div className="pl-4 space-y-1 my-1">
                              {subItem.subItems?.map((caseItem, caseIndex) => (
                                <Link 
                                  key={caseIndex}
                                  to={caseItem.href} 
                                  className="block px-4 py-1.5 text-xs font-light hover:bg-accent rounded-md"
                                >
                                  {caseItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link 
                            key={subIndex} 
                            to={subItem.href} 
                            className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
                          >
                            {subItem.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ) : (
                <Link
                  key={index}
                  to={item.href}
                  className="relative px-3 py-2 text-sm font-semibold transition-colors duration-200 link-underline text-foreground hover:text-primary"
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              className="ml-4 btn-primary"
            >
              Contact
            </Link>
          </nav>

          {isMobile && (
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
              <DrawerTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[85vh]">
                <div className="px-4 py-6 flex flex-col space-y-6 overflow-y-auto">
                  <h3 className="text-lg font-semibold text-center">Menu</h3>
                  
                  <nav className="flex flex-col gap-4">
                    {menuItems.map((item, index) => (
                      item.dropdown ? (
                        <div key={index} className="space-y-4">
                          <h4 className="font-semibold text-primary">{item.label}</h4>
                          <div className="ml-4 space-y-3 border-l-2 border-muted pl-3">
                            {item.items?.map((subItem, subIndex) => (
                              'subItems' in subItem ? (
                                <div key={subIndex} className="space-y-2">
                                  <Link
                                    to={subItem.href}
                                    className="font-medium block hover:text-primary transition-colors"
                                    onClick={() => setDrawerOpen(false)}
                                  >
                                    {subItem.label}
                                  </Link>
                                  <div className="ml-3 space-y-2 border-l border-muted pl-2">
                                    {subItem.subItems?.map((caseItem, caseIndex) => (
                                      <Link
                                        key={caseIndex}
                                        to={caseItem.href}
                                        className="text-sm block hover:text-primary transition-colors"
                                        onClick={() => setDrawerOpen(false)}
                                      >
                                        {caseItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  key={subIndex}
                                  to={subItem.href}
                                  className="block hover:text-primary transition-colors"
                                  onClick={() => setDrawerOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              )
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={index}
                          to={item.href}
                          className="font-semibold hover:text-primary transition-colors"
                          onClick={() => setDrawerOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )
                    ))}
                  </nav>
                  
                  <Link
                    to="/contact"
                    className="btn-primary text-center"
                    onClick={() => setDrawerOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
