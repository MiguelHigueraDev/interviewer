import { Settings } from "@/components/home/settings";

export default function Home() {
  return (
    <>
      <div className="items-center justify-items-center min-h-screen p-4 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-2 items-center sm:items-star text-center">
          <h1 className="text-4xl font-bold">Interviewer</h1>
          <h2 className="text-lg text-muted-foreground">
            Interview with your AI assistant
          </h2>
        </main>
      </div>
      <div className="fixed bottom-3 right-3 p-2">
        <Settings />
      </div>
    </>
  );
}
