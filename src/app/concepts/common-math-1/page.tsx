export default function CommonMath1Page() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          COMMON MATH 1
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          공통수학1
        </h1>

        <p className="mt-6 max-w-2xl break-keep text-base leading-7 text-white/75 md:text-lg">
          공통수학1에서 꼭 알아야 할 공식 정리와, 교과서나 문제집에서 설명이
          부족한 내용을 보강하는 콘텐츠를 모아둘 페이지입니다.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href="/concepts/common-math-1/formulas"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              FORMULAS
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              곱셈공식 · 인수분해 공식 정리
            </h2>
            <p className="mt-3 break-keep text-white/70">
              곱셈공식, 인수분해 공식, 변형공식, 추가 공식을 한 번에 정리한
              콘텐츠입니다.
            </p>
          </a>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              NEXT CONTENT
            </p>
            <h2 className="mt-3 text-2xl font-bold">추가 콘텐츠 예정</h2>
            <p className="mt-3 break-keep text-white/70">
              앞으로 공통수학1의 다른 핵심 개념과 보강 설명 콘텐츠가 이곳에
              추가될 예정입니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}