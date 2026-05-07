export const brand = {
  name: "Wanis au Mic",
  email: "contact@wanisaumic.fr",
  phone: "+33 6 00 00 00 00",
  city: "Paris, France",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
  ],
};

export const assetPlaceholders = {
  logo: {
    label: "Logo Wanis",
    src: "",
    cloudinaryKey: "logo",
  },
  portrait: {
    label: "Portrait Wanis",
    src: "/assets/wanis-portrait.png",
    cloudinaryKey: "wanis-portrait",
  },
  microphone: {
    label: "Micro / scène",
    src: "/assets/wanis-adios-stage.png",
    cloudinaryKey: "microphone-stage",
  },
  mindset: {
    label: "Mindset / objectifs",
    src: "/assets/wanis-mindset.png",
    cloudinaryKey: "mindset-goals",
  },
} as const;

export const navItems = [
  { label: "Transformation", href: "#transformation" },
  { label: "Bénéfices", href: "#benefits" },
  { label: "Wanis", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export const transformationPillars = [
  {
    title: "Mindset",
    text: "Reprogrammer ta façon de penser pour avancer avec lucidité, ambition et constance.",
  },
  {
    title: "Discipline",
    text: "Mettre en place des habitudes qui tiennent quand la motivation baisse.",
  },
  {
    title: "Confiance",
    text: "Prendre ta place, parler plus fort par tes actes et assumer ton évolution.",
  },
  {
    title: "Vision",
    text: "Transformer tes idées en direction claire, mesurable et réaliste.",
  },
  {
    title: "Action",
    text: "Passer du déclic à l'exécution avec une méthode simple et structurée.",
  },
];

export const benefits = [
  {
    icon: "Target",
    title: "Clarifier ses objectifs",
    text: "Identifier ce que tu veux vraiment construire et les priorités qui comptent.",
  },
  {
    icon: "ShieldCheck",
    title: "Développer une discipline solide",
    text: "Créer un cadre qui t'aide à rester constant même sous pression.",
  },
  {
    icon: "Sparkles",
    title: "Gagner en confiance",
    text: "Renforcer ton estime, ton langage intérieur et ta capacité à décider.",
  },
  {
    icon: "TimerReset",
    title: "Sortir de la procrastination",
    text: "Couper les excuses, réduire la dispersion et reprendre le contrôle du temps.",
  },
  {
    icon: "Rocket",
    title: "Construire une vision ambitieuse",
    text: "Penser plus grand sans perdre le lien avec le terrain et les actions concrètes.",
  },
  {
    icon: "Route",
    title: "Passer à l'action avec méthode",
    text: "Avancer étape par étape avec un plan clair, direct et applicable.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "J'avais des idées mais aucune structure. L'accompagnement m'a aidé à poser mes objectifs, à me discipliner et à vraiment lancer mon projet.",
    name: "Mehdi K.",
    role: "Entrepreneur en lancement",
  },
  {
    quote:
      "Le côté direct de Wanis m'a réveillée. J'ai arrêté de repousser les choses et j'ai repris confiance dans mes décisions.",
    name: "Inès B.",
    role: "Créatrice de contenu",
  },
  {
    quote:
      "Ce n'est pas juste de la motivation. On repart avec une méthode, un cadre et une énergie qui oblige à passer à l'action.",
    name: "Samir A.",
    role: "Manager commercial",
  },
];

export const faqs = [
  {
    question: "À qui s'adresse la formation ?",
    answer:
      "À celles et ceux qui veulent reprendre le contrôle de leur mental, gagner en discipline et avancer sur un projet personnel, professionnel ou créatif.",
  },
  {
    question: "Faut-il déjà avoir un projet ?",
    answer:
      "Non. Tu peux venir avec une idée, une envie de changement ou un objectif flou. Le travail commence justement par clarifier la direction.",
  },
  {
    question: "Comment se passe l'accompagnement ?",
    answer:
      "L'accompagnement combine cadre, exercices, réflexion stratégique et passages à l'action. L'objectif est de transformer tes intentions en décisions concrètes.",
  },
  {
    question: "Combien de temps dure la formation ?",
    answer:
      "La durée exacte sera confirmée pendant l'appel selon ton profil, ton niveau d'avancement et l'intensité d'accompagnement adaptée.",
  },
  {
    question: "Comment réserver un appel ?",
    answer:
      "Remplis le formulaire avec ton prénom, ton nom et ton téléphone. L'équipe pourra ensuite te recontacter pour planifier un échange.",
  },
];

export const contactWebhook = {
  endpoint: process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL ?? "",
  providerHint: "Make / n8n",
};
