
import { Badge } from "@/components/ui/badge";


const row1 = [
  "Ministerie van Economische Zaken",
  "Ministerie van Infrastructuur en Milieu",
  "Ministerie van Algemene Zaken",
  "Ministerie van Binnenlandse Zaken",
];

const row2 = [
  "Erasmus Medisch Centrum",
  "Ministerie van Landbouw",
  "Ministerie van Buitenlandse Zaken",
  "Ministerie van Volksgezondheid",
];

const ClientLogoBar = () => {
  return (
    <section className="py-10 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-6">
        <p className="text-sm text-muted-foreground text-center tracking-wider uppercase">
          Vertrouwd door vooraanstaande organisaties
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/50 to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap mb-3">
          {[...row1, ...row1, ...row1].map((client, i) => (
            <Badge
              key={`r1-${i}`}
              variant="outline"
              className="mx-3 px-5 py-2.5 text-sm font-medium bg-background border-border text-foreground/70 whitespace-nowrap flex-shrink-0"
            >
              {client}
            </Badge>
          ))}
        </div>
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...row2, ...row2, ...row2].map((client, i) => (
            <Badge
              key={`r2-${i}`}
              variant="outline"
              className="mx-3 px-5 py-2.5 text-sm font-medium bg-background border-border text-foreground/70 whitespace-nowrap flex-shrink-0"
            >
              {client}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoBar;
