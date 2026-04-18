import Image from "next/image";
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

function ContentCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
      {children}
    </div>
  );
}


export default function FourSetVennDiagramPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="chalk-accent mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
          COMMON MATH 2
        </p>

        <h1 className="break-keep text-4xl font-bold leading-tight md:text-5xl">
          집합 4개의 벤다이어그램은 어떻게 그릴까?
        </h1>

        <p className="mt-6 break-keep text-base leading-7 text-white/75 md:text-lg">
          집합을 배울 때 벤다이어그램은 매우 익숙한 도구입니다. 집합이 2개나
          3개일 때는 원을 이용해 쉽게 그릴 수 있지만, 집합이 4개가 되면
          생각보다 그림이 복잡해집니다.
        </p>

        <p className="mt-4 break-keep text-base leading-7 text-white/75 md:text-lg">
          이 글에서는 집합 4개의 벤다이어그램을 어떻게 이해해야 하는지, 그리고
          시험에서 어떤 관점으로 바라보면 좋은지 정리해보겠습니다.
        </p>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            1. 집합이 늘어나면 영역도 빠르게 늘어난다
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            집합이 1개라면 어떤 원소는 그 집합에 들어가거나, 들어가지 않거나
            두 가지 경우만 가집니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <Formula display>{"2^1=2"}</Formula>
          </div>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            집합이 2개라면 각 원소는 두 집합에 대하여 들어갈지 말지를 각각
            선택하게 되므로 최대 4개의 영역이 생길 수 있습니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <Formula display>{"2^2=4"}</Formula>
          </div>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            같은 방식으로 집합이 3개라면 최대 8개의 영역, 집합이 4개라면 최대
            16개의 영역을 생각해야 합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <Formula display>{"2^3=8,\\qquad 2^4=16"}</Formula>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            2. 집합 4개는 왜 원 4개로 그리기 어려울까?
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            집합 3개까지는 원 3개를 적절히 겹치면 모든 조합을 비교적 자연스럽게
            표현할 수 있습니다. 하지만 집합 4개를 원 4개로 그리면 모든 영역을
            깔끔하게 나타내기가 어렵습니다.
          </p>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            이유는 단순합니다. 집합 4개에서는 원소가 각각의 집합에 속하는지
            아닌지에 따라 최대 16가지 경우가 생기는데, 원 4개만으로 그 모든
            경우를 보기 좋게 나누기 어렵기 때문입니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="break-keep text-base leading-7 text-white/75">
              따라서 집합 4개의 벤다이어그램은 반드시 “동그란 원 4개”로만
              그려야 한다고 생각하면 안 됩니다. 타원이나 곡선을 이용해서 모든
              영역이 드러나도록 그리는 것이 더 자연스럽습니다.
            </p>
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            3. 집합 4개의 벤다이어그램 예시
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            아래 그림은 집합 4개의 영역을 한눈에 보기 위한 설명용 그림입니다.
            각 영역에 적힌 글자는 그 영역에 속하는 집합을 뜻합니다. 예를 들어
            ACD는 A, C, D에는 속하지만 B에는 속하지 않는 영역입니다.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
            <Image
              src="/images/four-set-venn-diagram.png"
              alt="집합 4개의 벤다이어그램 설명 그림"
              width={1600}
              height={900}
              className="h-auto w-full rounded-xl"
            />
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            가운데에는 네 집합에 모두 속하는 영역이 있고, 그 주변에는 세 집합에
            속하는 영역, 두 집합에 속하는 영역, 한 집합에만 속하는 영역, 그리고
            어느 집합에도 속하지 않는 영역이 나타납니다.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="break-keep text-2xl font-bold">
            4. 시험에서는 무엇을 기억해야 할까?
          </h2>

          <p className="mt-4 break-keep text-base leading-7 text-white/75">
            시험에서 집합 4개의 벤다이어그램을 직접 예쁘게 그리는 것이 항상
            중요한 것은 아닙니다. 더 중요한 것은 집합이 4개일 때 가능한 영역의
            수와 원소의 분류 방식을 이해하는 것입니다.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="break-keep text-base leading-7 text-white/75">
              집합 4개가 있으면 각 원소는 A에 속하는지, B에 속하는지, C에
              속하는지, D에 속하는지를 각각 판단하게 됩니다.
            </p>

            <div className="mt-4">
              <Formula display>{"2\\times2\\times2\\times2=2^4=16"}</Formula>
            </div>
          </div>

          <p className="mt-5 break-keep text-base leading-7 text-white/75">
            따라서 집합 4개 문제를 볼 때는 “그림을 어떻게 예쁘게 그릴까?”보다
            “각 원소가 네 집합에 대해 어떤 포함 상태를 가지는가?”를 먼저
            생각하는 것이 좋습니다.
          </p>
        </ContentCard>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <h2 className="break-keep text-2xl font-bold">핵심 정리</h2>

          <ul className="mt-4 space-y-3 break-keep text-base leading-7 text-white/75">
            <li>집합 4개는 최대 16개의 영역으로 나뉠 수 있습니다.</li>
            <li>
              4개의 집합을 반드시 원 4개로만 그릴 필요는 없습니다.
            </li>
            <li>
              타원이나 곡선을 이용해 모든 겹침 관계가 보이도록 그릴 수 있습니다.
            </li>
            <li>
              시험에서는 그림의 모양보다 각 원소의 포함 상태를 정확히 나누는
              것이 더 중요합니다.
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/concepts/common-math-2" className="chalk-button-secondary">
            공통수학2 목록으로 돌아가기
          </a>

          <a href="/concepts" className="chalk-button">
            수학 개념정리로 가기
          </a>
        </div>
      </section>
    </main>
  );
}