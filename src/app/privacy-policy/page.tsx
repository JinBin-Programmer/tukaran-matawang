import type { Metadata } from "next";
export const metadata: Metadata = { title: "Dasar Privasi — Kadar Tukaran MY" };
export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-16 space-y-6">
      <h1 className="text-3xl font-black text-white">Dasar Privasi / Privacy Policy</h1>
      <div className="card-glass rounded-2xl p-6 space-y-4 text-white/70 text-sm leading-relaxed">
        <p>Laman web ini tidak menyimpan sebarang data peribadi pengguna. Kadar tukaran diambil dari API pihak ketiga dan dipaparkan untuk rujukan sahaja.</p>
        <p>This website does not store any personal user data. Exchange rates are fetched from a third-party API and displayed for reference only.</p>
        <p>Kami menggunakan Google AdSense untuk iklan. Sila rujuk Dasar Privasi Google untuk maklumat lanjut.</p>
        <p className="text-white/40 text-xs">Dikemas kini: Mei 2026 / Updated: May 2026</p>
      </div>
    </div>
  );
}
