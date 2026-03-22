"use client";

import { useMemo, useState } from "react";

const DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function parseFromBase(value: string, base: number) {
  let result = 0;

  for (const char of value.toUpperCase()) {
    const digit = DIGITS.indexOf(char);

    if (digit < 0 || digit >= base) {
      return null;
    }

    result = result * base + digit;

    if (!Number.isSafeInteger(result)) {
      return null;
    }
  }

  return result;
}

function convertToBase(value: number, base: number) {
  if (value === 0) return "0";

  let current = value;
  let result = "";

  while (current > 0) {
    const digit = current % base;
    result = DIGITS[digit] + result;
    current = Math.floor(current / base);
  }

  return result;
}

export default function BaseConverterPage() {
  const [inputValue, setInputValue] = useState("");
  const [fromBase, setFromBase] = useState("10");
  const [toBase, setToBase] = useState("2");

  const result = useMemo(() => {
    const trimmed = inputValue.trim();
    const from = Number(fromBase);
    const to = Number(toBase);

    if (!trimmed) {
      return {
        type: "empty" as const,
        message: "변환할 수와 시작 진법, 목표 진법을 입력하세요.",
      };
    }

    if (!Number.isInteger(from) || !Number.isInteger(to) || from < 2 || from > 36 || to < 2 || to > 36) {
      return {
        type: "error" as const,
        message: "진법은 2 이상 36 이하로 입력해주세요.",
      };
    }

    const parsed = parseFromBase(trimmed, from);

    if (parsed === null) {
      return {
        type: "error" as const,
        message: "입력한 수가 시작 진법에 맞지 않거나 너무 큽니다.",
      };
    }

    return {
      type: "success" as const,
      input: trimmed.toUpperCase(),
      from,
      to,
      decimalValue: parsed,
      convertedValue: convertToBase(parsed, to),
    };
  }, [inputValue, fromBase, toBase]);

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          BASE CONVERTER
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          진수 변환기
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
          n진법의 수를 다른 진법의 수로 변환할 수 있습니다.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="block text-sm font-semibold text-white/80">
            변환할 수
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="예: 101101 또는 2A"
            className="mt-3 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-lg text-white outline-none placeholder:text-white/35"
          />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-white/80">
                시작 진법
              </label>
              <input
                type="number"
                min="2"
                max="36"
                value={fromBase}
                onChange={(event) => setFromBase(event.target.value)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-lg text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/80">
                목표 진법
              </label>
              <input
                type="number"
                min="2"
                max="36"
                value={toBase}
                onChange={(event) => setToBase(event.target.value)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-lg text-white outline-none"
              />
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
            {result.type === "success" ? (
              <>
                <p className="text-sm text-white/60">입력한 값</p>
                <p className="mt-2 text-2xl font-bold">
                  {result.input} ({result.from}진법)
                </p>

                <p className="mt-6 text-sm text-white/60">10진법 값</p>
                <p className="mt-2 text-2xl font-bold">{result.decimalValue}</p>

                <p className="mt-6 text-sm text-white/60">변환 결과</p>
                <p className="mt-2 text-2xl font-bold break-words">
                  {result.convertedValue} ({result.to}진법)
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