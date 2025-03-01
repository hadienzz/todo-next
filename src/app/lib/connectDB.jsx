import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI; // pastikan ada di .env.local
let client;
let clientPromise;

if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function connectDB() {
  const client = await clientPromise;

  const db = client.db("ToDoList");
  return { client, db };
}