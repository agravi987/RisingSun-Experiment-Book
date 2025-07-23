import connectDB from "@/lib/dbConnect";
import Experiment from "@/models/Experiment.model";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const experiment = await Experiment.findById(params.id);
    if (!experiment) {
      return NextResponse.json(
        { success: false, message: "Experiment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: experiment });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();

    const updatedExperiment = await Experiment.findByIdAndUpdate(
      params.id,
      body,
      {
        new: true, // return the updated doc
        runValidators: true, // ensure validation is applied
      }
    );

    if (!updatedExperiment) {
      return NextResponse.json(
        { success: false, message: "Experiment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updatedExperiment });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 400 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const deleted = await Experiment.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Experiment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 400 }
    );
  }
}
