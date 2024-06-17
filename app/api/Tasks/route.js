import Task from "@/app/(models)/Task";
import { NextResponse } from "next/server";

/**
 * POST method for creating a new task.
 * @param {Object} req - The request object.
 * @returns {Object} NextResponse with JSON data and status code.
 */
export async function POST(req) {
  try {
    const body = await req.json(); // Parsing JSON data from request body
    const taskData = body.formData; // Extracting formData from request body

    await Task.create(taskData); // Creating a new task in the database using Task.create()

    return NextResponse.json({ message: "Task Created" }, { status: 201 }); // Returning JSON response with success message and HTTP status 201 (Created)
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 }); // Handling errors with HTTP status 500
  }
}

/**
 * GET method for retrieving all tasks.
 * @returns {Object} NextResponse with JSON data and status code.
 */
export async function GET() {
  try {
    const tasks = await Task.find(); // Finding all tasks in the database using Task.find()

    return NextResponse.json({ tasks }, { status: 200 }); // Returning JSON response with tasks array and HTTP status 200
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 }); // Handling errors with HTTP status 500
  }
}
