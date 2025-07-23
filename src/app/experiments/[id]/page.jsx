"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import ExperimentDetail from "@/components/ExperimentDetail";

const ExperimentPage = () => {
  const { id } = useParams();
  const [experiment, setExperiment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiment = async () => {
      try {
        const { data } = await axios.get(`/api/experiments/${id}`);
        console.log("Fetched experiment data:", data);
        setExperiment(data.data);
      } catch (error) {
        console.error("Failed to fetch experiment:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchExperiment();
  }, [id]);

  if (loading)
    return (
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
        <p style={{ marginTop: "20px" }}>Loading Experiment Detail...</p>
      </div>
    );
  if (!experiment) return <p>Experiment not found.</p>;

  return <ExperimentDetail experiment={experiment} />;
};

export default ExperimentPage;
