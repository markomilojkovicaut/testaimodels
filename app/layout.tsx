import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test AI Models — Test ChatGPT, Claude, Gemini with YOUR Prompts",
  description: "Compare ChatGPT, Claude, Gemini, and Grok with your actual prompts. See quality, speed, and exact costs side-by-side in 30 seconds. No API keys required.",
  keywords: "AI model comparison, ChatGPT vs Claude, LLM testing, AI API costs, test AI models",
  openGraph: {
    title: "Test AI Models — Choose the Right AI in 30 Seconds",
    description: "Test ChatGPT, Claude, Gemini, Grok with your prompts. See exact costs before you integrate.",
    url: "https://testaimodels.com",
    siteName: "Test AI Models",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@300;400;500;600;700;800;900&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
