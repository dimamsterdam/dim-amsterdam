
export interface SubMenuItem {
  label: string;
  href: string;
}

export interface ServiceMenuItem extends SubMenuItem {
  subItems?: SubMenuItem[];
}

export interface MenuItem {
  label: string;
  href?: string;
  dropdown?: boolean;
  items?: (ServiceMenuItem | SubMenuItem)[];
}

export const serviceItems: SubMenuItem[] = [
  { label: "Organisatieontwikkeling", href: "/diensten/organisatieontwikkeling" },
  { label: "Leiderschaps- & Teamontwikkeling", href: "/diensten/leiderschapsontwikkeling" },
  { label: "Executive Coaching", href: "/diensten/executive-coaching" },
];

export const caseItems: ServiceMenuItem[] = [
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

export const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
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
