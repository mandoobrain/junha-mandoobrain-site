const contents = [
  {
    href: "/concepts/common-math-2/distance-proof",
    label: "PROOF",
    title: "점과 직선 사이의 거리 공식 증명",
    description:
      "점 P(x₁, y₁)와 직선 ax + by + c = 0 사이의 거리 공식을 수선의 발과 좌표 관계를 이용하여 직접 증명하는 콘텐츠입니다.",
  },
  {
    href: "/concepts/common-math-2/four-set-venn-diagram",
    label: "SETS",
    title: "집합 4개의 벤다이어그램은 어떻게 그릴까?",
    description:
      "집합이 4개일 때 가능한 16개의 영역을 어떻게 이해해야 하는지 벤다이어그램과 함께 정리한 콘텐츠입니다.",
  },
  {
    href: "/concepts/common-math-2/inverse-function-intersection",
    label: "FUNCTIONS",
    title: "함수와 역함수의 교점은 항상 y=x 위에 있을까?",
    description:
      "함수와 역함수의 그래프가 만나는 점이 언제 y=x 위에 있고, 언제 그렇지 않을 수 있는지 단조성을 이용해 설명하는 콘텐츠입니다.",
  },
];

export default function CommonMath2Page() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          COMMON MATH 2
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          공통수학2
        </h1>

        <p className="mt-6 max-w-2xl break-keep text-base leading-7 text-white/75 md:text-lg">
          공통수학2에서 교과서나 문제집의 설명이 부족하게 느껴질 수 있는
          부분들을 보강하는 콘텐츠를 모아둔 페이지입니다.
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
              앞으로 절댓값 그래프, 합성함수 그래프 등 공통수학2에서 설명이
              부족한 부분을 보강하는 콘텐츠가 이곳에 추가될 예정입니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}