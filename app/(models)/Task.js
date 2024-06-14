import mongoose, { Schema } from "mongoose";
import { global } from "styled-jsx/css";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.models.Task || mongoose.Model("Task", taskSchema);
export default Task;
