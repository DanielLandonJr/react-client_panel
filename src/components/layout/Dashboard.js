import React from 'react';

// components
import Clients from '../clients/Clients';
import Sidebar from '../layout/Sidebar';

const Dashboard = () => {
  return (
    <div className="row mt-4">
      <div className="col-md-10">
        <Clients />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
