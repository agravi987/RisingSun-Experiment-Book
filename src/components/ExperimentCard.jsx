"use client";

import React from "react";
import Link from "next/link";
import "./../styles/ExperimentCard.css";

const ExperimentCard = ({ experiment }) => {
  return (
    <Link href={`/experiments/${experiment._id}`} className="card-link">
      <div className="experiment-card">
        <div className="card-header">
          <h3>{experiment.title}</h3>
          <p className="experiment-date">
            {new Date(experiment.date).toLocaleDateString()}
          </p>
        </div>

        <p className="experiment-summary">
          {experiment.description.slice(0, 100)}...
        </p>

        <p className="experiment-conductedBy">
          <strong>Conducted By:</strong> {experiment.conductedBy || "Anonymous"}
        </p>

        <div className="view-detail-container">
          <Link href={`/experiments/${experiment._id}`} passHref>
            <button
              className="view-detail-btn"
              onClick={(e) => e.stopPropagation()}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ExperimentCard;
