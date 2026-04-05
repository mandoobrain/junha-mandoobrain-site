export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          CONTACT
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          문의
        </h1>

        <p className="mt-6 text-base leading-8 text-white/75 md:text-lg">
          두뇌 스트레칭 사이트 및 콘텐츠와 관련된 문의를 위한 페이지입니다.
          문의 방법은 추후 정리하여 추가될 예정입니다.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">안내</h2>
          <p className="mt-4 leading-8 text-white/75">
            현재 문의 기능은 준비 중입니다. 추후 이메일 또는 별도 문의 수단이
            정리되면 이 페이지를 통해 안내할 예정입니다.
          </p>
        </div>
      </section>
    </main>
  );
}