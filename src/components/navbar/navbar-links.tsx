"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { RocketIcon } from "@radix-ui/react-icons";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Next.js",
    href: "/categorias/nextjs",
    description:
      "O framework React mais popular atualmente para construir aplicações web.",
  },
  {
    title: "React",
    href: "/categorias/react",
    description:
      "Uma biblioteca JavaScript para construir interfaces de usuário.",
  },
  {
    title: "Tailwind CSS",
    href: "/categorias/tailwindcss",
    description:
      "Um framework CSS que facilita a criação de designs responsivos e bonitos.",
  },
  {
    title: "TypeScript",
    href: "/categorias/typescript",
    description: "Um superset de JavaScript que adiciona tipagem estática.",
  },
  {
    title: "PostgreSQL",
    href: "/categorias/postgresql",
    description:
      "Um sistema de gerenciamento de banco de dados relacional de código aberto.",
  },
  {
    title: "Prisma",
    href: "/categorias/prisma",
    description:
      "Um ORM moderno para Node.js e TypeScript que simplifica o acesso ao banco de dados.",
  },
];

export function NavbarLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="text-muted-foreground">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <RocketIcon className="size-8" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      leandro-dev
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Um blog em desenvolvimento sobre web development e
                      tecnologia.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/blog" title="Blog">
                Veja todos os posts do blog até o momento!
              </ListItem>
              <ListItem href="/blog?tag=em-alta" title="Em alta">
                Os posts mais populares do blog estão aqui!
              </ListItem>
              <ListItem
                href="/blog?tag=escolha-do-editor"
                title="Escolha do editor"
              >
                As publicações mais bem avaliadas pelo editor do blog.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/faq" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              FAQ
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contato" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
