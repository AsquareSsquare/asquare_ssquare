import { Client, Databases } from "appwrite";
import appWriteConfig from "@/lib/appwrite-config";

const appWriteClient = new Client();

appWriteClient
  .setEndpoint(appWriteConfig.appWriteEndpoint)
  .setProject(appWriteConfig.appWriteProjectId);

export const databases = new Databases(appWriteClient);
