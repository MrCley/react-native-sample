import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import SearchHeader from '../components/list/SearchHeader/SearchHeader';
import {EpisodeList} from '../components/list/episode/EpisodeList/EpisodeList';
import {styles} from './styles';

export const EpisodeListScreen: React.FC<{}> = () => {
  const [search, setSearch] = useState('');
  const [sortAscending, setSortAscending] = useState(true);

  return (
    <ImageBackground
      source={require('../assets/images/rickmortybackground.jpg')}
      style={styles.listContainer}>
      <SearchHeader
        episode={true}
        setParentSearch={setSearch}
        setParentSortAscending={setSortAscending}
      />
      <EpisodeList search={search} />
    </ImageBackground>
  );
};
