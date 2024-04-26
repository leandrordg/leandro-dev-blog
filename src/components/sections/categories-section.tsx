import { CategoryCard } from "@/components/category-card";

export function CategoriesSection() {
  return (
    <section className="max-w-screen-xl mx-auto flex flex-nowrap items-center gap-6 overflow-x-auto scrollbar-thin pb-6">
      <CategoryCard imageUrl="/nextjs.svg" />
      <CategoryCard imageUrl="/reactjs.svg" />
    </section>
  );
}
