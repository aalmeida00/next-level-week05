import Image from 'next/image';
import { useContext } from 'react';
import { playerContext } from '../../contexts/PlayerContext';
import s from './styles.module.scss';

export function Player() {
  const { episodeList, currentEpisodeIndex } = useContext(playerContext);

  const episode = episodeList[currentEpisodeIndex];

  return (
    <div className={s.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <div className={s.currentEpisode}>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={s.emptyPlayer}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <footer className={s.empty}>
        <div className={s.progress}>
          <span>00:00</span>
          <div className={s.slider}>
            <div className={s.emptySlider} />
          </div>
          <span>00:00</span>
        </div>
        <div className={s.buttons}>
          <button type="button">
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button type="button" className={s.playButton}>
            <img src="/play.svg" alt="Tocar" />
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="Tocar proximo" />
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
}
