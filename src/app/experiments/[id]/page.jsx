"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import ExperimentDetail from "@/components/ExperimentDetail";
import Loader from "@/components/Loader";

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

  if (loading) return <Loader content="Loading experiment details..." />;
  if (!experiment) return <p>Experiment not found.</p>;

  return <ExperimentDetail experiment={experiment} />;
};

export default ExperimentPage;
