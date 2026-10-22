// src/components/sections/FaqSection.jsx
import { faqs } from "@/content/faq";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/shared/JsonLd";
import { getFaqSchema } from "@/lib/seo";

export function FaqSection({ items = faqs, title = "Pertanyaan yang Sering Diajukan", subtitle = "Temukan jawaban cepat seputar transaksi, proses klaim kendala, dan program kemitraan agen Payfast ID." }) {
  const faqSchema = getFaqSchema(items);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
      <JsonLd data={faqSchema} />
      <Container size="sm">
        <SectionHeading
          eyebrow="TANYA JAWAB (FAQ)"
          title={title}
          subtitle={subtitle}
          centered
        />

        <Accordion items={items} allowMultiple={false} />
      </Container>
    </section>
  );
}
