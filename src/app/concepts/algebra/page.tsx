const contents = [
  {
    href: "/concepts/algebra/sums-proof",
    label: "PROOF",
    title: "자연수, 제곱, 세제곱의 합 공식 증명",
    description:
      "1부터 n까지의 합, 제곱의 합, 세제곱의 합 공식을 차례대로 정리하고, 왜 그런 식이 되는지 증명 흐름까지 설명하는 콘텐츠입니다.",
  },
  {
    href: "/concepts/algebra/exponential-codomain",
    label: "FUNCTIONS",
    title: "지수함수의 공역은 무엇일까?",
    description:
      "지수함수의 정의역, 치역, 공역을 구분하고, 로그함수를 역함수로 보기 위해 공역을 어떻게 잡아야 하는지 정리한 콘텐츠입니다.",
  },
  {
    href: "/concepts/algebra/common-log-integer-part",
    label: "LOGARITHMS",
    title: "상용로그의 정수부분은 무엇을 의미할까?",
    description:
      "상용로그의 정수부분이 큰 수의 자릿수와 작은 소수의 위치를 어떻게 알려주는지 설명하는 콘텐츠입니다.",
  },
];

export default function AlgebraPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          ALGEBRA
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          대수
        </h1>

        <p className="mt-6 max-w-2xl break-keep text-base leading-7 text-white/75 md:text-lg">
          대수에서 교과서나 문제집의 설명이 부족하게 느껴질 수 있는 부분들을
          보강하는 콘텐츠를 모아둔 페이지입니다.
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
              앞으로 수열, 수학적 귀납법, 점화식 등 대수에서 설명이 부족한
              부분을 보강하는 콘텐츠가 이곳에 추가될 예정입니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}