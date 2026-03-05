import {
  Mail,
  ExternalLink,
  ChevronDown,
  Coffee,
  Code,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "../contexts/localeContext";

const heroTitleIcons: Record<string, LucideIcon> = {
  Coffee,
  Code,
};

export const Hero = () => {
  const { t } = useLocale();
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {t.hero.greeting} <span className="text-accent">{t.hero.name}</span>
        </h1>
        <p className="mb-8 flex flex-wrap items-center justify-center gap-1 text-lg text-text-muted sm:text-xl">
          {t.hero.title.map((segment, i) =>
            typeof segment === "string" ? (
              <span key={i}>{segment}</span>
            ) : (
              <span key={i} className="inline-flex text-accent" aria-hidden>
                {heroTitleIcons[segment.icon]
                  ? (() => {
                      const Icon = heroTitleIcons[segment.icon];
                      return (
                        <Icon
                          className="h-[1em] w-[1em] shrink-0 align-baseline"
                          strokeWidth={2}
                        />
                      );
                    })()
                  : null}
              </span>
            )
          )}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-surface transition hover:bg-accent-hover"
          >
            <Mail className="h-4 w-4" />
            {t.hero.ctaContact}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-text transition hover:border-accent hover:text-accent"
          >
            {t.hero.ctaProjects}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted transition hover:text-accent"
        aria-label={t.hero.ariaGoToAbout}
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
};
