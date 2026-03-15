export default function AboutPage() {
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

      <section className="mx-auto max-w-4xl px-6 py-14">
        <p className="chalk-accent mb-3 text-sm font-semibold tracking-[0.2em] uppercase">
          ABOUT
        </p>
        <h2 className="text-4xl font-bold md:text-5xl">사이트 소개</h2>
        <p className="mt-6 text-base leading-8 text-white/75 md:text-lg">
          두뇌 스트레칭은 수학 퀴즈를 더 재미있고 편하게 즐길 수 있도록 만든
          홈페이지입니다. 유튜브와 인스타그램에 올라오는 퀴즈를 한곳에 모아보고,
          각 문제의 힌트와 정답을 확인할 수 있도록 구성하고 있습니다.
        </p>
      </section>

      <section className="mx-auto grid max-w-4xl gap-6 px-6 pb-20 md:grid-cols-2">
        <div className="rounded-[24px] border border-white/10 bg-black/20 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
          <h3 className="text-xl font-bold">무엇을 할 수 있나요?</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">
            <li>• 두뇌스트레칭 퀴즈 모아보기</li>
            <li>• 각 문제의 힌트 확인하기</li>
            <li>• 정답 확인하기</li>
            <li>• 추후 수학 개념 정리, 계산기, 두뇌게임 메뉴 확장 예정</li>
          </ul>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-black/20 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
          <h3 className="text-xl font-bold">안내</h3>
          <p className="mt-4 text-sm leading-7 text-white/75">
            본 사이트의 콘텐츠는 직접 제작한 수학 퀴즈 콘텐츠를 기반으로 하며,
            무단 복제 및 재배포를 금지합니다. 추후 광고 및 추가 기능이 반영될 수
            있습니다.
          </p>
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