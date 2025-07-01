import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { MessageCard } from "./MessageCard";
import { InviteManager } from "./InviteManager";
import { useLanguage } from "../lib/language";
import { t } from "../lib/translations";

export function Dashboard() {
  const { language } = useLanguage();
  const dashboardData = useQuery(api.stats.getDashboardData);
  const profile = useQuery(api.profiles.getCurrentProfile);
  const partnerProfile = useQuery(api.profiles.getPartnerProfile);

  if (!dashboardData || !profile) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-pink-200 border-t-pink-500"></div>
      </div>
    );
  }

  const { pendingCounts, recentMessages, stats } = dashboardData;

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-pink-800 animate-pulse-pink">
          {t('welcomeBack', language, { name: profile.displayName })}
        </h2>
        {partnerProfile ? (
          <p className="text-pink-600">
            {t('connectedWith', language, { name: partnerProfile.displayName })}
          </p>
        ) : (
          <p className="text-pink-600">
            {profile.role === "owner" ? t('readyToInvite', language) : t('waitingForConnection', language)}
          </p>
        )}
      </div>

      {/* Invite Manager for Owners without Partner */}
      {profile.role === "owner" && !partnerProfile && (
        <InviteManager />
      )}

      {/* Stats Overview - only show if partner is connected */}
      {partnerProfile && profile.role === "owner" && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-pink-50/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-200 shadow-lg shadow-pink-100/50 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 hover:scale-105">
            <div className="text-center space-y-3">
              <div className="text-3xl animate-float">📝</div>
              <div className="text-2xl font-bold text-pink-600">{pendingCounts.tasks}</div>
              <div className="text-sm text-pink-700">{t('pendingTasks', language)}</div>
            </div>
          </div>
          
          <div className="bg-pink-50/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-200 shadow-lg shadow-pink-100/50 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 hover:scale-105">
            <div className="text-center space-y-3">
              <div className="text-3xl animate-float">💌</div>
              <div className="text-2xl font-bold text-pink-600">{pendingCounts.feedback}</div>
              <div className="text-sm text-pink-700">{t('newFeedback', language)}</div>
            </div>
          </div>
          
          <div className="bg-pink-50/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-200 shadow-lg shadow-pink-100/50 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 hover:scale-105">
            <div className="text-center space-y-3">
              <div className="text-3xl animate-float">🫶</div>
              <div className="text-2xl font-bold text-pink-600">{pendingCounts.wishes}</div>
              <div className="text-sm text-pink-700">{t('pendingWishes', language)}</div>
            </div>
          </div>
          
          <div className="bg-pink-50/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-200 shadow-lg shadow-pink-100/50 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 hover:scale-105">
            <div className="text-center space-y-3">
              <div className="text-3xl animate-float">🐾</div>
              <div className="text-2xl font-bold text-pink-600">{pendingCounts.gentle}</div>
              <div className="text-sm text-pink-700">{t('gentleRequests', language)}</div>
            </div>
          </div>
        </div>
      )}

      {/* Performance Stats */}
      {stats && profile.role === "owner" && partnerProfile && (
        <div className="bg-pink-50/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-200 shadow-lg shadow-pink-100/50">
          <h3 className="text-lg font-semibold text-pink-800 mb-6">{t('yourAttentiveness', language)}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-xl font-bold text-pink-600">
                {stats.tasksTotal > 0 ? Math.round((stats.tasksCompleted / stats.tasksTotal) * 100) : 0}%
              </div>
              <div className="text-sm text-pink-700">{t('tasksCompleted', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-pink-600">{stats.currentStreak}</div>
              <div className="text-sm text-pink-700">{t('currentStreak', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-pink-600">
                {stats.wishesTotal > 0 ? Math.round((stats.wishesFulfilled / stats.wishesTotal) * 100) : 0}%
              </div>
              <div className="text-sm text-pink-700">{t('wishesFulfilled', language)}</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-pink-600">
                {stats.messagesTotal > 0 ? Math.round((stats.messagesAcknowledged / stats.messagesTotal) * 100) : 0}%
              </div>
              <div className="text-sm text-pink-700">{t('messagesAcknowledged', language)}</div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Activity - only show if partner is connected */}
      {partnerProfile && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-pink-800">{t('recentActivity', language)}</h3>
          {recentMessages.length === 0 ? (
            <div className="text-center py-12 text-pink-600 bg-pink-50/50 rounded-2xl border border-pink-200">
              <div className="text-4xl mb-4 animate-float">💌</div>
              <p>{t('noMessagesYet', language)} {profile.role === "user" ? t('sendFirstMessage', language) : t('waitingForMessages', language)}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentMessages.slice(0, 5).map((message) => (
                <MessageCard key={message._id} message={message} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
