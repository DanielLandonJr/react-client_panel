import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h1 className="display-4">
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead">
        Sorry, this page is not available at this time or does not exist.
      </p>
    </div>
  );
};

export default NotFound;
