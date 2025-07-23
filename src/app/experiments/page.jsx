"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ExperimentList from "@/components/ExperimentList";
import Loader from "@/components/Loader";

const AllExperimentsPage = () => {
  const [experiments, setExperiments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiments = async () => {
      try {
        const res = await axios.get("/api/experiments");
        setExperiments(res.data.data);
      } catch (err) {
        console.error("Error fetching experiments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiments();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        All Experiments
      </h1>
      {loading ? (
        // Loader component or a simple loading message
        <Loader content="Loading experiments" />
      ) : (
        <ExperimentList experiments={experiments} />
      )}
    </div>
  );
};

export default AllExperimentsPage;
