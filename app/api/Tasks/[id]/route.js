import Task from "@/app/(models)/Task"; // Importing Task model from the specified path
import { NextResponse } from "next/server"; // Importing NextResponse from next/server for handling responses

/**
 * GET method for retrieving a task by ID.
 * @param {Object} req - The request object.
 * @param {Object} params - Parameters extracted from the request URL.
 * @returns {Object} NextResponse with JSON data and status code.
 */
export async function GET(req, { params }) {
  try {
    const { id } = params; // Extracting ID from parameters
    const foundTask = await Task.findOne({ _id: id }); // Finding task by ID in the database

    return NextResponse.json({ foundTask }, { status: 200 }); // Returning JSON response with found task and HTTP status 200
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 }); // Handling errors with HTTP status 500
  }
}

/**
 * DELETE method for deleting a task by ID.
 * @param {Object} req - The request object.
 * @param {Object} params - Parameters extracted from the request URL.
 * @returns {Object} NextResponse with JSON data and status code.
 */
export async function DELETE(req, { params }) {
  try {
    const { id } = params; // Extracting ID from parameters
    await Task.findByIdAndDelete(id); // Deleting task by ID in the database

    return NextResponse.json({ message: "Task Deleted" }, { status: 200 }); // Returning JSON response with success message and HTTP status 200
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 }); // Handling errors with HTTP status 500
  }
}

/**
 * PUT method for updating a task by ID.
 * @param {Object} req - The request object.
 * @param {Object} params - Parameters extracted from the request URL.
 * @returns {Object} NextResponse with JSON data and status code.
 */
export async function PUT(req, { params }) {
  try {
    const { id } = params; // Extracting ID from parameters
    const body = await req.json(); // Parsing JSON data from request body
    const taskData = body.formData; // Extracting formData from request body

    // Updating task by ID with updated data from formData
    const updateTaskData = await Task.findByIdAndUpdate(id, {
      ...taskData,
    });

    return NextResponse.json({ message: "Task Updated" }, { status: 200 }); // Returning JSON response with success message and HTTP status 200
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 }); // Handling errors with HTTP status 500
  }
}
