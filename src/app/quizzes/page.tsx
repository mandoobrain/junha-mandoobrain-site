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

export default function QuizzesPage() {
  const publishedQuizzes = quizzes.filter(isVisibleQuiz);

  return (
    <main className="min-h-screen bg-board text-white">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">전체 퀴즈</h1>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 lg:grid-cols-4">
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

              <div className="p-3">
                <p className="text-xs text-white/60">{quiz.date}</p>
                <h4 className="mt-2 text-lg font-bold leading-tight">
                  {quiz.title}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}