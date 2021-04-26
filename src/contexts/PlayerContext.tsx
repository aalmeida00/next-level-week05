import { createContext, ReactNode, useState } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  playList: (list: Episode[], index: number) => void;
  setPlayingState: (state: boolean) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrev: () => void;
};

type PlayerContextProviderProps = {
  children: ReactNode;
};

export const playerContext = createContext({} as PlayerContextData);

export function PlayerContextProvider({
  children,
}: PlayerContextProviderProps) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list: Episode[], index: number) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function playNext() {
    const nextEpisodeIndex = currentEpisodeIndex + 1;

    if (nextEpisodeIndex < episodeList.length) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrev() {
    const prevEpisodeIndex = currentEpisodeIndex - 1;

    if (prevEpisodeIndex >= 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
    <playerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        playList,
        play,
        playNext,
        playPrev,
        togglePlay,
        setPlayingState,
      }}
    >
      {children}
    </playerContext.Provider>
  );
}
