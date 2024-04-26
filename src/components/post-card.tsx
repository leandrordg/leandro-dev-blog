import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";

type Props = {
  imageUrl: string;

  smallCard?: boolean;
};

export function PostCard({ smallCard, imageUrl }: Props) {
  if (smallCard) {
    return (
      <Link href={`/blog/${crypto.randomUUID()}`}>
        <div className="flex items-center gap-x-4 border rounded-xl p-4 hover:bg-muted transition">
          <Image
            src={imageUrl}
            alt={"Alternative Text"}
            className="object-cover aspect-square size-16 rounded-xl"
            height={400}
            width={400}
          />
          <div>
            <p className="text-xs text-muted-foreground">/blog</p>
            <h3 className="font-bold">
              The Art of Coffee: Brewing the Perfect Cup
            </h3>
            <p className="text-sm text-muted-foreground">há 4 horas.</p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${crypto.randomUUID()}`}>
      <Card className="w-full rounded-lg overflow-hidden hover:bg-muted border-0 shadow-none transition">
        <div className="aspect-square">
          <Image
            src={imageUrl}
            alt={"Alternative Text"}
            className="object-cover aspect-square w-full h-full"
            height={400}
            width={400}
          />
        </div>
        <div className="p-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Blog
            </p>
            <h3 className="font-bold">
              The Art of Coffee: Brewing the Perfect Cup
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              by John Doe
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
