import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;
};

export function CategoryCard({ imageUrl }: Props) {
  return (
    <Link href={`/categoria/${1}`}>
      <div className="flex items-center justify-center w-44 h-20 rounded-xl border bg-transparent group hover:bg-muted/50 relative transition-all shrink-0">
        <Image
          src={imageUrl}
          alt="Category"
          width={500}
          height={500}
          className="absolute object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 -z-10"
        />
        <span className="font-extrabold text-2xl opacity-0 group-hover:opacity-100">Next.js</span>
      </div>
    </Link>
  );
}
