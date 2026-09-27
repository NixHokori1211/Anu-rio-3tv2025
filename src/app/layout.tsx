import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { MobileNav } from "@/components/MobileNav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anuário 3º TV — E.E. Reverendo Irineu Monteiro de Pinho",
  description: "Anuário digital da turma 3º TV, 2025.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <a href="#main" className="skip-link">
          Pular para o conteúdo
        </a>
        <div className="grain" />
        <Navbar />
        <MobileNav />
        <main id="main" className="relative z-10 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
