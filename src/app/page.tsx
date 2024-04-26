import { AsidePostRowSection } from "@/components/sections/aside-post-row-section";
import { BannerSection } from "@/components/sections/banner-section";
import { CategoriesSection } from "@/components/sections/categories-section";
import { PostRowSection } from "@/components/sections/post-row-section";

export default function Page() {
  return (
    <div className="px-4 md:px-8 relative">
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

      <BannerSection />

      <CategoriesSection />

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-screen-xl mx-auto pt-20">
        {/* Left Side Posts */}
        <div className="col-span-8 flex flex-col">
          <PostRowSection title="Falando em Next.js" />
          <PostRowSection title="Estilizando com shadcn/ui" />
        </div>

        {/* Right Side Posts */}
        {/* TODO: FIX STICKY POSITION */}
        <aside className="col-span-8 lg:col-span-4">
          <div className="sticky top-20 flex flex-col">
            <AsidePostRowSection title="Publicações recentes" />
            <AsidePostRowSection title="Mais acessadas" />
          </div>
        </aside>
      </section>
    </div>
  );
}
