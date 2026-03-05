import { Sparkles } from "lucide-react";
import { useLocale } from "../contexts/localeContext";

export const Header = () => {
  const { t } = useLocale();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="flex items-center gap-2 font-semibold text-text"
        >
          <Sparkles className="h-5 w-5 text-accent" />
          {t.siteTitle}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {t.navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-text-muted transition hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
