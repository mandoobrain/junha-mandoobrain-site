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

function InverseGraphSvg() {
  const width = 760;
  const height = 560;

  const originX = 380;
  const originY = 280;
  const scale = 150;

  const toSvgX = (x: number) => originX + x * scale;
  const toSvgY = (y: number) => originY - y * scale;

  const makePath = (fn: (x: number) => number) => {
    const points: string[] = [];

    for (let i = 0; i <= 240; i += 1) {
      const x = -1.45 + (2.9 * i) / 240;
      const y = fn(x);
      const command = i === 0 ? "M" : "L";
      points.push(`${command} ${toSvgX(x)} ${toSvgY(y)}`);
    }

    return points.join(" ");
  };

  const cubicPath = makePath((x) => -(x ** 3));
  const inversePath = makePath((x) => -Math.cbrt(x));

  const points = [
    { label: "(-1, 1)", x: -1, y: 1, labelX: -1.38, labelY: 0.78 },
    { label: "(0, 0)", x: 0, y: 0, labelX: 0.15, labelY: 0.10 },
    { label: "(1, -1)", x: 1, y: -1, labelX: 1.06, labelY: -0.82 },
  ];

  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mx-auto h-auto w-full min-w-[620px] max-w-3xl"
        role="img"
        aria-label="f(x)=-x^3과 역함수의 교점 그래프"
      >
        <rect x="0" y="0" width={width} height={height} rx="24" fill="#10231d" />

        {/* x축, y축 */}
        <line
          x1="70"
          y1={originY}
          x2="690"
          y2={originY}
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="2"
        />
        <line
          x1={originX}
          y1="60"
          x2={originX}
          y2="500"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="2"
        />

        <text x="700" y={originY + 6} fill="white" fontSize="18">
          x
        </text>
        <text x={originX + 8} y="58" fill="white" fontSize="18">
          y
        </text>

        {/* y = x */}
        <line
          x1={toSvgX(-1.45)}
          y1={toSvgY(-1.45)}
          x2={toSvgX(1.45)}
          y2={toSvgY(1.45)}
          stroke="rgba(255,255,255,0.68)"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <text
          x={toSvgX(0.91)}
          y={toSvgY(1.22)}
          fill="rgba(255,255,255,0.85)"
          fontSize="18"
        >
          y = x
        </text>

        {/* f(x)=-x^3 */}
        <path
          d={cubicPath}
          fill="none"
          stroke="rgba(125,211,252,0.96)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x={toSvgX(-1.07)}
          y={toSvgY(1.45)}
          fill="rgba(186,230,253,1)"
          fontSize="18"
        >
          f(x) = -x³
        </text>

        {/* inverse */}
        <path
          d={inversePath}
          fill="none"
          stroke="rgba(253,186,116,0.96)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x={toSvgX(0.40)}
          y={toSvgY(-1.30)}
          fill="rgba(254,215,170,1)"
          fontSize="18"
        >
          f⁻¹(x) = -∛x
        </text>

        {/* 교점 */}
        {points.map((point) => (
          <g key={point.label}>
            <circle
              cx={toSvgX(point.x)}
              cy={toSvgY(point.y)}
              r="8"
              fill="white"
            />
            <text
              x={toSvgX(point.labelX)}
              y={toSvgY(point.labelY)}
              fill="white"
              fontSize="17"
            >
              {point.label}
            </text>
          </g>
        ))}

        <circle
          cx={toSvgX(0)}
          cy={toSvgY(0)}
          r="17"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />

        <text
          x={originX}
          y="535"
          textAnchor="middle"
          fill="rgba(255,255,255,0.7)"
          fontSize="17"
        >
          세 교점 중 y = x 위에 있는 점은 (0, 0)뿐입니다.
        </text>
      </svg>
    </div>
  );
}

export default function InverseFunctionIntersectionPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          COMMON MATH 2
        </p>

        <h1 className="break-keep text-4xl font-bold leading-tight md:text-5xl">
          함수와 역함수의 교점은 항상 y=x 위에 있을까?
        </h1>

        <p className="mt-6 break-keep text-base leading-7 text-white/75 md:text-lg">
          역함수가 존재하는 함수의 그래프와 그 역함수의 그래프는 직선{" "}
          <Formula>y=x</Formula>에 대하여 대칭입니다.
        </p>

        <p className="mt-4 break-keep text-base leading-7 text-white/75 md:text-lg">
          그래서 많은 학생들이 함수와 역함수의 교점은 항상 직선{" "}
          <Formula>y=x</Formula> 위에 있다고 생각합니다. 하지만 이것은 항상
          참이 아닙니다.
        </p>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            1. 교점이 y=x 위에 있다는 뜻
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            함수와 역함수의 그래프가 어떤 점에서 만난다고 해봅시다. 그 교점을
            다음과 같이 두겠습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"(a,b)"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 점이 함수의 그래프 위에 있으므로 다음이 성립합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"f(a)=b"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            또한 이 점이 역함수의 그래프 위에 있으므로 다음이 성립합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"f^{-1}(a)=b"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            두 번째 식은 다시 말하면 다음을 뜻합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"f(b)=a"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 함수와 역함수의 교점에서는 다음 두 식이 동시에 성립합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"f(a)=b,\\qquad f(b)=a"}</FormulaLine>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            2. 단조증가 함수인 경우
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            함수 <Formula>f</Formula>가 단조증가 함수라고 해봅시다.
          </p>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            만약 <Formula>a&lt;b</Formula>라면 단조증가이므로 다음이 성립해야
            합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"f(a)<f(b)"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            그런데 교점 조건에서 <Formula>f(a)=b</Formula>이고{" "}
            <Formula>f(b)=a</Formula>이므로, 위 부등식은 다음과 같아집니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"b<a"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이는 처음의 <Formula>a&lt;b</Formula>와 모순입니다. 반대로{" "}
            <Formula>a&gt;b</Formula>라고 해도 같은 방식으로 모순이 생깁니다.
          </p>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 단조증가 함수에서는 가능한 경우가 오직 하나뿐입니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"a=b"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            즉, 단조증가 함수와 그 역함수의 교점은 반드시 직선{" "}
            <Formula>y=x</Formula> 위에 존재합니다.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            3. 단조감소 함수인 경우
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            이번에는 함수 <Formula>f</Formula>가 단조감소 함수라고 해봅시다.
          </p>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            만약 <Formula>a&lt;b</Formula>라면 단조감소이므로 다음이 성립해야
            합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"f(a)>f(b)"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            그런데 교점 조건에서 <Formula>f(a)=b</Formula>이고{" "}
            <Formula>f(b)=a</Formula>입니다. 따라서 위 부등식은 다음과
            같아집니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"b>a"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이것은 처음의 <Formula>a&lt;b</Formula>와 모순되지 않습니다.
          </p>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 단조감소 함수에서는 <Formula>{"a\\neq b"}</Formula>인 교점이
            존재할 수 있습니다. 즉, 함수와 역함수의 교점이 직선{" "}
            <Formula>y=x</Formula> 위에만 존재한다고 말할 수 없습니다.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            4. 예시: f(x) = -x³
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            예를 들어 다음 함수를 생각해봅시다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"f(x)=-x^3"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 함수는 단조감소 함수이고, 역함수는 다음과 같습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"f^{-1}(x)=-\\sqrt[3]{x}"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            두 그래프의 교점을 구하면 다음 방정식을 풀면 됩니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"-x^3=-\\sqrt[3]{x}"}</FormulaLine>
            <FormulaLine>{"x^3=\\sqrt[3]{x}"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 식을 만족하는 값은 다음과 같습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"x=-1,\\quad 0,\\quad 1"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 두 그래프의 교점은 다음 세 점입니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"(-1,1),\\quad (0,0),\\quad (1,-1)"}</FormulaLine>
          </div>

          <InverseGraphSvg />

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 중에서 <Formula>(0,0)</Formula>은 직선 <Formula>y=x</Formula>{" "}
            위에 있지만, <Formula>(-1,1)</Formula>과{" "}
            <Formula>(1,-1)</Formula>은 직선 <Formula>y=x</Formula> 위에 있지
            않습니다.
          </p>
        </ContentCard>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <h2 className="break-keep text-2xl font-bold">핵심 정리</h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15 text-white/85">
                  <th className="px-4 py-3 text-sm font-semibold">
                    함수의 종류
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold">
                    함수와 역함수의 교점
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-5 align-top text-white/75">
                    단조증가 함수
                  </td>
                  <td className="px-4 py-5 align-top text-white/75">
                    반드시 직선 <Formula>y=x</Formula> 위에 존재
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-5 align-top text-white/75">
                    단조감소 함수
                  </td>
                  <td className="px-4 py-5 align-top text-white/75">
                    직선 <Formula>y=x</Formula> 밖에서도 존재 가능
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 break-keep text-base leading-7 text-white/75">
            한 줄로 정리하면, 단조증가 함수에서는 함수와 역함수의 교점이 반드시
            직선 <Formula>y=x</Formula> 위에 있지만, 단조감소 함수에서는 직선{" "}
            <Formula>y=x</Formula> 위에 있지 않은 교점도 생길 수 있습니다. 꼭 그래프를 그려 확인해야합니다.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/concepts/common-math-2" className="chalk-button-secondary">
            공통수학2 목록으로 돌아가기
          </a>

          <a href="/concepts" className="chalk-button">
            수학 개념정리로 가기
          </a>
        </div>
      </section>
    </main>
  );
}