import { Briefcase, FolderGit2 } from "lucide-react";
import { useLocale } from "../contexts/localeContext";

export const Projects = () => {
  const { t } = useLocale();
  return (
    <section id="projects" className="border-t border-border py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 flex items-center gap-3 text-2xl font-semibold sm:text-3xl">
          <Briefcase className="h-8 w-8 text-accent" />
          {t.ui.projectsHeading}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {t.projects.map(({ title, description, tech, link }, index) => (
            <article
              key={`${title}-${index}`}
              className="group rounded-xl border border-border bg-surface-elevated p-6 transition hover:border-accent/50"
            >
              <h3 className="mb-2 font-semibold text-text group-hover:text-accent">
                {title}
              </h3>
              <p className="mb-4 text-sm text-text-muted">{description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {tech.map((tTech) => (
                  <span
                    key={tTech}
                    className="rounded-md bg-surface px-2 py-1 text-xs text-muted"
                  >
                    {tTech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent transition hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FolderGit2 className="h-3.5 w-3.5" />
                  {t.ui.repository}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
