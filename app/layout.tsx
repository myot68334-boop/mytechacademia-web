import "./globals.css";
import type { ReactNode } from "react";
import { Suspense } from "react";
import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";

export const metadata: Metadata = {
  title: {
    default: "My Tech Academia",
    template: "%s | My Tech Academia",
  },
  description:
    "My Tech Academia brings together practical products for language learning, guided ecommerce, and AI-powered education across web, mobile, and future connected experiences.",
  metadataBase: new URL("https://mytechacademia.com"),
  applicationName: "My Tech Academia",
  keywords: [
    "My Tech Academia",
    "WorkJapaneseGO",
    "ZayCho",
    "Tech Academia",
    "AI learning platform",
    "guided ecommerce",
    "Japanese learning app",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "My Tech Academia | Learning, AI, and Practical Digital Products",
    description:
      "Discover WorkJapaneseGO, ZayCho, and Tech Academia in one digital product ecosystem built for language learning, guided ecommerce, and AI-powered education.",
    url: "https://mytechacademia.com",
    siteName: "My Tech Academia",
    type: "website",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "My Tech Academia social share preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Tech Academia | Practical products for learning and AI",
    description:
      "Explore WorkJapaneseGO, ZayCho, and Tech Academia across one connected brand.",
    images: ["/social-preview.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div className="site-shell">{children}</div>}>
          <SiteChrome>{children}</SiteChrome>
        </Suspense>
      </body>
    </html>
  );
}
