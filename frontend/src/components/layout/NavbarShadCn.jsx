import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "../ui/button";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export const NavbarShadCn = () => {
  return (
    <div className="w-full border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo*/}
        <h1 className="text-xl font-bold">
            <Link to='/'>
               ServiceLi
            </Link>
        </h1>

        {/* Center : Menu*/}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {/* Mission drop down*/}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Mission</NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className="w-75 p-4">
                  <p className="text-sm text-muted-foreground">
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
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Service Link*/}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/services">Services</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side buttons*/}
        <div className="flex gap-3">
          <Button asChild>
            <Link to='/login'>
              Login
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link to='/register'>
                Register            
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
