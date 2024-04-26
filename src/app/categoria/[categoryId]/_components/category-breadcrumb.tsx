import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function CategoryBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Início</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1">
            Next.js
            <ChevronDownIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <BreadcrumbLink href="/categorias/nextjs">
              <DropdownMenuItem className="font-bold">Next.js</DropdownMenuItem>
            </BreadcrumbLink>
            <BreadcrumbLink href="/categorias/reactjs">
              <DropdownMenuItem>React.js</DropdownMenuItem>
            </BreadcrumbLink>
            <BreadcrumbLink href="/categorias/tailwindcss">
              <DropdownMenuItem>Tailwind CSS</DropdownMenuItem>
            </BreadcrumbLink>
            <BreadcrumbLink href="/categorias/shadcnui">
              <DropdownMenuItem>shadcn/ui</DropdownMenuItem>
            </BreadcrumbLink>
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
