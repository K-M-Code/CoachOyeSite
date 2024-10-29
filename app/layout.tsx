import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

// import logoImage from '@/public/images/logo.svg'


export const metadata: Metadata = {
  title: "Coach Oye",
  description: "Your Path, Your Pace. Let's Navigate Together. Personalized Coaching & Consulting for Extraordinary Results. Unlock Your Potential. Achieve Your Goals.",
  keywords: [],
  openGraph: {
    title: "Coach Oye",
    description: "Your Path, Your Pace. Let's Navigate Together. Personalized Coaching & Consulting for Extraordinary Results. Unlock Your Potential. Achieve Your Goals.",
    url: "https://coachme2.fi/",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Coach Oye Logo",
      },
    ],
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script async src="https://umami.coachme2.fi/script.js" data-website-id="6cd475c0-9c05-4916-86f7-71008fc18755"></script>
      <body>
        <Header />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
