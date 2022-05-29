import {createContext} from 'react';
import {Character, Episode} from './types';

const Context = createContext<{characters: Character[]; episodes: Episode[]}>({
  characters: [],
  episodes: [],
});

export default Context;
