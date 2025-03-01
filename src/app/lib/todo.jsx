import mongoose from 'mongoose'


const TodoSchema = new mongoose.Schema({
    userId: { type: String, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    category: { type: String, require: true },
    priority: { type: String, require: true },
    completed: { type: Boolean, default: false }
})

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
