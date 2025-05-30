"use client";

import { technologies } from "@/lib/constants";
import { useInterviewStore } from "@/stores/interview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnologyList } from "./technology-list";

export function TechnologySelector() {
  const { selectedTechnology, setSelectedTechnology } = useInterviewStore();

  return (
    <Card className="w-full md:w-2/3">
      <CardHeader>
        <CardTitle>Select a technology</CardTitle>
      </CardHeader>
      <CardContent>
        <TechnologyList
          technologies={technologies}
          selectedTechnology={selectedTechnology}
          onSelect={setSelectedTechnology}
        />
      </CardContent>
    </Card>
  );
}
