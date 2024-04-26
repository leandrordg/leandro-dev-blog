import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { RocketIcon } from "@radix-ui/react-icons";
import { NavbarLinks } from "./navbar-links";
import { NavbarSheetMenu } from "./navbar-sheet-menu";

export function Navbar() {
  return (
    <nav className="h-16 sticky top-0 px-4 !z-50 transition ease-in bg-background border-b">
      <div className="flex items-center gap-x-4 h-full">
        <div className="md:hidden">
          <NavbarSheetMenu />
        </div>
        <div className="hidden md:block">
          <Link href={"/"} className="flex items-center gap-x-2 font-extrabold">
            <RocketIcon className="size-6" />
            leandro-dev
          </Link>
        </div>

        <div className="hidden md:block">
          <NavbarLinks />
        </div>

        <div className="ml-auto flex items-center gap-x-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
