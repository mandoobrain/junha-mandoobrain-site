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

export default function CommonMath1FormulasPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          COMMON MATH 1
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          곱셈공식 · 인수분해 공식 정리
        </h1>

        <p className="mt-6 max-w-3xl break-keep text-base leading-8 text-white/75 md:text-lg">
          공통수학1에서 반드시 알아두어야 할 곱셈공식과 인수분해 공식을 한 곳에
          정리했습니다. 학생들이 복습하고 암기할 수 있도록 완성본과 암기용 자료로
          확장할 예정입니다.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/60">
          출처 · 자료 제작: 두뇌스트레칭
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          <a
            href="/concepts/common-math-1/formulas"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-center font-semibold text-white"
          >
            완성본 보기
          </a>
          <a
            href="/concepts/common-math-1/formulas/memory"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold text-white/80 hover:bg-white/10 hover:text-white"
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
            href="/downloads/common-math-1/common-math-1-complete-final-v2.pdf"
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
                <div><Formula expr="1)\ (a+b)^2=a^2+2ab+b^2" display /></div>
                <div><Formula expr="2)\ (a-b)^2=a^2-2ab+b^2" display /></div>
                <div><Formula expr="3)\ (a+b)(a-b)=a^2-b^2" display /></div>
                <div><Formula expr="4)\ (x+a)(x+b)=x^2+(a+b)x+ab" display /></div>
                <div><Formula expr="5)\ (ax+b)(cx+d)=acx^2+(ad+bc)x+bd" display /></div>
                <div><Formula expr="6)\ (x+a)(x+b)(x+c)=x^3+(a+b+c)x^2+(ab+bc+ca)x+abc" display /></div>
                <div><Formula expr="7)\ (x-a)(x-b)(x-c)=x^3-(a+b+c)x^2+(ab+bc+ca)x-abc" display /></div>
                <div><Formula expr="8)\ (a+b+c)^2=a^2+b^2+c^2+2ab+2bc+2ca" display /></div>
                <div><Formula expr="9)\ (ab+bc+ca)^2=a^2b^2+b^2c^2+c^2a^2+2abc(a+b+c)" display /></div>
                <div><Formula expr="10)\ (a+b)^3=a^3+3a^2b+3ab^2+b^3" display /></div>
                <div><Formula expr="11)\ (a-b)^3=a^3-3a^2b+3ab^2-b^3" display /></div>
                <div><Formula expr="12)\ (a^2+ab+b^2)(a^2-ab+b^2)=a^4+a^2b^2+b^4" display /></div>
                <div><Formula expr="13)\ (x^2+x+1)(x^2-x+1)=x^4+x^2+1" display /></div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. 인수분해 공식</h2>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-6 text-white/85">
                <div><Formula expr="1)\ a^2+2ab+b^2=(a+b)^2" display /></div>
                <div><Formula expr="2)\ a^2-2ab+b^2=(a-b)^2" display /></div>
                <div><Formula expr="3)\ x^2+(a+b)x+ab=(x+a)(x+b)" display /></div>
                <div><Formula expr="4)\ acx^2+(ad+bc)x+bd=(ax+b)(cx+d)" display /></div>
                <div><Formula expr="5)\ a^2-b^2=(a-b)(a+b)" display /></div>
                <div><Formula expr="6)\ a^3+b^3=(a+b)(a^2-ab+b^2)" display /></div>
                <div><Formula expr="7)\ a^3-b^3=(a-b)(a^2+ab+b^2)" display /></div>
                <div><Formula expr="8)\ a^2+b^2+c^2+2ab+2bc+2ca=(a+b+c)^2" display /></div>
                <div><Formula expr="9)\ a^4+a^2b^2+b^4=(a^2+ab+b^2)(a^2-ab+b^2)" display /></div>
                <div><Formula expr="10)\ x^4+x^2+1=(x^2+x+1)(x^2-x+1)" display /></div>
                <div><Formula expr="11)\ a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)" display /></div>
                <div><Formula expr="12)\ a^3+b^3+c^3-3abc=\frac{1}{2}(a+b+c)\left\{(a-b)^2+(b-c)^2+(c-a)^2\right\}" display /></div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. 변형공식</h2>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-6 text-white/85">
                <div><Formula expr="1)\ (a+b)^2=(a-b)^2+4ab" display /></div>
                <div><Formula expr="2)\ (a-b)^2=(a+b)^2-4ab" display /></div>
                <div><Formula expr="3)\ a^2+b^2=(a+b)^2-2ab" display /></div>
                <div><Formula expr="4)\ a^2+b^2=(a-b)^2+2ab" display /></div>
                <div><Formula expr="5)\ a^2+\frac{1}{a^2}=\left(a+\frac{1}{a}\right)^2-2" display /></div>
                <div><Formula expr="6)\ a^2+\frac{1}{a^2}=\left(a-\frac{1}{a}\right)^2+2" display /></div>
                <div><Formula expr="7)\ \left(a+\frac{1}{a}\right)^2=\left(a-\frac{1}{a}\right)^2+4" display /></div>
                <div><Formula expr="8)\ a^3+b^3=(a+b)^3-3ab(a+b)" display /></div>
                <div><Formula expr="9)\ a^3-b^3=(a-b)^3+3ab(a-b)" display /></div>
                <div><Formula expr="10)\ a^3+\frac{1}{a^3}=\left(a+\frac{1}{a}\right)^3-3\left(a+\frac{1}{a}\right)" display /></div>
                <div><Formula expr="11)\ a^3-\frac{1}{a^3}=\left(a-\frac{1}{a}\right)^3+3\left(a-\frac{1}{a}\right)" display /></div>
                <div><Formula expr="12)\ a^2+b^2+c^2+ab+bc+ca=\frac{1}{2}\left\{(a+b)^2+(b+c)^2+(c+a)^2\right\}" display /></div>
                <div><Formula expr="13)\ a^2+b^2+c^2-ab-bc-ca=\frac{1}{2}\left\{(a-b)^2+(b-c)^2+(c-a)^2\right\}" display /></div>
                <div><Formula expr="14)\ a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca)" display /></div>
                <div><Formula expr="15)\ a^3+b^3+c^3=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)+3abc" display /></div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. 추가로 알아두면 좋은 공식</h2>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-6 text-white/85">
                <div><Formula expr="1)\ x^5+y^5=(x^3+y^3)(x^2+y^2)-x^2y^2(x+y)" display /></div>
                <div><Formula expr="2)\ x^7+y^7=(x^3+y^3)(x^4+y^4)-x^3y^3(x+y)" display /></div>
                <div><Formula expr="3)\ x^6+y^6=(x^3+y^3)^2-2(xy)^3" display /></div>
                <div><Formula expr="4)\ x^6+y^6=(x^2+y^2)^3-3(xy)^2(x^2+y^2)" display /></div>
                <div><Formula expr="5)\ a^4-b^4=(a-b)(a^3+a^2b+ab^2+b^3)" display /></div>
                <div><Formula expr="6)\ a^5-b^5=(a-b)(a^4+a^3b+a^2b^2+ab^3+b^4)" display /></div>
                <div><Formula expr="7)\ a^n-b^n=(a-b)(a^{n-1}+a^{n-2}b+\cdots+ab^{n-2}+b^{n-1})" display /></div>
                <div><Formula expr="8)\ x^4-1=(x-1)(x^3+x^2+x+1)" display /></div>
                <div><Formula expr="9)\ x^5-1=(x-1)(x^4+x^3+x^2+x+1)" display /></div>
                <div><Formula expr="10)\ x^n-1=(x-1)(x^{n-1}+x^{n-2}+\cdots+x+1)" display /></div>
                <div><Formula expr="11)\ (a+b+c+d)^2=a^2+b^2+c^2+d^2+2ab+2ac+2ad+2bc+2bd+2cd" display /></div>
                <div><Formula expr="12)\ (a+b+c+d+e)^2=a^2+b^2+c^2+d^2+e^2+2ab+2ac+2ad+2ae+2bc+2bd+2be+2cd+2ce+2de" display /></div>
                <div><Formula expr="13)\ (a+b+c+d+e+\cdots+z)^2=a^2+b^2+c^2+d^2+e^2+\cdots+z^2+2(ab+ac+ad+\cdots+yz)" display /></div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}