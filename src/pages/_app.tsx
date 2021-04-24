import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { playerContext } from '../contexts/PlayerContext';

import '../styles/global.scss';

import s from '../styles/app.module.scss';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
  }

  return (
    <playerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        play,
      }}
    >
      <div className={s.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </playerContext.Provider>
  );
}

export default MyApp;
