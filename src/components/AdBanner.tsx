"use client";
interface AdBannerProps { slot: string; format?: "auto"|"horizontal"|"rectangle"|"vertical"; className?: string; }
export default function AdBanner({ className = "" }: AdBannerProps) {
  return <div className={className} />;
}
