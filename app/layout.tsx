import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blood Pressure Trend Analyzer",
  description: "Analyzes blood pressure trends and triggers. Track BP readings with context, identify patterns, and get smart alerts for concerning trends."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="56638649-7660-4e95-8523-59e4d6020272"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
