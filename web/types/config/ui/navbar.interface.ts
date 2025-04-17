export interface navbarConfig {
  title: string;
  logo: string;
  links: {
    label: string;
    url: string;
  }[];
  searchEnabled: boolean;
  themeToggleEnabled: boolean;
  languageSelectorEnabled: boolean;
  helpLink?: string; // Optional property
}
