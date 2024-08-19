import { Card } from "@repo/ui/card";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${
        small ? "blur-[32px]" : "blur-[75px]"
      } ${conic ? "bg-glow-conic" : ""} ${className}`}
    />
  );
}

const LINKS = [
  {
    title: "Blog",
    href: "/blog",
    description: "go to the Blog running on another container",
  },
  {
    title: "App",
    href: "/app",
    description: "go to app running on another container",
  },
  {
    title: "Docs",
    href: "/docs",
    description: "go to docs running on another container",
  },
  {
    title: "List Apps",
    href: "/",
    description: "Go to the static file to list apps",
  },
];

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <p className="fixed top-0 left-0 flex justify-center w-full px-4 pt-8 pb-6 border-b bg-gradient-to-b backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          This is the -&nbsp;
          <code className="font-mono font-bold">docs</code>
        </p>
      </div>

      <div className="relative flex place-items-center ">
        <div className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative z-0">
          <div className="z-50 flex items-center justify-center w-full">
            <div className="absolute z-50 flex items-center justify-center w-64 h-64">
              <Gradient
                className="opacity-90 w-[120px] h-[120px]"
                conic
                small
              />
            </div>
          </div>
          <Gradient
            className="top-[-500px] opacity-[0.15] w-[1000px] h-[1000px]"
            conic
          />
          <div className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6">
            This is the docs page running on another micro frontend
          </div>
        </div>
      </div>

      <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {LINKS.map(({ title, href, description }) => (
          <Card href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </main>
  );
}
