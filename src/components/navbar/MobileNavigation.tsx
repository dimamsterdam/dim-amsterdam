
import { Link } from "react-router-dom";
import { Menu, Home } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { MenuItem, ServiceMenuItem } from "@/data/navigationData";
import { useState } from "react";

interface MobileNavigationProps {
  menuItems: MenuItem[];
}

export const MobileNavigation = ({ menuItems }: MobileNavigationProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
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
                <MobileDropdownItem 
                  key={index} 
                  item={item} 
                  onNavigate={() => setDrawerOpen(false)} 
                />
              ) : (
                <Link
                  key={index}
                  to={item.href}
                  className="font-semibold hover:text-primary transition-colors flex items-center gap-2"
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.label === "Home" && <Home size={18} />}
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
  );
};

interface MobileDropdownItemProps {
  item: MenuItem;
  onNavigate: () => void;
}

const MobileDropdownItem = ({ item, onNavigate }: MobileDropdownItemProps) => {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-primary">{item.label}</h4>
      <div className="ml-4 space-y-3 border-l-2 border-muted pl-3">
        {item.items?.map((subItem, subIndex) => (
          'subItems' in subItem ? (
            <MobileSubMenuWithCases 
              key={subIndex} 
              subItem={subItem as ServiceMenuItem} 
              onNavigate={onNavigate} 
            />
          ) : (
            <Link
              key={subIndex}
              to={subItem.href}
              className="block hover:text-primary transition-colors"
              onClick={onNavigate}
            >
              {subItem.label}
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

interface MobileSubMenuWithCasesProps {
  subItem: ServiceMenuItem;
  onNavigate: () => void;
}

const MobileSubMenuWithCases = ({ subItem, onNavigate }: MobileSubMenuWithCasesProps) => {
  return (
    <div className="space-y-2">
      <Link
        to={subItem.href}
        className="font-medium block hover:text-primary transition-colors"
        onClick={onNavigate}
      >
        {subItem.label}
      </Link>
      <div className="ml-3 space-y-2 border-l border-muted pl-2">
        {subItem.subItems?.map((caseItem, caseIndex) => (
          <Link
            key={caseIndex}
            to={caseItem.href}
            className="text-sm block hover:text-primary transition-colors"
            onClick={onNavigate}
          >
            {caseItem.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
