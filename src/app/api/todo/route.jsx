import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";

// GET - Ambil semua dokumen To-Do
export async function GET(req) {
  const { db } = await connectDB();
  const todos = await db.collection("todos").find({}).toArray();
  return NextResponse.json(todos);
}

// POST - Buat To-Do baru
export async function POST(req) {
  const { db } = await connectDB();
  console.log(db);
  const data = await req.json(); // misal: { title: "Belajar Next.js", description: "CRUD dengan MongoDB" }

  if (!data.title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const newTodo = {
    // title: data.title,
    // description: data.description || "",
    // completed: false,
    createdAt: new Date(),
    ...data,
  };

  const result = await db.collection("todo").insertOne(newTodo);
  return NextResponse.json(result.ops ? result.ops[0] : newTodo, {
    status: 201,
  });
}

// PUT - Update To-Do (misal: mengubah status completed atau update konten)
export async function PUT(req) {
  const { db } = await connectDB();
  const { id, ...updateData } = await req.json();

  if (!id) {
    return NextResponse.json(
      { error: "ID is required for update" },
      { status: 400 }
    );
  }

  const result = await db
    .collection("todos")
    .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

  return NextResponse.json(result);
}

// DELETE - Hapus To-Do
export async function DELETE(req) {
  const { db } = await connectDB();
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json(
      { error: "ID is required for deletion" },
      { status: 400 }
    );
  }

  const result = await db
    .collection("todos")
    .deleteOne({ _id: new ObjectId(id) });
  return NextResponse.json(result);
}
