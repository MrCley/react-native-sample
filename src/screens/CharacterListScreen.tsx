import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import SearchHeader from '../components/list/SearchHeader/SearchHeader';
import {CharacterList} from '../components/list/character/CharacterList/CharacterList';
import {styles} from './styles';

export const CharacterListScreen: React.FC<{}> = () => {
  const [search, setSearch] = useState('');
  const [sortAscending, setSortAscending] = useState(true);

  return (
    <ImageBackground
      source={require('../assets/images/rickmortybackground.jpg')}
      style={styles.listContainer}>
      <SearchHeader
        setParentSearch={setSearch}
        setParentSortAscending={setSortAscending}
      />
      <CharacterList search={search}  />
    </ImageBackground>
  );
};
