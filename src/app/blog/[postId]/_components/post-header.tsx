import Image from "next/image";

export function PostHeader() {
  return (
    <div className="relative h-[500px]">
      <Image
        src="/placeholder.svg"
        alt="Banner"
        width={1920}
        height={1000}
        className="h-full w-full object-cover aspect-video"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-muted to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 px-6 py-8 md:px-12 md:py-12">
        <div className="mx-auto max-w-screen-xl space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            The Joke Tax Chronicles
          </h1>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg"
                alt="Avatar"
                width={32}
                height={32}
                className="size-8 rounded-full object-cover"
              />
              <span>John Doe</span>
            </div>
            <span>•</span>
            <span>April 26, 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
