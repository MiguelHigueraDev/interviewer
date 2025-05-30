import { Technology } from "@/lib/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TechnologyListProps {
  technologies: Technology[];
  selectedTechnology?: Technology;
  onSelect: (technology: Technology) => void;
}

export function TechnologyList({
  technologies,
  selectedTechnology,
  onSelect,
}: TechnologyListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
      {technologies.map((technology) => (
        <button
          key={technology.name}
          className={cn(
            "flex flex-col items-center justify-center aspect-square border rounded-md p-4 min-w-24 min-h-24 hover:border-primary/80 transition-colors cursor-pointer",
            selectedTechnology?.name === technology.name &&
              "border-primary ring-2 ring-primary"
          )}
          onClick={() => onSelect(technology)}
        >
          <Image
            src={technology.icon}
            alt={technology.name}
            width={48}
            height={48}
            className="object-contain"
          />
          <p className="text-sm font-semibold text-center mt-2">
            {technology.name}
          </p>
        </button>
      ))}
    </div>
  );
}
