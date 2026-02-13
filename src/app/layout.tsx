import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/custom-cursor";
import NavbarRes from "@/components/navbar";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Karan Upadhyay - Software Development & AI Engineer",
  description:
    "The portfolio of Karan Upadhyay, a Software Development Intern and MCA student specializing in AI, Machine Learning, and Full Stack Development.",
  keywords: [
    "Karan Upadhyay",
    "Software Development Intern",
    "AI & ML Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Python Developer",
  ],
  authors: [{ name: "Karan Upadhyay", url: "http://localhost:3000" }],
  creator: "Karan Upadhyay",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "http://localhost:3000",
    title: "Karan Upadhyay - Software Development & AI Engineer",
    description:
      "Explore the portfolio of Karan Upadhyay, featuring AI-driven projects like Intelligent Shopping Assistant and high-performance web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Karan Upadhyay Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Karan Upadhyay - Software Development & AI Engineer",
    description:
      "Explore the portfolio of Karan Upadhyay, specializing in AI/ML and Full Stack Development.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoSerif.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen flex-grow">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen flex-grow">
            <CustomCursor />
            <NavbarRes />
            <main className="flex-grow relative z-10">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
