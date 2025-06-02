import { BackButton } from "@/components/results/back-button";
import { Complexities } from "@/components/results/complexities";
import { Feedback } from "@/components/results/feedback";
import { Score } from "@/components/results/score";

export default function ResultsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 max-w-5xl mx-auto">
      <div className="w-full">
        <div className="flex flex-col gap-6 lg:hidden">
          <Score />
          <Feedback />
          <Complexities />
        </div>

        <div className="hidden lg:flex lg:flex-col lg:gap-6">
          <div className="flex flex-row items-start gap-6">
            <div className="w-1/3">
              <Score />
            </div>
            <div className="w-2/3">
              <Feedback />
            </div>
          </div>
          <div className="w-full">
            <Complexities />
          </div>
        </div>
        <BackButton />
      </div>
    </div>
  );
}
