import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon, RocketIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function NavbarSheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col p-0 min-h-screen">
        <SheetHeader className="p-6">
          <Link href={"/"} className="w-fit">
            <SheetClose className="flex items-center gap-x-2 font-extrabold">
              <RocketIcon className="size-6" />

              <SheetTitle>leandro-dev</SheetTitle>
            </SheetClose>
          </Link>
        </SheetHeader>
        <nav className="flex flex-col">
          <h2 className="px-6 pb-4">Links utilizáveis</h2>
          <Link href={"/"}>
            <SheetClose className="w-full h-full text-left py-2.5 px-6 hover:bg-muted/50 text-muted-foreground hover:text-accent-foreground text-sm">
              Início
            </SheetClose>
          </Link>
          <Link href={"/blog"}>
            <SheetClose className="w-full h-full text-left py-2.5 px-6 hover:bg-muted/50 text-muted-foreground hover:text-accent-foreground text-sm">
              Blog
            </SheetClose>
          </Link>
          <Link href={"/categorias"}>
            <SheetClose className="w-full h-full text-left py-2.5 px-6 hover:bg-muted/50 text-muted-foreground hover:text-accent-foreground text-sm">
              Categorias
            </SheetClose>
          </Link>
          <Link href={"/blog?tag=em-alta"}>
            <SheetClose className="w-full h-full text-left py-2.5 px-6 hover:bg-muted/50 text-muted-foreground hover:text-accent-foreground text-sm">
              Em alta
            </SheetClose>
          </Link>
        </nav>

        <nav className="flex flex-col mt-auto">
          <h2 className="px-6 pb-4">Suporte</h2>
          <Link href={"/termos-de-uso"}>
            <SheetClose className="w-full h-full text-left py-2.5 px-6 hover:bg-muted/50 text-muted-foreground hover:text-accent-foreground text-sm">
              Termos de Uso
            </SheetClose>
          </Link>
          <Link href={"/politica-de-privacidade"}>
            <SheetClose className="w-full h-full text-left py-2.5 px-6 hover:bg-muted/50 text-muted-foreground hover:text-accent-foreground text-sm">
              Política de Privacidade
            </SheetClose>
          </Link>
          <Link href={"/contato"}>
            <SheetClose className="w-full h-full text-left py-2.5 px-6 hover:bg-muted/50 text-muted-foreground hover:text-accent-foreground text-sm">
              Contato
            </SheetClose>
          </Link>
          <Link href={"/faq"}>
            <SheetClose className="w-full h-full text-left py-2.5 px-6 hover:bg-muted/50 text-muted-foreground hover:text-accent-foreground text-sm">
              FAQ
            </SheetClose>
          </Link>
        </nav>
        <SheetFooter className="gap-4 p-6 pt-0">
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Newsletter
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="w-full">Fechar menu</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
