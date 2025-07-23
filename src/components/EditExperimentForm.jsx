// components/EditExperimentForm.jsx
"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "./../styles/EditExperimentForm.css";

const EditExperimentForm = ({ experiment }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: experiment.title,
    date: experiment.date,
    conductedBy: experiment.conductedBy,
    location: experiment.location,
    reviewed: experiment.reviewed,
    description: experiment.description,
    outcome: experiment.outcome,
    materials: experiment.materials.join(", "),
    tags: experiment.tags.join(", "),
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedExperiment = {
      ...formData,
      materials: formData.materials.split(",").map((m) => m.trim()),
      tags: formData.tags.split(",").map((t) => t.trim()),
    };

    try {
      await axios.put(`/api/experiments/${experiment._id}`, updatedExperiment);
      router.push(`/experiments/${experiment._id}`);
    } catch (error) {
      console.error("Failed to update experiment", error);
      alert("Update failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <h2>Edit Experiment</h2>
      <div className="back-button" onClick={() => router.back()}>
        ← Back
      </div>

      <label>Title:</label>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date.slice(0, 10)}
        onChange={handleChange}
        required
      />

      <label>Conducted By:</label>
      <input
        name="conductedBy"
        value={formData.conductedBy}
        onChange={handleChange}
        required
      />

      <label>Location:</label>
      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
      />

      <label>Reviewed:</label>
      <input
        type="checkbox"
        name="reviewed"
        checked={formData.reviewed}
        onChange={handleChange}
      />

      <label>Description:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label>Outcome:</label>
      <textarea
        name="outcome"
        value={formData.outcome}
        onChange={handleChange}
        required
      />

      <label>Materials (comma-separated):</label>
      <input
        name="materials"
        value={formData.materials}
        onChange={handleChange}
      />

      <label>Tags (comma-separated):</label>
      <input name="tags" value={formData.tags} onChange={handleChange} />

      <button type="submit">Update Experiment</button>
    </form>
  );
};

export default EditExperimentForm;
