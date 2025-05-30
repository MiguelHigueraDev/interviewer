import { Settings } from "@/components/home/settings";
import { DifficultySelector } from "@/components/home/interview-config/interview-config";
import { TechnologySelector } from "@/components/home/technology-selector/technology-selector";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="items-center justify-items-center min-h-screen p-4 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-2 items-center sm:items-star text-center max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Interviewer</h1>
          <h2 className="text-lg text-muted-foreground mb-4 md:mb-8">
            Get interview questions about the technology you are applying for
          </h2>
          <div className="flex flex-col space-y-4 mb-4 md:space-y-0 md:flex-row gap-4 w-full">
            <TechnologySelector />
            <DifficultySelector />
          </div>
          <Button className="w-full md:w-auto cursor-pointer">
            Generate Questions
          </Button>
        </main>
      </div>
      <div className="fixed bottom-3 right-3 p-2">
        <Settings />
      </div>
    </>
  );
}
