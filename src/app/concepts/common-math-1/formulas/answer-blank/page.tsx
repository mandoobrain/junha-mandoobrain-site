function Fraction({
  top,
  bottom,
}: {
  top: React.ReactNode;
  bottom: React.ReactNode;
}) {
  return (
    <span className="mx-1 inline-flex align-middle">
      <span className="flex flex-col items-center leading-none">
        <span className="border-b border-white px-1 pb-1 text-[0.9em]">
          {top}
        </span>
        <span className="px-1 pt-1 text-[0.9em]">{bottom}</span>
      </span>
    </span>
  );
}

export default function CommonMath1FormulasAnswerBlankPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          COMMON MATH 1
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          곱셈공식 · 인수분해 공식 등호 뒤 빈칸 정리
        </h1>

        <p className="mt-6 max-w-3xl break-keep text-base leading-8 text-white/75 md:text-lg">
          학생들이 공식을 직접 떠올리며 쓸 수 있도록, 등호 뒤를 비워 둔 암기용
          정리 페이지입니다.
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
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold text-white/80 hover:bg-white/10 hover:text-white"
          >
            암기용 빈칸 채우기
          </a>
          <a
            href="/concepts/common-math-1/formulas/answer-blank"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-center font-semibold text-white"
          >
            암기용 테스트
          </a>
        </div>
        <div className="mt-4">
          <a
            href="/downloads/common-math-1/common-math-1-test-final-v2.pdf"
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
              <div className="space-y-4 leading-8 text-white/85">
                <p>1) (a+b)<sup>2</sup> = </p>
                <p>2) (a-b)<sup>2</sup> = </p>
                <p>3) (a+b)(a-b) = </p>
                <p>4) (x+a)(x+b) = </p>
                <p>5) (ax+b)(cx+d) = </p>
                <p>6) (x+a)(x+b)(x+c) = </p>
                <p>7) (x-a)(x-b)(x-c) = </p>
                <p>8) (a+b+c)<sup>2</sup> = </p>
                <p>9) (ab+bc+ca)<sup>2</sup> = </p>
                <p>10) (a+b)<sup>3</sup> = </p>
                <p>11) (a-b)<sup>3</sup> = </p>
                <p>12) (a<sup>2</sup>+ab+b<sup>2</sup>)(a<sup>2</sup>-ab+b<sup>2</sup>) = </p>
                <p>13) (x<sup>2</sup>+x+1)(x<sup>2</sup>-x+1) = </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. 인수분해 공식</h2>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-4 leading-8 text-white/85">
                <p>1) a<sup>2</sup> + 2ab + b<sup>2</sup> = </p>
                <p>2) a<sup>2</sup> - 2ab + b<sup>2</sup> = </p>
                <p>3) x<sup>2</sup> + (a+b)x + ab = </p>
                <p>4) acx<sup>2</sup> + (ad+bc)x + bd = </p>
                <p>5) a<sup>2</sup> - b<sup>2</sup> = </p>
                <p>6) a<sup>3</sup> + b<sup>3</sup> = </p>
                <p>7) a<sup>3</sup> - b<sup>3</sup> = </p>
                <p>8) a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + 2ab + 2bc + 2ca = </p>
                <p>9) a<sup>4</sup> + a<sup>2</sup>b<sup>2</sup> + b<sup>4</sup> = </p>
                <p>10) x<sup>4</sup> + x<sup>2</sup> + 1 = </p>
                <p>11) a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> - 3abc = </p>
                <p>12) a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> - 3abc = </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. 변형공식</h2>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-4 leading-8 text-white/85">
                <p>1) (a+b)<sup>2</sup> = </p>
                <p>2) (a-b)<sup>2</sup> = </p>
                <p>3) a<sup>2</sup> + b<sup>2</sup> = </p>
                <p>4) a<sup>2</sup> + b<sup>2</sup> = </p>
                <p>
                  5) a<sup>2</sup> + <Fraction top="1" bottom={<span>a<sup>2</sup></span>} /> =
                </p>
                <p>
                  6) a<sup>2</sup> + <Fraction top="1" bottom={<span>a<sup>2</sup></span>} /> =
                </p>
                <p>
                  7) (a+<Fraction top="1" bottom="a" />)<sup>2</sup> =
                </p>
                <p>8) a<sup>3</sup> + b<sup>3</sup> = </p>
                <p>9) a<sup>3</sup> - b<sup>3</sup> = </p>
                <p>
                  10) a<sup>3</sup> + <Fraction top="1" bottom={<span>a<sup>3</sup></span>} /> =
                </p>
                <p>
                  11) a<sup>3</sup> - <Fraction top="1" bottom={<span>a<sup>3</sup></span>} /> =
                </p>
                <p>12) a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + ab + bc + ca = </p>
                <p>13) a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> - ab - bc - ca = </p>
                <p>14) a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> = </p>
                <p>15) a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> = </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. 추가로 알아두면 좋은 공식</h2>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-4 leading-8 text-white/85">
                <p>1) x<sup>5</sup> + y<sup>5</sup> = </p>
                <p>2) x<sup>7</sup> + y<sup>7</sup> = </p>
                <p>3) x<sup>6</sup> + y<sup>6</sup> = </p>
                <p>4) x<sup>6</sup> + y<sup>6</sup> = </p>
                <p>5) a<sup>4</sup> - b<sup>4</sup> = </p>
                <p>6) a<sup>5</sup> - b<sup>5</sup> = </p>
                <p>7) a<sup>n</sup> - b<sup>n</sup> = </p>
                <p>8) x<sup>4</sup> - 1 = </p>
                <p>9) x<sup>5</sup> - 1 = </p>
                <p>10) x<sup>n</sup> - 1 = </p>
                <p>11) (a+b+c+d)<sup>2</sup> = </p>
                <p>12) (a+b+c+d+e)<sup>2</sup> = </p>
                <p>13) (a+b+c+d+e+...+z)<sup>2</sup> = </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}