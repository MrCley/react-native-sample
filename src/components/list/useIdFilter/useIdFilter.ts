import {Character, Episode} from '../../../context/types';

export const useIdFilter = (
  episodes: Episode[],
  characterId: string | undefined,
): Episode[] =>
  characterId === undefined
    ? episodes
    : episodes.filter((episode: Episode) =>
        episode.characters?.some((item: Character) => item.id === characterId),
      );
