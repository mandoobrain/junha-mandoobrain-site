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

function FormulaLine({ children }: { children: string }) {
  return (
    <div className="text-center text-lg">
      <Formula display>{children}</Formula>
    </div>
  );
}

function ContentCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
      {children}
    </div>
  );
}

export default function ClosedIntervalContinuityPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          CALCULUS 1
        </p>

        <h1 className="break-keep text-4xl font-bold leading-tight md:text-5xl">
          닫힌구간에서 함수의 연속은 어떻게 판단할까?
        </h1>

        <p className="mt-6 break-keep text-base leading-7 text-white/75 md:text-lg">
          함수의 연속을 처음 배울 때는 보통 한 점에서의 연속을 먼저 배웁니다.
          그런데 이후에는 <Formula>{"[a,b]"}</Formula>와 같은 닫힌구간에서
          연속이라는 표현도 자주 등장합니다.
        </p>

        <p className="mt-4 break-keep text-base leading-7 text-white/75 md:text-lg">
          여기서 헷갈리는 질문이 생깁니다. 닫힌구간의 양 끝에서는 한쪽 방향이
          없는데, 어떻게 연속이라고 말할 수 있을까요?
        </p>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <p className="break-keep text-base leading-7 text-white/75">
            이 질문은 다음 순서로 생각하면 자연스럽게 해결됩니다.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="chalk-accent text-sm font-semibold">STEP 1</p>
              <p className="mt-2 break-keep font-bold">연속의 정의</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="chalk-accent text-sm font-semibold">STEP 2</p>
              <p className="mt-2 break-keep font-bold">극한값 존재의 의미</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="chalk-accent text-sm font-semibold">STEP 3</p>
              <p className="mt-2 break-keep font-bold">닫힌구간 끝점의 의미</p>
            </div>
          </div>
        </div>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">1. 연속의 정의</h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            함수 <Formula>f(x)</Formula>가 <Formula>x=a</Formula>에서
            연속이라는 것은 다음 세 가지가 모두 성립한다는 뜻입니다.
          </p>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">① 함수값이 존재한다</h3>
              <p className="mt-3 break-keep text-white/70">
                <Formula>x=a</Formula>를 함수에 넣었을 때 함수값이 있어야
                합니다.
              </p>
              <div className="mt-4">
                <FormulaLine>{"f(a)\\text{가 존재한다.}"}</FormulaLine>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">② 극한값이 존재한다</h3>
              <p className="mt-3 break-keep text-white/70">
                <Formula>x</Formula>가 <Formula>a</Formula>에 가까워질 때{" "}
                <Formula>f(x)</Formula>가 하나의 값으로 가까워져야 합니다.
              </p>
              <div className="mt-4">
                <FormulaLine>{"\\lim_{x\\to a} f(x)\\text{가 존재한다.}"}</FormulaLine>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">
                ③ 극한값과 함수값이 같다
              </h3>
              <div className="mt-4">
                <FormulaLine>{"\\lim_{x\\to a} f(x)=f(a)"}</FormulaLine>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-white/5 p-5">
            <FormulaLine>
              {"f(x)\\text{가 }x=a\\text{에서 연속}\\quad\\Longleftrightarrow\\quad \\lim_{x\\to a}f(x)=f(a)"}
            </FormulaLine>
            <p className="mt-4 break-keep text-sm leading-6 text-white/60">
              단, 이 말은 함수값과 극한값이 모두 존재한다는 것을 포함합니다.
            </p>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            2. 극한값이 존재한다는 뜻
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            <Formula>x</Formula>가 <Formula>a</Formula>로 가까워지는 방법은
            두 가지가 있습니다. 왼쪽에서 가까워지는 경우와 오른쪽에서
            가까워지는 경우입니다.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">좌극한</h3>
              <div className="mt-4">
                <FormulaLine>{"\\lim_{x\\to a^-} f(x)"}</FormulaLine>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">우극한</h3>
              <div className="mt-4">
                <FormulaLine>{"\\lim_{x\\to a^+} f(x)"}</FormulaLine>
              </div>
            </div>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            극한값 <Formula>{"\\lim_{x\\to a} f(x)"}</Formula>가 존재하려면
            좌극한과 우극한이 모두 존재하고, 두 값이 같아야 합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>
              {"\\lim_{x\\to a^-} f(x)=\\lim_{x\\to a^+} f(x)"}
            </FormulaLine>
          </div>

          <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/5 p-5">
            <FormulaLine>
              {"\\lim_{x\\to a} f(x)\\text{가 존재}\\quad\\Longleftrightarrow\\quad\\text{좌극한과 우극한이 모두 존재하고 서로 같다.}"}
            </FormulaLine>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            3. 닫힌구간의 끝점에서는 왜 한쪽만 볼까?
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            함수 <Formula>f(x)=x</Formula>를 닫힌구간{" "}
            <Formula>{"[1,2]"}</Formula>에서만 생각해봅시다. 즉, 이 함수는{" "}
            <Formula>{"1\\le x\\le 2"}</Formula>인 범위에서만 정의되어 있다고
            보는 것입니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"f(x)=x\\quad (1\\le x\\le 2)"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이때 <Formula>x=1</Formula>에서 연속인지 판단하려고 하면 문제가
            생기는 것처럼 보입니다. 왜냐하면 1의 왼쪽에는 이 구간의 원소가
            없기 때문입니다.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">왼쪽 끝점</h3>
              <p className="mt-3 break-keep text-white/70">
                <Formula>x&lt;1</Formula>인 값들은{" "}
                <Formula>{"[1,2]"}</Formula>에 포함되지 않습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">오른쪽 끝점</h3>
              <p className="mt-3 break-keep text-white/70">
                <Formula>x&gt;2</Formula>인 값들은{" "}
                <Formula>{"[1,2]"}</Formula>에 포함되지 않습니다.
              </p>
            </div>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 닫힌구간에서 연속을 말할 때는 구간 안에서 접근할 수 있는
            방향만 확인합니다.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            4. 구간의 양 끝에서는 한쪽 극한만 확인한다
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            닫힌구간 <Formula>{"[a,b]"}</Formula>에서 함수가 연속이라고
            말하려면 다음 세 가지를 확인합니다.
          </p>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">
                ① 구간 내부에서는 보통의 연속
              </h3>
              <p className="mt-3 break-keep text-white/70">
                구간 내부의 점에서는 왼쪽과 오른쪽이 모두 구간 안에 있습니다.
                따라서 보통의 연속 조건을 확인합니다.
              </p>
              <div className="mt-4">
                <FormulaLine>{"\\lim_{t\\to x} f(t)=f(x)\\quad (a<x<b)"}</FormulaLine>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">
                ② 왼쪽 끝점에서는 우극한
              </h3>
              <p className="mt-3 break-keep text-white/70">
                왼쪽 끝점 <Formula>a</Formula>에서는 구간 안에서 오른쪽으로만
                접근할 수 있습니다.
              </p>
              <div className="mt-4">
                <FormulaLine>{"\\lim_{x\\to a^+} f(x)=f(a)"}</FormulaLine>
              </div>
              <p className="mt-3 break-keep text-sm text-white/55">
                이것을 a에서 우연속이라고 합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">
                ③ 오른쪽 끝점에서는 좌극한
              </h3>
              <p className="mt-3 break-keep text-white/70">
                오른쪽 끝점 <Formula>b</Formula>에서는 구간 안에서 왼쪽으로만
                접근할 수 있습니다.
              </p>
              <div className="mt-4">
                <FormulaLine>{"\\lim_{x\\to b^-} f(x)=f(b)"}</FormulaLine>
              </div>
              <p className="mt-3 break-keep text-sm text-white/55">
                이것을 b에서 좌연속이라고 합니다.
              </p>
            </div>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            5. 예시: f(x)=x는 [1,2]에서 연속일까?
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            함수 <Formula>f(x)=x</Formula>를 닫힌구간{" "}
            <Formula>{"[1,2]"}</Formula>에서 생각해봅시다.
          </p>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">① 구간 내부</h3>
              <p className="mt-3 break-keep text-white/70">
                <Formula>{"1<x<2"}</Formula>인 모든 <Formula>x</Formula>에
                대해 <Formula>f(x)=x</Formula>는 끊어짐 없이 이어져 있으므로
                연속입니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">
                ② 왼쪽 끝점 x=1
              </h3>
              <p className="mt-3 break-keep text-white/70">
                <Formula>x=1</Formula>에서는 오른쪽에서만 접근하면 됩니다.
              </p>
              <div className="mt-4">
                <FormulaLine>{"\\lim_{x\\to 1^+} f(x)=1"}</FormulaLine>
                <FormulaLine>{"f(1)=1"}</FormulaLine>
                <FormulaLine>{"\\lim_{x\\to 1^+} f(x)=f(1)"}</FormulaLine>
              </div>
              <p className="mt-3 break-keep text-white/70">
                따라서 <Formula>x=1</Formula>에서 연속입니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">
                ③ 오른쪽 끝점 x=2
              </h3>
              <p className="mt-3 break-keep text-white/70">
                <Formula>x=2</Formula>에서는 왼쪽에서만 접근하면 됩니다.
              </p>
              <div className="mt-4">
                <FormulaLine>{"\\lim_{x\\to 2^-} f(x)=2"}</FormulaLine>
                <FormulaLine>{"f(2)=2"}</FormulaLine>
                <FormulaLine>{"\\lim_{x\\to 2^-} f(x)=f(2)"}</FormulaLine>
              </div>
              <p className="mt-3 break-keep text-white/70">
                따라서 <Formula>x=2</Formula>에서도 연속입니다.
              </p>
            </div>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            결국 <Formula>f(x)=x</Formula>는 닫힌구간{" "}
            <Formula>{"[1,2]"}</Formula>에서 연속입니다.
          </p>
        </ContentCard>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <h2 className="break-keep text-2xl font-bold">핵심 정리</h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            함수 <Formula>f(x)</Formula>가 <Formula>x=a</Formula>에서
            연속이라는 것은 <Formula>{"\\lim_{x\\to a}f(x)=f(a)"}</Formula>라는
            뜻입니다. 또한 극한값이 존재하려면 좌극한과 우극한이 모두 존재하고
            같아야 합니다.
          </p>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            하지만 닫힌구간에서 연속을 판단할 때, 구간의 양 끝점에서는 한쪽
            방향이 정의역에 포함되지 않습니다. 따라서{" "}
            <Formula>{"[a,b]"}</Formula>에서 연속이라는 말은 다음 세 가지가
            모두 성립한다는 뜻입니다.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15 text-white/85">
                  <th className="px-4 py-3 text-sm font-semibold">위치</th>
                  <th className="px-4 py-3 text-sm font-semibold">
                    확인할 조건
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-5 align-top text-white/75">
                    <Formula>{"(a,b)"}</Formula> 내부
                  </td>
                  <td className="px-4 py-5 align-top break-keep text-white/75">
                    좌극한과 우극한이 같고, 그 값이 함수값과 같아야 합니다.
                  </td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="px-4 py-5 align-top text-white/75">
                    왼쪽 끝점 <Formula>a</Formula>
                  </td>
                  <td className="px-4 py-5 align-top break-keep text-white/75">
                    오른쪽에서 접근하는 우극한만 확인합니다.{" "}
                    <Formula>{"\\lim_{x\\to a^+}f(x)=f(a)"}</Formula>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-5 align-top text-white/75">
                    오른쪽 끝점 <Formula>b</Formula>
                  </td>
                  <td className="px-4 py-5 align-top break-keep text-white/75">
                    왼쪽에서 접근하는 좌극한만 확인합니다.{" "}
                    <Formula>{"\\lim_{x\\to b^-}f(x)=f(b)"}</Formula>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-black/20 p-5">
            <FormulaLine>
              {"[a,b]\\text{에서 연속}=(a,b)\\text{에서 연속}+a\\text{에서 우연속}+b\\text{에서 좌연속}"}
            </FormulaLine>
          </div>

          <p className="mt-6 break-keep text-base leading-7 text-white/75">
            한 줄로 정리하면, 닫힌구간의 끝점에서는 구간 안쪽에서 다가오는
            한쪽 극한만 확인합니다.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/concepts/calculus-1" className="chalk-button-secondary">
            미적분1 목록으로 돌아가기
          </a>

          <a href="/concepts" className="chalk-button">
            수학 개념정리로 가기
          </a>
        </div>
      </section>
    </main>
  );
}