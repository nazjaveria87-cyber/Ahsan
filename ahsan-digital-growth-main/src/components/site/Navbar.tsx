import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-mh.png";
import { NAV_LINKS } from "./data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "border-b border-white/10 bg-navy/90 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"
      >
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Muhammad Ahsan logo" width={100} height={100} className="h-30 w-40" />
          {/* <span className="text-base font-semibold text-navy-foreground">Muhammad Ahsan</span> */}
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-full px-3 py-2 text-sm font-medium text-navy-foreground/70 transition-colors hover:bg-white/10 hover:text-navy-foreground data-[status=active]:bg-white/10 data-[status=active]:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.03] xl:inline-flex"
        >
          Start A Project
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex size-11 items-center justify-center rounded-xl border border-white/15 text-navy-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-navy-foreground/80 transition-colors hover:bg-white/10 hover:text-navy-foreground data-[status=active]:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Start A Project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
