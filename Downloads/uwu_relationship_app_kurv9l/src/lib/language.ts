import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language } from './translations';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'pl',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'uwu-language',
    }
  )
);
