import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import Todo from "@/app/lib/todo";
import connectDB from "@/app/lib/db";

export async function GET(req) {
  await connectDB();

  const session = await getServerSession(authOptions);
  console.log("SESSION:", session); // Tambahkan log ini

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const todos = await Todo.find({ userId: session.user.id });
  return NextResponse.json(todos);
}
