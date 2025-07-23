// components/ExperimentList.jsx
import React from "react";
import ExperimentCard from "./ExperimentCard";
import AddNewExperimentCard from "./AddNewExperimentCard";
import "./../styles/ExperimentList.css";

const ExperimentList = ({ experiments }) => {
  return (
    <div className="experiment-list">
      <AddNewExperimentCard />
      {experiments.map((exp) => (
        <ExperimentCard key={exp._id} experiment={exp} />
      ))}
    </div>
  );
};

export default ExperimentList;
