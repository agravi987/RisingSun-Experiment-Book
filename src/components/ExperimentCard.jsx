// components/ExperimentCard.jsx
import React from "react";
import "./../styles/ExperimentCard.css";
import Link from "next/link";

const ExperimentCard = ({ experiment }) => {
  return (
    <Link href={`/experiments/${experiment._id}`}>
      <div className="experiment-card">
        <h3>{experiment.title}</h3>
        <p className="experiment-date">
          {new Date(experiment.date).toLocaleDateString()}
        </p>
        <p className="experiment-summary">
          {experiment.description.slice(0, 100)}...
        </p>
      </div>
    </Link>
  );
};

export default ExperimentCard;
