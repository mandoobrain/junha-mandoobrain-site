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
          다양한 계산 기능을 제공할 예정입니다.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-lg font-semibold">준비 중입니다.</p>
          <p className="mt-3 text-white/70">
            앞으로 여러 가지 수학 계산기를 이곳에서 사용할 수 있게 만들 예정입니다.
          </p>
        </div>
      </section>
    </main>
  );
}