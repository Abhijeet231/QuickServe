import React from "react";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* Header */}
        <div className="mb-10">
          

          <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
            About QuickServe
          </h1>

          <p className="text-foreground text-lg mt-3 max-w-2xl">
            A simple platform to discover reliable local services.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-stone-100 rounded-2xl shadow-sm p-8 space-y-6 text-muted-foreground font-semibold">
          
          <p className="leading-relaxed">
            <span className="font-semibold text-foreground">QuickServe</span> is a
            simple marketplace that helps people discover and connect with
            trusted local service providers.
          </p>

          <p className=" leading-relaxed">
            Whether you are looking for a cook, electrician, cleaner, or other
            everyday services, ServiceLe makes it easy to browse and find the
            right help in just a few clicks.
          </p>

          <p className=" leading-relaxed">
            The goal of ServiceLe is straightforward - make it easier for people
            to find skilled professionals and give service providers a place to
            showcase their expertise.
          </p>

          <div className="pt-4 border-t border-stone-100">
            <p className="text-sm ">
              Built to simplify how local services are discovered.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;