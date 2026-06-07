import React from 'react';

const EmptyStateWrapper = ({ children, isEmpty }) => {
  if (isEmpty) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>No data available</p>
      </div>
    );
  }

  return children;
};

export default EmptyStateWrapper;