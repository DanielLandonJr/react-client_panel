import React from 'react';
import { Link } from 'react-router-dom';

const BackToDashboard = () => {
  return (
    <div>
      <Link to="/" className="btn btn-link">
        <i className="fas fa-arrow-circle-left" /> Back to Dashboard
      </Link>
    </div>
  );
};

export default BackToDashboard;
