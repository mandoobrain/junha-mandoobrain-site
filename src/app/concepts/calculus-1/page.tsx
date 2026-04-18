const contents = [
  {
    href: "/concepts/calculus-1/integral-area-proof",
    label: "PROOF",
    title: "적분이 왜 넓이와 연결되는가",
    description:
      "넓이 함수 S(x)를 정의하고, 그 도함수가 원래 함수 f(x)와 같아진다는 사실을 이용하여 적분과 넓이의 관계를 설명하는 콘텐츠입니다.",
  },
  {
    href: "/concepts/calculus-1/closed-interval-continuity",
    label: "CONTINUITY",
    title: "닫힌구간에서 함수의 연속은 어떻게 판단할까?",
    description:
      "닫힌구간 [a,b]에서 연속을 판단할 때, 내부에서는 보통의 연속을 확인하고 양 끝점에서는 한쪽 극한만 확인하는 이유를 정리한 콘텐츠입니다.",
  },
  {
    href: "/concepts/calculus-1/epsilon-delta-limit",
    label: "LIMIT",
    title: "극한의 엄밀한 정의: 입실론-델타를 쉽게 이해하기",
    description:
      "함수의 극한에서 ‘가까워진다’는 말을 입실론과 델타를 이용해 어떻게 정확하게 표현하는지 쉽게 설명하는 콘텐츠입니다.",
  },
];

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
              앞으로 도함수의 의미, 평균값 정리, 함수의 그래프 해석 등
              미적분1에서 설명이 부족한 부분을 보강하는 콘텐츠가 이곳에 추가될
              예정입니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}