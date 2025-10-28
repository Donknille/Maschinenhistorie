import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maschinenhistorie",
  description: "Lebenslaufakte für Produktionsanlagen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
