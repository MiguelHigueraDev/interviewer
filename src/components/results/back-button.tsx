"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export function BackButton() {
  const router = useRouter();

  return (
    <Button className="mt-4" onClick={() => router.back()}>
      Go back
    </Button>
  );
}
