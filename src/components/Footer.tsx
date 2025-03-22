
import { Link } from "react-router-dom";
import { footerContent } from "@/content/heroContent";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-display font-bold tracking-tighter text-white">DIM</span>
            </Link>
            <p className="text-sm text-gray-300 max-w-sm">
              {footerContent.description}
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
          {footerContent.links.map((column, idx) => (
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

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} DIM Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerContent.legalLinks.map((link, index) => (
              <Link key={index} to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
