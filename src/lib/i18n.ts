export type Lang = "en" | "fr";

export const t = {
  nav: {
    work: { en: "Work", fr: "Travaux" },
    recent: { en: "Recent", fr: "Récent" },
    about: { en: "About", fr: "À propos" },
    book: { en: "Book", fr: "Réserver" },
  },
  hero: {
    tagline: {
      en: "Photographer / Videographer — Fribourg (CH)",
      fr: "Photographe / Vidéaste — Fribourg (CH)",
    },
    desc: {
      en: "I capture the raw energy of streetwear, rap music videos and urban culture. Hard-hitting visuals for the artists and brands who aren't afraid of the dark.",
      fr: "Je capture l'énergie brute du streetwear, des clips rap et de la culture urbaine. Des visuels percutants pour les artistes et marques qui n'ont pas peur du sombre.",
    },
    cta1: { en: "Book a session", fr: "Réserver une session" },
    cta2: { en: "View portfolio", fr: "Voir le portfolio" },
  },
  showcase: {
    label: { en: "01 — Portfolio", fr: "01 — Portfolio" },
    title: { en: "Showcase", fr: "Portfolio" },
    all: { en: "All", fr: "Tout" },
    photo: { en: "Photo", fr: "Photo" },
    video: { en: "Video", fr: "Vidéo" },
  },
  recent: {
    label: { en: "02 — Latest drops", fr: "02 — Dernières sorties" },
    title: { en: "Recent", fr: "Récents" },
    title2: { en: "projects", fr: "projets" },
  },
  about: {
    label: { en: "03 — About", fr: "03 — À propos" },
    title1: { en: "The eye behind", fr: "L'œil derrière" },
    title2: { en: "the chaos", fr: "le chaos" },
    desc: {
      en: "Just a young creativo — versatile and capable of telling very different universes while keeping a strong visual identity.",
      fr: "Juste un jeune créatuff — polyvalent, capable de raconter des univers très différents tout en conservant une identité visuelle forte !",
    },
    stat1: { en: "Videos & shoots", fr: "Vidéos & shootings" },
    stat2: { en: "Brands", fr: "Marques" },
    stat3: { en: "On the field", fr: "Sur le terrain" },
  },
  contact: {
    label: { en: "04 — Booking", fr: "04 — Réservation" },
    title1: { en: "Let's", fr: "On" },
    title2: { en: "collaborate", fr: "collabore" },
    desc: {
      en: "A music video, a brand shoot or an event to immortalize? Describe your project and I'll get back to you fast.",
      fr: "Un clip, un shooting de marque ou un événement à immortaliser ? Décris ton projet et je te réponds vite.",
    },
    name: { en: "Name", fr: "Nom" },
    email: { en: "Email", fr: "Email" },
    namePh: { en: "Your name / project", fr: "Ton nom / projet" },
    type: { en: "Project type", fr: "Type de projet" },
    budget: { en: "Budget", fr: "Budget" },
    message: { en: "Message", fr: "Message" },
    msgPh: { en: "Tell me about your project...", fr: "Parle-moi de ton projet..." },
    send: { en: "Send request", fr: "Envoyer" },
    sending: { en: "Sending...", fr: "Envoi..." },
    types: {
      en: ["Music Video", "Streetwear Brand", "Event", "Portrait"],
      fr: ["Clip", "Marque Streetwear", "Événement", "Portrait"],
    },
  },
  marquee: {
    en: ["Streetwear", "Rap Videos", "Portraits", "Brand Films", "Lifestyle", "Concerts"],
    fr: ["Streetwear", "Clips Rap", "Portraits", "Films de Marque", "Lifestyle", "Concerts"],
  },
} as const;
