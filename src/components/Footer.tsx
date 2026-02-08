
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Aanbod",
      links: [
        { label: "Organisatieontwikkeling", href: "/diensten/organisatieontwikkeling" },
        { label: "Leiderschaps- & Teamontwikkeling", href: "/diensten/leiderschapsontwikkeling" },
        { label: "Executive Coaching", href: "/diensten/executive-coaching" },
      ],
    },
    {
      title: "Cases",
      links: [
        { label: "Cultuurverandering", href: "/cases/cultuurverandering" },
        { label: "Leiderschapsprogramma", href: "/cases/leiderschapsprogramma" },
        { label: "Teamontwikkeling", href: "/cases/teamontwikkeling" },
        { label: "Samenwerking & Conflicthantering", href: "/cases/samenwerking-conflicthantering" },
        { label: "Herijking Visie & Strategie", href: "/cases/herijking-visie-strategie" },
      ],
    },
    {
      title: "Navigatie",
      links: [
        { label: "Over ons", href: "/over-ons" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy verklaring", href: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-display font-bold tracking-tighter text-white">DIM</span>
            </Link>
            <p className="text-sm text-gray-300 max-w-sm">
              Wij ondersteunen (top-)leidinggevenden in persoonlijke, team- en organisatieontwikkeling binnen de complexe dynamiek van het publiek domein.
            </p>
            <div className="mt-6">
              <Link 
                to="/contact" 
                className="btn-primary bg-white text-secondary hover:bg-white/90"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-medium text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar - Copyright and Privacy link */}
        <div className="pt-8 border-t border-gray-700 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} DIM Consultancy. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Verklaring
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
