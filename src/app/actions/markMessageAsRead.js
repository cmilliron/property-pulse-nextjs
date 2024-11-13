"use server";
import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function markMessageAsRead(messageId) {
  await connectDb();

  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;

  if (!sessionUser || !userId) {
    throw new Error("User ID is required");
  }

  const message = await Message.findById(messageId);

  if (!message) {
    throw new Error("Message not found");
  }

  // Verify Message
  if (message.recipient.toString() !== userId) {
    throw new Error("Unauthorize");
  }

  message.read = !message.read;

  revalidatePath("/messages", "page");
  await message.save();

  return message.read;
}

export default markMessageAsRead;
