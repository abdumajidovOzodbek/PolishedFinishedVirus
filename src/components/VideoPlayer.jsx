import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ episodeUrl }) => {
  return (
    <div className="video-player">
      <ReactPlayer 
        url={episodeUrl} 
        controls 
        width="100%" 
        height="100%" 
      />
    </div>
  );
};

export default VideoPlayer;
