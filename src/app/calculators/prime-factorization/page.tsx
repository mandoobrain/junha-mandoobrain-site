"use client";

import { useMemo, useState } from "react";

function primeFactorize(n: number) {
  const factors: Array<{ prime: number; count: number }> = [];
  let value = n;

  for (let divisor = 2; divisor * divisor <= value; divisor += 1) {
    if (value % divisor !== 0) continue;

    let count = 0;
    while (value % divisor === 0) {
      value /= divisor;
      count += 1;
    }

    factors.push({ prime: divisor, count });
  }

  if (value > 1) {
    factors.push({ prime: value, count: 1 });
  }

  return factors;
}

export default function PrimeFactorizationPage() {
  const [inputValue, setInputValue] = useState("");

  const result = useMemo(() => {
    const trimmed = inputValue.trim();

    if (!trimmed) {
      return {
        type: "empty" as const,
        message: "자연수를 입력하면 소인수분해 결과가 표시됩니다.",
      };
    }

    if (!/^\d+$/.test(trimmed)) {
      return {
        type: "error" as const,
        message: "0 이상의 정수만 입력할 수 있습니다.",
      };
    }

    const numberValue = Number(trimmed);

    if (!Number.isSafeInteger(numberValue)) {
      return {
        type: "error" as const,
        message: "너무 큰 수는 처리할 수 없습니다.",
      };
    }

    if (numberValue < 2) {
      return {
        type: "error" as const,
        message: "2 이상의 자연수를 입력해주세요.",
      };
    }

    const factors = primeFactorize(numberValue);
    const expression = factors
      .map((factor) =>
        factor.count === 1
          ? `${factor.prime}`
          : `${factor.prime}^${factor.count}`
      )
      .join(" × ");

    return {
      type: "success" as const,
      numberValue,
      expression,
      factors,
    };
  }, [inputValue]);

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          PRIME FACTORIZATION
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          소인수분해 계산기
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
          자연수를 입력하면 소인수분해 결과를 바로 확인할 수 있습니다.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="block text-sm font-semibold text-white/80">
            자연수 입력
          </label>

          <input
            type="text"
            inputMode="numeric"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="예: 360"
            className="mt-3 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-lg text-white outline-none placeholder:text-white/35"
          />

          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
            {result.type === "success" ? (
              <>
                <p className="text-sm text-white/60">입력한 수</p>
                <p className="mt-2 text-2xl font-bold">{result.numberValue}</p>

                <p className="mt-6 text-sm text-white/60">소인수분해 결과</p>
                <p className="mt-2 text-2xl font-bold break-words">
                  {result.expression}
                </p>
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