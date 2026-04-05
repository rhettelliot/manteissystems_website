"use client";

const footerLinks = [
  { label: "AI CONSULTANCY", href: "/services#ai" },
  { label: "CYBERSECURITY", href: "/services#security" },
  { label: "SYSTEMS ENGINEERING", href: "/services#engineering" },
  { label: "CASE STUDIES", href: "/case-studies" },
  { label: "CONTACT", href: "/contact" },
];

const socialLinks = [
  { label: "GITHUB", href: "https://github.com/rhettelliot" },
  { label: "LINKEDIN", href: "#" },
  { label: "SIGNAL", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 bg-layer-1 border-t border-layer-3">
      <div className="max-w-7xl mx-auto px-lg py-2xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-3 gap-2xl mb-xl">
          {/* Brand */}
          <div>
            <div className="font-display text-display-sm signal-text mb-md">
              MANTEIS
            </div>
            <p className="text-secondary text-body-sm mb-md">
              Sovereign intelligence. Security-first architecture. 
              Systems that run themselves.
            </p>
            <p className="label text-muted">
              PRINCIPAL SYSTEMS ARCHITECT
            </p>
          </div>
          
          {/* Links */}
          <div>
            <div className="label text-muted mb-md">NAVIGATION</div>
            <div className="flex flex-col gap-sm">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Social */}
          <div>
            <div className="label text-muted mb-md">CONNECT</div>
            <div className="flex flex-col gap-sm">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-secondary hover:text-signal transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-layer-3 pt-lg flex justify-between items-center">
          <p className="mono-data text-muted">
            © {currentYear} MANTEIS.SYSTEMS — ALL RIGHTS RESERVED
          </p>
          <p className="mono-data text-muted">
            BUILT WITH NEXT.JS + THREE.JS
          </p>
        </div>
      </div>
    </footer>
  );
}