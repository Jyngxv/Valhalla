import React, { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";

function Count() {
  const [policy, setPetcount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPetcount = async () => {
      try {
        setError(null);
        setPetcount(null);
        setLoading(true);
        const response = await axios.get(
          "https://test.pood.pet/api/pood/main/policy"
        );
        setPetcount(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchPetcount();
  }, []);

  if (loading) return <div>Calling</div>;
  if (error) return <div>Error</div>;
  if (!policy) return null;

  return (
    <CountUp
      end={policy.saveFirstReviewPoint * 8}
      separator=","
      enableScrollSpy
      duration={1}
    />
  );
}

export default Count;
