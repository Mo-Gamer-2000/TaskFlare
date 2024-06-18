const User = require("@/app/(models)/User");
const { NextResponse } = require("next/server");
const bcrypt = require("bcrypt");


export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    // Confirm Data Exists
    if (!userData?.email || !userData.password) {
      return NextResponse.json(
        { message: "All Fields Must Be Filled!" },
        { status: 400 }
      );
    }

    // Check For Duplicate Emails
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json(
        { message: "This Email Has Already Been Registered!" },
        { status: 409 }
      );
    }

    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;

    await User.create(userData);
    return NextResponse.json(
      { message: "User Has been Created!" },
      { status: 201 }
    );
  } catch (error) {
    console.log(err);
    return NextResponse.json(
      { message: "There Has Been An Error!", err },
      { status: 500 }
    );
  }
}
