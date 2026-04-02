/** Keep `siteUrl` aligned with `site` in `astro.config.mjs`. */
const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:4321");

export const SITE = {
  name: "Fresh Press Cleaners",
  tagline: "Dry cleaning & shirt laundry",
  description:
    "Expert garment care, alterations, and stain treatment—with turnaround you can plan around.",
  siteUrl,
  phone: "(555) 234-5678",
  phoneHref: "tel:+15552345678",
  email: "hello@freshpresscleaners.example",
  addressLine1: "128 Maple Avenue",
  cityStateZip: "Springfield, ST 62701",
  hoursWeekday: "Mon–Fri 7:00am – 6:00pm",
  hoursSaturday: "Sat 8:00am – 4:00pm",
  hoursSunday: "Sun Closed",
  /** Hero image — file in `public/media/`. */
  heroImage: "/media/hero.jpg",
  heroImageAlt: "Clothing retail display with garments on hangers",
} as const;

export const defaultSeo = {
  title: SITE.name,
  description: SITE.description,
} as const;
