"use server";

import { ObjectId } from "mongodb";
import { connectDB } from "./connectDB";

export async function getTaskById(id) {
    try {
        const { db } = await connectDB()
        const task = await db.collection('todo').findOne({ _id: new ObjectId(id) })

        return {
            ...task,
            _id: task._id.toString(), // Convert ObjectId to string
            createdAt: task.createdAt.toISOString(), // Convert Date to ISO string
        };
    } catch (error) {
        console.error('failed to get detail')
        return null
    }
}