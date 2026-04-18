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

export default function CommonLogIntegerPartPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          ALGEBRA
        </p>

        <h1 className="break-keep text-4xl font-bold leading-tight md:text-5xl">
          상용로그의 정수부분은 무엇을 의미할까?
        </h1>

        <p className="mt-6 break-keep text-base leading-7 text-white/75 md:text-lg">
          상용로그의 정수부분은 수의 크기를 자릿수로 읽게 해주는 중요한
          정보입니다. 특히 큰 수의 자릿수나 아주 작은 소수의 위치를 판단할 때
          매우 유용하게 쓰입니다.
        </p>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <p className="break-keep text-base leading-7 text-white/75">
            상용로그는 밑이 10인 로그입니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5">
            <FormulaLine>{"\\log N=\\log_{10}N"}</FormulaLine>
            <FormulaLine>{"\\log N=x\\quad \\Longleftrightarrow \\quad 10^x=N"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 상용로그는 어떤 수 <Formula>N</Formula>이 10의 몇 제곱쯤
            되는지를 알려줍니다.
          </p>
        </div>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            1. N이 1보다 크거나 같을 때
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            예를 들어 다음과 같은 상황을 생각해봅시다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"\\log N=3.27\\cdots"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이때 정수부분은 3이므로 다음 부등식이 성립합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"3\\le \\log N<4"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            로그를 지수 형태로 바꾸면 다음과 같습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"10^3\\le N<10^4"}</FormulaLine>
            <FormulaLine>{"1000\\le N<10000"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 <Formula>N</Formula>은 네 자리 수입니다.
          </p>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            일반적으로 <Formula>{"\\log N"}</Formula>의 정수부분이{" "}
            <Formula>n</Formula>이면 다음이 성립합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"10^n\\le N<10^{n+1}"}</FormulaLine>
          </div>

          <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/5 p-5">
            <p className="break-keep text-base leading-7 text-white/80">
              <Formula>{"\\log N"}</Formula>의 정수부분이 <Formula>n</Formula>
              이면, <Formula>N</Formula>은 <Formula>{"n+1"}</Formula>자리
              수입니다.
            </p>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            2. N이 0보다 크고 1보다 작을 때
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            이번에는 다음과 같은 수를 생각해봅시다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"N=0.0047"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            이 수는 다음 범위에 있습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"0.001\\le 0.0047<0.01"}</FormulaLine>
            <FormulaLine>{"10^{-3}\\le N<10^{-2}"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 로그를 취하면 다음과 같이 생각할 수 있습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"-3\\le \\log N<-2"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            그러므로 <Formula>{"\\log N"}</Formula>의 정수부분은{" "}
            <Formula>-3</Formula>입니다. 이때 <Formula>0.0047</Formula>은
            소수점 아래 셋째 자리에서 처음으로 0이 아닌 숫자가 나옵니다.
          </p>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            일반적으로 <Formula>{"\\log N"}</Formula>의 정수부분이{" "}
            <Formula>{"-n"}</Formula>이면 다음이 성립합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"10^{-n}\\le N<10^{-n+1}"}</FormulaLine>
          </div>

          <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/5 p-5">
            <p className="break-keep text-base leading-7 text-white/80">
              <Formula>{"\\log N"}</Formula>의 정수부분이{" "}
              <Formula>{"-n"}</Formula>이면, <Formula>N</Formula>은 소수점
              아래 <Formula>n</Formula>번째 자리에서 처음으로 0이 아닌
              숫자가 나옵니다.
            </p>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            3. 음수의 정수부분은 조심해야 한다
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            여기서 주의할 점이 있습니다. 음수의 정수부분은 단순히 소수점
            아래를 버린 값이 아닙니다.
          </p>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            예를 들어 <Formula>-2.43</Formula>의 정수부분은{" "}
            <Formula>-2</Formula>가 아니라 <Formula>-3</Formula>입니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FormulaLine>{"-3\\le -2.43<-2"}</FormulaLine>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            정수부분은 그 수보다 작거나 같은 정수 중 가장 큰 정수로 생각하면
            됩니다.
          </p>
        </ContentCard>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <h2 className="break-keep text-2xl font-bold">핵심 정리</h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15 text-white/85">
                  <th className="px-4 py-3 text-sm font-semibold">조건</th>
                  <th className="px-4 py-3 text-sm font-semibold">
                    정수부분의 의미
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold">
                    알 수 있는 것
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-white/10">
                  <td className="px-4 py-5 align-top text-white/75">
                    <Formula>{"N\\ge 1"}</Formula>
                  </td>
                  <td className="px-4 py-5 align-top text-white/75">
                    <Formula>{"\\log N"}</Formula>의 정수부분 ={" "}
                    <Formula>n</Formula>
                  </td>
                  <td className="px-4 py-5 align-top break-keep text-white/75">
                    <Formula>{"10^n\\le N<10^{n+1}"}</Formula> 이므로{" "}
                    <Formula>N</Formula>은 <Formula>{"n+1"}</Formula>자리
                    수입니다.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-5 align-top text-white/75">
                    <Formula>{"0<N<1"}</Formula>
                  </td>
                  <td className="px-4 py-5 align-top text-white/75">
                    <Formula>{"\\log N"}</Formula>의 정수부분 ={" "}
                    <Formula>{"-n"}</Formula>
                  </td>
                  <td className="px-4 py-5 align-top break-keep text-white/75">
                    <Formula>{"10^{-n}\\le N<10^{-n+1}"}</Formula> 이므로
                    소수점 아래 <Formula>n</Formula>번째 자리에서 처음으로 0이
                    아닌 숫자가 나옵니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 break-keep text-base leading-7 text-white/75">
            한 줄로 정리하면, 상용로그의 정수부분은 수의 크기를 자릿수로 읽게
            해주는 정보입니다.
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