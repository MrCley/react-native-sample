import { Character, Episode } from "../context/types";

export type RootStackParamList = {
    ListScreen: undefined;
    CharacterDetailScreen: {characterDetails: Character};
    EpisodeDetailScreen: {episodeDetails: Episode};
  };

  