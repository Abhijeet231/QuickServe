import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="text-foreground  h-screen
    bg-background 
    "    
    >
      {/* Hero section*/}
      <section className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content with CTA*/}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Find your trusted local service instantly
          </h1>

          <p className="text-lg text-muted-foreground max-w-md">
            QuickServe helps you connect with reliable professionals for everyday
            services - from electricians and plumbers to cleaners and repairs.
          </p>

          {/*Buttons */}
          <div className="flex items-center gap-4">
            {/* Primary Button */}
            <Button asChild
              className="bg-primary text-primary-foreground rounded-sm px-6 py-3 
    transition-all duration-200 ease-in-out
    hover:opacity-90 hover:scale-[1.02]
    active:scale-[0.98] hover:shadow-md"
            >
             <Link to='/register'
             >
              Get Started</Link>
            </Button>

            {/* Outline Button */}
            <Button asChild
              variant="outline"
              className="rounded-sm px-5 py-2 border border-border 
    transition-all duration-200 ease-in-out bg-secondary
    hover:bg-primary-foreground hover:text-secondary-foreground
    hover:border-primary hover:scale-[1.02]
    active:scale-[0.98] hover:shadow-md"
            >
             <Link to= "/services">
              Browse Services
             </Link>
            </Button>
          </div>
        </div>

        {/* Illustration image*/}
        <div>
          <img
            src="/public/landingimg.png"
            alt="Illustration"
            className="w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;
