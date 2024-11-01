import connectDb from "@/config/database";

export const GET = async (request) => {
  try {
    await connectDb();

    return new Response(
      JSON.stringify({ result: "success", message: "Hello World" })
    );
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
