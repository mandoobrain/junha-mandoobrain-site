export default function Calculus1Page() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          CALCULUS 1
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          미적분1
        </h1>

        <p className="mt-6 max-w-2xl break-keep text-base leading-7 text-white/75 md:text-lg">
          미적분1에서 교과서나 문제집의 설명이 부족하게 느껴질 수 있는 부분들을
          보강하는 콘텐츠를 모아둘 페이지입니다.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href="/concepts/calculus-1/integral-area-proof"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              PROOF
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              적분이 왜 넓이와 연결되는가
            </h2>
            <p className="mt-3 break-keep text-white/70">
              넓이 함수 S(x)를 정의하고, 그 도함수가 원래 함수 f(x)와 같아진다는
              사실을 이용하여 적분과 넓이의 관계를 설명하는 콘텐츠입니다.
            </p>
          </a>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              NEXT CONTENT
            </p>
            <h2 className="mt-3 text-2xl font-bold">추가 콘텐츠 예정</h2>
            <p className="mt-3 break-keep text-white/70">
              앞으로 도함수의 의미, 평균값 정리, 극한과 연속 등 미적분1에서
              설명이 부족한 부분을 보강하는 콘텐츠가 이곳에 추가될 예정입니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}