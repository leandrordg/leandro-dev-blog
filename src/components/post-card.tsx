import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;

  smallCard?: boolean;
};

export function PostCard({ smallCard, imageUrl }: Props) {
  if (smallCard) {
    return (
      <Link href={`/blog/1`}>
        <div className="flex items-center gap-x-4 border rounded-xl p-4 hover:bg-muted transition">
          <Image
            alt={"Alternative Text"}
            className="object-cover aspect-square size-16 rounded-xl"
            height={400}
            src={imageUrl}
            width={400}
          />
          <div>
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
      </Link>
    );
  }

  return (
    <Link href={`/blog/1`}>
      <Card className="w-full rounded-lg overflow-hidden hover:bg-muted border-0 shadow-none transition">
        <div className="aspect-square">
          <Image
            alt={"Alternative Text"}
            className="object-cover aspect-square w-full h-full"
            height={400}
            src={imageUrl}
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