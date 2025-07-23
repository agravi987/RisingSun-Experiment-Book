// components/ExperimentDetail.jsx
"use client"; // Required for hooks in App Router

import React from "react";
import { useRouter } from "next/navigation";
import "./../styles/ExperimentDetail.css";

const ExperimentDetail = ({ experiment }) => {
  const router = useRouter();

  return (
    <div className="experiment-detail-container">
      <div className="back-button" onClick={() => router.back()}>
        ← Back
      </div>

      <h1>{experiment.title}</h1>

      <p className="detail-date">
        <strong>Date:</strong> {new Date(experiment.date).toLocaleDateString()}
      </p>
      <p>
        <strong>Conducted By:</strong> {experiment.conductedBy}
      </p>
      <p>
        <strong>Location:</strong> {experiment.location || "Not specified"}
      </p>
      <p>
        <strong>Reviewed:</strong> {experiment.reviewed ? "Yes" : "No"}
      </p>

      <div className="detail-section">
        <h3>Description</h3>
        <p>{experiment.description}</p>
      </div>

      <div className="detail-section">
        <h3>Outcome</h3>
        <p>{experiment.outcome}</p>
      </div>

      <div className="detail-section">
        <h3>Materials</h3>
        <ul>
          {experiment.materials?.map((mat, idx) => (
            <li key={idx}>{mat}</li>
          ))}
        </ul>
      </div>

      <div className="detail-section">
        <h3>Tags</h3>
        <div className="tag-container">
          {experiment.tags?.map((tag, idx) => (
            <span className="tag" key={idx}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperimentDetail;
