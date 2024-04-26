import { CategoryCard } from "@/components/category-card";
import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="px-4 md:px-8">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute top-0 right-1/3 translate-x-1/2 -translate-y-1/2 -z-10 h-[64rem] w-[64rem] [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#89CFEF" />
            <stop offset={1} stopColor="#89CFEF" />
          </radialGradient>
        </defs>
      </svg>

      {/* Hero Section */}
      <section className="py-20 max-w-screen-xl mx-auto">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          A Nova Geração de Websites Next
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Aprenda a criar sites modernos com Next.js, React e Tailwind CSS.
        </p>
        <Button className="mt-6 w-fit">Saiba mais</Button>
      </section>

      <section className="max-w-screen-xl mx-auto flex flex-nowrap items-center gap-6 overflow-x-auto scrollbar-thin pb-6">
        <CategoryCard imageUrl="/nextjs.png" />
        <CategoryCard imageUrl="/nextjs.png" />
        <CategoryCard imageUrl="/nextjs.png" />
        <CategoryCard imageUrl="/nextjs.png" />
        <CategoryCard imageUrl="/nextjs.png" />
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-screen-xl mx-auto pt-20">
        {/* Left Side Posts */}
        <div className="col-span-8 flex flex-col">
          <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Falando em Next.js
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
            <PostCard imageUrl="/back1.png" />
            <PostCard imageUrl="/back2.png" />
          </div>

          <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Estilizando com shadcn/ui
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
            <PostCard imageUrl="/back2.png" />
            <PostCard imageUrl="/back1.png" />
          </div>
        </div>

        {/* Right Side Posts */}
        <aside className="col-span-8 lg:col-span-4">
          <section className="sticky top-20">
            <h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 sticky top-20">
              Publicações recentes
            </h2>

            <div className="grid grid-cols-1 gap-6 py-10">
              <PostCard smallCard imageUrl="/back1.png" />
              <PostCard smallCard imageUrl="/back2.png" />
              <PostCard smallCard imageUrl="/back3.png" />
            </div>
          </section>
        </aside>
      </section>
    </div>
  );
}
