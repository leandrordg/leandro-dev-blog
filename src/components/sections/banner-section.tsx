import { Button } from "@/components/ui/button";

export function BannerSection() {
  return (
    <section className="min-h-[65vh] flex flex-col justify-center py-20 max-w-screen-xl mx-auto">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        A Nova Geração de Websites Next
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Aprenda a criar sites modernos com Next.js, React e Tailwind CSS.
      </p>
      <Button className="mt-6 w-fit">Saiba mais</Button>
    </section>
  );
}
