// /app/add-experiment/page.jsx
"use client";

import AddExperimentForm from "@/components/AddExperimentForm";

export default function AddExperimentPage() {
  return (
    <div className="add-experiment-page">
      <h1 style={{ color: "#ffffff", textAlign: "center" }}>
        Add New Experiment
      </h1>
      <AddExperimentForm />
    </div>
  );
}
