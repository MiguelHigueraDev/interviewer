import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InterviewType } from "@/lib/types";

export function InterviewTypeSelector({
  interviewType,
  setInterviewType,
}: {
  interviewType: InterviewType;
  setInterviewType: (interviewType: InterviewType) => void;
}) {
  return (
    <div className="space-y-3">
      <Label className="font-semibold text-base">Interview Type</Label>
      <RadioGroup value={interviewType} onValueChange={setInterviewType}>
        <div className="flex flex-row gap-2">
          <RadioGroupItem id="multiple-choice" value="MULTIPLE_CHOICE" />
          <Label htmlFor="multiple-choice">Multiple Choice</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
