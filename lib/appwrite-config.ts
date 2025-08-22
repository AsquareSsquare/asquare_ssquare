const appWriteConfig = {
  appWriteEndpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
  appWriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT),
  appWriteDatabaseId: String(process.env.NEXT_PUBLIC_DATABASE_ID),
  appWriteFeedbackCollectionId: String(
    process.env.NEXT_PUBLIC_FEEDBACK_COLLECTION_ID,
  ),
};
export default appWriteConfig;
