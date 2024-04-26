import React from "react";

import { PostCard } from "@/components/post-card";

type Props = {
  title: string;
};

export function PostRowSection({ title }: Props) {
  return (
    <React.Fragment>
      <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
        <PostCard imageUrl="/back1.png" />
        <PostCard imageUrl="/back2.png" />
      </div>
    </React.Fragment>
  );
}
