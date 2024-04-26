import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function PostBreadcrumb() {
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
            <BreadcrumbLink href="/categoria/nextjs">
              <DropdownMenuItem className="font-bold">Next.js</DropdownMenuItem>
            </BreadcrumbLink>
            <BreadcrumbLink href="/categoria/reactjs">
              <DropdownMenuItem>React.js</DropdownMenuItem>
            </BreadcrumbLink>
            <BreadcrumbLink href="/categoria/tailwindcss">
              <DropdownMenuItem>Tailwind CSS</DropdownMenuItem>
            </BreadcrumbLink>
            <BreadcrumbLink href="/categoria/shadcnui">
              <DropdownMenuItem>shadcn/ui</DropdownMenuItem>
            </BreadcrumbLink>
          </DropdownMenuContent>
        </DropdownMenu>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>the-joke-tax-chronicles</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
