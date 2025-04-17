import { navbarConfig } from "../../web/types/config/ui/navbar.interface";

export const navConfig: navbarConfig = {
  title: "My Project",
  logo: "/logo.png",
  links: [
    { label: "Home", url: "/" },
    { label: "Docs", url: "/docs" },
    { label: "Blog", url: "/blog" },
  ],
  searchEnabled: true,
  themeToggleEnabled: true,
  languageSelectorEnabled: true,
  helpLink: "https://example.com/help", // Optional property
};
