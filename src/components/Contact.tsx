import { Mail } from "lucide-react";
import { useLocale } from "../contexts/localeContext";

export const Contact = () => {
  const { t } = useLocale();
  return (
    <section id="contact" className="border-t border-border py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 flex items-center justify-center gap-3 text-2xl font-semibold sm:text-3xl">
          <Mail className="h-8 w-8 text-accent" />
          {t.contact.title}
        </h2>
        <p className="mb-8 text-text-muted">{t.contact.subtitle}</p>
        <a
          href={`mailto:${t.contact.email}`}
          className="mb-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-surface transition hover:bg-accent-hover"
        >
          <Mail className="h-4 w-4" />
          {t.contact.email}
        </a>
        <div className="flex justify-center gap-6">
          {t.contact.socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-3 text-text-muted transition hover:border-accent hover:text-accent"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
