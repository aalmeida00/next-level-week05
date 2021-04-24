import s from './styles.module.scss';

export function Player() {
  return (
    <div className={s.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>
      <div className={s.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>
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
