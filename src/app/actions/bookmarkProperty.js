"use server";
import connectDb from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { sendError } from "next/dist/server/api-utils";

async function bookmarkProperty(propertyId) {
  await connectDb();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const user = await User.findById(userId);

  const isBookmarked = user.bookmarks.includes(propertyId);

  let message;

  if (isBookmarked) {
    user.booksmarks.pull(propertyId);
    message = "Bookmark Removed";
    isBookmarked = false;
  } else {
    user.booksmarks.push(propertyId);
    message = "Bookmark Added";
    isBookmarked = true;
  }

  await user.save();

  revalidatePath("properties/saved", "page");

  return {
    message,
    isBookmarked,
  };
}

export default bookmarkProperty;
