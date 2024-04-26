import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { CategoryBreadcrumb } from "./_components/category-breadcrumb";
import { CategoryPagination } from "./_components/category-pagination";
import { AsideCategoryRowSection } from "@/components/sections/aside-category-row-section";

export default function CategoryPage() {
  return (
    <div className="px-4 md:px-8 pt-16 relative">
      <div className="max-w-screen-xl mx-auto">
        <CategoryBreadcrumb />

        <div className="mt-8">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Falando sobre Next.js
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-4 text-muted-foreground">
            Aprenda mais sobre Next.js, o framework React mais popular do mundo.
            Veja todas as publicações sobre Next.js abaixo.
          </p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-screen-xl mx-auto py-20">
          <div className="col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              <PostCard imageUrl="/back1.png" />
              <PostCard imageUrl="/back2.png" />
              <PostCard imageUrl="/back3.png" />
              <PostCard imageUrl="/cat-nextjs.png" />
              <PostCard imageUrl="/nextjs.svg" />
              <PostCard imageUrl="/placeholder.svg" />
              <PostCard imageUrl="/alternative.svg" />
            </div>

            <Button variant="outline" type="submit" className="w-full lg:w-fit">
              Carregar mais
            </Button>

            <CategoryPagination />
          </div>

          <aside className="col-span-8 lg:col-span-4 flex flex-col">
            <div className="sticky top-24">
              <AsideCategoryRowSection title="Categorias relacionadas" />
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
