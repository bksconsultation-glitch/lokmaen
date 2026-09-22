import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITTIHAD PRO – Pôle d'Excellence",
  description: "Inscription en ligne – Union Pro Sports Training Pole, Aïn Smara – Constantine."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}