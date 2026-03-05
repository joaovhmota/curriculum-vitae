import { useLocale } from "../contexts/LocaleContext";

export const Footer = () => {
  const { t } = useLocale();
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {t.footer.name}. {t.footer.caption}
        </p>
        <a
          href="#hero"
          className="text-sm text-muted transition hover:text-accent"
        >
          {t.ui.backToTop}
        </a>
      </div>
    </footer>
  );
};
