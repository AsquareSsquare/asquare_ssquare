"use client";
import React from "react";
import SmoothDrawer from "@/components/ui/smooth-drawer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import FeedbackForm from "@/components/forms/feedback-form";
import CustomModal from "@/components/custom-comp/custom-modal";

function Feedback() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <Button
        size="icon"
        variant="outline"
        className="hidden lg:flex"
        onClick={() => setOpenDrawer(true)}
      >
        <Star />
      </Button>
      <Button
        size="icon"
        variant="outline"
        className="flex lg:hidden"
        onClick={() => setOpenModal(true)}
      >
        <Star />
      </Button>

      <SmoothDrawer
        isOpen={openDrawer}
        setIsOpen={setOpenDrawer}
        header={<p>Share your feedback</p>}
      >
        <FeedbackForm />
      </SmoothDrawer>

      <CustomModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        header="Share your feedback"
      >
        <FeedbackForm />
      </CustomModal>
    </>
  );
}

export default Feedback;
