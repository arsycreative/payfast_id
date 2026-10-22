// src/app/contact/actions.js
import { contactSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limit";

/**
 * Server Action for processing contact form submissions.
 * @param {FormData|Object} data
 */
export async function submitContact(data) {
  try {
    let payload = data;
    if (data instanceof FormData) {
      payload = {
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone") || "",
        topic: data.get("topic"),
        message: data.get("message"),
        consent:
          data.get("consent") === "true" ||
          data.get("consent") === "on" ||
          data.get("consent") === true,
        website: data.get("website") || "",
      };
    } else if (data && typeof data === "object") {
      payload = {
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        topic: data.topic,
        message: data.message,
        consent: Boolean(data.consent),
        website: data.website || "",
      };
    }

    // 1. Check Honeypot spam field
    if (payload.website && payload.website.length > 0) {
      return {
        ok: true,
        message: "Terima kasih! Pesanmu sudah kami terima.",
      };
    }

    // 2. Rate limit check
    const rateCheck = checkRateLimit("contact-form-global", 15, 60 * 1000);
    if (!rateCheck.success) {
      return {
        ok: false,
        error: "Terlalu banyak pengiriman pesan. Silakan tunggu beberapa saat lagi.",
      };
    }

    // 3. Server-side Zod validation
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const firstIssue = parsed.error.issues?.[0];
      const errorMsg = firstIssue?.message || "Data formulir tidak valid.";
      return {
        ok: false,
        error: errorMsg,
      };
    }

    // 4. Log valid submission
    console.log("[Contact Submission Received]", {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      topic: parsed.data.topic,
      timestamp: new Date().toISOString(),
    });

    return {
      ok: true,
      message:
        "Terima kasih! Pesanmu sudah kami terima. Tim Payfast ID akan membalas dalam 1×24 jam kerja.",
    };
  } catch (err) {
    console.error("[Contact Action Error]", err);
    return {
      ok: false,
      error: "Maaf, terjadi kesalahan pada server. Silakan coba lagi atau hubungi via WhatsApp.",
    };
  }
}
