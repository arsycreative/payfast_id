// src/components/sections/TeamGrid.jsx
import { User } from "lucide-react";
import { aboutContent } from "@/content/about";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/shared/Reveal";

export function TeamGrid() {
  const { team } = aboutContent;

  return (
    <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
      <Container>
        <SectionHeading
          eyebrow={team.eyebrow}
          title={team.title}
          subtitle={team.subtitle}
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.members.map((member, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <Card
                hover
                className="h-full p-8 border-neutral-200/80 bg-neutral-50/50 hover:bg-white text-center flex flex-col items-center"
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-800 text-white font-heading font-extrabold text-2xl flex items-center justify-center mb-6 shadow-md shadow-primary-500/20">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <h3 className="text-xl font-bold font-heading text-secondary-800 mb-1">
                  {member.name}
                </h3>

                <p className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-4">
                  {member.role}
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
