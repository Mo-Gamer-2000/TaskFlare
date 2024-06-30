import User from "@/app/(models)/User";
const { NextResponse } = require("next/server");
const bcrypt = require("bcrypt");

// Define the POST function to handle user registration requests
export async function POST(req) {
  try {
    // Parse the request body to get the user data
    const body = await req.json();
    const userData = body.formData;

    // Confirm Data Exists: Check if email and password fields are present
    if (!userData?.email || !userData.password) {
      return NextResponse.json(
        { message: "All Fields Must Be Filled!" }, // Return error message if fields are missing
        { status: 400 } // Set HTTP status code to 400 (Bad Request)
      );
    }

    // Check For Duplicate Emails: Search for existing user with the same email
    const duplicate = await User.findOne({ email: userData.email })
      .lean() // Optimize query performance by returning plain JavaScript object
      .exec(); // Execute the query

    // If a user with the same email is found, return a conflict response
    if (duplicate) {
      return NextResponse.json(
        { message: "This Email Has Already Been Registered!" }, // Return error message for duplicate email
        { status: 409 } // Set HTTP status code to 409 (Conflict)
      );
    }

    // Hash the user's password using bcrypt with a salt rounds of 10
    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword; // Replace the plain password with the hashed password

    // Create a new user with the provided data
    await User.create(userData);
    return NextResponse.json(
      { message: "User Has been Created!" }, // Return success message
      { status: 201 } // Set HTTP status code to 201 (Created)
    );
  } catch (error) {
    // Log the error to the console for debugging purposes
    console.log(error);
    return NextResponse.json(
      { message: "There Has Been An Error!", error }, // Return error message
      { status: 500 } // Set HTTP status code to 500 (Internal Server Error)
    );
  }
}
