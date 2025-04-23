import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/plans')
      .then(res => setPlans(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {plans.map(plan => (
        <div key={plan.id} className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-bold">{plan.name}</h2>
          <p>{plan.description}</p>
          <p className="font-semibold">Price: ${plan.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;