import Image from "next/image";
import { SectionHeading } from "../../components/section-heading";

const team = [
  { name: "Sofia Reed", role: "Founder", image: "/team/team-1.svg" },
  { name: "Amara Johnson", role: "Formulation Lead", image: "/team/team-2.svg" },
  { name: "Elena Ruiz", role: "Creative Director", image: "/team/team-3.svg" }
];

export default function AboutPage() {
  return (
    <main className="container py-16">
      <SectionHeading
        title="About us"
        description="Story, mission, ingredients, values, team, and timeline sections for brand storytelling."
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold">Our story</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
            AURA was created to make premium organic skincare feel calm, modern, and conversion-focused. Every product is designed around clean ingredients and elegant rituals.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] border border-[var(--border)]">
          <Image src="/hero/hero-2.svg" alt="Our story" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["Mission: Elevate everyday skincare", "Vision: Clean luxury for all", "Values: Transparency and care"].map((item) => (
          <div key={item} className="card p-6 text-sm text-[var(--muted-foreground)]">
            {item}
          </div>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Meet the team</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="card overflow-hidden">
              <div className="relative aspect-square bg-[var(--muted)]">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
