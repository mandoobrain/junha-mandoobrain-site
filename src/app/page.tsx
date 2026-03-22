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
    .slice(0, 9);

  return (
    <main className="min-h-screen bg-board text-white">
      <header className="border-b border-white/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">두뇌 스트레칭</h1>
            <p className="mt-1 text-sm text-white/70">
              수학 퀴즈, 힌트, 정답을 한 곳에서
            </p>
          </div>

          <nav className="flex gap-6 text-sm text-white/80">
            <a href="/" className="hover:text-white">홈</a>
            <a href="/quizzes" className="hover:text-white">퀴즈</a>
            <a href="/about" className="hover:text-white">소개</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
            MATH QUIZ ARCHIVE
          </p>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            매일 올라오는
            <br />
            수학 퀴즈를 모아보는 공간
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            두뇌스트레칭 채널에 올라오는 퀴즈의 힌트와 정답을 확인하고,
            새롭게 올라오는 문제들을 한눈에 모아볼 수 있는 홈페이지입니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/quizzes" className="chalk-button">퀴즈 보러가기</a>
            <a href="/about" className="chalk-button-secondary">사이트 소개</a>
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

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/55">
          © 2026 두뇌 스트레칭. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}