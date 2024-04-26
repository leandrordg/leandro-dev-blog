import { RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

export function Header() {
  return (
    <header className="h-16 px-4 md:px-8 sticky top-0 left-0 w-full backdrop-blur-sm z-50">
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
    </header>
  );
}
