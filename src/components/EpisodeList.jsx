import React from 'react';

const EpisodeList = ({ episodes, setCurrentEpisode, currentEpisode }) => {
  return (
    <div className="episode-list">
      <h2>Episodes</h2>
      <ul>
        {episodes.map((episode, index) => (
          <li 
            key={episode.id} 
            className={currentEpisode === index ? 'active' : ''}
            onClick={() => setCurrentEpisode(index)}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
