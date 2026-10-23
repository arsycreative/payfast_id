// src/lib/validations.js
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nama minimal 2 karakter")
    .max(80, "Nama maksimal 80 karakter"),
  email: z.string().email("Format email tidak valid"),
  phone: z
    .string()
    .regex(/^(\+62|62|0)[0-9]{8,13}$/, "Nomor WhatsApp tidak valid (contoh: 08126666115)")
    .optional()
    .or(z.literal("")),
  topic: z.enum(["pelanggan", "kemitraan", "integrasi", "lainnya"], {
    required_error: "Pilih topik yang sesuai",
  }),
  message: z
    .string()
    .min(10, "Pesan minimal 10 karakter")
    .max(1000, "Pesan maksimal 1000 karakter"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Kamu wajib menyetujui ketentuan data ini",
  }),
  website: z.string().max(0, "Spam detected").optional(), // Honeypot field
});
