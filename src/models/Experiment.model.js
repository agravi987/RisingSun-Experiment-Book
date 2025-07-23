import mongoose from "mongoose";

const ExperimentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  outcome: {
    type: String,
    required: true,
  },
  materials: {
    type: [String], // Array of strings
    default: [],
  },
  conductedBy: {
    type: String,
    default: "Anonymous", // Optional field
  },
  tags: {
    type: [String], // Optional: for categorizing
    default: [],
  },
  location: {
    type: String, // Optional: lab name or room number
  },
  reviewed: {
    type: Boolean,
    default: false, // Whether reviewed by supervisor
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Avoid model overwrite error in dev
export default mongoose.models.Experiment ||
  mongoose.model("Experiment", ExperimentSchema);
