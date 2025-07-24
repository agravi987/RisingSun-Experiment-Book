// /app/api/myexperiments/route.js

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import connectDB from "@/lib/dbConnect";
import Experiment from "@/models/Experiment.model";

export async function GET(req) {
  try {
    // Get session info
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { message: "Unauthorized: Please log in" },
        { status: 401 }
      );
    }

    await connectDB();

    // Find experiments where conductedBy matches logged-in user's email (or name if you prefer)
    const experiments = await Experiment.find({
      conductedBy: session.user.name,
    });

    return NextResponse.json({ success: true, data: experiments });
  } catch (error) {
    console.error("Error fetching user experiments:", error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
