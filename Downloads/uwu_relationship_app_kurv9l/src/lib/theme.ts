import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'color' | 'dark';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'uwu-theme',
    }
  )
);

export const themes = {
  light: {
    name: 'lightTheme',
    emoji: '🌸',
    class: 'theme-light'
  },
  color: {
    name: 'colorTheme',
    emoji: '💖',
    class: 'theme-color'
  },
  dark: {
    name: 'darkTheme',
    emoji: '🌺',
    class: 'theme-dark'
  }
} as const; 