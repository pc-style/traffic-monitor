import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { useLanguage } from "../lib/language";
import { t } from "../lib/translations";

interface MessageComposerProps {
  selectedCategory: "remind" | "tell" | "wish" | "gentle" | null;
  onCategorySelect: (category: "remind" | "tell" | "wish" | "gentle" | null) => void;
}

export function MessageComposer({ selectedCategory, onCategorySelect }: MessageComposerProps) {
  const { language } = useLanguage();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [targetDate, setTargetDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const createMessage = useMutation(api.messages.createMessage);

  const categories = [
    {
      id: "remind" as const,
      name: "Remind",
      icon: "📝",
      description: "Tasks and reminders",
      color: "pink",
    },
    {
      id: "tell" as const,
      name: "Tell",
      icon: "💌",
      description: "Feedback and observations",
      color: "purple",
    },
    {
      id: "wish" as const,
      name: "I'd like to...",
      icon: "🫶",
      description: "Desires and requests",
      color: "indigo",
    },
    {
      id: "gentle" as const,
      name: "I know I'm being annoying, but...",
      icon: "🐾",
      description: "Gentle requests",
      color: "rose",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory || !title || !content) return;
    
    setIsSubmitting(true);
    try {
      await createMessage({
        category: selectedCategory,
        title,
        content,
        priority,
        targetDate: targetDate ? new Date(targetDate).getTime() : undefined,
      });
      
      toast.success("Message sent! 💕");
      setTitle("");
      setContent("");
      setTargetDate("");
      onCategorySelect(null);
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedCategory) {
    return (
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">Send a Message 💕</h2>
          <p className="text-gray-600">Choose a category to get started</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`p-6 text-left bg-white/60 backdrop-blur-sm rounded-xl border-2 border-${category.color}-200 hover:border-${category.color}-300 transition-all hover:scale-105`}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-semibold text-gray-800">{category.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const selectedCat = categories.find(c => c.id === selectedCategory)!;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onCategorySelect(null)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          ← Back
        </button>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{selectedCat.icon}</span>
          <h2 className="text-2xl font-bold text-gray-800">{selectedCat.name}</h2>
        </div>
      </div>

      {selectedCategory === "gentle" && (
        <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
          <p className="text-pink-800 text-center font-medium">
            You're not annoying! 💖 This is a safe space to share anything on your mind.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={`What would you like to ${selectedCategory === "remind" ? "remind about" : selectedCategory === "tell" ? "share" : selectedCategory === "wish" ? "request" : "discuss"}?`}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your thoughts..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none transition-all resize-none"
                required
              />
            </div>

            {(selectedCategory === "remind" || selectedCategory === "wish") && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority
                  </label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Date (optional)
                  </label>
                  <input
                    type="date"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !title || !content}
          className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message 💕"}
        </button>
      </form>
    </div>
  );
}
