import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terma Penggunaan — Kadar Tukaran MY" };
export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Terma Penggunaan / Terms of Use</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p>Kadar tukaran yang dipaparkan adalah untuk tujuan rujukan sahaja. Kadar sebenar di bank atau pengubah wang berlesen mungkin berbeza.</p>
        <p>Exchange rates displayed are for reference purposes only. Actual rates at banks or licensed money changers may differ. We are not responsible for any financial decisions made based on information from this site.</p>
      </div>
    </div>
  );
}
