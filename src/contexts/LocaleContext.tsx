import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getBrowserLocale,
  translations,
  type Locale,
  type Translations,
} from "../data/translations";

const STORAGE_KEY = "portfolio-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getStoredLocale(): Locale | null {
  if (typeof localStorage === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "pt") return stored;
  return null;
}

export function LocaleProvider({ children }: { children: ReactNode; }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    return getStoredLocale() ?? getBrowserLocale();
  });

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable (private mode, SSR, etc.)
    }
  }, []);

  const t = useMemo(() => translations[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
