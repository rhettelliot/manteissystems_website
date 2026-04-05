"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/case-studies", label: "CASE STUDIES" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navigation() {
  const [active, setActive] = useState("/");
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-lg py-md">
      <div className="glass-panel">
        <div className="flex items-center justify-between px-md py-sm">
          {/* Logo */}
          <Link href="/" className="font-display text-label signal-text tracking-wider">
            MANTEIS.SYSTEMS
          </Link>
          
          {/* Nav Links */}
          <div className="flex gap-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`label transition-colors duration-200 ${
                  active === item.href
                    ? "signal-text"
                    : "text-muted hover:text-secondary"
                }`}
                onClick={() => setActive(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* CTA */}
          <button className="btn-primary">
            BEGIN CONSULTATION
          </button>
        </div>
      </div>
    </nav>
  );
}