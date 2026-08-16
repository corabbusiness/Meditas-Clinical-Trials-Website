import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
  Database,
  HeartPulse,
  Microscope,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

const title = "Capabilities — Meditas Clinical Trials";
const description =
  "Phase I-IV trial management, therapeutic area expertise, data management, and regulatory support from the Meditas clinical research team.";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Capabilities,
});

const areas = [
  { icon: HeartPulse, name: "Cardiometabolic", body: "Heart failure, hypertension, type 2 diabetes, obesity and lipid disorders." },
  { icon: Brain, name: "Neurology", body: "Alzheimer's disease, migraine, epilepsy, and movement disorders." },
  { icon: Microscope, name: "Oncology", body: "Solid tumor and hematologic studies with biomarker-driven cohorts." },
  { icon: Stethoscope, name: "Respiratory", body: "COPD, asthma, and chronic cough programs with in-house spirometry." },
  { icon: Syringe, name: "Vaccines", body: "Prophylactic and therapeutic vaccine trials with rapid enrollment surges." },
  { icon: Database, name: "Rare Disease", body: "Registry-linked recruitment and decentralized visit models." },
];

const phases = [
  { phase: "Phase I", body: "Dedicated 24-bed early-phase unit, intensive PK sampling, and on-site emergency support." },
  { phase: "Phase II", body: "Adaptive designs, interim analyses, and biomarker collection with central lab integration." },
  { phase: "Phase III", body: "Multi-site coordination, investigator training, and real-time enrollment dashboards." },
  { phase: "Phase IV", body: "Post-marketing surveillance, registries, and real-world evidence generation." },
];

const services = [
  "Feasibility & site selection",
  "Regulatory & IRB submissions",
  "Clinical monitoring (on-site & remote)",
  "EDC build and data management",
  "Biostatistics & medical writing",
  "Pharmacovigilance & safety reporting",
  "Investigational product management",
  "Decentralized & hybrid trial delivery",
];

function Capabilities() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Full-service clinical research built for complex protocols"
        description="From first-in-human dosing to real-world evidence, Meditas delivers the infrastructure, expertise, and oversight that modern trials demand."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-foreground">Therapeutic areas</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <div key={a.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <a.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{a.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold text-foreground">Across every phase</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {phases.map((p) => (
              <div key={p.phase} className="bg-background p-8">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  {p.phase}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">Core services</h2>
            <p className="mt-4 text-muted-foreground">
              Engage the full platform or plug our specialists into your existing study team.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Request a capabilities deck
            </Link>
          </div>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {services.map((s) => (
              <li
                key={s}
                className="border-b border-border pb-4 text-sm font-medium text-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}