"use server";
import { Feedback } from "@/components/forms/feedback-form";
import { databases } from "@/lib/appwrite";
import appWriteConfig from "@/lib/appwrite-config";
import { ID } from "appwrite";
import { revalidatePath } from "next/cache";

interface FeedbackResponse {
  name: string;
  title: string;
  quote: string;
  rating: number;
  $id: string;
  $permissions: string[];
  $createdAt: string;
  $updatedAt: string;
  $sequence: number;
  $databaseId: string;
  $collectionId: string;
}

export async function createFeedback(
  rating: number,
  feedback: Feedback,
  path: string,
) {
  try {
    const response = await databases.createDocument(
      appWriteConfig.appWriteDatabaseId,
      appWriteConfig.appWriteFeedbackCollectionId,
      ID.unique(),
      {
        name: feedback.name,
        title: feedback.title,
        quote: feedback.quote,
        rating: rating,
      },
    );
    if (!response) {
      return { success: false, message: "Failed to create feedback" };
    }
    revalidatePath(path);
    return { success: true, message: "Feedback created successfully." };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error creating feedback" };
  }
}

export async function getAllFeedbacks(): Promise<{
  feedbacks: Feedback[] | null;
}> {
  try {
    const response = await databases.listDocuments(
      appWriteConfig.appWriteDatabaseId,
      appWriteConfig.appWriteFeedbackCollectionId,
    );
    if (!response) {
      return { feedbacks: null };
    }
    return { feedbacks: JSON.parse(JSON.stringify(response.documents)) };
  } catch (error) {
    console.error(error);
    return { feedbacks: null };
  }
}
