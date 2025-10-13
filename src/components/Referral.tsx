import { useEffect, useState } from "react";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Clipboard, Check, Users, Sparkles } from "lucide-react";

interface ReferralData {
  id: string;
  email: string;
  referralCode: string;
  totalUses: number;
  isActive: boolean;
}

const Referral: React.FC = () => {
  const [referrals, setReferrals] = useState<ReferralData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const snapshot = await getDocs(collection(db, "referrals"));
        const data: ReferralData[] = snapshot.docs.map(
          (doc: QueryDocumentSnapshot<DocumentData>) => ({
            id: doc.id,
            email: doc.data().email as string,
            referralCode: doc.data().referralCode as string,
            totalUses: doc.data().totalUses as number,
            isActive: doc.data().isActive as boolean,
          })
        );
        setReferrals(data);
      } catch (err) {
        console.error("Error fetching referrals:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReferrals();
  }, []);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-lg tracking-wide">
        <Sparkles className="mr-2 w-5 h-5 text-purple-400 animate-spin" />
        Loading Referrals...
      </div>
    );

  return (
    <div className="p-10 min-h-screen text-white">
    
      {/* Referrals Grid */}
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {referrals.map((ref) => (
          <div
            key={ref.id}
            className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-800/40 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Animated Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-pink-600/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 rounded-3xl pointer-events-none" />

            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                  ref.isActive
                    ? "bg-green-500/20 text-green-300"
                    : "bg-red-500/20 text-red-300"
                }`}
              >
                {ref.isActive ? "Active" : "Inactive"}
              </span>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-md shadow-purple-600/30">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold truncate">{ref.email}</p>
                <p className="text-sm text-white/50">User Referral</p>
              </div>
            </div>

            {/* Referral Code */}
            <div className="mb-5">
              <p className="text-sm text-indigo-300 font-medium">
                Referral Code
              </p>
              <div className="mt-1 text-lg font-mono text-white/90 bg-white/10 p-2 rounded-xl border border-white/10 select-all">
                {ref.referralCode}
              </div>
            </div>

           

            {/* Copy Button */}
            <button
              onClick={() => copyToClipboard(ref.referralCode)}
              className="relative w-full py-2.5 rounded-xl font-medium text-sm overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:brightness-110 transition-all duration-300 flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                {copiedCode === ref.referralCode ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-white" /> Copied!
                  </>
                ) : (
                  <>
                    <Clipboard className="w-4 h-4 mr-2 text-white/90" /> Copy Code
                  </>
                )}
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md transition-opacity duration-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referral;
