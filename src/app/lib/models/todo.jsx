import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  userId: { type: String, require: true },
  id: { type: String, require: true },
  title: { type: String, require: true },
  description: { type: String, require: true },
  category: { type: String, require: true },
  priority: { type: Number, require: true },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

export default Todo;
