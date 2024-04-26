"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { RocketIcon } from "@radix-ui/react-icons";

export function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <nav
      className={cn(
        "h-16 px-4 md:px-8 sticky top-0 left-0 w-full z-10",
        !isHome && "bg-background border-b"
      )}
    >
      <div className="flex items-center h-full">
        <div>
          <Link href={"/"} className="flex items-center gap-x-2 font-extrabold">
            <RocketIcon className="size-6" />
            leandro-dev
          </Link>
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
