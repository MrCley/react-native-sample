import {ApolloClient, InMemoryCache} from '@apollo/client';
import {Character, Episode} from '../context/types';
import {
  episodesQuery,
  getCharacterByIdQuery,
  getEpisodeByIdQuery,
} from './queries';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const getEpisodes = async (setEpisodes: Function): Promise<void> => {
  let repisodes: Response[] = [];

  for (let page = 1; page < 4; page++) {
    try {
      let result = await client.query(episodesQuery(String(page)));
      repisodes = repisodes.concat(result.data.episodes.results);
    } catch (err) {
      console.log(err);
    }
  }
  setEpisodes(repisodes);
};

export const getCharacterById = async (id: string): Promise<Character> => {
  let character: Character = {
    id: '1',
    name: 'Morty Smith',
  };

  try {
    let response = await client.query(getCharacterByIdQuery(id));
    return response.data.charactersByIds[0];
  } catch (err) {
    console.log(err);
    return character;
  }
};

export const getEpisodeById = async (id: string): Promise<Episode> => {
  let episode: Episode = {
    id: '',
    name: '',
    air_date: '',
    episode: '',
    characters: [],
  };
  try {
    let response = await client.query(getEpisodeByIdQuery(id));
    return response.data.episodesByIds[0];
  } catch (err) {
    console.log(err);
    return episode;
  }
};
