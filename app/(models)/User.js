// Import mongoose and Schema from mongoose package
import mongoose, { Schema } from "mongoose";
// Import global from styled-jsx/css for global promise
import { global } from "styled-jsx/css";

// Connect to MongoDB using the URI stored in environment variables
mongoose.connect(process.env.MONGODB_AUTH_URI);
// Set mongoose to use global Promise for asynchronous operations
mongoose.Promise = global.Promise;

// Define the schema for the User model
const userSchema = new Schema(
  {
    name: String, // User's name
    email: String, // User's email
    password: String, // User's password (hashed)
  },
  {
    timestamps: true, // Automatically include createdAt and updatedAt fields
  }
);

// Check if the User model already exists in mongoose models to avoid re-compiling it
const User = mongoose.models.User || mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
export default User;
