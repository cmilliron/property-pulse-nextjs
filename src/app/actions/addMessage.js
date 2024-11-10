"use server";
import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";

async function addMessage(previousState, formData) {
  await connectDb();

  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;
  const recipient = formData.get("recipient");

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  if (userId === recipient) {
    return { error: "You cannot send a message to yourself" };
  }

  const newMessage = new Message({
    sender: userId,
    recipient,
    property: formData.get("property"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    body: formData.get("body"),
  });
  console.log(newMessage);
  await newMessage.save();

  return { submitted: true };
}

export default addMessage;
