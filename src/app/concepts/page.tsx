export default function ConceptsPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          MATH CONCEPTS
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          수학 개념정리
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
          공통수학1, 공통수학2, 대수, 미적분1 등 다양한 수학 개념과
          공식, 증명을 정리하는 공간입니다.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href="/concepts/common-math-1"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              COMMON MATH 1
            </p>
            <h2 className="mt-3 text-2xl font-bold">공통수학1</h2>
            <p className="mt-3 text-white/70">
              기본 개념, 공식, 필수 예시와 핵심 증명을 정리할 예정입니다.
            </p>
          </a>

          <a
            href="/concepts/common-math-2"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              COMMON MATH 2
            </p>
            <h2 className="mt-3 text-2xl font-bold">공통수학2</h2>
            <p className="mt-3 text-white/70">
              중요 개념과 문제 풀이에 자주 쓰이는 흐름을 정리할 예정입니다.
            </p>
          </a>

          <a
            href="/concepts/algebra"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              ALGEBRA
            </p>
            <h2 className="mt-3 text-2xl font-bold">대수</h2>
            <p className="mt-3 text-white/70">
              식의 구조, 함수, 방정식과 관련된 핵심 내용을 정리할 예정입니다.
            </p>
          </a>

          <a
            href="/concepts/calculus-1"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              CALCULUS 1
            </p>
            <h2 className="mt-3 text-2xl font-bold">미적분1</h2>
            <p className="mt-3 text-white/70">
              수열, 극한, 미분의 기본 흐름과 대표 개념을 정리할 예정입니다.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}