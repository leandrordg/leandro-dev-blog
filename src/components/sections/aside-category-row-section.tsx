import React from "react";
import { CategoryCard } from "../category-card";

type Props = {
  title: string;
};

export function AsideCategoryRowSection({ title }: Props) {
  return (
    <React.Fragment>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-3">
        {title}
      </h3>

      <div className="grid grid-cols-1 gap-6 py-10">
        <CategoryCard smallCard imageUrl="/nextjs.svg" />
        <CategoryCard smallCard imageUrl="/reactjs.svg" />
      </div>
    </React.Fragment>
  );
}
