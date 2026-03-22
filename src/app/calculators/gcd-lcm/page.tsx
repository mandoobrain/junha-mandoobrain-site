"use client";

import { useMemo, useState } from "react";

function gcd(a: number, b: number) {
  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y !== 0) {
    const temp = x % y;
    x = y;
    y = temp;
  }

  return x;
}

function lcm(a: number, b: number) {
  return Math.abs(a * b) / gcd(a, b);
}

export default function GcdLcmPage() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const result = useMemo(() => {
    const firstTrimmed = firstValue.trim();
    const secondTrimmed = secondValue.trim();

    if (!firstTrimmed || !secondTrimmed) {
      return {
        type: "empty" as const,
        message: "두 자연수를 입력하면 최대공약수와 최소공배수가 표시됩니다.",
      };
    }

    if (!/^\d+$/.test(firstTrimmed) || !/^\d+$/.test(secondTrimmed)) {
      return {
        type: "error" as const,
        message: "0 이상의 정수만 입력할 수 있습니다.",
      };
    }

    const a = Number(firstTrimmed);
    const b = Number(secondTrimmed);

    if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b)) {
      return {
        type: "error" as const,
        message: "너무 큰 수는 처리할 수 없습니다.",
      };
    }

    if (a < 1 || b < 1) {
      return {
        type: "error" as const,
        message: "1 이상의 자연수를 입력해주세요.",
      };
    }

    return {
      type: "success" as const,
      a,
      b,
      gcdValue: gcd(a, b),
      lcmValue: lcm(a, b),
    };
  }, [firstValue, secondValue]);

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          GCD &amp; LCM
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          최대공약수 최소공배수 계산기
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
          두 자연수를 입력하면 최대공약수와 최소공배수를 바로 확인할 수 있습니다.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-white/80">
                첫 번째 자연수
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={firstValue}
                onChange={(event) => setFirstValue(event.target.value)}
                placeholder="예: 12"
                className="mt-3 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-lg text-white outline-none placeholder:text-white/35"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/80">
                두 번째 자연수
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={secondValue}
                onChange={(event) => setSecondValue(event.target.value)}
                placeholder="예: 18"
                className="mt-3 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-lg text-white outline-none placeholder:text-white/35"
              />
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
            {result.type === "success" ? (
              <>
                <p className="text-sm text-white/60">입력한 수</p>
                <p className="mt-2 text-2xl font-bold">
                  {result.a}, {result.b}
                </p>

                <p className="mt-6 text-sm text-white/60">최대공약수</p>
                <p className="mt-2 text-2xl font-bold">{result.gcdValue}</p>

                <p className="mt-6 text-sm text-white/60">최소공배수</p>
                <p className="mt-2 text-2xl font-bold">{result.lcmValue}</p>
              </>
            ) : (
              <p className="text-white/70">{result.message}</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}