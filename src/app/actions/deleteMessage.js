"use server";
import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteMessage(messageId) {
  const { user, userId } = await getSessionUser();
  if (!user || !userId) {
    throw new Error("User ID is required");
  }

  const message = await Message.findById(messageId);

  if (!message) throw new Error("Message Not Found");

  // Verify ownership
  if (message.recipient.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  const response = await message.deleteOne();
  console.log(response);
  revalidatePath("/", "layout");

  if (response.deletedCount === 1) {
    return true;
  } else {
    return false;
  }
}

export default deleteMessage;
