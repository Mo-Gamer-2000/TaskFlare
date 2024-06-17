import Task from "@/app/(models)/Task"; // Ensure this path is correct and consistent
import { NextResponse } from "next/server"; // Import NextResponse from Next.js

/**
 * Handles the creation of a new task.
 * @param {Request} req - The HTTP request object.
 * @returns {Promise<NextResponse>} A JSON response indicating success or failure.
 */
export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body of the request
    const taskData = body.formData; // Extract task data from the request body

    await Task.create(taskData); // Create a new task with the provided data

    return NextResponse.json({ message: "Task Created" }, { status: 201 }); // Return a success response
  } catch (err) {
    console.error("Error creating task:", err); // Log the error for debugging
    return NextResponse.json(
      { message: "Error", error: err.message },
      { status: 500 }
    ); // Return an error response with a proper error message
  }
}

/**
 * Handles retrieving all tasks.
 * @returns {Promise<NextResponse>} A JSON response with the list of tasks or an error message.
 */
export async function GET() {
  try {
    const tasks = await Task.find(); // Retrieve all tasks from the database
    return NextResponse.json({ tasks }, { status: 200 }); // Return a success response with the tasks
  } catch (error) {
    console.error("Error retrieving tasks:", error); // Log the error for debugging
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    ); // Return an error response with a proper error message
  }
}
