import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { CategoryBreadcrumb } from "./_components/category-breadcrumb";
import { CategoryPagination } from "./_components/category-pagination";

export default function CategoryPage() {
  return (
    <div className="px-4 md:px-8 py-16">
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

        <section className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PostCard imageUrl="/back1.png" />
          <PostCard imageUrl="/back2.png" />
          <PostCard imageUrl="/back3.png" />
          <PostCard imageUrl="/cat-nextjs.png" />
          <PostCard imageUrl="/nextjs.png" />
          <PostCard imageUrl="/placeholder.svg" />
          <PostCard imageUrl="/alternative.svg" />
        </section>

        <div className="flex flex-col lg:flex-row lg:justify-end mb-6">
          <Button variant='outline' type="submit">Carregar mais</Button>
        </div>

        <CategoryPagination />
      </div>
    </div>
  );
}
