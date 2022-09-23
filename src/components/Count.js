import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';

function Count() {
  const [petCount, setPetcount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPetcount = async () => {
      try {
        setError(null);
        setPetcount(null);
        setLoading(true);
        const response = await axios.get('https://poodone.com/api/pood/main/home/pet-total-count');
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
  if (!petCount) return null;

  return <CountUp end={(petCount.dogCount + petCount.catCount) * 10} separator="," enableScrollSpy duration={1.5} />;
}

export default Count;
