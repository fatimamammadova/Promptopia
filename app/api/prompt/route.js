import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import { unstable_noStore as noStore } from "next/cache";
export const GET = async (request) => {
  try {
    noStore();
    await connectToDB();
    const prompts = await Prompt.find().populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
