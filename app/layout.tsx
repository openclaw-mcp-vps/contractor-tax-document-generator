import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1099 Tax Doc Generator – Auto-Generate Contractor Tax Forms",
  description: "Connect Stripe, PayPal, or Square and automatically generate IRS-compliant 1099-NEC forms for your contractors. $12/mo."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="10e787a8-51b6-4c76-acff-006d929c09bb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
