import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { InterviewDifficulty } from "@/lib/types";

export function DifficultySlider({
  getDifficultyName,
  difficulty,
  setDifficulty,
}: {
  difficulty: InterviewDifficulty;
  getDifficultyName: (difficulty: InterviewDifficulty) => string;
  setDifficulty: (difficulty: InterviewDifficulty) => void;
}) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <Label htmlFor="difficulty-slider" className="font-semibold text-base">
          Difficulty
        </Label>
        <span className="text-sm font-medium text-primary">
          {getDifficultyName(difficulty)}
        </span>
      </div>
      <Slider
        id="difficulty-slider"
        min={0}
        max={2}
        step={1}
        value={[difficulty]}
        onValueChange={(value) =>
          setDifficulty(value[0] as InterviewDifficulty)
        }
        className="my-2"
      />
      <div className="flex justify-between text-xs text-muted-foreground px-1">
        <span>Easy</span>
        <span>Medium</span>
        <span>Hard</span>
      </div>
    </div>
  );
}
