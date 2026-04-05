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

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function CommonMath2DistanceProofPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          COMMON MATH 2
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          점과 직선 사이의 거리 공식 증명
        </h1>

        <p className="mt-6 max-w-3xl break-keep text-base leading-8 text-white/75 md:text-lg">
          점과 직선 사이의 거리 공식은 결과만 외우는 경우가 많지만, 왜 그런
          형태가 나오는지 이해하면 훨씬 오래 기억할 수 있습니다. 이 페이지에서는
          수선의 발을 잡고, 좌표와 기울기 관계를 이용하여 공식을 직접 증명합니다.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/60">
          출처 · 자료 제작: 두뇌스트레칭
        </div>

        <div className="mt-12 space-y-10">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">거리 공식</h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              점 P(x₁, y₁)와 직선 ax + by + c = 0 사이의 거리는 다음과 같습니다.
            </p>

            <div className="mt-4 text-xl font-semibold text-white">
              <Formula expr="d=\frac{|ax_1+by_1+c|}{\sqrt{a^2+b^2}}" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/70">
              점과 직선 사이의 거리란, 점에서 직선에 내린 수선의 길이를 뜻합니다.
              이제 이 공식을 어떻게 얻는지 차근차근 알아보겠습니다.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">1. 수선의 발을 잡고 생각하자</h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              점 P(x₁, y₁)에서 직선 ax + by + c = 0에 내린 수선의 발을 H(x, y)라고
              두겠습니다.
            </p>

            <p className="mt-4 break-keep leading-8 text-white/80">
              그러면 점과 직선 사이의 거리는 바로 선분 PH의 길이입니다.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20 p-4">
                <svg
                  viewBox="0 0 800 420"
                  className="h-auto w-full"
                  role="img"
                  aria-label="점 P에서 직선에 내린 수선의 발 H와 선분 PH를 나타낸 그림"
                >
                  <defs>
                    <marker
                      id="arrow"
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
                    x1="80"
                    y1="340"
                    x2="740"
                    y2="340"
                    stroke="white"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                  />
                  <line
                    x1="120"
                    y1="370"
                    x2="120"
                    y2="40"
                    stroke="white"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                  />

                  {/* axis labels */}
                  <text x="748" y="350" fill="white" fontSize="22">
                    x
                  </text>
                  <text x="108" y="34" fill="white" fontSize="22">
                    y
                  </text>

                  {/* line ax + by + c = 0 */}
                  <line
                    x1="80"
                    y1="320"
                    x2="720"
                    y2="120"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <text x="505" y="130" fill="white" fontSize="24">
                    ax + by + c = 0
                  </text>

                  {/* H on the line */}
                  <circle cx="400" cy="220" r="6" fill="#f6d365" />
                  <text x="355" y="262" fill="#f6d365" fontSize="24">
                    H(x, y)
                  </text>

                  {/* P chosen so that PH is exactly perpendicular to the line */}
                  <circle cx="350" cy="60" r="6" fill="#f6d365" />
                  <text x="220" y="48" fill="#f6d365" fontSize="26">
                    P(x₁, y₁)
                  </text>

                  {/* PH perpendicular segment */}
                  <line
                    x1="350"
                    y1="60"
                    x2="400"
                    y2="220"
                    stroke="#f6d365"
                    strokeWidth="3"
                    strokeDasharray="8 8"
                  />

                  {/* PH label */}
                  <text x="387" y="142" fill="#f6d365" fontSize="24">
                    PH
                  </text>

                  {/* right angle marker */}
                  <polyline
                    points="395.23,204.73 410.50,199.96 415.27,215.23"
                    fill="none"
                    stroke="#f6d365"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>

              <p className="mt-4 break-keep text-sm leading-7 text-white/70">
                점 P(x₁, y₁)에서 직선 ax + by + c = 0에 내린 수선의 발을 H(x, y)라고 두면,
                점과 직선 사이의 거리는 선분 PH의 길이로 생각할 수 있습니다.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">
              2. 선분 PH와 직선의 수직 관계를 이용하자
            </h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              선분 PH를 지나는 직선의 기울기는
            </p>

            <div className="mt-4 text-lg text-white">
              <Formula expr="\frac{y-y_1}{x-x_1}" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              입니다. 한편 직선 ax + by + c = 0을 기울기 형태로 바꾸면
            </p>

            <div className="mt-4 text-lg text-white">
              <Formula expr="y=-\frac{a}{b}x-\frac{c}{b}" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              이므로, 그 기울기는
            </p>

            <div className="mt-4 text-lg text-white">
              <Formula expr="-\frac{a}{b}" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              입니다. 또 선분 PH는 직선 ax + by + c = 0에 수직이므로, 두 직선의
              기울기의 곱은 -1입니다.
            </p>

            <div className="mt-4 text-lg text-white">
              <Formula expr="\frac{y-y_1}{x-x_1}\cdot\left(-\frac{a}{b}\right)=-1" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              이를 정리하면
            </p>

            <div className="mt-4 text-lg text-white">
              <Formula expr="b(y-y_1)=a(x-x_1)" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              따라서
            </p>

            <div className="mt-4 text-lg text-white">
              <Formula expr="x-x_1=ak,\qquad y-y_1=bk" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              가 되고, 이 공통된 값을 k라고 두면
            </p>

            <div className="mt-4 text-lg text-white">
              <Formula expr="x=x_1+ak,\qquad y=y_1+bk" display />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">3. 점 H(x, y)는 직선 위의 점이다</h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              수선의 발 H(x, y)는 직선 ax + by + c = 0 위의 점이므로
            </p>

            <div className="mt-4 text-lg text-white">
              <Formula expr="ax+by+c=0" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              입니다. 여기에 앞에서 얻은 식을 대입하면
            </p>

            <div className="mt-4 space-y-3 text-lg text-white">
              <Formula expr="a(x_1+ak)+b(y_1+bk)+c=0" display />
              <Formula expr="ax_1+a^2k+by_1+b^2k+c=0" display />
              <Formula expr="(a^2+b^2)k+ax_1+by_1+c=0" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              따라서
            </p>

            <div className="mt-4 text-xl font-semibold text-white">
              <Formula expr="k=-\frac{ax_1+by_1+c}{a^2+b^2}" display />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">4. 이제 선분 PH의 길이를 구하자</h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              점과 직선 사이의 거리는 선분 PH의 길이이므로
            </p>

            <div className="mt-4 text-lg text-white">
              <Formula expr="PH=\sqrt{(x-x_1)^2+(y-y_1)^2}" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              앞에서 얻은 관계를 이용하면
            </p>

            <div className="mt-4 space-y-3 text-lg text-white">
              <Formula expr="PH=\sqrt{(ak)^2+(bk)^2}" display />
              <Formula expr="=\sqrt{a^2k^2+b^2k^2}" display />
              <Formula expr="=\sqrt{(a^2+b^2)k^2}" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              여기서 학생들이 자주 헷갈리는 부분이 있습니다.{" "}
              <Formula expr="\sqrt{k^2}=|k|" /> 는 그냥 k가 아니라 항상 |k|가
              됩니다. 제곱근 기호는 0 이상인 값을 뜻하기 때문입니다.
            </p>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4 text-white/80">
              <div>
                <Formula expr="\sqrt{k^2}=|k|" display />
              </div>
              <div className="mt-2">
                <Formula expr="\sqrt{(-3)^2}=\sqrt{9}=3" display />
              </div>
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              따라서
            </p>

            <div className="mt-4 text-lg text-white">
              <Formula expr="PH=|k|\sqrt{a^2+b^2}" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              이고, 여기에 k의 값을 대입하면
            </p>

            <div className="mt-4 text-xl font-semibold text-white">
              <Formula expr="PH=\frac{|ax_1+by_1+c|}{\sqrt{a^2+b^2}}" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/80">
              가 됩니다.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">정리</h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              따라서 점 P(x₁, y₁)와 직선 ax + by + c = 0 사이의 거리는
            </p>

            <div className="mt-4 text-2xl font-bold text-white">
              <Formula expr="d=\frac{|ax_1+by_1+c|}{\sqrt{a^2+b^2}}" display />
            </div>

            <p className="mt-4 break-keep leading-8 text-white/70">
              로 정리됩니다.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}