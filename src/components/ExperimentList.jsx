"use client";

import React, { useState } from "react";
import ExperimentCard from "./ExperimentCard";
import AddNewExperimentCard from "./AddNewExperimentCard";
import "./../styles/ExperimentList.css";

const ExperimentList = ({ experiments }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const allTags = Array.from(
    new Set(experiments.flatMap((exp) => exp.tags || []))
  );

  const filteredExperiments = experiments.filter((exp) => {
    const matchesSearch =
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.outcome.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = selectedTag === "" || exp.tags?.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="experiment-container">
      <div className="search-filter-bar">
        <input
          type="text"
          placeholder="Search by title, description, or outcome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="">All Tags</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <div className="experiment-list">
        <AddNewExperimentCard />
        {filteredExperiments.map((exp) => (
          <ExperimentCard key={exp._id} experiment={exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperimentList;
