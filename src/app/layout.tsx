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
  metadataBase: new URL("https://karan-portfolio-three-liard.vercel.app"),
  title: "Karan Upadhyay - Full-Stack & Applied AI Engineer",
  description:
    "The portfolio of Karan Upadhyay, a Full-Stack & Applied AI Engineer at Jain Irrigation Systems building React Native, Node.js, Python and LLM-agent software.",
  keywords: [
    "Karan Upadhyay",
    "Full-Stack Developer",
    "Applied AI Engineer",
    "React Native",
    "AI & ML Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Python Developer",
  ],
  authors: [{ name: "Karan Upadhyay", url: "https://karan-portfolio-three-liard.vercel.app" }],
  creator: "Karan Upadhyay",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://karan-portfolio-three-liard.vercel.app",
    title: "Karan Upadhyay - Full-Stack & Applied AI Engineer",
    description:
      "Explore the portfolio of Karan Upadhyay, featuring a production URL shortener in Go, an AI learning workspace and a shipped React Native app.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Karan Upadhyay - Full-Stack & Applied AI Engineer",
    description:
      "Explore the portfolio of Karan Upadhyay, Full-Stack & Applied AI Engineer.",
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
            </main>
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
