import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo-mh.png";
import { CONTACT, NAV_LINKS } from "./data";
import { SocialLinks } from "./Contact";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Muhammad Ahsan logo"
                width={44}
                height={44}
                loading="lazy"
                className="h-30 w-50"
              />
              {/* <span className="font-display text-lg font-semibold text-navy-foreground">
                Muhammad Ahsan
              </span> */}
            </div>
            <p className="mt-4 max-w-md text-sm text-navy-foreground/65">
              Digital Marketing Strategist helping businesses grow through performance marketing.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold tracking-[0.2em] text-navy-foreground/50 uppercase">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-foreground/65 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-navy-foreground/50">
          © {new Date().getFullYear()} Muhammad Ahsan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-110"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
