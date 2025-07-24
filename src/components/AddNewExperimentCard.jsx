"use client";
// components/AddNewExperimentCard.jsx
import React from "react";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import "./../styles/ExperimentCard.css"; // Reusing existing styles

const AddNewExperimentCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/add-experiment");
  };

  return (
    <div className="experiment-card add-new-card" onClick={handleClick}>
      <div className="add-icon">
        <FaPlus size={40} />
      </div>
      <h3 style={{ textAlign: "center" }}>Add New Experiment</h3>
    </div>
  );
};

export default AddNewExperimentCard;
