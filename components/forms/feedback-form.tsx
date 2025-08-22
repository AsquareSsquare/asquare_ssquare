"use client";

import StarRating from "@/components/common/star-rating";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { createFeedback } from "@/services/feedbackActions";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

export interface Feedback {
  name: string;
  title: string;
  quote: string;
}

function FeedbackForm({ setOpen }: { setOpen: (open: boolean) => void }) {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const pathName = usePathname();

  const form = useForm<Feedback>({
    defaultValues: {
      name: "",
      title: "",
      quote: "",
    },
  });

  const submitHandler = async (data: Feedback) => {
    try {
      setLoading(true);
      const result = await createFeedback(rating, data, pathName);
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      setLoading(false);
      toast.success(result.message);
    } catch (error) {
      console.error(error);
    } finally {
      form.reset();
      setLoading(false);
    }
  };
  return (
    <div>
      <p className="text-sm text-slate-700 mb-6">
        Help us improve by sharing your thoughts and experiences.
      </p>
      <form className="space-y-6" onSubmit={form.handleSubmit(submitHandler)}>
        <div className="space-y-3">
          <Label>Full name</Label>
          <Input {...form.register("name")} />
        </div>
        <div className="space-y-3">
          <Label>Title</Label>
          <Input {...form.register("title")} />
        </div>
        <StarRating
          label="How would you rate your experience?"
          value={rating}
          setValue={setRating}
        />
        <div className="space-y-3">
          <Label>Message</Label>
          <Textarea {...form.register("quote")} />
        </div>

        <div className="flex justify-end gap-4">
          <Button type="submit">
            {loading ? (
              <>
                <Loader className="animate-spin" /> Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
