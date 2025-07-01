import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import { ProfileSetup } from "./components/ProfileSetup";
import { Dashboard } from "./components/Dashboard";
import { MessageComposer } from "./components/MessageComposer";
import { MessageList } from "./components/MessageList";
import { LanguageToggle } from "./components/LanguageToggle";
import { ThemeToggle } from "./components/ThemeToggle";
import { useState, useEffect } from "react";
import { useLanguage } from "./lib/language";
import { useTheme } from "./lib/theme";
import { t } from "./lib/translations";

export default function App() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    // Apply theme class to document root
    document.documentElement.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-pink">
      <header className="sticky top-0 z-10 bg-pink-50/90 backdrop-blur-sm border-b border-pink-200 shadow-lg shadow-pink-100/50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl animate-float">🫶</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent">
              {t('appName', language)}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageToggle />
            <Authenticated>
              <SignOutButton />
            </Authenticated>
          </div>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Content />
      </main>
      
      <Toaster position="top-right" />
    </div>
  );
}

function Content() {
  const { language } = useLanguage();
  const loggedInUser = useQuery(api.auth.loggedInUser);
  const profile = useQuery(api.profiles.getCurrentProfile);
  const [activeView, setActiveView] = useState<"dashboard" | "compose" | "messages">("dashboard");
  const [selectedCategory, setSelectedCategory] = useState<"remind" | "tell" | "wish" | "gentle" | null>(null);

  if (loggedInUser === undefined || profile === undefined) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-200 border-t-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Unauthenticated>
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent animate-pulse-pink">
              {t('appDescription', language).split('.')[0]} 💕
            </h2>
            <p className="text-lg text-pink-700 max-w-2xl mx-auto leading-relaxed">
              {t('appDescription', language)}
            </p>
          </div>
          <div className="bg-pink-50/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-200 shadow-lg shadow-pink-100/50">
            <SignInForm />
          </div>
        </div>
      </Unauthenticated>

      <Authenticated>
        {!profile ? (
          <ProfileSetup />
        ) : (
          <div className="space-y-6">
            {/* Navigation */}
            <nav className="flex gap-2 p-2 bg-pink-50/80 backdrop-blur-sm rounded-2xl border border-pink-200 shadow-lg shadow-pink-100/50">
              <button
                onClick={() => setActiveView("dashboard")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeView === "dashboard"
                    ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg shadow-pink-200/50 transform scale-105"
                    : "text-pink-700 hover:text-pink-800 hover:bg-pink-100"
                }`}
              >
                {t('dashboard', language)}
              </button>
              <button
                onClick={() => setActiveView("compose")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeView === "compose"
                    ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg shadow-pink-200/50 transform scale-105"
                    : "text-pink-700 hover:text-pink-800 hover:bg-pink-100"
                }`}
              >
                {profile.role === "user" ? t('sendMessage', language) : t('viewMessages', language)}
              </button>
              <button
                onClick={() => setActiveView("messages")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeView === "messages"
                    ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg shadow-pink-200/50 transform scale-105"
                    : "text-pink-700 hover:text-pink-800 hover:bg-pink-100"
                }`}
              >
                {t('history', language)}
              </button>
            </nav>

            {/* Content */}
            {activeView === "dashboard" && <Dashboard />}
            {activeView === "compose" && (
              <div>
                {profile.role === "user" ? (
                  <MessageComposer 
                    selectedCategory={selectedCategory}
                    onCategorySelect={setSelectedCategory}
                  />
                ) : (
                  <MessageList showReceivedOnly={true} />
                )}
              </div>
            )}
            {activeView === "messages" && <MessageList />}
          </div>
        )}
      </Authenticated>
    </div>
  );
}
