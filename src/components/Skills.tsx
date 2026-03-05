import { Code2 } from "lucide-react";
import { useLocale } from "../contexts/localeContext";

export const Skills = () => {
  const { t } = useLocale();
  return (
    <section id="skills" className="border-t border-border py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 flex items-center gap-3 text-2xl font-semibold sm:text-3xl">
          <Code2 className="h-8 w-8 text-accent" />
          {t.ui.skillsHeading}
        </h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {t.skills.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface-elevated px-4 py-3 transition hover:border-accent/50"
            >
              <Icon className="h-5 w-5 shrink-0 text-accent" />
              <span className="font-medium">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
