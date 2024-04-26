import React from "react";

import { PostCard } from "@/components/post-card";

type Props = {
  title: string;
};

export function AsidePostRowSection({ title }: Props) {
  return (
    <React.Fragment>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-3">
        {title}
      </h3>

      <div className="grid grid-cols-1 gap-6 py-10">
        <PostCard smallCard imageUrl="/back1.png" />
        <PostCard smallCard imageUrl="/back2.png" />
        <PostCard smallCard imageUrl="/back3.png" />
      </div>
    </React.Fragment>
  );
}
