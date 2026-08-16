import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ClipboardCheck, FlaskConical, ShieldCheck, Users } from "lucide-react";
import heroImage from "@/assets/hero-research.jpg";

const title = "Meditas Clinical Trials — Precision Clinical Research";
const description =
  "Meditas Clinical Trials runs Phase I-IV studies with rigorous science, fast startup timelines, and a participant experience built on trust.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "40+", label: "Active protocols" },
  { value: "12", label: "Therapeutic areas" },
  { value: "98%", label: "Participant retention" },
  { value: "21 days", label: "Average site activation" },
];

const pillars = [
  {
    icon: FlaskConical,
    title: "Protocol Design",
    body: "Feasibility modeling, endpoint strategy, and regulatory-ready documentation from first draft to submission.",
  },
  {
    icon: Users,
    title: "Patient Recruitment",
    body: "Community-rooted outreach and pre-screening that fills cohorts with the right participants, faster.",
  },
  {
    icon: ClipboardCheck,
    title: "Trial Operations",
    body: "Dedicated coordinators, validated EDC workflows, and monitoring that keeps data clean in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance",
    body: "ICH-GCP aligned SOPs, audit-ready records, and proactive risk management across every site.",
  },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute -right-40 -top-40 size-[32rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 size-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Activity className="size-3.5" /> Now enrolling
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-foreground md:text-6xl">
              Clinical research, <span className="text-gradient-brand">done right</span> — from
              protocol to publication.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Meditas partners with sponsors, CROs, and biotech innovators to run trials that meet
              the highest scientific standards while treating every participant like a person, not
              a data point.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/participate"
                className="rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                Participate in a trial
              </Link>
              <Link
                to="/capabilities"
                className="rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Explore capabilities
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-3xl bg-gradient-brand opacity-20" />
            <img
              src={heroImage}
              alt="Clinical researcher reviewing trial data in a modern laboratory"
              width={1600}
              height={1104}
              className="relative rounded-3xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-semibold text-primary-deep md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What we do
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
            End-to-end trial execution under one accountable team
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                <p.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-brand px-8 py-14 text-primary-foreground md:px-16">
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            Ready to move your study forward?
          </h2>
          <p className="mt-4 max-w-xl text-base opacity-90">
            Whether you are planning a first-in-human study or scaling a multi-site Phase III, our
            team can be operational in weeks.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Talk with our team
          </Link>
        </div>
      </section>
    </>
  );
}
