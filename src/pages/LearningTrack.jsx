import React from 'react';
import { useParams } from 'react-router-dom';

const LearningTrack = () => {
  const { trackId } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Learning Track: {trackId}</h1>
      {/* Add content for learning track */}
    </div>
  );
};

export default LearningTrack;