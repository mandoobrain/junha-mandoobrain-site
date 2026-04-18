"use client";

import { useEffect, useState } from "react";

type Question = {
  value: number;
  isPrime: boolean;
  levelText: string;
};

function isPrimeNumber(n: number) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

function getPrimeExplanation(n: number, isPrime: boolean) {
  if (isPrime) {
    return `${n}은 1과 자기 자신 이외의 약수가 없으므로 소수입니다.`;
  }

  if (n < 2) {
    return `${n}은 2보다 작으므로 소수가 아닙니다.`;
  }

  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) {
      return `${n}은 ${i}로 나누어떨어지므로 소수가 아닙니다.`;
    }
  }

  return `${n}은 소수가 아닙니다.`;
}

function getRangeByScore(score: number) {
  if (score < 5) {
    return { min: 2, max: 9, levelText: "1단계 · 한 자리 수" };
  }

  if (score < 15) {
    return { min: 10, max: 99, levelText: "2단계 · 두 자리 수" };
  }

  if (score < 30) {
    return { min: 100, max: 999, levelText: "3단계 · 세 자리 수" };
  }

  return { min: 1000, max: 9999, levelText: "4단계 · 네 자리 수" };
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createQuestion(score: number): Question {
  const { min, max, levelText } = getRangeByScore(score);
  const shouldMakePrime = Math.random() < 0.5;

  for (let i = 0; i < 10000; i += 1) {
    const value = getRandomInt(min, max);

    if (value !== 2 && value % 2 === 0) {
      continue;
    }

    const prime = isPrimeNumber(value);

    if (prime === shouldMakePrime) {
      return {
        value,
        isPrime: prime,
        levelText,
      };
    }
  }

  let fallback = getRandomInt(min, max);

  while (fallback !== 2 && fallback % 2 === 0) {
    fallback = getRandomInt(min, max);
  }

  return {
    value: fallback,
    isPrime: isPrimeNumber(fallback),
    levelText,
  };
}

export default function PrimeQuizPage() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [question, setQuestion] = useState<Question>({
    value: 2,
    isPrime: true,
    levelText: "1단계 · 한 자리 수",
  });
  const [message, setMessage] = useState("제시된 숫자가 소수인지 판단해보세요.");
  const [explanation, setExplanation] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const savedBestScore = window.localStorage.getItem("prime-quiz-best-score");

    if (savedBestScore) {
      setBestScore(Number(savedBestScore));
    }

    setQuestion(createQuestion(0));
  }, []);

  const handleAnswer = (userAnswer: boolean) => {
    if (isGameOver) return;

    if (userAnswer === question.isPrime) {
      const nextScore = score + 1;
      setScore(nextScore);
      setQuestion(createQuestion(nextScore));
      setMessage("정답입니다! 다음 문제로 넘어갑니다.");
      setExplanation("");
      return;
    }

    const finalScore = score;
    const newBestScore = Math.max(bestScore, finalScore);

    setIsGameOver(true);
    setExplanation(getPrimeExplanation(question.value, question.isPrime));

    if (newBestScore > bestScore) {
      setBestScore(newBestScore);
      window.localStorage.setItem(
        "prime-quiz-best-score",
        String(newBestScore),
      );
      setMessage(`아쉽습니다. 하지만 최고 기록을 세웠어요! 기록: ${finalScore}`);
    } else {
      setMessage(`아쉽습니다. 최종 기록은 ${finalScore}문제입니다.`);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setQuestion(createQuestion(0));
    setMessage("새 게임을 시작했습니다. 제시된 숫자가 소수인지 판단해보세요.");
    setExplanation("");
    setIsGameOver(false);

  };

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          PRIME QUIZ
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          소수 판별 게임
        </h1>

        <p className="mt-6 break-keep text-base leading-7 text-white/75 md:text-lg">
          제시된 숫자가 소수이면 O, 소수가 아니면 X를 누르세요. 맞히면
          계속 진행되고, 틀리면 게임이 종료됩니다.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
            {question.levelText}
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-6 py-10">
            <p className="text-6xl font-black tracking-tight md:text-7xl">
              {question.value}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleAnswer(true)}
              disabled={isGameOver}
              className="rounded-2xl bg-white px-6 py-5 text-3xl font-black text-black transition hover:bg-white/85 disabled:cursor-not-allowed disabled:bg-white/30"
            >
              O
            </button>

            <button
              type="button"
              onClick={() => handleAnswer(false)}
              disabled={isGameOver}
              className="rounded-2xl border border-white/15 px-6 py-5 text-3xl font-black text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              X
            </button>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="break-keep text-lg font-semibold">{message}</p>
            <p className="mt-2 text-white/60">현재 기록: {score}문제</p>
            <p className="mt-1 text-white/60">최고 기록: {bestScore}문제</p>

            {isGameOver && (
              <div className="mt-3 rounded-xl border border-white/10 bg-black/20 p-3 text-left">
                <p className="text-sm text-white/60">
                  정답: {question.value}는{" "}
                  {question.isPrime ? "소수입니다." : "소수가 아닙니다."}
                </p>

                {explanation && (
                  <p className="mt-2 break-keep text-sm text-white/70">
                    이유: {explanation}
                  </p>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleRestart}
            className="mt-5 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            다시 시작
          </button>
        </div>
      </section>
    </main>
  );
}