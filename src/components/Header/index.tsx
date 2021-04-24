import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import s from './styles.module.scss';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={s.headerContainer}>
      <img src="/logo.svg" alt="Podcastr logo" />
      <p>O melhor para voce ouvir, sempre</p>
      <span>{currentDate}</span>
    </header>
  );
}
