import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { personSchema, websiteSchema } from "@/lib/schema";
import { siteUrl } from "@/lib/site-data";
import { getProfile } from "@/lib/content-service";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mehul Variya | Android, Flutter & Node.js Backend Developer",
    template: "%s"
  },
  description: "Mehul Variya builds Android apps, Flutter iOS apps, Node.js APIs, Express.js services, NestJS backends, and database-backed products.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const profile = await getProfile();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased`}>
        <ThemeProvider>
          {/* Global structured data */}
          <JsonLd data={personSchema(profile)} />
          <JsonLd data={websiteSchema()} />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
