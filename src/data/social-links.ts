export type SocialLink = {
  social:
    | "twitter"
    | "linkedin"
    | "instagram"
    | "tiktok"
    | "twitch"
    | "youtube"
    | "discord";
  href: string;
  text: string;
  icon: string;
};

const socialLinks: SocialLink[] = [
  {
    social: "discord",
    href: "https://discord.gg/RQMshZSY8p",
    text: "Únete al servidor de Discord de No me da la vida",
    icon: "social/discord",
  },
  {
    social: "linkedin",
    href: "https://www.linkedin.com/company/nomedalavidadev/",
    text: "Página de LinkedIn de No me da la vida",
    icon: "social/linkedin",
  },
  {
    social: "twitter",
    href: "https://twitter.com/nomedalavidadev",
    text: "Sigue a @nomedalavidadev en Twitter",
    icon: "social/twitter",
  },
  {
    social: "instagram",
    href: "https://instagram.com/nomedalavidadev",
    text: "Sigue a @nomedalavidadev en Instagram",
    icon: "social/instagram",
  },
  {
    social: "tiktok",
    href: "https://tiktok.com/@nomedalavidadev",
    text: "Sigue a @nomedalavidadev en TikTok",
    icon: "social/tiktok",
  },
  {
    social: "youtube",
    href: "https://www.youtube.com/c/nomedalavida",
    text: "Suscríbete a @nomedalavida en YouTube",
    icon: "social/youtube",
  },
];

export default socialLinks;
