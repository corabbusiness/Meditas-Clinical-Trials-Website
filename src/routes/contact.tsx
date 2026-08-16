import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/page-hero";

const title = "Contact Meditas Clinical Trials";
const description =
  "Reach the Meditas Clinical Trials team about sponsor partnerships, site collaboration, or study participation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: MapPin, label: "Research Headquarters", value: "1200 Research Parkway, Suite 400\nHouston, TX 77030" },
  { icon: Phone, label: "Phone", value: "(713) 555-0142\nMon–Fri, 8am–6pm CT" },
  { icon: Mail, label: "Email", value: "studies@meditastrials.com\npartnerships@meditastrials.com" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your next study"
        description="Sponsors, sites, and prospective participants all reach us here. We respond to every inquiry within two business days."
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-8">
          {details.map((d) => (
            <div key={d.label} className="flex gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <d.icon className="size-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{d.label}</h3>
                <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {d.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
          {sent ? (
            <div className="py-12 text-center">
              <h2 className="text-xl font-semibold text-foreground">Message sent</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you for reaching out — our team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              className="grid gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Message sent");
              }}
            >
              <Input label="Full name" name="name" />
              <Input label="Organization" name="org" required={false} />
              <Input label="Email" name="email" type="email" />
              <Input label="Phone" name="phone" type="tel" required={false} />
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-foreground" htmlFor="topic">
                  I'm reaching out about
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                >
                  <option>Sponsor / CRO partnership</option>
                  <option>Site collaboration</option>
                  <option>Study participation</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-foreground" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Input({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
      />
    </div>
  );
}