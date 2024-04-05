import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mogodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req: any) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json(
      { message: "User successfully registered " },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering " },
      { status: 500 }
    );
  }
}
