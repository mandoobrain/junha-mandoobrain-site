export default function GamesPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          BRAIN GAMES
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          두뇌 게임
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
          숫자야구, 소수 암기왕, 두뇌스트레칭 퀴즈 등
          다양한 수학 기반 게임을 모아두는 공간입니다.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-lg font-semibold">준비 중입니다.</p>
          <p className="mt-3 text-white/70">
            앞으로 여러 게임과 퀴즈 콘텐츠가 이 페이지에 추가될 예정입니다.
          </p>
        </div>
      </section>
    </main>
  );
}