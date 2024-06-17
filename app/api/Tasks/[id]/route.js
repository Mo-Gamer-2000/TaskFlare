import Task from "@/app/(models)/Task"; // Ensure this path is correct and consistent
import { NextResponse } from "next/server"; // Import NextResponse from Next.js

/**
 * Handles retrieving a task by its ID.
 * @param {Request} req - The HTTP request object.
 * @param {Object} context - The request context.
 * @param {Object} context.params - The route parameters.
 * @returns {Promise<NextResponse>} A JSON response with the found task or an error message.
 */
export async function GET(req, { params }) {
  try {
    const { id } = params; // Destructure the id from params
    const foundTask = await Task.findOne({ _id: id }); // Find the task by ID

    if (!foundTask) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ foundTask }, { status: 200 }); // Return the found task
  } catch (error) {
    console.error("Error retrieving task:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Error retrieving task", error: error.message },
      { status: 500 }
    ); // Return an error response
  }
}

/**
 * Handles deleting a task by its ID.
 * @param {Request} req - The HTTP request object.
 * @param {Object} context - The request context.
 * @param {Object} context.params - The route parameters.
 * @returns {Promise<NextResponse>} A JSON response indicating success or failure.
 */
export async function DELETE(req, { params }) {
  try {
    const { id } = params; // Destructure the id from params
    const deletedTask = await Task.findByIdAndDelete(id); // Delete the task by ID

    if (!deletedTask) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Task Deleted" }, { status: 200 }); // Return a success response
  } catch (error) {
    console.error("Error deleting task:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Error deleting task", error: error.message },
      { status: 500 }
    ); // Return an error response
  }
}

/**
 * Handles updating a task by its ID.
 * @param {Request} req - The HTTP request object.
 * @param {Object} context - The request context.
 * @param {Object} context.params - The route parameters.
 * @returns {Promise<NextResponse>} A JSON response indicating success or failure.
 */
export async function PUT(req, { params }) {
  try {
    const { id } = params; // Destructure the id from params
    const body = await req.json(); // Parse the JSON body of the request
    const taskData = body.formData; // Extract task data from the request body

    const updatedTask = await Task.findByIdAndUpdate(id, taskData, {
      new: true,
    }); // Update the task by ID and return the new document

    if (!updatedTask) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Task Updated", task: updatedTask },
      { status: 200 }
    ); // Return a success response
  } catch (error) {
    console.error("Error updating task:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Error updating task", error: error.message },
      { status: 500 }
    ); // Return an error response
  }
}
