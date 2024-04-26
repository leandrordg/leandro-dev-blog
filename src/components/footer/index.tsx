import Link from "next/link";

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

export function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 border-t flex flex-col">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start w-full justify-between max-w-screen-xl mx-auto pb-16">
        <div>
          <Link
            href={"/"}
            className="flex items-center gap-x-2 font-extrabold text-xl"
          >
            <RocketIcon className="size-8" />
            leandro-dev
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="grid grid-cols-2 gap-16 lg:gap-24">
            <div className="col-span-1 flex flex-col gap-y-4">
              <span className="font-semibold">Solutions</span>
              <span className="text-muted-foreground text-sm">Marketing</span>
              <span className="text-muted-foreground text-sm">Analytics</span>
              <span className="text-muted-foreground text-sm">Commerce</span>
              <span className="text-muted-foreground text-sm">Insights</span>
            </div>
            <div className="col-span-1 flex flex-col gap-y-4">
              <span className="font-semibold">Solutions</span>
              <span className="text-muted-foreground text-sm">Marketing</span>
              <span className="text-muted-foreground text-sm">Analytics</span>
              <span className="text-muted-foreground text-sm">Commerce</span>
              <span className="text-muted-foreground text-sm">Insights</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-16 lg:gap-24">
            <div className="col-span-1 flex flex-col gap-y-4">
              <span className="font-semibold">Solutions</span>
              <span className="text-muted-foreground text-sm">Marketing</span>
              <span className="text-muted-foreground text-sm">Analytics</span>
              <span className="text-muted-foreground text-sm">Commerce</span>
              <span className="text-muted-foreground text-sm">Insights</span>
            </div>
            <div className="col-span-1 flex flex-col gap-y-4">
              <span className="font-semibold">Solutions</span>
              <span className="text-muted-foreground text-sm">Marketing</span>
              <span className="text-muted-foreground text-sm">Analytics</span>
              <span className="text-muted-foreground text-sm">Commerce</span>
              <span className="text-muted-foreground text-sm">Insights</span>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: Decidir se usar newsletter dessa forma */}
      {/* <div className="py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Inscreva-se no nosso newsletter</h3>
          <p className="text-muted-foreground text-sm">
            As últimas notícias, artigos e recursos, enviados para sua caixa de
            entrada.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:w-fit gap-4">
          <Input placeholder="Digite seu email" />
          <Button>Inscrever-se</Button>
        </div>
      </div> */}

      <div className="pt-4 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-4 w-full max-w-screen-xl mx-auto">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} leandro-dev, Inc. All rights reserved.
        </span>
        <div>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`https://github.com/leandrordg/`} target="_blank">
              <GitHubLogoIcon />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href={`https://instagram.com/leandro.rodriguesz/`}
              target="_blank"
            >
              <InstagramLogoIcon />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href={`https://www.linkedin.com/in/leandro-rodrigues-8aaa19221/`}
              target="_blank"
            >
              <LinkedInLogoIcon />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
