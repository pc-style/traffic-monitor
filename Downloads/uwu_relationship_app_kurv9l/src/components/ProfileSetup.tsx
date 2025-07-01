import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { useLanguage } from "../lib/language";
import { t } from "../lib/translations";

export function ProfileSetup() {
  const { language } = useLanguage();
  const [step, setStep] = useState<"role" | "owner-details" | "invite-code" | "user-details">("role");
  const [displayName, setDisplayName] = useState("");
  const [friendCode, setFriendCode] = useState("");
  const [inviteeName, setInviteeName] = useState("");
  
  const createOwnerProfile = useMutation(api.profiles.createOwnerProfile);
  const generateCode = useMutation(api.friendCodes.generateCode);
  const validateCode = useQuery(api.friendCodes.validateCode, 
    friendCode.length === 6 ? { code: friendCode } : "skip"
  );
  const useCode = useMutation(api.friendCodes.useCode);

  const handleCreateOwnerProfile = async () => {
    if (!displayName) return;
    
    try {
      await createOwnerProfile({ displayName });
      toast.success(t('profileCreated', language));
      window.location.reload();
    } catch (error) {
      toast.error(t('failedToCreateProfile', language));
    }
  };

  const handleGenerateCode = async () => {
    if (!inviteeName) return;
    
    try {
      const result = await generateCode({ inviteeName });
      toast.success(t('friendCodeGenerated', language, { code: result.code }));
      setStep("role");
    } catch (error) {
      toast.error(t('failedToGenerateCode', language));
    }
  };

  const handleUseCode = async () => {
    if (!friendCode || !displayName || !validateCode?.valid) return;
    
    try {
      await useCode({ code: friendCode, displayName });
      toast.success(t('welcomeConnected', language));
      window.location.reload();
    } catch (error) {
      toast.error(t('failedToUseCode', language));
    }
  };

  if (step === "role") {
    return (
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-pink-800">{t('joinUwU', language)}</h2>
          <p className="text-pink-600">{t('howAreYouJoining', language)}</p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => setStep("owner-details")}
            className="w-full p-6 text-left bg-pink-50/80 backdrop-blur-sm rounded-2xl border-2 border-pink-200 hover:border-pink-300 hover:bg-pink-100/80 transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-100/50"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl animate-float">👑</span>
              <div>
                <h3 className="font-semibold text-pink-800">{t('createNewCoupleAccount', language)}</h3>
                <p className="text-sm text-pink-600">{t('startFreshAndInvite', language)}</p>
              </div>
            </div>
          </button>
          
          <button
            onClick={() => setStep("invite-code")}
            className="w-full p-6 text-left bg-pink-50/80 backdrop-blur-sm rounded-2xl border-2 border-pink-200 hover:border-pink-300 hover:bg-pink-100/80 transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-100/50"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl animate-float">💌</span>
              <div>
                <h3 className="font-semibold text-pink-800">{t('joinWithFriendCode', language)}</h3>
                <p className="text-sm text-pink-600">{t('partnerSentCode', language)}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }

  if (step === "owner-details") {
    return (
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-pink-800">{t('createYourProfile', language)}</h2>
          <p className="text-pink-600">{t('whatShouldPartnerCall', language)}</p>
        </div>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder={t('yourDisplayName', language)}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all bg-pink-50/50"
          />
          
          <button
            onClick={handleCreateOwnerProfile}
            disabled={!displayName}
            className="w-full px-4 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold rounded-xl hover:from-pink-500 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-pink-200/50 hover:shadow-xl hover:shadow-pink-300/50 transform hover:scale-105"
          >
            {t('createProfile', language)}
          </button>
          
          <button
            onClick={() => setStep("role")}
            className="w-full px-4 py-3 text-pink-600 hover:text-pink-800 transition-colors"
          >
            {t('back', language)}
          </button>
        </div>
      </div>
    );
  }

  if (step === "invite-code") {
    return (
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-pink-800">{t('enterFriendCode', language)}</h2>
          <p className="text-pink-600">{t('enterSixCharCode', language)}</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="XXXXXX"
              value={friendCode}
              onChange={(e) => setFriendCode(e.target.value.toUpperCase().slice(0, 6))}
              className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all text-center text-2xl font-mono tracking-widest bg-pink-50/50"
              maxLength={6}
            />
            
            {friendCode.length === 6 && validateCode && (
              <div className="mt-2 text-sm">
                {validateCode.valid ? (
                  <div className="text-pink-700 bg-pink-100 rounded-lg p-3 border border-pink-200">
                    ✅ {t('validCode', language)} {validateCode.inviteeName}
                  </div>
                ) : (
                  <div className="text-red-700 bg-red-100 rounded-lg p-3 border border-red-200">
                    ❌ {validateCode.error}
                  </div>
                )}
              </div>
            )}
          </div>
          
          {friendCode.length === 6 && validateCode?.valid && (
            <div>
              <input
                type="text"
                placeholder={t('whatShouldPartnerCall', language)}
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all bg-pink-50/50"
              />
            </div>
          )}
          
          <button
            onClick={() => setStep("user-details")}
            disabled={!friendCode || friendCode.length !== 6 || !validateCode?.valid}
            className="w-full px-4 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold rounded-xl hover:from-pink-500 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-pink-200/50 hover:shadow-xl hover:shadow-pink-300/50 transform hover:scale-105"
          >
            {t('continue', language)}
          </button>
          
          <button
            onClick={() => setStep("role")}
            className="w-full px-4 py-3 text-pink-600 hover:text-pink-800 transition-colors"
          >
            {t('back', language)}
          </button>
        </div>
      </div>
    );
  }

  if (step === "user-details") {
    return (
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-pink-800">{t('completeSetup', language)}</h2>
          <p className="text-pink-600">{t('almostReady', language)}</p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-pink-100 border border-pink-300 rounded-xl p-4">
            <p className="text-pink-800 text-sm">
              <strong>{t('invitedAs', language)}</strong> {validateCode?.inviteeName}
            </p>
          </div>
          
          <input
            type="text"
            placeholder={t('yourDisplayName', language)}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all bg-pink-50/50"
          />
          
          <button
            onClick={handleUseCode}
            disabled={!displayName}
            className="w-full px-4 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold rounded-xl hover:from-pink-500 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-pink-200/50 hover:shadow-xl hover:shadow-pink-300/50 transform hover:scale-105"
          >
            {t('joinUwUButton', language)}
          </button>
          
          <button
            onClick={() => setStep("invite-code")}
            className="w-full px-4 py-3 text-pink-600 hover:text-pink-800 transition-colors"
          >
            {t('back', language)}
          </button>
        </div>
      </div>
    );
  }

  return null;
}
