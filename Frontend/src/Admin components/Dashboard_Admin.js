import React from 'react';

const Dashboard_Admin = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat-box">
          <h2>Total Users</h2>
          <p>100</p>
        </div>
        <div className="stat-box">
          <h2>Orders</h2>
          <p>50</p>
        </div>
        <div className="stat-box">
          <h2>Revenue</h2>
          <p>$5000</p>
        </div>
      </div>
      {/* Additional content goes here */}
    </div>
  );
};

export default Dashboard_Admin;
