import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LOCALE_STORAGE_KEY, messages, PAGE_TITLES, type Locale } from './translations';

type Values = Record<string, string | number>;
type LocaleContextValue = { locale: Locale; setLocale: (locale: Locale) => void; toggleLocale: () => void; t: (key: string, values?: Values) => string };
const LocaleContext = createContext<LocaleContextValue | null>(null);
const initialLocale = (): Locale => {
  try { return localStorage.getItem(LOCALE_STORAGE_KEY) === 'en' ? 'en' : 'zh-CN'; } catch { return 'zh-CN'; }
};
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = PAGE_TITLES[locale];
    try { localStorage.setItem(LOCALE_STORAGE_KEY, locale); } catch { /* storage can be unavailable */ }
  }, [locale]);
  const value = useMemo<LocaleContextValue>(() => ({
    locale, setLocale, toggleLocale: () => setLocale((current) => current === 'zh-CN' ? 'en' : 'zh-CN'),
    t: (key, values = {}) => (messages[locale][key] ?? messages['zh-CN'][key] ?? key).replace(/\{(\w+)\}/g, (_, name: string) => String(values[name] ?? `{${name}}`)),
  }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext);
  if (!value) throw new Error('useLocale must be used within LocaleProvider');
  return value;
}
