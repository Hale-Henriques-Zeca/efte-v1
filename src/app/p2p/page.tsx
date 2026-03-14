import P2PHero from "./components/P2PHero";
import P2PFeatures from "./components/P2PFeatures";
import P2PMarketCard from "./components/P2PMarketCard";
import MozambiqueBotCard from "./components/MozambiqueBotCard";

export default function P2PPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#041C2C] to-[#020617] text-white px-6">
      <P2PHero />
      <P2PFeatures />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto my-20">
        <P2PMarketCard />
        <MozambiqueBotCard />
      </div>
    </main>
  );
}
