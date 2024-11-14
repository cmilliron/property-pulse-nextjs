"use server";
import connectDb from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

async function GetUnreadMessageCount() {
  await connectDb();

  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;

  if (!sessionUser || !userId) {
    throw new Error("User ID is required");
  }

  const count = await Message.countDocuments({
    recipient: userId,
    read: false,
  });

  return { count };
}

export default GetUnreadMessageCount;
