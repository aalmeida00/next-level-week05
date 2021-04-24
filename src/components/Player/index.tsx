import Image from 'next/image';
import { useContext } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
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

      <footer className={!episode ? s.empty : ''}>
        <div className={s.progress}>
          <span>00:00</span>
          <div className={s.slider}>
            {episode ? (
              <div>
                <Slider
                  trackStyle={{ backgroundColor: '#04d361' }}
                  railStyle={{ backgroundColor: '#9f75ff' }}
                  handleStyle={{ borderColor: '04d361', borderWidth: 4 }}
                />
              </div>
            ) : (
              <div className={s.emptySlider} />
            )}
          </div>
          <span>00:00</span>
        </div>

        {episode && <audio src={episode.url} autoPlay />}

        <div className={s.buttons}>
          <button type="button" disabled={!episode}>
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button type="button" className={s.playButton} disabled={!episode}>
            <img src="/play.svg" alt="Tocar" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/play-next.svg" alt="Tocar proximo" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
}
