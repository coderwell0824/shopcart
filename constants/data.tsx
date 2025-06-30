import { ReactNode } from "react";
import { Youtube, Github, Linkedin, Facebook, Slack } from "lucide-react";

export const headerMenuData: Array<{ title: string; href: string }> = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Blog", href: "/blog" },
  // { title: "Contact", href: "/contact" },
  { title: "Hot Deal", href: "/deal" },
];

export const socialLink: Array<{
  title: string;
  href: string;
  icon: ReactNode;
}> = [
  {
    title: "Youtube",
    href: "https://www,youtube.com/reactjsBD",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www,youtube.com/reactjsBD",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www,youtube.com/reactjsBD",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www,youtube.com/reactjsBD",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://www,youtube.com/reactjsBD",
    icon: <Slack className="w-5 h-5" />,
  },
];
