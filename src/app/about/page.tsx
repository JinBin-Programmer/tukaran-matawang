import type { Metadata } from "next";
export const metadata: Metadata = { title: "Tentang Kadar Tukaran Matawang Malaysia" };
export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Tentang / About</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p><strong className="text-white">Kadar Tukaran Matawang Malaysia</strong> memaparkan kadar pertukaran Ringgit Malaysia (MYR) yang dikemas kini setiap jam terhadap mata wang utama dunia termasuk USD, SGD, EUR, GBP, JPY dan banyak lagi.</p>
        <p><strong className="text-white">Malaysia Currency Exchange Rate</strong> shows live Malaysian Ringgit (MYR) exchange rates updated hourly against major world currencies including USD, SGD, EUR, GBP, JPY and more.</p>
        <p className="text-white/40 text-xs">Kadar dari Open Exchange Rates API · Rates from Open Exchange Rates API</p>
      </div>
    </div>
  );
}
