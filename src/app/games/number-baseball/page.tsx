"use client";

import { useEffect, useMemo, useState } from "react";

type GuessRecord = {
  guess: string;
  strike: number;
  ball: number;
};

function createAnswer() {
  const digits = "0123456789".split("");
  const answer: string[] = [];

  const firstCandidates = digits.filter((digit) => digit !== "0");
  const first =
    firstCandidates[Math.floor(Math.random() * firstCandidates.length)];

  answer.push(first);

  while (answer.length < 4) {
    const digit = digits[Math.floor(Math.random() * digits.length)];
    if (!answer.includes(digit)) {
      answer.push(digit);
    }
  }

  return answer.join("");
}

function checkGuess(answer: string, guess: string) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 4; i += 1) {
    if (guess[i] === answer[i]) {
      strike += 1;
    } else if (answer.includes(guess[i])) {
      ball += 1;
    }
  }

  return { strike, ball };
}

function validateGuess(guess: string) {
  if (!/^\d{4}$/.test(guess)) {
    return "4자리 숫자를 입력해주세요.";
  }

  if (guess[0] === "0") {
    return "첫 번째 숫자는 0이 될 수 없습니다.";
  }

  if (new Set(guess).size !== 4) {
    return "중복되지 않는 숫자 4개를 입력해주세요.";
  }

  return "";
}

export default function NumberBaseballPage() {
  const [answer, setAnswer] = useState("1234");

  useEffect(() => {
    const savedBestAttempts = window.localStorage.getItem(
      "number-baseball-best-attempts",
    );

    if (savedBestAttempts) {
      setBestAttempts(Number(savedBestAttempts));
    }

    setAnswer(createAnswer());
  }, []);
  const [guess, setGuess] = useState("");
  const [records, setRecords] = useState<GuessRecord[]>([]);
  const [message, setMessage] = useState("서로 다른 4자리 숫자를 맞혀보세요.");
  const [isSolved, setIsSolved] = useState(false);
  const [bestAttempts, setBestAttempts] = useState<number | null>(null);

  const attempts = records.length;

  const latestResult = useMemo(() => {
    if (records.length === 0) return null;
    return records[records.length - 1];
  }, [records]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSolved) return;

    const trimmedGuess = guess.trim();
    const errorMessage = validateGuess(trimmedGuess);

    if (errorMessage) {
      setMessage(errorMessage);
      return;
    }

    const result = checkGuess(answer, trimmedGuess);
    const newRecord = {
      guess: trimmedGuess,
      strike: result.strike,
      ball: result.ball,
    };

    setRecords((prev) => [...prev, newRecord]);
    setGuess("");

    if (result.strike === 4) {
      const solvedAttempts = attempts + 1;
      const isNewBest =
        bestAttempts === null || solvedAttempts < bestAttempts;

      setIsSolved(true);

      if (isNewBest) {
        setBestAttempts(solvedAttempts);
        window.localStorage.setItem(
          "number-baseball-best-attempts",
          String(solvedAttempts),
        );
        setMessage(`정답입니다! 최고 기록을 세웠어요. ${solvedAttempts}번 만에 성공!`);
      } else {
        setMessage(`정답입니다! ${solvedAttempts}번 만에 맞혔어요.`);
      }
    } else {
      setMessage(`${result.strike} 스트라이크, ${result.ball} 볼`);
    }
  };

  const handleRestart = () => {
    setAnswer(createAnswer());
    setGuess("");
    setRecords([]);
    setMessage("새 게임을 시작했습니다. 서로 다른 4자리 숫자를 맞혀보세요.");
    setIsSolved(false);
  };

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          NUMBER BASEBALL
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          4자리 숫자야구
        </h1>

        <p className="mt-6 break-keep text-base leading-7 text-white/75 md:text-lg">
          컴퓨터가 정한 서로 다른 4자리 숫자를 맞혀보세요. 숫자와 위치가
          모두 맞으면 스트라이크, 숫자는 맞지만 위치가 다르면 볼입니다.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
            <input
              value={guess}
              onChange={(event) => setGuess(event.target.value)}
              inputMode="numeric"
              maxLength={4}
              disabled={isSolved}
              placeholder="예: 4279"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-lg text-white outline-none placeholder:text-white/35 focus:border-white/40"
            />

            <button
              type="submit"
              disabled={isSolved}
              className="rounded-xl bg-white px-5 py-3 font-bold text-black transition hover:bg-white/85 disabled:cursor-not-allowed disabled:bg-white/30"
            >
              확인
            </button>
          </form>

          <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="break-keep text-lg font-semibold">{message}</p>

            {latestResult && !isSolved && (
              <p className="mt-2 text-white/65">
                최근 입력: {latestResult.guess}
              </p>
            )}

            <p className="mt-2 text-sm text-white/50">시도 횟수: {attempts}</p>
            <p className="mt-1 text-sm text-white/50">
              최고 기록: {bestAttempts === null ? "아직 없음" : `${bestAttempts}번`}
            </p>
          </div>

          <button
            type="button"
            onClick={handleRestart}
            className="mt-5 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            다시 시작
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">시도 기록</h2>

          {records.length === 0 ? (
            <p className="mt-3 text-white/60">아직 입력한 숫자가 없습니다.</p>
          ) : (
            <div className="mt-4 space-y-3">
              {[...records].reverse().map((record, index) => (
                <div
                  key={`${record.guess}-${index}`}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <span className="text-lg font-bold">{record.guess}</span>
                  <span className="text-white/75">
                    {record.strike}S {record.ball}B
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {process.env.NODE_ENV === "development" && (
          <p className="mt-6 text-sm text-white/25">개발용 정답: {answer}</p>
        )}
      </section>
    </main>
  );
}