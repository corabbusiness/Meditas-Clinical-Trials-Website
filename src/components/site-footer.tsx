import { Link } from "@tanstack/react-router";
import logo from "@/assets/meditas-logo.jpg.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src={logo.url}
            alt="Meditas Clinical Trials"
            width={200}
            height={54}
            loading="lazy"
            className="h-14 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A clinical research organization advancing tomorrow's therapies through rigorous
            science and genuine care for every participant.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/capabilities" className="hover:text-foreground">Capabilities</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/participate" className="hover:text-foreground">Participate</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>1200 Research Parkway, Suite 400</li>
            <li>Houston, TX 77030</li>
            <li>(713) 555-0142</li>
            <li>studies@meditastrials.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Meditas Clinical Trials. All rights reserved.</p>
          <p>GCP / ICH compliant · IRB-reviewed protocols</p>
        </div>
      </div>
    </footer>
  );
}