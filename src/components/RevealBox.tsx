"use client";

import { useState } from "react";

type RevealBoxProps = {
  title: string;
  buttonText: string;
  children: React.ReactNode;
  accent?: boolean;
};

export default function RevealBox({
  title,
  buttonText,
  children,
  accent = false,
}: RevealBoxProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="rounded-[24px] border border-white/10 bg-black/20 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
      <h3 className="text-xl font-bold">{title}</h3>

      {isRevealed ? (
        <div
          className={
            accent
              ? "mt-4 text-2xl font-bold chalk-accent"
              : "mt-4 text-base leading-7 text-white/80"
          }
        >
          {children}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-white/15 bg-white/5 p-5 text-center">
          <p className="break-keep text-sm leading-6 text-white/60">
            버튼을 누르면 내용을 확인할 수 있습니다.
          </p>

          <button
            type="button"
            onClick={() => setIsRevealed(true)}
            className="mt-4 rounded-xl bg-white px-5 py-3 font-bold text-black transition hover:bg-white/85"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
}