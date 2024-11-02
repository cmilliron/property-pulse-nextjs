import connectDb from "@/config/database";
import Property from "@/models/PropetySchema";

export const GET = async (request) => {
  try {
    await connectDb();
    console.log("before fetch");
    const properties = await Property.find({});
    return new Response(JSON.stringify(properties, { status: 200 }));
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
