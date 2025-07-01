import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { useLanguage } from "../lib/language";
import { t } from "../lib/translations";

export function InviteManager() {
  const { language } = useLanguage();
  const [inviteeName, setInviteeName] = useState("");
  const [showForm, setShowForm] = useState(false);
  
  const generateCode = useMutation(api.friendCodes.generateCode);
  const myCodes = useQuery(api.friendCodes.getMyCodes);

  const handleGenerateCode = async () => {
    if (!inviteeName.trim()) return;
    
    try {
      const result = await generateCode({ inviteeName: inviteeName.trim() });
      toast.success(t('friendCodeGenerated', language, { code: result.code }));
      setInviteeName("");
      setShowForm(false);
    } catch (error) {
      toast.error(t('failedToGenerateCode', language));
    }
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success(t('codeCopied', language));
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString(language === 'pl' ? 'pl-PL' : 'en-US', {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-pink-800">{t('inviteYourPartner', language)}</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-medium rounded-xl hover:from-pink-500 hover:to-pink-600 transition-all shadow-lg shadow-pink-200/50 hover:shadow-xl hover:shadow-pink-300/50 transform hover:scale-105"
        >
          {t('generateCode', language)}
        </button>
      </div>

      {showForm && (
        <div className="bg-pink-50/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-200 space-y-4 shadow-lg shadow-pink-100/50">
          <div>
            <label className="block text-sm font-medium text-pink-700 mb-2">
              {t('partnersName', language)}
            </label>
            <input
              type="text"
              placeholder={t('whatShouldWeCall', language)}
              value={inviteeName}
              onChange={(e) => setInviteeName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all bg-pink-50/50"
            />
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={handleGenerateCode}
              disabled={!inviteeName.trim()}
              className="flex-1 px-4 py-2 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-50 shadow-lg shadow-pink-200/50"
            >
              {t('generateCode', language)}
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-4 py-2 text-pink-600 hover:text-pink-800 transition-colors"
            >
              {t('cancel', language)}
            </button>
          </div>
        </div>
      )}

      {/* Generated Codes */}
      <div className="space-y-3">
        <h4 className="font-medium text-pink-700">{t('generatedCodes', language)}</h4>
        {!myCodes || myCodes.length === 0 ? (
          <div className="text-center py-12 text-pink-600 bg-pink-50/50 rounded-2xl border border-pink-200">
            <div className="text-4xl mb-4 animate-float">💌</div>
            <p>{t('noCodesGenerated', language)}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {myCodes.map((code) => (
              <div
                key={code._id}
                className={`bg-pink-50/80 backdrop-blur-sm rounded-xl p-6 border-2 shadow-lg shadow-pink-100/50 transition-all duration-300 hover:scale-105 ${
                  code.isUsed ? "border-green-300 bg-green-50/80" : 
                  code.expiresAt < Date.now() ? "border-red-300 bg-red-50/80" : "border-pink-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xl font-bold text-pink-800 bg-pink-100 px-3 py-1 rounded-lg">
                        {code.code}
                      </span>
                      <span className="text-sm text-pink-600">
                        for {code.inviteeName}
                      </span>
                    </div>
                    <div className="text-xs text-pink-500 mt-2">
                      Created {formatDate(code._creationTime)} • 
                      {code.isUsed ? ` ${t('used', language)}` : 
                       code.expiresAt < Date.now() ? ` ${t('expired', language)}` : 
                       ` ${t('expires', language)} ${formatDate(code.expiresAt)}`}
                    </div>
                  </div>
                  
                  {!code.isUsed && code.expiresAt > Date.now() && (
                    <button
                      onClick={() => copyToClipboard(code.code)}
                      className="px-4 py-2 text-sm bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-lg transition-colors shadow-md"
                    >
                      {t('copy', language)}
                    </button>
                  )}
                </div>
                
                {code.isUsed && (
                  <div className="mt-3 text-sm text-green-700 bg-green-100 rounded-lg p-3 border border-green-200">
                    ✅ {t('successfullyUsed', language)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
