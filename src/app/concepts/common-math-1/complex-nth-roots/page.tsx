import katex from "katex";

function Formula({
  children,
  display = false,
}: {
  children: string;
  display?: boolean;
}) {
  return (
    <span
      className={display ? "block overflow-x-auto py-2" : "inline-block"}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(children, {
          throwOnError: false,
          displayMode: display,
        }),
      }}
    />
  );
}

const complexRows = [
  {
    type: "세제곱해서 1이 되는 복소수",
    period: "3주기",
    formulas: [
      "\\frac{-1+\\sqrt{3}i}{2}",
      "\\frac{-1-\\sqrt{3}i}{2}",
    ],
  },
  {
    type: "네제곱해서 1이 되는 복소수",
    period: "4주기",
    formulas: ["i", "-i"],
  },
  {
    type: "여섯제곱해서 1이 되는 복소수",
    period: "6주기",
    formulas: [
      "\\frac{1+\\sqrt{3}i}{2}",
      "\\frac{1-\\sqrt{3}i}{2}",
    ],
  },
  {
    type: "제곱하면 i, 또는 제곱하면 -i가 되는 복소수",
    period: "8주기",
    formulas: [
      "\\frac{1+i}{\\sqrt{2}}",
      "\\frac{-1+i}{\\sqrt{2}}",
      "\\frac{-1-i}{\\sqrt{2}}",
      "\\frac{1-i}{\\sqrt{2}}",
    ],
  },
  {
    type: "열두제곱해서 1이 되는 복소수",
    period: "12주기",
    formulas: [
      "\\frac{\\sqrt{3}+i}{2}",
      "\\frac{-\\sqrt{3}+i}{2}",
      "\\frac{-\\sqrt{3}-i}{2}",
      "\\frac{\\sqrt{3}-i}{2}",
    ],
  },
];

export default function ComplexNthRootsPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          COMMON MATH 1
        </p>

        <h1 className="break-keep text-4xl font-bold leading-tight md:text-5xl">
          꼭 알아야 할 복소수: n주기 복소수
        </h1>

        <p className="mt-6 break-keep text-base leading-7 text-white/75 md:text-lg">
          복소수 단원과 삼차·사차방정식에서는 특별한 복소수들을 미리
          알아두면 문제 풀이가 훨씬 빨라질 때가 많습니다.
        </p>

        <p className="mt-4 break-keep text-base leading-7 text-white/75 md:text-lg">
          특히 어떤 복소수를 여러 번 곱했을 때 다시 1이 되는 수들은
          모의고사와 학교 시험에서 자주 등장합니다. 이런 수들을 미리
          익혀두면 복잡한 계산을 반복하지 않고도 빠르게 식을 정리할 수
          있습니다.
        </p>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
          <h2 className="text-2xl font-bold">n주기 복소수란?</h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            쉽게 말해, 어떤 복소수를 계속 곱했을 때 일정한 횟수마다 다시{" "}
            <Formula>1</Formula>이 되는 복소수를 말합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="break-keep text-white/75">
              예를 들어 <Formula>z^n=1</Formula>을 만족하고, 그보다 작은
              양의 거듭제곱에서는 처음으로 <Formula>1</Formula>이 되지
              않는다면, 이런 복소수를 n주기 복소수로 볼 수 있습니다.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
          <h2 className="text-2xl font-bold">대표적인 n주기 복소수</h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            아래 복소수들은 자주 등장하는 대표적인 n주기 복소수입니다.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15 text-white/80">
                  <th className="px-4 py-3 text-sm font-semibold">종류</th>
                  <th className="px-4 py-3 text-sm font-semibold">주기</th>
                  <th className="px-4 py-3 text-sm font-semibold">복소수</th>
                </tr>
              </thead>

              <tbody>
                {complexRows.map((row) => (
                  <tr key={row.period} className="border-b border-white/10">
                    <td className="px-4 py-5 align-top text-sm text-white/75">
                      {row.type}
                    </td>
                    <td className="whitespace-nowrap px-4 py-5 align-top text-sm font-semibold text-white/85">
                      {row.period}
                    </td>
                    <td className="px-4 py-5 align-top">
                      <div className="flex flex-wrap gap-x-5 gap-y-3 text-lg">
                        {row.formulas.map((formula) => (
                          <Formula key={formula}>{formula}</Formula>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">기억해두면 좋은 이유</h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            복소수 문제에서는 계산을 길게 전개하는 것보다, 자주 등장하는
            형태를 빠르게 알아보는 것이 중요합니다. 위의 복소수들을
            기억해두면 방정식의 해를 확인하거나 복소수의 거듭제곱을 정리할
            때 계산 시간을 크게 줄일 수 있습니다.
          </p>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            특히 3주기와 6주기 복소수는 삼차방정식에서 자주 등장하는 오메가{" "}
            <Formula>\omega</Formula>와 연결되는 개념입니다. 이후
            삼차방정식의 해와 <Formula>\omega</Formula>의 성질을 다룰 때
            다시 등장하므로, 이 표를 먼저 익혀두면 훨씬 편하게 이해할 수
            있습니다.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/concepts/common-math-1" className="chalk-button-secondary">
            공통수학1 목록으로 돌아가기
          </a>
          <a href="/concepts" className="chalk-button">
            수학 개념정리로 가기
          </a>
        </div>
      </section>
    </main>
  );
}