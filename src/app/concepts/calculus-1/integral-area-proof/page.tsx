import katex from "katex";

function Formula({
  expr,
  display = false,
}: {
  expr: string;
  display?: boolean;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
  });

  if (display) {
    return (
      <div className="w-full overflow-x-auto overflow-y-hidden py-1">
        <div
          className="w-max min-w-full text-left [&_.katex-display]:m-0 [&_.katex-display]:text-left"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Calculus1IntegralAreaProofPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          CALCULUS 1
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          적분이 왜 그래프의 넓이와 연결되는가
        </h1>

        <p className="mt-6 max-w-3xl break-keep text-base leading-8 text-white/75 md:text-lg">
          적분은 단순히 공식을 계산하는 기술처럼 보이기 쉽지만, 본래는 그래프 아래
          넓이를 다루는 아이디어와 깊게 연결되어 있습니다. 이 페이지에서는 넓이
          함수 <Formula expr="S(x)" /> 를 정의하고, 그 도함수가 원래 함수
          <Formula expr="f(x)" /> 와 같아진다는 사실을 이용해 적분과 넓이의
          관계를 설명합니다.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/60">
          출처 · 자료 제작: 두뇌스트레칭
        </div>

        <div className="mt-12 space-y-10">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">1. 넓이 함수 S(x)를 정의하자</h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              함수 <Formula expr="f(x)" /> 가 연속이고,
              <span className="mx-1 inline-block">
                <Formula expr="f(x)\ge 0" />
              </span>
              라고 하자. 고정된 수 <Formula expr="a" /> 를 잡고,
            </p>

            <div className="mt-6 text-white">
              <Formula
                expr="S(x)=\text{a부터 x까지 그래프 } y=f(t)\text{ 와 }x\text{-축으로 둘러싸인 부분의 넓이}"
                display
              />
            </div>

            <p className="mt-6 break-keep leading-8 text-white/80">
              라고 정의하자. 즉 <Formula expr="S(x)" /> 는 왼쪽 끝
              <Formula expr="a" /> 에서 시작해서 오른쪽 끝이
              <Formula expr="x" /> 일 때까지 쌓인 넓이이다.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20 p-4">
                <svg
                  viewBox="0 0 800 420"
                  className="h-auto w-full"
                  role="img"
                  aria-label="a부터 x까지 함수 f(t) 그래프 아래 넓이 S(x)를 나타낸 그림"
                >
                  <defs>
                    <marker
                      id="arrow-area"
                      markerWidth="10"
                      markerHeight="10"
                      refX="8"
                      refY="5"
                      orient="auto"
                      markerUnits="strokeWidth"
                    >
                      <path d="M0,0 L10,5 L0,10 z" fill="white" />
                    </marker>
                  </defs>

                  {/* axes */}
                  <line
                    x1="90"
                    y1="340"
                    x2="740"
                    y2="340"
                    stroke="white"
                    strokeWidth="2"
                    markerEnd="url(#arrow-area)"
                  />
                  <line
                    x1="120"
                    y1="370"
                    x2="120"
                    y2="50"
                    stroke="white"
                    strokeWidth="2"
                    markerEnd="url(#arrow-area)"
                  />

                  {/* labels */}
                  <text x="748" y="350" fill="white" fontSize="22">x</text>
                  <text x="108" y="44" fill="white" fontSize="22">y</text>

                  {/* area under curve */}
                  <path
                    d="M210 340 
           L210 280
           C260 210, 330 180, 420 170
           C500 162, 560 185, 620 235
           L620 340 Z"
                    fill="rgba(246, 211, 101, 0.22)"
                    stroke="none"
                  />

                  {/* curve */}
                  <path
                    d="M210 280
           C260 210, 330 180, 420 170
           C500 162, 560 185, 620 235"
                    fill="none"
                    stroke="#f6d365"
                    strokeWidth="4"
                  />

                  {/* vertical bounds */}
                  <line x1="210" y1="340" x2="210" y2="280" stroke="#f6d365" strokeWidth="2" strokeDasharray="6 6" />
                  <line x1="620" y1="340" x2="620" y2="235" stroke="#f6d365" strokeWidth="2" strokeDasharray="6 6" />

                  {/* a and x */}
                  <text x="204" y="365" fill="white" fontSize="22">a</text>
                  <text x="614" y="365" fill="white" fontSize="22">x</text>

                  {/* function label */}
                  <text x="470" y="145" fill="#f6d365" fontSize="24">y = f(t)</text>

                  {/* area label */}
                  <text x="355" y="255" fill="#f6d365" fontSize="34" fontWeight="700">S(x)</text>
                </svg>
              </div>

              <p className="mt-4 break-keep text-sm leading-7 text-white/70">
                왼쪽 경계 <Formula expr="x=a" /> 부터 오른쪽 경계 <Formula expr="x=x" /> 까지,
                그래프 <Formula expr="y=f(t)" /> 아래에 쌓인 넓이를 <Formula expr="S(x)" /> 로
                정의합니다.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">
              2. S(x + Δx) - S(x)의 뜻
            </h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              그러면
            </p>

            <div className="mt-4 text-white">
              <Formula expr="S(x+\Delta x)-S(x)" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              는 <Formula expr="a" />부터 <Formula expr="x+\Delta x" />까지의
              넓이에서 <Formula expr="a" />부터 <Formula expr="x" />까지의 넓이를
              뺀 것이므로, 결국
            </p>

            <div className="mt-4 text-white">
              <Formula expr="x\text{부터 }x+\Delta x\text{까지의 좁은 띠 모양 부분의 넓이}" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              가 된다. 이제 이 좁은 부분의 넓이를 생각해보자.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">
              3. 그 좁은 부분은 직사각형 넓이 사이에 끼인다
            </h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              <Formula expr="\Delta x>0" /> 라고 하자.
            </p>

            <p className="mt-4 break-keep leading-8 text-white/80">
              구간 <Formula expr="[x,\ x+\Delta x]" /> 에서
              <Formula expr="f" /> 의 최솟값을 <Formula expr="m" />,
              최댓값을 <Formula expr="M" /> 라고 하면
            </p>

            <div className="mt-4 text-white">
              <Formula expr="m\le f(t)\le M" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              이다.
            </p>

            <p className="mt-4 break-keep leading-8 text-white/80">
              그러면 <Formula expr="x" />부터
              <Formula expr="x+\Delta x" />까지의 그래프 아래 넓이는
              높이가 항상 <Formula expr="m" /> 인 직사각형 넓이보다는 크거나
              같고, 높이가 항상 <Formula expr="M" /> 인 직사각형 넓이보다는
              작거나 같다.
            </p>

            <div className="mt-6 space-y-4 text-white">
              <Formula expr="m\Delta x\le S(x+\Delta x)-S(x)\le M\Delta x" display />
              <Formula expr="m\le \frac{S(x+\Delta x)-S(x)}{\Delta x}\le M" display />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">4. Δx → 0으로 보내자</h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              <Formula expr="\Delta x" /> 가 0에 가까워지면 구간
              <Formula expr="[x,\ x+\Delta x]" /> 는 점점
              <Formula expr="x" /> 한 점에 가까워진다.
            </p>

            <p className="mt-4 break-keep leading-8 text-white/80">
              함수 <Formula expr="f" /> 가 연속이므로 이 구간에서의 최솟값
              <Formula expr="m" /> 과 최댓값 <Formula expr="M" /> 은 둘 다
              <Formula expr="f(x)" /> 에 가까워진다. 즉
            </p>

            <div className="mt-6 space-y-4 text-white">
              <Formula expr="m\to f(x),\qquad M\to f(x)" display />
              <Formula
                expr="\lim_{\Delta x\to 0}\frac{S(x+\Delta x)-S(x)}{\Delta x}=f(x)"
                display
              />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              이다. 그런데 이것은 바로 도함수의 정의이므로
            </p>

            <div className="mt-4 text-white">
              <Formula expr="S'(x)=f(x)" display />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">결론</h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              넓이 함수 <Formula expr="S(x)" /> 를
            </p>

            <div className="mt-4 text-white">
              <Formula expr="S(x)=\text{a부터 x까지의 넓이}" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              라고 잡으면,
            </p>

            <div className="mt-4 text-white">
              <Formula expr="S'(x)=f(x)" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              가 된다.
            </p>

            <p className="mt-4 break-keep leading-8 text-white/80">
              즉, 넓이를 쌓아서 만든 함수의 변화율은 그 순간의 높이와 같다.
              그래서 거꾸로 말하면, <Formula expr="f(x)" /> 를 높이로 하는 넓이를
              계속 쌓아가면 그 넓이 함수의 도함수가 다시
              <Formula expr="f(x)" /> 가 된다는 뜻이다. 이것이 적분과 넓이가
              연결되는 핵심이다.
            </p>
          </section>



        </div>
      </section>
    </main>
  );
}