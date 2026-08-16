import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/about", label: "About" },
  { to: "/participate", label: "Participate" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/assets/meditas-logo.jpg"
            alt="Meditas Clinical Trials"
            width={200}
            height={54}
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/participate"
            className="ml-3 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Join a Study
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}