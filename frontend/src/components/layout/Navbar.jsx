import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";

import { Button } from "../ui/button";

import { NavLink, Link } from "react-router-dom";
import { Wrench } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50
     bg-background/70 backdrop-blur-sm 
    ">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo*/}
        <h1>
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
          >
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Wrench size={18} />
            </div>

            <span className="text-foreground">
              Quick<span className="text-primary">Serve</span>
            </span>
          </Link>
        </h1>

        {/* Center : Menu*/}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {/* Mission drop down*/}
            <NavigationMenuItem>
              {/* Trigger */}
              <NavigationMenuTrigger
                className="
      font-medium text-sm px-3 py-2 rounded-md
      text-foreground transition-all duration-200
      hover:text-primary hover:bg-secondary
      data-[state=open]:bg-secondary data-[state=open]:text-primary
    "
              >
                Our Mission
              </NavigationMenuTrigger>

              {/* Dropdown */}
              <NavigationMenuContent
                className="
      bg-card border border-border rounded-xl shadow-lg
      p-0 overflow-hidden
    "
              >
                <div className="w-80 p-5 space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    Our Mission
                  </h4>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium soluta, quo dignissimos non sed aut dolore iste
                    facilis sapiente illo!
                  </p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About Link*/}

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink
                  to="/about"
                  className="font-medium text-sm text-foreground transition-colors duration-200 hover:text-primary"
                >
                  About
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Service Link*/}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/services"
                  className="font-medium text-sm text-foreground transition-colors duration-200 hover:text-primary"
                >
                  Services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side buttons*/}
        <div className="flex gap-3">
          <Button
            asChild
            className="bg-primary text-primary-foreground rounded-sm px-6 py-3 transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu*/}
      {/* https://chatgpt.com/s/t_69df29c47d4c819190fb2c5507b4f0b6
         GPT LInk for mobile menu
      */}

    </nav>
  );
};

export default Navbar;
 