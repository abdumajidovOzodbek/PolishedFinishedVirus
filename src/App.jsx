import React, { useState } from 'react';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import EpisodeList from './components/EpisodeList';
import './App.css';

const App = () => {
  const [currentEpisode, setCurrentEpisode] = useState(0);

  const episodes = [
    {
      id: 8,
      title: 'Серия 8',
      url: 'https://fiber.cloud.obrut.stream/tvseries/8567c17ca4fad9afb7364855937ae2fdae6154f4/c3888bb74ebe496eb96a2dde18f3557a:2025012211/720.mp4:hls:manifest.m3u8',
    },
    {
      id: 7,
      title: 'Серия 7',
      url: 'https://apollo.cloud.obrut.stream/tvseries/871ace2f0ab82dc46c87e5dc99b98183f378ec74/43f4807b165c400f10605957eb519fef:2025012212/720.mp4:hls:manifest.m3u8',
    },
    {
      id: 6,
      title: 'Серия 6',
      url: 'https://baator.cloud.obrut.stream/tvseries/de8c65249ef87a7fc06b9d30a2f77036ff9987cf/8fefdfde03f3b7529663751645e3e166:2025012212/720.mp4:hls:manifest.m3u8',
    },
    {
      id: 5,
      title: 'Серия 5',
      url: 'https://maxima.cloud.obrut.stream/tvseries/b4395ecb314ded55997ae5884fefc862b9c36e98/a61567e34e4e2af04983641a73850bfe:2025012212/720.mp4:hls:manifest.m3u8',
    },
    {
      id: 4,
      title: 'Серия 4',
      url: 'https://silence.cloud.obrut.stream/tvseries/fa559bd946b76138d6b8bd90a232c046ef7aa990/5e8bdcd3d95939752fa3d0e676c7bbce:2025012212/720.mp4:hls:manifest.m3u8',
    },
    {
      id: 3,
      title: 'Серия 3',
      url: 'https://pulse.cloud.obrut.stream/tvseries/a697c7bdb78747dd14ef367651fb541059a0e855/b5b232e54bcf3d2f0868645e724a69c7:2025012212/720.mp4:hls:manifest.m3u8',
    },

    {
      id: 2,
      title: 'Серия 2',
      url: 'https://ranger.cloud.obrut.stream/tvseries/7ee4a1bc66c8a26c4bd14eea122c788f15805eb1/d6c38f41539e0caeebf9c37234945452:2025012212/720.mp4:hls:manifest.m3u8',
    },
    {
      id: 1,
      title: 'Серия 1',
      url: 'https://jointinum.cloud.obrut.stream/tvseries/5aa981aa5b9e197cc1107a0c596acd9c724a8774/796c325234f2d4be22d74b1446305cef:2025012212/720.mp4:hls:manifest.m3u8',
    },

  
  ];
  const sortedEpisodes = episodes.sort((a, b) => a.id - b.id);


  return (
    <div className="App">
      <Header title="Шоу восьми / The 8 Show" />
      <div className="main-content">
        <VideoPlayer episodeUrl={sortedEpisodes[currentEpisode].url} />
        <EpisodeList 
          episodes={sortedEpisodes} 
          setCurrentEpisode={setCurrentEpisode} 
          currentEpisode={currentEpisode}
        />
      </div>
    </div>
  );
};

export default App;
