import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import "katex/dist/katex.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "두뇌 스트레칭",
  description: "수학 퀴즈, 개념정리, 계산기, 두뇌게임",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-board text-white`}
      >
        <header className="border-b border-white/15">
         <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <Link
             href="/"
             className="text-2xl font-bold tracking-wide whitespace-nowrap"
          >
             두뇌 스트레칭
          </Link>

          <nav className="flex flex-wrap justify-start gap-x-4 gap-y-2 text-sm text-white/80 md:flex-nowrap md:justify-end md:gap-6">
           <Link href="/" className="whitespace-nowrap hover:text-white">
              홈
           </Link>
           <Link href="/quizzes" className="whitespace-nowrap hover:text-white">
              퀴즈
           </Link>
           <Link href="/concepts" className="whitespace-nowrap hover:text-white">
              수학 개념정리
           </Link>
           <Link href="/calculators" className="whitespace-nowrap hover:text-white">
              각종 계산기
           </Link>
           <Link href="/games" className="whitespace-nowrap hover:text-white">
              두뇌 게임
           </Link>
          </nav>
         </div>
        </header>

        {children}

        <footer className="border-t border-white/10">
         <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 두뇌 스트레칭. All Rights Reserved.</p>

          <div className="flex flex-wrap gap-4">
           <a href="/privacy-policy" className="hover:text-white">
               개인정보처리방침
           </a>
           <a href="/contact" className="hover:text-white">
               문의
           </a>
          </div>
         </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}