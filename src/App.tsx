import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20">
      <main className="container flex max-w-5xl flex-col items-center justify-center gap-8 px-4 py-16 text-center md:py-24">
        <div className="space-y-8">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Vite Template
          </h1>
          <p className="mx-auto max-w-md text-muted-foreground md:text-xl">
            Vite + Tailwind + ShadCN UI
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <a
              href="https://scout.new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Try Scout</span>
              <ArrowRight />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://vitejs.dev/guide/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
