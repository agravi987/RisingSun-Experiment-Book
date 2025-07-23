import connectDB from "@/lib/dbConnect";
import Experiment from "@/models/Experiment.model";

export async function GET() {
  try {
    await connectDB();
    const experiments = await Experiment.find().sort({ date: -1 });
    return Response.json({ success: true, data: experiments });
  } catch (err) {
    return Response.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();

    const experiment = await Experiment.create(body);
    return Response.json({ success: true, data: experiment }, { status: 201 });
  } catch (err) {
    return Response.json(
      { success: false, message: err.message },
      { status: 400 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    await connectDB();

    await Experiment.findByIdAndDelete(id);
    return Response.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    return Response.json(
      { success: false, message: err.message },
      { status: 400 }
    );
  }
}
