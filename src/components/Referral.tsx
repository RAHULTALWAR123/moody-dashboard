// src/components/Referral.tsx
import { useEffect, useState } from "react";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Clipboard, Check } from "lucide-react";

// TypeScript interface
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
      <div className="flex justify-center items-center min-h-screen text-gray-300 bg-gray-900">
        Loading referrals...
      </div>
    );

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <h1 className="text-3xl font-bold mb-8 text-white text-center">User Referrals</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {referrals.map((ref) => (
          <div
            key={ref.id}
            className="relative p-6 bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Status Badge */}
            {/* <span
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                ref.isActive ? "bg-green-500/30 text-green-200" : "bg-red-500/30 text-red-200"
              }`}
            >
              {ref.isActive ? "Active" : "Inactive"}
            </span> */}

            {/* Email & Code */}
            <p className="text-lg font-semibold text-white mb-1 truncate">{ref.email}</p>
            <p className="text-sm text-indigo-300 mb-2">
              Code: <span className="font-mono text-indigo-200">{ref.referralCode}</span>
            </p>

            {/* Total Uses */}
            <p className="text-sm text-gray-300 mb-4">Total Uses: {ref.totalUses}</p>

            {/* Copy Button */}
            <button
              onClick={() => copyToClipboard(ref.referralCode)}
              className="flex items-center justify-center w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition"
            >
              {copiedCode === ref.referralCode ? (
                <>
                  <Check className="w-4 h-4 mr-2" /> Copiedd
                </>
              ) : (
                <>
                  <Clipboard className="w-4 h-4 mr-2" /> Copy Codes
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referral;
