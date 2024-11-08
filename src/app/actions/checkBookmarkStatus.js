"use server";
import connectDb from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function checkBookmarkedStatus(propertyId) {
  await connectDb();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const user = await User.findById(userId);
  console.log(user);
  const isBookmarked = user.bookmarks.includes(propertyId);
  console.log(isBookmarked);

  return { isBookmarked };
}

export default checkBookmarkedStatus;
