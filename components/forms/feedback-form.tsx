"use client";

import StarRating from "@/components/common/star-rating";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function FeedbackForm() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p className="text-sm text-slate-700 mb-6">
        Help us improve by sharing your thoughts and experiences.
      </p>
      <form className="space-y-6">
        <div className="space-y-3">
          <Label>Full name</Label>
          <Input />
        </div>
        <div className="space-y-3">
          <Label>Email</Label>
          <Input />
        </div>
        <StarRating
          label="How would you rate your experience?"
          value={value}
          setValue={setValue}
        />
        <div className="space-y-3">
          <Label>Message</Label>
          <Textarea />
        </div>

        <div className="flex justify-end gap-4">
          <Button type="submit">Submit</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
