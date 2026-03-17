import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SentinelAR | Industrial Spatial Intelligence",
  description: "Advanced AR/Spatial computing for industrial safety by Sentinel AR Technologies Pvt. Ltd.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#050505] text-[#F8FAFC]">
      <body className={`${inter.className} ${jetbrainsMono.className} bg-background text-foreground antialiased`}>
        <div className="grid-overlay" />
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}
