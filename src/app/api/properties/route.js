import connectDb from "@/config/database";

export const GET = async (request) => {
  try {
    await connectDb();

    const properties = await Property.find({});
    return new Response(
      JSON.stringify(JSON.stringify(properties, { status: 200 }))
    );
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
