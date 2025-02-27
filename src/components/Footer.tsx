
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Cultural Change", href: "/services/cultural-change" },
        { label: "Leadership Development", href: "/services/leadership" },
        { label: "Team Performance", href: "/services/team-performance" },
        { label: "Organizational Design", href: "/services/org-design" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Insights", href: "/insights" },
        { label: "Podcast", href: "/podcast" },
        { label: "Events", href: "/events" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-display font-bold tracking-tighter text-white">DIM</span>
            </Link>
            <p className="text-sm text-gray-300 max-w-sm">
              Empowering leaders to create purpose-driven cultures that drive sustainable performance and meaningful impact.
            </p>
            <div className="mt-6">
              <Link 
                to="/contact" 
                className="btn-primary bg-white text-secondary hover:bg-white/90"
              >
                Get in Touch
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

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} DIM Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
