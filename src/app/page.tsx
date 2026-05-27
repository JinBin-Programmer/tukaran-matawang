import type { Metadata } from "next";
import { getExchangeRates } from "@/lib/exchange";
import ExchangeContent from "@/components/ExchangeContent";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Kadar Tukaran Matawang Malaysia Hari Ini — MYR ke USD SGD EUR",
  description: "Kadar tukaran Ringgit Malaysia terkini. 1 USD = RM 4.xx. Semak kadar MYR ke SGD, EUR, GBP, JPY, AUD dan lebih banyak lagi.",
};

export default async function HomePage() {
  let data;
  try {
    data = await getExchangeRates();
  } catch {
    // Fallback static data
    data = {
      base: "MYR",
      date: new Date().toISOString().split("T")[0],
      rates: { USD: 0.2256, SGD: 0.3038, EUR: 0.2080, GBP: 0.1762, JPY: 33.4, AUD: 0.3453, CNY: 1.634, THB: 7.85, IDR: 3685, SAR: 0.8460 },
    };
  }
  return <ExchangeContent data={data} />;
}
