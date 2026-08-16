import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";
import participateImage from "@/assets/participate.jpg";

const title = "Participate in a Clinical Trial — Meditas";
const description =
  "Join a Meditas clinical trial. Learn what to expect, review enrolling studies, and complete a confidential pre-screening form.";

export const Route = createFileRoute("/participate")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Participate,
});

const steps = [
  { title: "Pre-screening", body: "A short confidential questionnaire and phone call to see which studies may fit." },
  { title: "Screening visit", body: "Informed consent, medical history, and study-specific assessments — always with time for questions." },
  { title: "Study visits", body: "Scheduled visits with your dedicated coordinator. Travel and time are compensated." },
  { title: "Follow-up", body: "Post-study check-ins and a summary of results once the trial is complete." },
];

const openStudies = [
  { area: "Type 2 Diabetes", phase: "Phase III", detail: "Adults 30-70 with HbA1c between 7.0% and 10.0%." },
  { area: "Migraine Prevention", phase: "Phase II", detail: "Adults with 4-14 migraine days per month." },
  { area: "COPD", phase: "Phase III", detail: "Adults 40+ with a confirmed COPD diagnosis and current or former smoking history." },
  { area: "Healthy Volunteers", phase: "Phase I", detail: "Adults 18-55, non-smoking, BMI 18-30." },
];

const benefits = [
  "No-cost study-related care and investigational medication",
  "Compensation for time and travel",
  "Access to specialists throughout the study",
  "You may withdraw at any time, for any reason",
];

function Participate() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Participate"
        title="Volunteers make new medicine possible"
        description="Every treatment on a pharmacy shelf exists because people volunteered. Here is exactly what taking part in a Meditas study looks like — no jargon, no pressure."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
        <img
          src={participateImage}
          alt="Study coordinator speaking with a clinical trial participant"
          width={1400}
          height={1000}
          loading="lazy"
          className="rounded-3xl object-cover shadow-lift"
        />
        <div>
          <h2 className="text-3xl font-semibold text-foreground">What you can expect</h2>
          <ul className="mt-6 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold text-foreground">How it works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-background p-7">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-foreground">Currently enrolling</h2>
        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border">
          {openStudies.map((s) => (
            <div
              key={s.area}
              className="flex flex-col gap-2 bg-card p-7 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground">{s.area}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.detail}</p>
              </div>
              <span className="w-fit rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                {s.phase}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
          <h2 className="text-2xl font-semibold text-foreground">Confidential pre-screening</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Share a few details and a study coordinator will reach out within two business days.
          </p>
          {submitted ? (
            <div className="mt-8 rounded-2xl bg-secondary p-6 text-center">
              <CheckCircle2 className="mx-auto size-8 text-primary" />
              <p className="mt-3 font-medium text-foreground">Thank you — we received your information.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                A coordinator will contact you shortly.
              </p>
            </div>
          ) : (
            <form
              className="mt-8 grid gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                toast.success("Pre-screening submitted");
              }}
            >
              <Field label="Full name" name="name" />
              <Field label="Date of birth" name="dob" type="date" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-foreground" htmlFor="interest">
                  Study of interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                >
                  {openStudies.map((s) => (
                    <option key={s.area}>{s.area}</option>
                  ))}
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-foreground" htmlFor="notes">
                  Relevant medical history (optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Submit pre-screening
              </button>
              <p className="sm:col-span-2 text-xs text-muted-foreground">
                Submitting this form does not enroll you in a study and is not medical advice.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
      />
    </div>
  );
}