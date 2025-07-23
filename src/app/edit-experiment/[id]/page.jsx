"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import EditExperimentForm from "@/components/EditExperimentForm";
import Loader from "@/components/Loader";

const EditExperimentPage = () => {
  const { id } = useParams();
  const [experiment, setExperiment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiment = async () => {
      try {
        const { data } = await axios.get(`/api/experiments/${id}`);
        setExperiment(data.data);
      } catch (error) {
        console.error("Error fetching experiment:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchExperiment();
  }, [id]);

  if (loading) return <Loader content="Making Ready to Edit..." />;
  if (!experiment) return <p>Experiment not found.</p>;

  return <EditExperimentForm experiment={experiment} />;
};

export default EditExperimentPage;
