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

export default function ExponentialCodomainPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          ALGEBRA
        </p>

        <h1 className="break-keep text-4xl font-bold leading-tight md:text-5xl">
          지수함수의 공역은 무엇일까?
        </h1>

        <p className="mt-6 break-keep text-base leading-7 text-white/75 md:text-lg">
          지수함수를 배울 때 정의역, 치역, 공역을 구분해서 생각하는 것이
          중요합니다. 특히 지수함수와 로그함수를 역함수 관계로 이해하려면,
          공역을 어떻게 잡아야 하는지까지 함께 생각해야 합니다.
        </p>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <p className="break-keep text-base leading-7 text-white/75">
            이 글에서는 다음 지수함수를 기준으로 정의역, 치역, 공역을 차례대로
            정리해보겠습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5">
            <FormulaLine>{"y=a^x\\quad (a>0,\\ a\\ne 1)"}</FormulaLine>
          </div>
        </div>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            1. 지수함수의 정의역
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            지수함수에서는 <Formula>x</Formula>에 모든 실수를 넣을 수
            있습니다. 따라서 정의역은 실수 전체입니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"\\text{정의역}=\\{x\\mid x\\text{는 실수}\\}"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            즉, 지수함수는 <Formula>x</Formula>값에 어떤 실수를 넣어도
            함수값이 정해집니다.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            2. 지수함수의 치역
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            지수함수의 값 <Formula>a^x</Formula>는 항상 양수입니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"a^x>0"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 지수함수에서 실제로 나올 수 있는 <Formula>y</Formula>값은
            0보다 큰 수뿐입니다. 그러므로 치역은 다음과 같습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"\\text{치역}=\\{y\\mid y>0\\}"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            지수함수의 그래프는 x축 아래로 내려가지 않고,{" "}
            <Formula>y=0</Formula>에도 닿지 않습니다.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            3. 치역과 공역은 다르다
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            여기서 가장 조심해야 할 점은 치역과 공역이 다르다는 것입니다.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">치역</h3>
              <p className="mt-3 break-keep text-white/70">
                함수식에 의해 실제로 나오는 값들의 집합입니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">공역</h3>
              <p className="mt-3 break-keep text-white/70">
                함수가 값을 보내기로 미리 정해 둔 도착 집합입니다.
              </p>
            </div>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            지수함수의 치역은 반드시 다음과 같습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"\\{y\\mid y>0\\}"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            하지만 공역은 치역을 포함하기만 하면 여러 가지로 정할 수 있습니다.
            예를 들어 공역을 실수 전체로 정할 수도 있습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"\\text{공역}=\\{y\\mid y\\text{는 실수}\\}"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 경우에도 실제로 나오는 값은 양수뿐이므로 치역은 여전히 다음과
            같습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"\\text{치역}=\\{y\\mid y>0\\}"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            반대로 공역을 처음부터 양수 전체로 정할 수도 있습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"\\text{공역}=\\{y\\mid y>0\\}"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 경우에는 공역과 치역이 같아집니다.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            4. 역함수를 생각할 때 공역이 중요하다
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            지수함수와 로그함수는 서로 역함수 관계라고 배웁니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"y=a^x"}</FormulaLine>
            <FormulaLine>{"y=\\log_a x"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            지수함수의 역함수가 로그함수라는 말은, 지수함수에서{" "}
            <Formula>x</Formula>값과 <Formula>y</Formula>값의 역할을 서로
            바꾸면 로그함수가 된다는 뜻입니다.
          </p>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            그런데 역함수가 존재하려면 원래 함수가 일대일대응이어야 합니다.
            지수함수는 서로 다른 <Formula>x</Formula>값에 대해 서로 다른{" "}
            <Formula>y</Formula>값을 가지므로 일대일 함수입니다.
          </p>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            하지만 일대일 함수라는 사실만으로는 부족합니다. 공역 안의 모든
            값이 실제로 나와야 일대일대응이 됩니다.
          </p>

          <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/5 p-5">
            <p className="break-keep text-base leading-7 text-white/75">
              만약 지수함수의 공역을 실수 전체로 정하면, 공역 안에는 0이나
              음수도 들어갑니다. 하지만 지수함수의 값은 항상 양수이므로 0이나
              음수에는 절대로 도달하지 못합니다.
            </p>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 공역을 실수 전체로 잡으면 지수함수는 일대일대응이 아니므로,
            로그함수를 역함수로 정확하게 정의하기 어렵습니다.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            5. 로그함수를 역함수로 보려면 공역을 양수 전체로 잡아야 한다
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            지수함수의 역함수를 로그함수라고 말하려면, 지수함수의 공역을
            치역과 같게 잡아야 합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"\\text{공역}=\\{y\\mid y>0\\}"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            그러면 지수함수의 실제 함수값들이 공역 전체를 빠짐없이 채우게
            됩니다. 따라서 지수함수는 실수 전체의 원소들을 양수 전체의 원소들과
            하나씩 대응시키는 일대일대응이 됩니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>
              {"\\{x\\mid x\\text{는 실수}\\}\\longrightarrow\\{y\\mid y>0\\}"}
            </FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이때 역함수가 존재하고, 그 역함수가 바로 로그함수입니다.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            6. 로그함수의 정의역과 치역
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            지수함수와 로그함수는 서로 역함수 관계이므로, 정의역과 치역이 서로
            바뀝니다.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">지수함수</h3>
              <div className="mt-4 space-y-3">
                <Formula display>{"\\text{정의역}=\\{x\\mid x\\text{는 실수}\\}"}</Formula>
                <Formula display>{"\\text{치역}=\\{y\\mid y>0\\}"}</Formula>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-bold">로그함수</h3>
              <div className="mt-4 space-y-3">
                <Formula display>{"\\text{정의역}=\\{x\\mid x>0\\}"}</Formula>
                <Formula display>{"\\text{치역}=\\{y\\mid y\\text{는 실수}\\}"}</Formula>
              </div>
            </div>
          </div>
        </ContentCard>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <h2 className="break-keep text-2xl font-bold">핵심 정리</h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15 text-white/85">
                  <th className="px-4 py-3 text-sm font-semibold">구분</th>
                  <th className="px-4 py-3 text-sm font-semibold">내용</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-5 align-top font-semibold text-white/75">
                    정의역
                  </td>
                  <td className="px-4 py-5 align-top text-white/75">
                    <Formula>{"\\{x\\mid x\\text{는 실수}\\}"}</Formula>
                  </td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="px-4 py-5 align-top font-semibold text-white/75">
                    치역
                  </td>
                  <td className="px-4 py-5 align-top text-white/75">
                    <Formula>{"\\{y\\mid y>0\\}"}</Formula>
                  </td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="px-4 py-5 align-top font-semibold text-white/75">
                    공역
                  </td>
                  <td className="px-4 py-5 align-top break-keep text-white/75">
                    공역은 치역을 포함하도록 정할 수 있습니다. 예를 들어{" "}
                    <Formula>{"\\{y\\mid y\\text{는 실수}\\}"}</Formula> 또는{" "}
                    <Formula>{"\\{y\\mid y>0\\}"}</Formula>으로 잡을 수 있습니다.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-5 align-top font-semibold text-white/75">
                    역함수를 생각할 때
                  </td>
                  <td className="px-4 py-5 align-top break-keep text-white/75">
                    지수함수의 역함수를 로그함수라고 말하려면 공역을{" "}
                    <Formula>{"\\{y\\mid y>0\\}"}</Formula>으로 잡아야 합니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 break-keep text-base leading-7 text-white/75">
            한 줄로 정리하면, 지수함수의 치역은 항상{" "}
            <Formula>{"\\{y\\mid y>0\\}"}</Formula>이고, 역함수를 생각할 때
            공역도 <Formula>{"\\{y\\mid y>0\\}"}</Formula>으로 잡아야 합니다.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/concepts/algebra" className="chalk-button-secondary">
            대수 목록으로 돌아가기
          </a>

          <a href="/concepts" className="chalk-button">
            수학 개념정리로 가기
          </a>
        </div>
      </section>
    </main>
  );
}