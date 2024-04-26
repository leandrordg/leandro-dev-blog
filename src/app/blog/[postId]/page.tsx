import Image from "next/image";
import React from "react";

import { AsidePostRowSection } from "@/components/sections/aside-post-row-section";
import { Badge } from "@/components/ui/badge";
import { ReaderIcon } from "@radix-ui/react-icons";
import { PostBreadcrumb } from "./_components/post-breadcrumb";
import { PostHeader } from "./_components/post-header";

export default function PostPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  console.log(postId);

  return (
    <React.Fragment>
      <PostHeader />

      <section className="max-w-screen-xl mx-auto py-12 px-4 md:px-8 flex flex-col gap-4">
        {/* TODO: Implementar categorias dinâmicas e slug */}
        <PostBreadcrumb />
        <Badge variant="secondary" className="gap-x-2 w-fit pointer-events-none">
          <ReaderIcon />
          Aprox. 5 min de leitura
        </Badge>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-screen-xl mx-auto pb-20 px-4 md:px-8">
        <div className="col-span-8">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Jokester began sneaking into the castle in the middle of the night
            and leaving jokes all over the place: under the king's pillow, in
            his soup, even in the royal toilet. The king was furious, but he
            couldn't seem to stop Jokester.
          </p>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            And then, one day, the people of the kingdom discovered that the
            jokes left by Jokester were so funny that they couldn't help but
            laugh. And once they started laughing, they couldn't stop.
          </p>

          <Image
            src="/placeholder.svg"
            alt="Image"
            width={800}
            height={450}
            className="mx-auto rounded-lg aspect-video object-cover mt-6"
          />

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The king thought long and hard, and finally came up with a brilliant
            plan: he would tax the jokes in the kingdom.
          </p>

          <blockquote className="mt-6 border-l-2 pl-6 italic">
            “After all,” he said, “everyone enjoys a good joke, so it's only
            fair that they should pay for the privilege.”
          </blockquote>

          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            The Joke Tax
          </h2>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The king's subjects were not amused. They grumbled and complained,
            but the king was firm:
          </p>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            As a result, people stopped telling jokes, and the kingdom fell into
            a gloom. But there was one person who refused to let the king's
            foolishness get him down: a court jester named Jokester.
          </p>
        </div>

        {/* Right Aside */}
        <aside className="col-span-8 lg:col-span-4">
          <div className="sticky top-24 flex flex-col">
            <AsidePostRowSection title="Publicações Relacionadas" />
          </div>
        </aside>
      </section>
    </React.Fragment>
  );
}
