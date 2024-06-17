import mongoose, { Schema } from "mongoose";

// Establish a connection to the MongoDB database using the connection string from environment variables
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Use native JavaScript promises with mongoose
mongoose.Promise = global.Promise;

// Define the schema for the Task model
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    priority: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

// Create or retrieve the Task model
const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
