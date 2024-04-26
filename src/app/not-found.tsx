import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] w-full flex-col items-center justify-center px-4">
      <div className="mx-auto max-w-md space-y-4 text-center">
        <h1 className="text-4xl font-bold text-accent-foreground">
          404 Not found
        </h1>
        <p className="text-muted-foreground">
          A página que você está procurando não foi encontrada. Você pode voltar
          para a página inicial clicando no botão abaixo.
        </p>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
