import { useTheme, themes, type Theme } from "../lib/theme";
import { useLanguage } from "../lib/language";
import { t } from "../lib/translations";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { language } = useLanguage();

  const themeOptions: Theme[] = ['light', 'color', 'dark'];

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-pink-100/50 backdrop-blur-sm">
      {themeOptions.map((themeOption) => (
        <button
          key={themeOption}
          onClick={() => setTheme(themeOption)}
          className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium transition-all duration-200 ${
            theme === themeOption
              ? 'bg-pink-500 text-white shadow-lg transform scale-105'
              : 'text-pink-700 hover:bg-pink-200/50 hover:text-pink-800'
          }`}
          title={t(themes[themeOption].name as any, language)}
        >
          <span className="text-sm">{themes[themeOption].emoji}</span>
          <span className="text-xs font-medium">
            {themeOption === 'light' ? 'J' : themeOption === 'color' ? 'R' : 'C'}
          </span>
        </button>
      ))}
    </div>
  );
} 