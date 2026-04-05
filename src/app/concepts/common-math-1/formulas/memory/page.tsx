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

export default function CommonMath1FormulasMemoryPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          COMMON MATH 1
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          곱셈공식 · 인수분해 공식 암기용 빈칸 정리
        </h1>

        <p className="mt-6 max-w-3xl break-keep text-base leading-8 text-white/75 md:text-lg">
          학생들이 직접 빈칸을 채우며 곱셈공식과 인수분해 공식을 암기할 수
          있도록 만든 페이지입니다.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/60">
          출처 · 자료 제작: 두뇌스트레칭
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          <a
            href="/concepts/common-math-1/formulas"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold text-white/80 hover:bg-white/10 hover:text-white"
          >
            완성본 보기
          </a>
          <a
            href="/concepts/common-math-1/formulas/memory"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-center font-semibold text-white"
          >
            암기용 빈칸 채우기
          </a>
          <a
            href="/concepts/common-math-1/formulas/answer-blank"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold text-white/80 hover:bg-white/10 hover:text-white"
          >
            암기용 테스트
          </a>
        </div>

        <div className="mt-4">
          <a
            href="/downloads/common-math-1/common-math-1-memory-final-v2.pdf"
            download
            className="inline-block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold text-white/80 hover:bg-white/10 hover:text-white"
          >
            PDF 다운로드
          </a>
        </div>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-2xl font-bold">1. 곱셈공식</h2>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-6 text-white/85">
                <div>
                  <Formula expr="1)\ (a+b)^2=a^2+\square+b^2" display />
                </div>
                <div>
                  <Formula expr="2)\ (a-b)^2=a^2-\square+b^2" display />
                </div>
                <div>
                  <Formula expr="3)\ (a+b)(a-b)=\square-\square" display />
                </div>
                <div>
                  <Formula expr="4)\ (x+a)(x+b)=x^2+\square x+\square" display />
                </div>
                <div>
                  <Formula expr="5)\ (ax+b)(cx+d)=\square x^2+\square x+\square" display />
                </div>
                <div>
                  <Formula expr="6)\ (x+a)(x+b)(x+c)=x^3+\square x^2+\square x+\square" display />
                </div>
                <div>
                  <Formula expr="7)\ (x-a)(x-b)(x-c)=x^3-\square x^2+\square x-\square" display />
                </div>
                <div>
                  <Formula expr="8)\ (a+b+c)^2=a^2+b^2+c^2+\square+\square+\square" display />
                </div>
                <div>
                  <Formula expr="9)\ (ab+bc+ca)^2=a^2b^2+b^2c^2+c^2a^2+\square" display />
                </div>
                <div>
                  <Formula expr="10)\ (a+b)^3=a^3+\square+\square+b^3" display />
                </div>
                <div>
                  <Formula expr="11)\ (a-b)^3=a^3-\square+\square-b^3" display />
                </div>
                <div>
                  <Formula expr="12)\ (a^2+ab+b^2)(a^2-ab+b^2)=\square+\square+\square" display />
                </div>
                <div>
                  <Formula expr="13)\ (x^2+x+1)(x^2-x+1)=\square+\square+1" display />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. 인수분해 공식</h2>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-6 text-white/85">
                <div>
                  <Formula expr="1)\ a^2+2ab+b^2=(\square+\square)^2" display />
                </div>
                <div>
                  <Formula expr="2)\ a^2-2ab+b^2=(\square-\square)^2" display />
                </div>
                <div>
                  <Formula expr="3)\ x^2+(a+b)x+ab=(\square+\square)(\square+\square)" display />
                </div>
                <div>
                  <Formula expr="4)\ acx^2+(ad+bc)x+bd=(\square+\square)(\square+\square)" display />
                </div>
                <div>
                  <Formula expr="5)\ a^2-b^2=(\square-\square)(\square+\square)" display />
                </div>
                <div>
                  <Formula expr="6)\ a^3+b^3=(\square+\square)(\square-\square+\square)" display />
                </div>
                <div>
                  <Formula expr="7)\ a^3-b^3=(\square-\square)(\square+\square+\square)" display />
                </div>
                <div>
                  <Formula expr="8)\ a^2+b^2+c^2+2ab+2bc+2ca=(\square+\square+\square)^2" display />
                </div>
                <div>
                  <Formula expr="9)\ a^4+a^2b^2+b^4=(\square+\square+\square)(\square-\square+\square)" display />
                </div>
                <div>
                  <Formula expr="10)\ x^4+x^2+1=(\square+\square+1)(\square-\square+1)" display />
                </div>
                <div>
                  <Formula expr="11)\ a^3+b^3+c^3-3abc=(\square+\square+\square)(\square+\square+\square-\square-\square-\square)" display />
                </div>
                <div>
                  <Formula expr="12)\ a^3+b^3+c^3-3abc=\frac{1}{2}(\square+\square+\square)\left\{(\square-\square)^2+(\square-\square)^2+(\square-\square)^2\right\}" display />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. 변형공식</h2>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-6 text-white/85">
                <div>
                  <Formula expr="1)\ (a+b)^2=(a-b)^2+\square" display />
                </div>
                <div>
                  <Formula expr="2)\ (a-b)^2=(a+b)^2-\square" display />
                </div>
                <div>
                  <Formula expr="3)\ a^2+b^2=(a+b)^2-\square" display />
                </div>
                <div>
                  <Formula expr="4)\ a^2+b^2=(a-b)^2+\square" display />
                </div>
                <div>
                  <Formula expr="5)\ a^2+\frac{1}{a^2}=\left(a+\frac{1}{a}\right)^2-\square" display />
                </div>
                <div>
                  <Formula expr="6)\ a^2+\frac{1}{a^2}=\left(a-\frac{1}{a}\right)^2+\square" display />
                </div>
                <div>
                  <Formula expr="7)\ \left(a+\frac{1}{a}\right)^2=\left(a-\frac{1}{a}\right)^2+\square" display />
                </div>
                <div>
                  <Formula expr="8)\ a^3+b^3=(a+b)^3-\square" display />
                </div>
                <div>
                  <Formula expr="9)\ a^3-b^3=(a-b)^3+\square" display />
                </div>
                <div>
                  <Formula expr="10)\ a^3+\frac{1}{a^3}=\left(a+\frac{1}{a}\right)^3-\square" display />
                </div>
                <div>
                  <Formula expr="11)\ a^3-\frac{1}{a^3}=\left(a-\frac{1}{a}\right)^3+\square" display />
                </div>
                <div>
                  <Formula expr="12)\ a^2+b^2+c^2+ab+bc+ca=\frac{1}{2}\left\{\square+\square+\square\right\}" display />
                </div>
                <div>
                  <Formula expr="13)\ a^2+b^2+c^2-ab-bc-ca=\frac{1}{2}\left\{\square+\square+\square\right\}" display />
                </div>
                <div>
                  <Formula expr="14)\ a^2+b^2+c^2=(a+b+c)^2-\square" display />
                </div>
                <div>
                  <Formula expr="15)\ a^3+b^3+c^3=(a+b+c)(\square)+\square" display />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}