"use client";

import React from "react";
import { Meteors } from "@/components/ui/meteors";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      
      {/* Background Meteors */}
      <Meteors number={80} />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 pt-32">
        
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
          Contact Us
        </h1>

        <p className="mt-6 max-w-2xl text-center text-neutral-400 text-lg">
          We're here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can
          assist you in your musical journey.
        </p>

        <div className="mt-10 w-full max-w-3xl space-y-6">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full rounded-lg border border-neutral-800 bg-black/60 px-5 py-4 text-white outline-none backdrop-blur-sm"
          />

          <textarea
            rows={8}
            placeholder="Your message"
            className="w-full rounded-lg border border-neutral-800 bg-black/60 px-5 py-4 text-white outline-none backdrop-blur-sm"
          />

          <button className="w-full rounded-lg bg-white py-4 font-semibold text-black transition hover:bg-neutral-200">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}