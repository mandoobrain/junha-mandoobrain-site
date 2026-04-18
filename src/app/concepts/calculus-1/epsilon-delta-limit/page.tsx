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

function EpsilonDeltaSvg() {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
      <svg
        viewBox="0 0 760 520"
        className="mx-auto h-auto w-full min-w-[620px] max-w-3xl"
        role="img"
        aria-label="입실론 델타 극한 설명 그림"
      >
        <rect x="0" y="0" width="760" height="520" rx="24" fill="#10231d" />

        {/* axes */}
        <line
          x1="80"
          y1="395"
          x2="690"
          y2="395"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="2"
        />
        <line
          x1="140"
          y1="60"
          x2="140"
          y2="455"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="2"
        />

        <text x="700" y="401" fill="white" fontSize="18">
          x
        </text>
        <text x="148" y="58" fill="white" fontSize="18">
          y
        </text>

        {/* function curve */}
        <path
          d="M 95 430 C 190 390, 280 315, 390 250 C 500 185, 575 155, 655 120"
          fill="none"
          stroke="rgba(125,211,252,0.95)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* a and delta range */}
        <line
          x1="390"
          y1="395"
          x2="390"
          y2="90"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        <line
          x1="315"
          y1="395"
          x2="315"
          y2="90"
          stroke="rgba(253,186,116,0.7)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        <line
          x1="465"
          y1="395"
          x2="465"
          y2="90"
          stroke="rgba(253,186,116,0.7)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />

        <rect
          x="315"
          y="90"
          width="150"
          height="305"
          fill="rgba(253,186,116,0.10)"
          stroke="rgba(253,186,116,0.28)"
        />

        <text x="382" y="420" fill="white" fontSize="18">
          a
        </text>
        <text x="285" y="420" fill="rgba(254,215,170,1)" fontSize="18">
          a-δ
        </text>
        <text x="450" y="420" fill="rgba(254,215,170,1)" fontSize="18">
          a+δ
        </text>

        {/* L and epsilon range */}
        <line
          x1="140"
          y1="250"
          x2="690"
          y2="250"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        <line
          x1="140"
          y1="200"
          x2="690"
          y2="200"
          stroke="rgba(216,180,254,0.75)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        <line
          x1="140"
          y1="300"
          x2="690"
          y2="300"
          stroke="rgba(216,180,254,0.75)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />

        <rect
          x="140"
          y="200"
          width="550"
          height="100"
          fill="rgba(216,180,254,0.10)"
          stroke="rgba(216,180,254,0.28)"
        />

        <text x="105" y="256" fill="white" fontSize="18">
          L
        </text>
        <text x="70" y="206" fill="rgba(233,213,255,1)" fontSize="18">
          L+ε
        </text>
        <text x="70" y="306" fill="rgba(233,213,255,1)" fontSize="18">
          L-ε
        </text>

        <circle cx="390" cy="250" r="7" fill="white" />
        <text x="410" y="232" fill="white" fontSize="17">
          x가 a에 가까우면
        </text>
        <text x="410" y="257" fill="white" fontSize="17">
          f(x)는 L 주변에 들어온다
        </text>

        <text
          x="380"
          y="485"
          textAnchor="middle"
          fill="rgba(255,255,255,0.65)"
          fontSize="17"
        >
          δ는 x의 허용 범위, ε은 함수값의 허용 오차를 뜻합니다.
        </text>
      </svg>
    </div>
  );
}

export default function EpsilonDeltaLimitPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          CALCULUS 1
        </p>

        <h1 className="break-keep text-4xl font-bold leading-tight md:text-5xl">
          극한의 엄밀한 정의: 입실론-델타를 쉽게 이해하기
        </h1>

        <p className="mt-6 break-keep text-base leading-7 text-white/75 md:text-lg">
          함수의 극한을 처음 배울 때, 우리는 보통 “<Formula>x</Formula>가{" "}
          <Formula>a</Formula>에 가까워질 때 <Formula>f(x)</Formula>가{" "}
          <Formula>L</Formula>에 가까워진다”라고 말합니다.
        </p>

        <p className="mt-4 break-keep text-base leading-7 text-white/75 md:text-lg">
          그런데 이 말은 조금 애매합니다. “가까워진다”는 말을 수학적으로
          정확하게 쓰려면 어떻게 해야 할까요? 그 답이 바로 입실론-델타 정의입니다.
        </p>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <p className="break-keep text-base leading-7 text-white/75">
            이 글에서는 대학 수학에서 배우는 입실론-델타 정의를 고등학생도
            이해할 수 있도록 직관부터 차근차근 정리해보겠습니다.
          </p>
        </div>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            1. 극한의 직관적인 표현
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            우리가 고등학교에서 처음 배우는 극한의 표현은 다음과 같습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"\\lim_{x\\to a} f(x)=L"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 말은 보통 이렇게 읽습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/5 p-5">
            <p className="break-keep text-base leading-7 text-white/80">
              <Formula>x</Formula>가 <Formula>a</Formula>에 가까워질수록{" "}
              <Formula>f(x)</Formula>는 <Formula>L</Formula>에 가까워진다.
            </p>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 설명은 직관적으로는 좋지만, “얼마나 가까워져야 가까워진
            것인가?”라는 질문에는 아직 답하지 못합니다.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            2. 먼저 목표 오차를 정한다: ε
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            입실론-델타 정의에서는 먼저 함수값 <Formula>f(x)</Formula>가{" "}
            <Formula>L</Formula>에 얼마나 가까워야 하는지 목표를 정합니다.
            이 목표 오차를 <Formula>{"\\varepsilon"}</Formula>이라고 부릅니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"|f(x)-L|<\\varepsilon"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 부등식은 <Formula>f(x)</Formula>와 <Formula>L</Formula>의
            차이가 <Formula>{"\\varepsilon"}</Formula>보다 작다는 뜻입니다.
            즉, 함수값이 <Formula>L</Formula> 주변의 아주 좁은 범위 안에
            들어오라는 요구입니다.
          </p>

          <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/5 p-5">
            <p className="break-keep text-base leading-7 text-white/80">
              <Formula>{"\\varepsilon"}</Formula>은 “함수값의 허용 오차”라고
              생각하면 됩니다.
            </p>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            3. 그 목표를 만족시키는 x의 범위를 찾는다: δ
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            이제 목표가 정해졌습니다. 함수값을 <Formula>L</Formula>에{" "}
            <Formula>{"\\varepsilon"}</Formula>만큼 가까이 보내야 합니다.
          </p>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            그러려면 <Formula>x</Formula>를 <Formula>a</Formula>에 얼마나
            가까이 가져가야 할까요? 이때 필요한 <Formula>x</Formula>의 허용
            범위를 <Formula>{"\\delta"}</Formula>라고 부릅니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"0<|x-a|<\\delta"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 부등식은 <Formula>x</Formula>가 <Formula>a</Formula>와는 다르지만,
            <Formula>a</Formula>에 <Formula>{"\\delta"}</Formula>보다 가까이
            있다는 뜻입니다.
          </p>

          <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/5 p-5">
            <p className="break-keep text-base leading-7 text-white/80">
              <Formula>{"\\delta"}</Formula>는 “x값의 허용 범위”라고 생각하면
              됩니다.
            </p>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            4. 입실론-델타 정의의 핵심 문장
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            이제 두 가지 부등식을 연결하면 극한의 엄밀한 정의가 됩니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>
              {"0<|x-a|<\\delta\\quad\\Longrightarrow\\quad |f(x)-L|<\\varepsilon"}
            </FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 말은 다음과 같습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/5 p-5">
            <p className="break-keep text-base leading-7 text-white/80">
              원하는 만큼 작은 오차 <Formula>{"\\varepsilon"}</Formula>을
              먼저 정하더라도, 그 오차 안에 함수값이 들어오도록 만드는{" "}
              <Formula>x</Formula>의 범위 <Formula>{"\\delta"}</Formula>를
              찾을 수 있다.
            </p>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이게 바로 <Formula>{"\\lim_{x\\to a}f(x)=L"}</Formula>이라는 말의
            엄밀한 뜻입니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>
              {"\\forall \\varepsilon>0,\\ \\exists \\delta>0\\ \\text{such that}\\ 0<|x-a|<\\delta\\Rightarrow |f(x)-L|<\\varepsilon"}
            </FormulaLine>
          </div>

          <p className="mt-4 break-keep text-sm leading-6 text-white/55">
            기호가 어렵게 보이지만, 핵심은 “어떤 작은 오차를 요구해도 그에 맞는
            x의 범위를 잡을 수 있다”는 뜻입니다.
          </p>

          <EpsilonDeltaSvg />
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            5. 쉬운 예시: f(x)=2x에서 x가 3으로 갈 때
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            예를 들어 다음 극한을 생각해봅시다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"\\lim_{x\\to 3}2x=6"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            입실론-델타 방식으로 말하면, <Formula>2x</Formula>가{" "}
            <Formula>6</Formula>에 <Formula>{"\\varepsilon"}</Formula>보다
            가까워지게 만들고 싶습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"|2x-6|<\\varepsilon"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            왼쪽을 정리하면 다음과 같습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"|2x-6|=2|x-3|"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 <Formula>{"2|x-3|<\\varepsilon"}</Formula>이 되려면
            충분히 다음 조건을 잡으면 됩니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"|x-3|<\\frac{\\varepsilon}{2}"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            즉, 이 예시에서는 다음처럼 잡을 수 있습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/5 p-5">
            <FormulaLine>{"\\delta=\\frac{\\varepsilon}{2}"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            그러면 <Formula>{"0<|x-3|<\\delta"}</Formula>일 때 자동으로{" "}
            <Formula>{"|2x-6|<\\varepsilon"}</Formula>이 됩니다.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            6. 왜 x=a는 제외할까?
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            정의에서 <Formula>{"0<|x-a|<\\delta"}</Formula>라고 쓰는 이유는,
            극한이 <Formula>x=a</Formula>에서의 함수값 자체를 보는 개념이
            아니기 때문입니다.
          </p>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            극한은 <Formula>x</Formula>가 <Formula>a</Formula>에 가까워질 때
            주변에서 함수값이 어디로 가는지를 보는 개념입니다. 그래서{" "}
            <Formula>x=a</Formula>인 경우는 제외하고, <Formula>a</Formula>의
            주변에서만 판단합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/5 p-5">
            <p className="break-keep text-base leading-7 text-white/80">
              이 때문에 함수값 <Formula>f(a)</Formula>가 존재하지 않아도
              극한값은 존재할 수 있습니다.
            </p>
          </div>
        </ContentCard>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <h2 className="break-keep text-2xl font-bold">핵심 정리</h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15 text-white/85">
                  <th className="px-4 py-3 text-sm font-semibold">기호</th>
                  <th className="px-4 py-3 text-sm font-semibold">의미</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-5 align-top text-white/75">
                    <Formula>{"\\varepsilon"}</Formula>
                  </td>
                  <td className="px-4 py-5 align-top break-keep text-white/75">
                    함수값 <Formula>f(x)</Formula>가 극한값 <Formula>L</Formula>
                    에서 벗어나도 되는 허용 오차입니다.
                  </td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="px-4 py-5 align-top text-white/75">
                    <Formula>{"\\delta"}</Formula>
                  </td>
                  <td className="px-4 py-5 align-top break-keep text-white/75">
                    <Formula>x</Formula>를 <Formula>a</Formula>에 얼마나
                    가까이 잡아야 하는지를 나타내는 허용 범위입니다.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-5 align-top text-white/75">
                    <Formula>{"\\lim_{x\\to a}f(x)=L"}</Formula>
                  </td>
                  <td className="px-4 py-5 align-top break-keep text-white/75">
                    어떤 작은 <Formula>{"\\varepsilon"}</Formula>을 요구해도,
                    그 요구를 만족시키는 <Formula>{"\\delta"}</Formula>를 찾을
                    수 있다는 뜻입니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 break-keep text-base leading-7 text-white/75">
            한 줄로 정리하면, 입실론-델타 정의는 “함수값을 원하는 만큼
            가깝게 만들 수 있도록, x값을 충분히 가깝게 잡을 수 있다”는 말을
            수학적으로 정확하게 쓴 것입니다.
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