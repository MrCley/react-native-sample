import React, {useState, useEffect} from 'react';
import {getEpisodes} from './src/services/rickAndMortyApi';
import Context from './src/context/Context';
import {CHARACTERS} from './src/constants';
import {MainRoute} from './src/routes/MainRoute';
import {Episode} from './src/context/types';
import SplashScreen from 'react-native-splash-screen';

function App() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    getEpisodes(setEpisodes).then(() => {
      SplashScreen.hide();
    });
  }, []);

  return (
    <Context.Provider
      value={{
        episodes: episodes,
        characters: CHARACTERS,
      }}>
      <MainRoute />
    </Context.Provider>
  );
}

export default App;
