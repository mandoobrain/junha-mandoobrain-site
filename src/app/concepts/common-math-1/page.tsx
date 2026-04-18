const contents = [
  {
    href: "/concepts/common-math-1/formulas",
    label: "FORMULAS",
    title: "곱셈공식 · 인수분해 공식 정리",
    description:
      "곱셈공식, 인수분해 공식, 변형공식, 추가 공식을 한 번에 정리한 콘텐츠입니다.",
  },
  {
    href: "/concepts/common-math-1/complex-nth-roots",
    label: "COMPLEX NUMBERS",
    title: "꼭 알아야 할 복소수: n주기 복소수",
    description:
      "삼차방정식과 복소수 계산에서 자주 등장하는 3주기, 4주기, 6주기, 8주기, 12주기 복소수를 정리한 콘텐츠입니다.",
  },
  {
    href: "/concepts/common-math-1/cubic-complex-roots",
    label: "CUBIC EQUATIONS",
    title: "삼차방정식에서 꼭 알아야 할 허근의 성질",
    description:
      "x³ = 1과 x³ = -1의 허근에서 자주 쓰이는 성질을 3단계 흐름으로 정리한 콘텐츠입니다.",
  },
];

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
          공통수학1에서 꼭 알아야 할 공식 정리와, 교과서나 문제집에서
          설명이 부족한 내용을 보강하는 콘텐츠를 모아둔 페이지입니다.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {contents.map((content) => (
            <a
              key={content.href}
              href={content.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
                {content.label}
              </p>

              <h2 className="mt-3 break-keep text-2xl font-bold">
                {content.title}
              </h2>

              <p className="mt-3 break-keep text-white/70">
                {content.description}
              </p>
            </a>
          ))}

          <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-6">
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