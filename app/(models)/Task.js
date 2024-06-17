import mongoose, { Schema } from "mongoose"; // Importing mongoose and Schema from mongoose library

mongoose.connect(process.env.MONGODB_URI); // Connecting to MongoDB database using MONGODB_URI from environment variables
mongoose.Promise = global.Promise; // Setting Mongoose to use global Promise implementation

// Defining the schema for the Task model
const taskSchema = new Schema(
  {
    title: String, // Title of the task (type: String)
    description: String, // Description of the task (type: String)
    category: String, // Category of the task (type: String)
    priority: Number, // Priority of the task (type: Number)
    progress: Number, // Progress of the task (type: Number)
    status: String, // Status of the task (type: String)
    active: Boolean, // Boolean flag indicating if the task is active (type: Boolean)
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields to documents
  }
);

// Creating the Task model based on taskSchema
const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task; // Exporting Task model as default
