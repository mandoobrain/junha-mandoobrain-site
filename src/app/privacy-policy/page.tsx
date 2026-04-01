export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          PRIVACY POLICY
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          개인정보처리방침
        </h1>

        <p className="mt-6 text-base leading-8 text-white/75 md:text-lg">
          두뇌 스트레칭은 이용자의 개인정보를 소중하게 생각하며, 관련 법령을
          준수하기 위해 노력합니다. 본 페이지는 사이트 이용 과정에서 수집될 수
          있는 정보와 그 이용 목적에 대해 안내하기 위해 작성되었습니다.
        </p>

        <div className="mt-10 space-y-8">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">1. 수집할 수 있는 정보</h2>
            <p className="mt-4 leading-8 text-white/75">
              본 사이트는 서비스 제공 과정에서 방문 기록, 브라우저 정보, 기기
              정보, 접속 시간, 이용한 페이지 등의 비식별 정보를 수집할 수
              있습니다.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">2. 정보 이용 목적</h2>
            <p className="mt-4 leading-8 text-white/75">
              수집된 정보는 사이트 운영, 서비스 품질 개선, 방문 통계 확인,
              콘텐츠 개선 및 사용자 경험 향상을 위해 활용될 수 있습니다.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">3. 쿠키 및 분석 도구</h2>
            <p className="mt-4 leading-8 text-white/75">
              본 사이트는 방문 통계 분석을 위해 분석 도구를 사용할 수 있으며,
              이 과정에서 쿠키 또는 유사 기술이 사용될 수 있습니다. 이용자는
              브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">4. 광고 관련 안내</h2>
            <p className="mt-4 leading-8 text-white/75">
              향후 본 사이트에는 광고 서비스가 적용될 수 있으며, 이 과정에서
              광고 제공업체가 쿠키 또는 유사 기술을 사용할 수 있습니다. 광고가
              실제로 적용되는 경우 본 방침은 그에 맞게 업데이트될 수 있습니다.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">5. 방침 변경</h2>
            <p className="mt-4 leading-8 text-white/75">
              본 개인정보처리방침은 사이트 운영 상황에 따라 변경될 수 있으며,
              중요한 변경이 있을 경우 본 페이지를 통해 안내합니다.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}