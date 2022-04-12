import React from 'react';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [data, setData] = useState();

  //store in services and store link in env
  const fetchData = async (e) => {
    const res = await fetch('http://localhost:5000/api/users/me', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
