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
          className="w-max min-w-full [&_.katex-display]:m-0 [&_.katex-display]:text-left"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function AlgebraSumsProofPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          ALGEBRA
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          자연수의 합, 제곱의 합, 세제곱의 합 공식 증명
        </h1>

        <p className="mt-6 max-w-3xl break-keep text-base leading-8 text-white/75 md:text-lg">
          아래에서는 대수에서 자주 쓰이는 세 가지 합 공식을 차례대로 증명합니다.
          결과만 외우는 것이 아니라, 왜 그런 식이 나오는지를 따라가며 이해할 수
          있도록 정리했습니다.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/60">
          출처 · 자료 제작: 두뇌스트레칭
        </div>

        <div className="mt-12 space-y-10">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">먼저 기억할 공식</h2>

            <div className="mt-6 space-y-6 text-white">
              <div>
                <Formula expr="1+2+3+\cdots+n=\frac{n(n+1)}{2}" display />
              </div>
              <div>
                <Formula
                  expr="1^2+2^2+3^2+\cdots+n^2=\frac{n(n+1)(2n+1)}{6}"
                  display
                />
              </div>
              <div>
                <Formula
                  expr="1^3+2^3+3^3+\cdots+n^3=\left(\frac{n(n+1)}{2}\right)^2"
                  display
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">1. 1부터 n까지의 합</h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              합을 <Formula expr="S" />라고 두고, 같은 식을 거꾸로 한 번 더
              써서 더하면 규칙이 잘 드러납니다.
            </p>

            <div className="mt-6 space-y-4 text-white">
              <Formula expr="S=1+2+3+\cdots+(n-1)+n" display />
              <Formula expr="S=n+(n-1)+(n-2)+\cdots+2+1" display />
              <Formula
                expr="2S=(1+n)+(2+n-1)+(3+n-2)+\cdots+(n-1+2)+(n+1)"
                display
              />
              <Formula expr="2S=n(n+1)" display />
              <Formula expr="S=\frac{n(n+1)}{2}" display />
            </div>

            <p className="mt-6 break-keep leading-8 text-white/70">
              각 괄호의 값이 모두 <Formula expr="n+1" />이고, 그런 항이
              <Formula expr="n" />개 있다는 점이 핵심입니다.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">2. 1부터 n까지의 제곱의 합</h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              이번에는 다음 식을 이용합니다.
            </p>

            <div className="mt-6 text-white">
              <Formula expr="(k+1)^3-k^3=3k^2+3k+1" display />
            </div>

            <p className="mt-6 break-keep leading-8 text-white/80">
              이제 <Formula expr="k=1,2,3,\cdots,n" />을 차례로 대입합니다.
            </p>

            <div className="mt-6 space-y-4 text-white">
              <Formula expr="2^3-1^3=3\cdot1^2+3\cdot1+1" display />
              <Formula expr="3^3-2^3=3\cdot2^2+3\cdot2+1" display />
              <Formula expr="4^3-3^3=3\cdot3^2+3\cdot3+1" display />
              <Formula expr="\vdots" display />
              <Formula expr="(n+1)^3-n^3=3\cdot n^2+3\cdot n+1" display />
            </div>

            <p className="mt-6 break-keep leading-8 text-white/80">
              이 식들을 모두 더하면 가운데 항들이 지워지면서 다음과 같이 됩니다.
            </p>

            <div className="mt-6 space-y-4 text-white">
              <Formula
                expr="(n+1)^3-1^3=3(1^2+2^2+3^2+\cdots+n^2)+3(1+2+3+\cdots+n)+(1+1+\cdots+1)"
                display
              />
              <Formula
                expr="(n+1)^3-1=3(1^2+2^2+3^2+\cdots+n^2)+3(1+2+3+\cdots+n)+n"
                display
              />
            </div>

            <p className="mt-6 break-keep leading-8 text-white/80">
              여기서 이미 구한
              <span className="mx-1 inline-block">
                <Formula expr="1+2+3+\cdots+n=\frac{n(n+1)}{2}" />
              </span>
              을 대입합니다.
            </p>

            <div className="mt-6 space-y-4 text-white">
              <Formula
                expr="(n+1)^3-1=3(1^2+2^2+3^2+\cdots+n^2)+3\cdot\frac{n(n+1)}{2}+n"
                display
              />
              <Formula
                expr="n^3+3n^2+3n=3(1^2+2^2+3^2+\cdots+n^2)+\frac{3n^2+3n}{2}+n"
                display
              />
              <Formula
                expr="3(1^2+2^2+3^2+\cdots+n^2)=n^3+3n^2+2n-\frac{3n^2+3n}{2}"
                display
              />
              <Formula
                expr="3(1^2+2^2+3^2+\cdots+n^2)=\frac{2n^3+3n^2+n}{2}"
                display
              />
              <Formula
                expr="3(1^2+2^2+3^2+\cdots+n^2)=\frac{n(n+1)(2n+1)}{2}"
                display
              />
              <Formula
                expr="1^2+2^2+3^2+\cdots+n^2=\frac{n(n+1)(2n+1)}{6}"
                display
              />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">3. 1부터 n까지의 세제곱의 합</h2>

            <p className="mt-4 break-keep leading-8 text-white/80">
              이번에는 다음 식을 이용합니다.
            </p>

            <div className="mt-6 text-white">
              <Formula expr="(k+1)^4-k^4=4k^3+6k^2+4k+1" display />
            </div>

            <p className="mt-6 break-keep leading-8 text-white/80">
              마찬가지로 <Formula expr="k=1,2,3,\cdots,n" />을 차례로 대입합니다.
            </p>

            <div className="mt-6 space-y-4 text-white">
              <Formula expr="2^4-1^4=4\cdot1^3+6\cdot1^2+4\cdot1+1" display />
              <Formula expr="3^4-2^4=4\cdot2^3+6\cdot2^2+4\cdot2+1" display />
              <Formula expr="4^4-3^4=4\cdot3^3+6\cdot3^2+4\cdot3+1" display />
              <Formula expr="\vdots" display />
              <Formula expr="(n+1)^4-n^4=4\cdot n^3+6\cdot n^2+4\cdot n+1" display />
            </div>

            <p className="mt-6 break-keep leading-8 text-white/80">
              이 식들을 모두 더하면 다음을 얻습니다.
            </p>

            <div className="mt-6 space-y-4 text-white">
              <Formula
                expr="(n+1)^4-1^4=4(1^3+2^3+3^3+\cdots+n^3)+6(1^2+2^2+3^2+\cdots+n^2)+4(1+2+3+\cdots+n)+(1+1+\cdots+1)"
                display
              />
              <Formula
                expr="(n+1)^4-1=4(1^3+2^3+3^3+\cdots+n^3)+6(1^2+2^2+3^2+\cdots+n^2)+4(1+2+3+\cdots+n)+n"
                display
              />
            </div>

            <p className="mt-6 break-keep leading-8 text-white/80">
              여기서 앞에서 얻은 두 공식을 대입합니다.
            </p>

            <div className="mt-6 space-y-4 text-white">
              <Formula
                expr="1^2+2^2+3^2+\cdots+n^2=\frac{n(n+1)(2n+1)}{6}"
                display
              />
              <Formula
                expr="1+2+3+\cdots+n=\frac{n(n+1)}{2}"
                display
              />
            </div>

            <div className="mt-6 space-y-4 text-white">
              <Formula
                expr="(n+1)^4-1=4(1^3+2^3+3^3+\cdots+n^3)+n(n+1)(2n+1)+2n(n+1)+n"
                display
              />
              <Formula
                expr="n^4+4n^3+6n^2+4n=4(1^3+2^3+3^3+\cdots+n^3)+(2n^3+3n^2+n)+(2n^2+2n)+n"
                display
              />
              <Formula
                expr="n^4+4n^3+6n^2+4n=4(1^3+2^3+3^3+\cdots+n^3)+2n^3+5n^2+4n"
                display
              />
              <Formula
                expr="4(1^3+2^3+3^3+\cdots+n^3)=n^4+2n^3+n^2"
                display
              />
              <Formula
                expr="4(1^3+2^3+3^3+\cdots+n^3)=n^2(n+1)^2"
                display
              />
              <Formula
                expr="1^3+2^3+3^3+\cdots+n^3=\frac{n^2(n+1)^2}{4}=\left(\frac{n(n+1)}{2}\right)^2"
                display
              />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}