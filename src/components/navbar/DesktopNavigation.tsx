
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MenuItem, ServiceMenuItem, SubMenuItem } from "@/data/navigationData";

interface DesktopNavigationProps {
  menuItems: MenuItem[];
}

export const DesktopNavigation = ({ menuItems }: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {menuItems.map((item, index) => (
        item.dropdown ? (
          <DropdownMenuItem key={index} item={item} />
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
  );
};

interface DropdownMenuItemProps {
  item: MenuItem;
}

const DropdownMenuItem = ({ item }: DropdownMenuItemProps) => {
  return (
    <HoverCard openDelay={0} closeDelay={100}>
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
              <SubMenuWithCases key={subIndex} subItem={subItem as ServiceMenuItem} />
            ) : (
              <Link 
                key={subIndex} 
                to={(subItem as SubMenuItem).href} 
                className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
              >
                {subItem.label}
              </Link>
            )
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

interface SubMenuWithCasesProps {
  subItem: ServiceMenuItem;
}

const SubMenuWithCases = ({ subItem }: SubMenuWithCasesProps) => {
  return (
    <div className="relative group">
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
  );
};
