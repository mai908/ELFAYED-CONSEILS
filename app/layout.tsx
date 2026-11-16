import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { LanguageProvider } from "./LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EL FAYED CONSEILS | Paris",
  description:
    "Conseil, gestion administrative, assistance comptable, marketing digital et formation à Paris.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
       <body className="min-h-full flex flex-col">
         <LanguageProvider>
           <SiteHeader />
           {children}
           <SiteFooter />
         </LanguageProvider>
       </body>
    </html>
  );
}
