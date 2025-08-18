"use client";
import React from "react";
import SmoothDrawer from "@/components/ui/smooth-drawer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import FeedbackForm from "@/components/forms/feedback-form";

function Feedback() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <>
      <Button size="icon" variant="outline" onClick={() => setOpenDrawer(true)}>
        <Star />
      </Button>
      <SmoothDrawer
        isOpen={openDrawer}
        setIsOpen={setOpenDrawer}
        header={<p>Share your feedback</p>}
      >
        <FeedbackForm />
      </SmoothDrawer>
    </>
  );
}

export default Feedback;
