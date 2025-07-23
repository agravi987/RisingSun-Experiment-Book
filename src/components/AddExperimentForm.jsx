"use client";

import { useState } from "react";
import axios from "axios";
import "@/styles/AddExperimentForm.css";
import { useRouter } from "next/navigation";

export default function AddExperimentForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    date: "",
    description: "",
    outcome: "",
    materials: [""],
    conductedBy: "",
    tags: [""],
    location: "",
    reviewed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleArrayChange = (index, name, value) => {
    const newArray = [...form[name]];
    newArray[index] = value;
    setForm({ ...form, [name]: newArray });
  };

  const handleAddField = (name) => {
    setForm({ ...form, [name]: [...form[name], ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/experiments", form);
      alert("Experiment added successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to add experiment.");
    }
  };

  return (
    <form className="experiment-form" onSubmit={handleSubmit}>
      <div className="back-button" onClick={() => router.back()}>
        ← Back
      </div>
      <label>Title*</label>
      <input name="title" value={form.title} onChange={handleChange} required />

      <label>Date*</label>
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />

      <label>Description*</label>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        required
      />

      <label>Outcome*</label>
      <textarea
        name="outcome"
        value={form.outcome}
        onChange={handleChange}
        required
      />

      <label>Materials</label>
      {form.materials.map((mat, i) => (
        <input
          key={i}
          value={mat}
          onChange={(e) => handleArrayChange(i, "materials", e.target.value)}
          placeholder={`Material ${i + 1}`}
        />
      ))}
      <button type="button" onClick={() => handleAddField("materials")}>
        + Add Material
      </button>

      <label>Conducted By</label>
      <input
        name="conductedBy"
        value={form.conductedBy}
        onChange={handleChange}
      />

      <label>Tags</label>
      {form.tags.map((tag, i) => (
        <input
          key={i}
          value={tag}
          onChange={(e) => handleArrayChange(i, "tags", e.target.value)}
          placeholder={`Tag ${i + 1}`}
        />
      ))}
      <button type="button" onClick={() => handleAddField("tags")}>
        + Add Tag
      </button>

      <label>Location</label>
      <input name="location" value={form.location} onChange={handleChange} />

      <label>Reviewed</label>
      <input
        type="checkbox"
        name="reviewed"
        checked={form.reviewed}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
