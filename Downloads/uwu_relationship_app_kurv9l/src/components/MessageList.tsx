import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { MessageCard } from "./MessageCard";
import { useState } from "react";

interface MessageListProps {
  showReceivedOnly?: boolean;
}

export function MessageList({ showReceivedOnly = false }: MessageListProps) {
  const [selectedCategory, setSelectedCategory] = useState<"remind" | "tell" | "wish" | "gentle" | "all">("all");
  const [selectedStatus, setSelectedStatus] = useState<"pending" | "acknowledged" | "completed" | "all">("all");
  
  const receivedMessages = useQuery(api.messages.getMessages, {
    category: selectedCategory === "all" ? undefined : selectedCategory,
    status: selectedStatus === "all" ? undefined : selectedStatus,
  });
  
  const sentMessages = useQuery(api.messages.getSentMessages);
  
  const messages = showReceivedOnly ? (receivedMessages || []) : [...(receivedMessages || []), ...(sentMessages || [])];
  const sortedMessages = messages.sort((a, b) => b._creationTime - a._creationTime);

  const categories = [
    { id: "all", name: "All", icon: "📋" },
    { id: "remind", name: "Tasks", icon: "📝" },
    { id: "tell", name: "Feedback", icon: "💌" },
    { id: "wish", name: "Wishes", icon: "🫶" },
    { id: "gentle", name: "Gentle", icon: "🐾" },
  ];

  const statuses = [
    { id: "all", name: "All" },
    { id: "pending", name: "Pending" },
    { id: "acknowledged", name: "Acknowledged" },
    { id: "completed", name: "Completed" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          {showReceivedOnly ? "Messages to Respond To" : "Message History"}
        </h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as any)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-pink-500 text-white"
                  : "bg-white/60 text-gray-600 hover:bg-white"
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          {statuses.map((status) => (
            <button
              key={status.id}
              onClick={() => setSelectedStatus(status.id as any)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedStatus === status.id
                  ? "bg-purple-500 text-white"
                  : "bg-white/60 text-gray-600 hover:bg-white"
              }`}
            >
              {status.name}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-4">
        {sortedMessages.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-4">💌</div>
            <p>No messages found with the selected filters.</p>
          </div>
        ) : (
          sortedMessages.map((message) => (
            <MessageCard key={message._id} message={message} />
          ))
        )}
      </div>
    </div>
  );
}
