import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import teamImage from "@/assets/team.jpg";

const title = "About Meditas — Our Team & Standards";
const description =
  "Meditas Clinical Trials is a physician-led clinical research organization built on scientific rigor, transparency, and participant-first care.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

const values = [
  { title: "Scientific rigor", body: "Every protocol is reviewed by our medical and biostatistics leadership before a single participant is screened." },
  { title: "Radical transparency", body: "Sponsors get live enrollment, query, and deviation metrics — no surprises at database lock." },
  { title: "Participant dignity", body: "Informed consent is a conversation. Our coordinators stay with participants through the last follow-up." },
];

const leadership = [
  { name: "Dr. Elena Marquez, MD", role: "Chief Medical Officer", bio: "Board-certified internist with 18 years leading cardiometabolic and vaccine programs." },
  { name: "Dr. Samuel Okafor, PharmD", role: "VP, Clinical Operations", bio: "Former early-phase unit director; oversaw 200+ Phase I/II studies across four countries." },
  { name: "Priya Raman, MS", role: "Director of Biostatistics", bio: "Adaptive design specialist and author of 30+ peer-reviewed methodology papers." },
  { name: "Marcus Bell, RN, CCRC", role: "Head of Participant Experience", bio: "Built the community outreach model behind our 98% retention rate." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A physician-led research organization with a participant-first culture"
        description="Meditas was founded by clinicians who believed trials could be both scientifically uncompromising and genuinely humane. That conviction still governs every study we run."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
        <img
          src={teamImage}
          alt="Meditas clinical research team reviewing a study protocol"
          width={1400}
          height={1000}
          loading="lazy"
          className="rounded-3xl object-cover shadow-lift"
        />
        <div>
          <h2 className="text-3xl font-semibold text-foreground">Our story</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Founded in 2019, Meditas began as a single early-phase site serving the Texas Medical
            Center. Today we operate a network of research units and a decentralized visit program
            that reaches participants in communities historically left out of clinical research.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our teams have supported submissions across cardiology, neurology, oncology, and
            infectious disease — always with the same standard: data a regulator can trust and an
            experience a participant would recommend.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-semibold text-foreground">What we stand for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background p-8">
                <span className="font-display text-sm font-semibold text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-foreground">Leadership</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {leadership.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{p.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}