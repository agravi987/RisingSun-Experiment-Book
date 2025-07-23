"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ExperimentList from "@/components/ExperimentList";

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
        <div
          style={{
            backgroundColor: "#0a1725",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#9fc3e9",
            fontSize: "1.5rem",
            flexDirection: "column",
          }}
        >
          <div className="loader"></div>
          <p style={{ marginTop: "20px" }}>Loading Experiments...</p>
        </div>
      ) : (
        <ExperimentList experiments={experiments} />
      )}
    </div>
  );
};

export default AllExperimentsPage;
