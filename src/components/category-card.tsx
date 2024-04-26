import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;

  smallCard?: boolean;
};

export function CategoryCard({ imageUrl, smallCard }: Props) {
  if (smallCard) {
    return (
      <Link href={`/categorias/${crypto.randomUUID()}`}>
        <div className="flex w-full items-center gap-x-4 border rounded-xl p-4 hover:bg-muted transition">
          <Image
            src={imageUrl}
            alt={"Alternative Text"}
            height={400}
            width={400}
            className="object-contain size-16"
          />
          <div>
            <p className="text-xs text-muted-foreground">/categorias</p>
            <h3 className="font-bold text-lg">React.js</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              10 Artigos relacionados
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/categorias/${crypto.randomUUID()}`}>
      <div className="flex flex-col gap-4 items-center justify-center w-24 h-40 lg:w-32 lg:h-52 rounded-xl relative overflow-hidden border bg-transparent transition-all shrink-0 hover:shadow-lg hover:bg-muted">
        <Image
          src={imageUrl}
          alt="Category"
          width={500}
          height={500}
          className="size-12 lg:size-16 object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-muted-foreground/10 to-transparent" />
        <span className="font-bold lg:text-xl">Next.js</span>
      </div>
    </Link>
  );
}
