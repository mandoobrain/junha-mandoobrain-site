import Link from "next/link";

const games = [
  {
    href: "/games/number-baseball",
    label: "LOGIC GAME",
    title: "4자리 숫자야구",
    description:
      "서로 다른 4개의 숫자를 맞히는 추리 게임입니다. 스트라이크와 볼 힌트를 이용해 정답을 찾아보세요.",
  },
  {
    href: "/games/prime-quiz",
    label: "PRIME QUIZ",
    title: "소수 판별 게임",
    description:
      "제시된 숫자가 소수인지 아닌지 OX로 판단하는 게임입니다. 틀릴 때까지 계속 진행되고 최고 기록이 저장됩니다.",
  },
];

export default function GamesPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          BRAIN GAMES
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          두뇌 게임
        </h1>

        <p className="mt-6 max-w-2xl break-keep text-base leading-7 text-white/75 md:text-lg">
          짧게 즐기면서 논리력, 계산력, 수 감각을 훈련할 수 있는 두뇌
          스트레칭 게임을 모아둔 공간입니다.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {games.map((game) => (
            <Link
              key={game.href}
              href={game.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <p className="chalk-accent text-sm font-semibold tracking-[0.2em] uppercase">
                {game.label}
              </p>
              <h2 className="mt-3 text-2xl font-bold">{game.title}</h2>
              <p className="mt-3 break-keep text-white/70">
                {game.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}