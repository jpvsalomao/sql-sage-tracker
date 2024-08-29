import React from 'react';
import { useParams } from 'react-router-dom';

const Challenge = () => {
  const { challengeId } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Challenge: {challengeId}</h1>
      {/* Add content for challenge */}
    </div>
  );
};

export default Challenge;