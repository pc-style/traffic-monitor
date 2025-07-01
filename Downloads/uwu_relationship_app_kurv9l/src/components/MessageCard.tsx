import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { useState } from "react";
import type { Doc } from "../../convex/_generated/dataModel";

interface MessageCardProps {
  message: Doc<"messages">;
}

export function MessageCard({ message }: MessageCardProps) {
  const [supportiveResponse, setSupportiveResponse] = useState("");
  const [showResponseForm, setShowResponseForm] = useState(false);
  
  const profile = useQuery(api.profiles.getCurrentProfile);
  const acknowledgeMessage = useMutation(api.messages.acknowledgeMessage);
  const completeTask = useMutation(api.messages.completeTask);
  const updateWishStatus = useMutation(api.messages.updateWishStatus);
  const markReflected = useMutation(api.messages.markReflected);

  const categoryConfig = {
    remind: { icon: "📝", color: "pink", name: "Remind" },
    tell: { icon: "💌", color: "purple", name: "Tell" },
    wish: { icon: "🫶", color: "indigo", name: "I'd like to..." },
    gentle: { icon: "🐾", color: "rose", name: "Gentle Request" },
  };

  const config = categoryConfig[message.category];
  const isRecipient = profile?.userId === message.recipientId;
  const isAuthor = profile?.userId === message.authorId;

  const handleAcknowledge = async () => {
    try {
      await acknowledgeMessage({
        messageId: message._id,
        supportiveResponse: message.category === "gentle" ? supportiveResponse : undefined,
      });
      toast.success("Message acknowledged! 💕");
      setShowResponseForm(false);
      setSupportiveResponse("");
    } catch (error) {
      toast.error("Failed to acknowledge message");
    }
  };

  const handleCompleteTask = async () => {
    try {
      await completeTask({ messageId: message._id });
      toast.success("Task completed! 🎉");
    } catch (error) {
      toast.error("Failed to complete task");
    }
  };

  const handleUpdateWish = async (status: "noted" | "planned" | "fulfilled") => {
    try {
      await updateWishStatus({ messageId: message._id, status });
      toast.success(`Wish ${status}! 💖`);
    } catch (error) {
      toast.error("Failed to update wish");
    }
  };

  const handleMarkReflected = async () => {
    try {
      await markReflected({ messageId: message._id });
      toast.success("Marked as reflected on! 💭");
    } catch (error) {
      toast.error("Failed to mark as reflected");
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case "high": return "text-red-600 bg-red-50";
      case "medium": return "text-yellow-600 bg-yellow-50";
      case "low": return "text-green-600 bg-green-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className={`bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-${config.color}-100 space-y-4`}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{config.icon}</span>
          <div>
            <h3 className="font-semibold text-gray-800">{message.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{config.name}</span>
              <span>•</span>
              <span>{formatDate(message._creationTime)}</span>
              {message.priority && (
                <>
                  <span>•</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(message.priority)}`}>
                    {message.priority}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Status Badge */}
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          message.status === "pending" ? "bg-yellow-100 text-yellow-800" :
          message.status === "acknowledged" ? "bg-blue-100 text-blue-800" :
          message.status === "completed" ? "bg-green-100 text-green-800" :
          message.status === "planned" ? "bg-purple-100 text-purple-800" :
          "bg-pink-100 text-pink-800"
        }`}>
          {message.status}
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-700">{message.content}</p>

      {/* Target Date */}
      {message.targetDate && (
        <div className="text-sm text-gray-600">
          Target: {formatDate(message.targetDate)}
        </div>
      )}

      {/* Supportive Response for Gentle Requests */}
      {message.category === "gentle" && message.supportiveResponse && (
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
          <p className="text-pink-800 text-sm">💖 {message.supportiveResponse}</p>
        </div>
      )}

      {/* Actions for Recipients */}
      {isRecipient && message.status === "pending" && (
        <div className="space-y-3 pt-4 border-t border-gray-200">
          {message.category === "remind" && (
            <button
              onClick={handleCompleteTask}
              className="w-full px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
            >
              Mark as Completed ✅
            </button>
          )}

          {message.category === "tell" && (
            <div className="space-y-2">
              <button
                onClick={handleAcknowledge}
                className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Acknowledge 👀
              </button>
              {message.acknowledgedAt && !message.reflectedAt && (
                <button
                  onClick={handleMarkReflected}
                  className="w-full px-4 py-2 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Mark as Reflected On 💭
                </button>
              )}
            </div>
          )}

          {message.category === "wish" && (
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleUpdateWish("noted")}
                className="px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Noted 📝
              </button>
              <button
                onClick={() => handleUpdateWish("planned")}
                className="px-3 py-2 bg-purple-500 text-white text-sm font-medium rounded-lg hover:bg-purple-600 transition-colors"
              >
                Planned 📅
              </button>
              <button
                onClick={() => handleUpdateWish("fulfilled")}
                className="px-3 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                Fulfilled ✨
              </button>
            </div>
          )}

          {message.category === "gentle" && (
            <div className="space-y-3">
              {!showResponseForm ? (
                <button
                  onClick={() => setShowResponseForm(true)}
                  className="w-full px-4 py-2 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Respond with Love 💖
                </button>
              ) : (
                <div className="space-y-2">
                  <textarea
                    value={supportiveResponse}
                    onChange={(e) => setSupportiveResponse(e.target.value)}
                    placeholder="You're not annoying at all! I love that you feel comfortable sharing with me..."
                    rows={3}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none resize-none"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleAcknowledge}
                      disabled={!supportiveResponse}
                      className="flex-1 px-4 py-2 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-50"
                    >
                      Send Response 💕
                    </button>
                    <button
                      onClick={() => setShowResponseForm(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Completion Info */}
      {message.completedAt && (
        <div className="text-sm text-green-600 bg-green-50 rounded-lg p-2">
          ✅ Completed on {formatDate(message.completedAt)}
        </div>
      )}

      {message.acknowledgedAt && (
        <div className="text-sm text-blue-600 bg-blue-50 rounded-lg p-2">
          👀 Acknowledged on {formatDate(message.acknowledgedAt)}
          {message.reflectedAt && (
            <span className="block mt-1">💭 Reflected on {formatDate(message.reflectedAt)}</span>
          )}
        </div>
      )}
    </div>
  );
}
