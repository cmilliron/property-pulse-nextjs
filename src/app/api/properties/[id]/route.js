import connectDb from "@/config/database";
import Property from "@/models/PropetySchema";

export const GET = async (request, { params }) => {
  try {
    await connectDb();

    const property = await Property.findById(params.id);
    if (!property) {
      return new Response("Property Not Found", { status: 404 });
    }

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    return new Response("something went wrong", { status: 500 });
  }
};
