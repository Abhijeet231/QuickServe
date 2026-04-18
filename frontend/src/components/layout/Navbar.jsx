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
import { Wrench, Menu } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { status, logout, user } = useAuth();

  const dashboardPath =
    user?.role === "provider"
      ? "/provider/dashboard"
      : user?.role === "admin"
        ? "/admin/dashboard"
        : "/customer/dashboard";

  return (
    <nav className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">

      {/* DESKTOP */}
      <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg shadow-sm">
            <Wrench size={17} />
          </div>
          <span className="text-foreground">
            Quick<span className="text-primary">Serve</span>
          </span>
        </Link>

        {/* Center Nav */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium text-sm px-4 py-2 rounded-lg text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-accent data-[state=open]:bg-accent data-[state=open]:text-foreground">
                Our Mission
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-popover border border-border rounded-xl shadow-md">
                <div className="w-80 p-5 space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Our Mission</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Connecting customers with trusted local service providers - fast, transparent, and reliable.
                  </p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `font-medium text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-foreground bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`
                  }
                >
                  About
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `font-medium text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-foreground bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`
                  }
                >
                  Services
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-2">
          {status === "authenticated" ? (
            <>
              <Button
                variant="destructive"
                onClick={logout}
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-sm transition-all duration-200"
              >
                Logout
              </Button>
              <Button
                asChild
                className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <Link to={dashboardPath}>Dashboard</Link>
              </Button>
            </>
          ) : (
            <>
              <Button
                asChild
                variant="ghost"
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-sm"
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="bg-primary text-primary-foreground rounded-sm px-6 py-3 
    transition-all duration-200 ease-in-out
    hover:opacity-90 hover:scale-[1.02]
    active:scale-[0.98] hover:shadow-md"
              >
                <Link to="/register">Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>

      {/* ✅ MOBILE — full-width flex row: logo left, hamburger right */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">

        {/* Mobile Logo */}
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
            <Wrench size={16} />
          </div>
          <span className="text-foreground">
            Quick<span className="text-primary">Serve</span>
          </span>
        </Link>

        {/* Hamburger — RIGHT side */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200">
              <Menu size={20} />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="w-72 p-0">
            <div className="flex flex-col h-full">

              {/* Sheet Header */}
              <div className="flex items-center gap-2 px-6 py-5 border-b border-border/50">
                <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                  <Wrench size={15} />
                </div>
                <span className="text-base font-bold">
                  Quick<span className="text-primary">Serve</span>
                </span>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-1 px-3 py-4">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/services", label: "Services" },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-2.5 rounded-sm transition-all duration-200"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Sheet Footer Buttons */}
              <div className="mt-auto px-4 pb-8 flex flex-col gap-2">
                {status === "authenticated" ? (
                  <>
                    <Button asChild className="w-full rounded-sm">
                      <Link to={dashboardPath} onClick={() => setOpen(false)}>Dashboard</Link>
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => { logout(); setOpen(false); }}
                      className="w-full rounded-sm text-muted-foreground"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button asChild className="w-full rounded-sm">
                      <Link to="/register" onClick={() => setOpen(false)}>Get Started</Link>
                    </Button>
                    <Button asChild variant="ghost" className="w-full rounded-sm">
                      <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
                    </Button>
                  </>
                )}
              </div>

            </div>
          </SheetContent>
        </Sheet>
      </div>

    </nav>
  );
};

export default Navbar;