import Image from "next/image";
import quizzes from "@/data/quizzes.json";

export const dynamic = "force-dynamic";

type QuizPageProps = {
  params: Promise<{
    date: string;
  }>;
};

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

export default async function QuizDetailPage({ params }: QuizPageProps) {
  const { date } = await params;
  const quiz = quizzes.find((item) => item.date === date && isVisibleQuiz(item));

  if (!quiz) {
    return (
      <main className="min-h-screen bg-board px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold">퀴즈를 찾을 수 없습니다</h1>
          <p className="mt-4 text-white/70">
            아직 공개되지 않았거나 준비되지 않은 게시물입니다.
          </p>
          <a href="/quizzes" className="chalk-button mt-8 inline-flex">
            퀴즈 목록으로 돌아가기
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="chalk-accent mb-3 text-sm font-semibold tracking-[0.2em] uppercase">
            QUIZ DETAIL
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">{quiz.title}</h2>
          <p className="mt-4 text-white/65">{quiz.date}</p>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-black/20 shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
            <div className="relative aspect-[9/16]">
              {quiz.image ? (
                <Image
                  src={quiz.image}
                  alt={`${quiz.title} 문제 이미지`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(rgba(255,255,255,0.03),rgba(255,255,255,0.01)),repeating-linear-gradient(0deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_2px,transparent_2px,transparent_48px),linear-gradient(180deg,#1a372e_0%,#11261f_100%)]">
                  <span className="text-center text-lg font-semibold text-white/70">
                    여기에 실제 문제 이미지가 들어갈 예정
                    <br />
                    {quiz.date}.png
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/quizzes" className="chalk-button-secondary">목록으로 돌아가기</a>
            <a href={quiz.youtubeUrl || "#"} className="chalk-button">유튜브 쇼츠 보러가기</a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[24px] border border-white/10 bg-black/20 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
            <h3 className="text-xl font-bold">힌트</h3>
            <p className="mt-4 text-base leading-7 text-white/80">{quiz.hint}</p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-black/20 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
            <h3 className="text-xl font-bold">정답</h3>
            <p className="mt-4 text-2xl font-bold chalk-accent">{quiz.answer}</p>
          </div>

          <div className="rounded-[24px] border border-dashed border-white/15 bg-white/5 p-6">
            <h3 className="text-lg font-bold text-white/85">광고 영역</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">
              추후 Google 광고 또는 힌트/정답 열람용 광고 영역이 들어갈 자리입니다.
            </p>
          </div>
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