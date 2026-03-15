import Image from "next/image";
import quizzes from "@/data/quizzes.json";

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

export default function QuizzesPage() {
  const publishedQuizzes = quizzes.filter(isVisibleQuiz);

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
            <a href="/" className="hover:text-white">
              홈
            </a>
            <a href="/quizzes" className="hover:text-white">
              퀴즈
            </a>
            <a href="/about" className="hover:text-white">
              소개
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="chalk-accent mb-3 text-sm font-semibold tracking-[0.2em] uppercase">
          QUIZ LIST
        </p>
        <h2 className="text-4xl font-bold md:text-5xl">두뇌스트레칭 퀴즈 모음</h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/75">
          최신 퀴즈부터 순서대로 모아볼 수 있는 페이지입니다.
          문제를 클릭하면 힌트와 정답을 확인할 수 있는 상세 페이지로 이동합니다.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {publishedQuizzes.map((quiz) => (
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
                <h3 className="mt-2 text-xl font-bold">{quiz.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  문제를 열어 힌트와 정답을 확인해보세요.
                </p>
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