"use server";
import cloudinary from "@/config/cloudinary";
import connectDb from "@/config/database";
import Property from "@/models/PropetySchema";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteProperty(propertyId) {
  const { user, userId } = await getSessionUser();
  if (!user || !userId) {
    throw new Error("User ID is required");
  }

  const property = await Property.findById(propertyId);

  if (!property) throw new Error("Property Not Found");

  // Verify ownership
  if (property.owner.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  //Extract public ID from image URLS
  const imagePublicIds = property.images.map((imageUrl) => {
    const parts = imageUrl.split("/");
    return parts.at(-1).split(".").at(0);
  });

  // Delete images from Cloudinary
  if (imagePublicIds.length > 0) {
    for (let publicId of imagePublicIds) {
      const result = await cloudinary.uploader.destroy(
        "propertypulse/" + publicId
      );
      console.log(result);
      console.log(`Image delete. id: ${publicId}`);
    }
  }
  await property.deleteOne();

  revalidatePath("/", "layout");
}

export default deleteProperty;
