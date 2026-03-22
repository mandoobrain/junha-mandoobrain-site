import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link href="/" className="text-2xl font-bold tracking-wide">
              두뇌 스트레칭
            </Link>

            <nav className="flex gap-6 text-sm text-white/80">
              <Link href="/" className="hover:text-white">
                홈
              </Link>
              <Link href="/quizzes" className="hover:text-white">
                퀴즈
              </Link>
              <Link href="/concepts" className="hover:text-white">
                수학 개념정리
              </Link>
              <Link href="/calculators" className="hover:text-white">
                각종 계산기
              </Link>
              <Link href="/games" className="hover:text-white">
                두뇌 게임
              </Link>
            </nav>
          </div>
        </header>

        {children}
        <Analytics />
      </body>
    </html>
  );
}