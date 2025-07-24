"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ExperimentList from "@/components/ExperimentList";
import Loader from "@/components/Loader";

const MyExperimentsPage = () => {
  const [myExperiments, setMyExperiments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyExperiments = async () => {
      try {
        const res = await axios.get("/api/myexperiments");
        setMyExperiments(res.data.data); // assuming data shape = { data: [...] }
      } catch (err) {
        console.error("Error fetching my experiments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyExperiments();
  }, []);

  return (
    <div className="my-experiments-container">
      <h1 className="heading">My Experiments</h1>
      {loading ? (
        <Loader content="Loading your experiments..." />
      ) : (
        <ExperimentList experiments={myExperiments} />
      )}
    </div>
  );
};

export default MyExperimentsPage;
