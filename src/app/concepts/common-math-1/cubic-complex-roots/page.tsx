import katex from "katex";
import type { ReactNode } from "react";

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

function ContentCard({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
      {children}
    </div>
  );
}

function SubTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 break-keep text-xl font-bold text-white/90">
      {children}
    </h3>
  );
}

export default function CubicComplexRootsPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          COMMON MATH 1
        </p>

        <h1 className="break-keep text-4xl font-bold leading-tight md:text-5xl">
          삼차방정식에서 꼭 알아야 할 허근의 성질
        </h1>

        <p className="mt-6 break-keep text-base leading-7 text-white/75 md:text-lg">
          삼차방정식에서는 세제곱해서 1이 되는 허근과 세제곱해서 -1이 되는
          허근이 자주 등장합니다. 이때 중요한 것은 공식을 단순히 외우는 것이
          아니라, 식에서 어떤 성질이 자연스럽게 나오는지 흐름을 이해하는
          것입니다.
        </p>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold md:text-3xl">
            1. 세제곱해서 1이 되는 허근
          </h2>

          <div className="mt-4">
            <Formula display>{"x^3=1"}</Formula>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            먼저 위 식을 인수분해하면 다음과 같습니다.
          </p>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"x^3=1"}</FormulaLine>
            <FormulaLine>{"x^3-1=0"}</FormulaLine>
            <FormulaLine>{"(x-1)(x^2+x+1)=0"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 허근은 다음 이차방정식의 두 근입니다.
          </p>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"x^2+x+1=0"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 두 허근을 아래와 같이 둡니다.
          </p>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>
              {"\\omega=\\frac{-1+\\sqrt{3}i}{2},\\quad \\overline{\\omega}=\\frac{-1-\\sqrt{3}i}{2}"}
            </FormulaLine>
          </div>

          <SubTitle>① 식만 보고 알 수 있는 것</SubTitle>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>
              {"\\omega^3=1,\\quad \\overline{\\omega}^{\\,3}=1"}
            </FormulaLine>
            <FormulaLine>
              {"\\omega^2+\\omega+1=0,\\quad \\overline{\\omega}^{\\,2}+\\overline{\\omega}+1=0"}
            </FormulaLine>
            <FormulaLine>
              {"\\omega+\\frac{1}{\\omega}=-1,\\quad \\overline{\\omega}+\\frac{1}{\\overline{\\omega}}=-1"}
            </FormulaLine>
          </div>

          <SubTitle>② 근과 계수의 관계</SubTitle>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"\\omega+\\overline{\\omega}=-1"}</FormulaLine>
            <FormulaLine>{"\\omega\\overline{\\omega}=1"}</FormulaLine>
          </div>

          <SubTitle>③ 위의 ①, ②를 통해 알 수 있는 것</SubTitle>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>
              {"\\omega^2=\\overline{\\omega}=\\frac{1}{\\omega}"}
            </FormulaLine>
            <FormulaLine>
              {"\\overline{\\omega}^{\\,2}=\\omega=\\frac{1}{\\overline{\\omega}}"}
            </FormulaLine>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold md:text-3xl">
            2. 세제곱해서 -1이 되는 허근
          </h2>

          <div className="mt-4">
            <Formula display>{"x^3=-1"}</Formula>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이번에는 위 식을 인수분해해봅시다.
          </p>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"x^3=-1"}</FormulaLine>
            <FormulaLine>{"x^3+1=0"}</FormulaLine>
            <FormulaLine>{"(x+1)(x^2-x+1)=0"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 허근은 다음 이차방정식의 두 근입니다.
          </p>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"x^2-x+1=0"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 두 허근을 아래와 같이 둡니다.
          </p>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>
              {"\\omega=\\frac{1+\\sqrt{3}i}{2},\\quad \\overline{\\omega}=\\frac{1-\\sqrt{3}i}{2}"}
            </FormulaLine>
          </div>

          <SubTitle>① 식만 보고 알 수 있는 것</SubTitle>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>
              {"\\omega^3=-1,\\quad \\overline{\\omega}^{\\,3}=-1"}
            </FormulaLine>
            <FormulaLine>
              {"\\omega^2-\\omega+1=0,\\quad \\overline{\\omega}^{\\,2}-\\overline{\\omega}+1=0"}
            </FormulaLine>
            <FormulaLine>
              {"\\omega+\\frac{1}{\\omega}=1,\\quad \\overline{\\omega}+\\frac{1}{\\overline{\\omega}}=1"}
            </FormulaLine>
          </div>

          <SubTitle>② 근과 계수의 관계</SubTitle>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"\\omega+\\overline{\\omega}=1"}</FormulaLine>
            <FormulaLine>{"\\omega\\overline{\\omega}=1"}</FormulaLine>
          </div>

          <SubTitle>③ 위의 ①, ②를 통해 알 수 있는 것</SubTitle>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>
              {"\\omega^2=-\\overline{\\omega}=-\\frac{1}{\\omega}"}
            </FormulaLine>
            <FormulaLine>
              {"\\overline{\\omega}^{\\,2}=-\\omega=-\\frac{1}{\\overline{\\omega}}"}
            </FormulaLine>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">요약표</h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15 text-white/85">
                  <th className="px-4 py-3 text-sm font-semibold">구분</th>
                  <th className="px-4 py-3 text-sm font-semibold">
                    세제곱해서 1이 되는 허근
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold">
                    세제곱해서 -1이 되는 허근
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-5 align-top text-sm font-semibold text-white/75">
                    식만 보고 알 수 있는 것
                  </td>

                  <td className="px-4 py-5 align-top">
                    <div className="space-y-3 text-base">
                      <Formula>{"\\omega^3=1"}</Formula>
                      <br />
                      <Formula>{"\\overline{\\omega}^{\\,3}=1"}</Formula>
                      <br />
                      <Formula>{"\\omega^2+\\omega+1=0"}</Formula>
                      <br />
                      <Formula>
                        {"\\overline{\\omega}^{\\,2}+\\overline{\\omega}+1=0"}
                      </Formula>
                      <br />
                      <Formula>{"\\omega+\\frac{1}{\\omega}=-1"}</Formula>
                      <br />
                      <Formula>
                        {"\\overline{\\omega}+\\frac{1}{\\overline{\\omega}}=-1"}
                      </Formula>
                    </div>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <div className="space-y-3 text-base">
                      <Formula>{"\\omega^3=-1"}</Formula>
                      <br />
                      <Formula>{"\\overline{\\omega}^{\\,3}=-1"}</Formula>
                      <br />
                      <Formula>{"\\omega^2-\\omega+1=0"}</Formula>
                      <br />
                      <Formula>
                        {"\\overline{\\omega}^{\\,2}-\\overline{\\omega}+1=0"}
                      </Formula>
                      <br />
                      <Formula>{"\\omega+\\frac{1}{\\omega}=1"}</Formula>
                      <br />
                      <Formula>
                        {"\\overline{\\omega}+\\frac{1}{\\overline{\\omega}}=1"}
                      </Formula>
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="px-4 py-5 align-top text-sm font-semibold text-white/75">
                    근과 계수의 관계
                  </td>

                  <td className="px-4 py-5 align-top">
                    <div className="space-y-3 text-base">
                      <Formula>{"\\omega+\\overline{\\omega}=-1"}</Formula>
                      <br />
                      <Formula>{"\\omega\\overline{\\omega}=1"}</Formula>
                    </div>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <div className="space-y-3 text-base">
                      <Formula>{"\\omega+\\overline{\\omega}=1"}</Formula>
                      <br />
                      <Formula>{"\\omega\\overline{\\omega}=1"}</Formula>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-5 align-top text-sm font-semibold text-white/75">
                    위 두 개를 통해 알 수 있는 것
                  </td>

                  <td className="px-4 py-5 align-top">
                    <div className="space-y-3 text-base">
                      <Formula>
                        {"\\omega^2=\\overline{\\omega}=\\frac{1}{\\omega}"}
                      </Formula>
                      <br />
                      <Formula>
                        {"\\overline{\\omega}^{\\,2}=\\omega=\\frac{1}{\\overline{\\omega}}"}
                      </Formula>
                    </div>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <div className="space-y-3 text-base">
                      <Formula>
                        {"\\omega^2=-\\overline{\\omega}=-\\frac{1}{\\omega}"}
                      </Formula>
                      <br />
                      <Formula>
                        {"\\overline{\\omega}^{\\,2}=-\\omega=-\\frac{1}{\\overline{\\omega}}"}
                      </Formula>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentCard>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <h2 className="break-keep text-2xl font-bold">
            공식은 외우는 것보다 만들어내는 것이 중요합니다
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            위 공식들을 하나하나 그대로 외우려고 하면 금방 헷갈릴 수
            있습니다. 중요한 것은 공식을 통째로 암기하는 것이 아니라, 위처럼
            3단계로 나누어 생각하는 것입니다.
          </p>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            첫째, 식만 보고 바로 알 수 있는 기본 성질을 정리하고, 둘째, 근과
            계수의 관계로 두 허근의 합과 곱을 확인한 뒤, 셋째, 앞의 성질들을
            이용해 추가 관계식을 끌어내는 흐름을 익혀야 합니다.
          </p>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            이렇게 이해해두면 공식을 조금 잊어버리더라도 다시 스스로
            만들어낼 수 있습니다. 또한 세제곱의 값이 꼭 1이나 -1이 아니라
            8, 27처럼 다른 수로 출제되는 경우에도 같은 방식으로 생각해야
            문제를 자연스럽게 풀어낼 수 있습니다.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/concepts/common-math-1" className="chalk-button-secondary">
            공통수학1 목록으로 돌아가기
          </a>

          <a
            href="/concepts/common-math-1/complex-nth-roots"
            className="chalk-button"
          >
            n주기 복소수 정리 보기
          </a>
        </div>
      </section>
    </main>
  );
}