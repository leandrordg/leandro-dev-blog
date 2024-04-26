import { AsideCategoryRowSection } from "@/components/sections/aside-category-row-section";
import { AsidePostRowSection } from "@/components/sections/aside-post-row-section";
import { BannerSection } from "@/components/sections/banner-section";
import { CategoriesSection } from "@/components/sections/categories-section";
import { PostRowSection } from "@/components/sections/post-row-section";

export default function Page() {
  return (
    <main className="relative px-4 md:px-8">
      <BannerSection />

      <CategoriesSection />

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-12 mt-16 gap-8 max-w-screen-xl mx-auto">
        {/* Left Side Posts */}
        <div className="col-span-8 flex flex-col">
          <PostRowSection title="Falando em Next.js" />
          <PostRowSection title="Estilizando com shadcn/ui" />
          <PostRowSection title="As tecnologias mais recentes" />
          <PostRowSection title="Banco de dados" />
        </div>

        {/* Right Side Posts */}
        {/* TODO: FIX STICKY POSITION */}
        <aside className="col-span-8 lg:col-span-4">
          <div className="sticky top-24 flex flex-col">
            <AsideCategoryRowSection title="Categorias" />
            <AsidePostRowSection title="Publicações recentes" />
          </div>
        </aside>
      </section>
    </main>
  );
}
