export default function CalculatorsPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          CALCULATORS
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          각종 계산기
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
          소인수분해, 진수 변환, 소수 판별, 최대공약수와 최소공배수 등
          다양한 수학 계산기를 한 곳에서 이용할 수 있습니다.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href="/calculators/prime-factorization"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              PRIME FACTORIZATION
            </p>
            <h2 className="mt-3 text-2xl font-bold">소인수분해 계산기</h2>
            <p className="mt-3 text-white/70">
              자연수를 입력하면 소인수분해 결과를 바로 확인할 수 있습니다.
            </p>
          </a>

          <a
            href="/calculators/base-converter"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              BASE CONVERTER
            </p>
            <h2 className="mt-3 text-2xl font-bold">진수 변환기</h2>
            <p className="mt-3 text-white/70">
              n진법의 수를 다른 진법의 수로 변환하는 기능이 추가될 예정입니다.
            </p>
          </a>

          <a
            href="/calculators/prime-checker"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              PRIME CHECKER
            </p>
            <h2 className="mt-3 text-2xl font-bold">소수 판별기</h2>
            <p className="mt-3 text-white/70">
              입력한 자연수가 소수인지 아닌지 판별하는 기능이 추가될 예정입니다.
            </p>
          </a>

          <a
            href="/calculators/gcd-lcm"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
              GCD &amp; LCM
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              최대공약수 최소공배수 계산기
            </h2>
            <p className="mt-3 text-white/70">
              두 수의 최대공약수와 최소공배수를 구하는 기능이 추가될 예정입니다.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}