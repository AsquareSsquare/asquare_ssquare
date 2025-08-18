import React from "react";
import { Rating, RatingButton } from "@/components/ui/kibo-ui/rating";
import { Label } from "@/components/ui/label";

interface RatingProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
}

function StarRating({ label, value, setValue }: RatingProps) {
  return (
    <div className="space-y-3">
      <Label>{label}</Label>
      <Rating onValueChange={setValue} value={value}>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton className="text-yellow-500" key={index} />
        ))}
      </Rating>
    </div>
  );
}

export default StarRating;
