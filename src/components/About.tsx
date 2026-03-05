import { User } from "lucide-react";
import { useLocale } from "../contexts/localeContext";

export const About = () => {
  const { t } = useLocale();
  return (
    <section id="about" className="border-t border-border py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold sm:text-3xl">
          <User className="h-8 w-8 text-accent" />
          {t.about.title}
        </h2>
        <div className="space-y-4 text-text-muted leading-relaxed">
          {t.about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
