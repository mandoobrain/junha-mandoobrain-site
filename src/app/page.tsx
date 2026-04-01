import Image from "next/image";
import quizzes from "@/data/quizzes.json";

export const dynamic = "force-dynamic";

function isVisibleQuiz(quiz: {
  published?: boolean;
  publishAt?: string;
}) {
  if (!quiz.published) return false;
  if (!quiz.publishAt) return true;

  const publishAtMs = Date.parse(quiz.publishAt);
  if (Number.isNaN(publishAtMs)) return false;

  return Date.now() >= publishAtMs;
}

export default function Home() {
  const recentQuizzes = quizzes
    .filter(isVisibleQuiz)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
            MATH QUIZ ARCHIVE
          </p>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            수학 퀴즈, 개념정리, 계산기,
            <br />
            두뇌 게임을 한 곳에서
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            매일 올라오는 두뇌스트레칭 퀴즈와 함께, 수학 개념정리, 다양한 계산기,
            두뇌 게임까지 한 곳에서 이용할 수 있는 수학 콘텐츠 플랫폼입니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/quizzes" className="chalk-button">최근 퀴즈 보러가기</a>
            <a href="/about" className="chalk-button-secondary">수학 개념정리 보러가기</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold">최근 퀴즈</h3>
          <a href="/quizzes" className="text-sm text-white/70 hover:text-white">
            전체 보기
          </a>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {recentQuizzes.map((quiz) => (
            <a
              key={quiz.date}
              href={`/quizzes/${quiz.date}`}
              className="quiz-card block"
            >
              <div className="quiz-thumb relative">
                {quiz.image ? (
                  <Image
                    src={quiz.image}
                    alt={`${quiz.title} 썸네일`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-lg font-semibold text-white/70">
                      {quiz.date}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <p className="text-sm text-white/60">{quiz.date}</p>
                <h4 className="mt-2 text-xl font-bold">{quiz.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-6">
          <h3 className="text-2xl font-bold">주요 메뉴</h3>
          <p className="mt-2 text-white/70">
            수학 개념정리, 계산기, 두뇌 게임을 한 곳에서 이용해보세요.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <a
            href="/concepts"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              CONCEPTS
            </p>
            <h4 className="mt-3 text-2xl font-bold">수학 개념정리</h4>
            <p className="mt-3 text-white/70">
              공통수학1, 공통수학2, 대수, 미적분1의 개념과 공식, 증명을
              정리하는 공간입니다.
            </p>
          </a>

          <a
            href="/calculators"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              CALCULATORS
            </p>
            <h4 className="mt-3 text-2xl font-bold">각종 계산기</h4>
            <p className="mt-3 text-white/70">
              소인수분해, 진수 변환, 소수 판별, 최대공약수와 최소공배수 계산기
              등을 제공합니다.
            </p>
          </a>

          <a
            href="/games"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              BRAIN GAMES
            </p>
            <h4 className="mt-3 text-2xl font-bold">두뇌 게임</h4>
            <p className="mt-3 text-white/70">
              숫자야구, 소수 암기왕, 두뇌스트레칭 퀴즈 등 다양한 게임형 콘텐츠를
              모아둘 공간입니다.
            </p>
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/55">
          © 2026 두뇌 스트레칭. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}