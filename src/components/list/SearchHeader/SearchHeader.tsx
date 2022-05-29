import {BlurView} from '@react-native-community/blur';
import React, {useContext, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../constants';
import Context from '../../../context/Context';
import {styles} from './styles';
import {Props} from './types';

const SearchHeader: React.FC<Props> = ({
  setParentSearch,
  episode,
  setParentSortAscending,
}) => {
  const [search, setSearch] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const context = useContext(Context);

  return (
    <View style={styles.container}>
      <BlurView
        style={styles.blurView}
        blurType="regular"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.textInput}
          value={search}
          onChangeText={text => {
            setSearch(text);
            setParentSearch(text);
          }}
          placeholder={'Search'}
          placeholderTextColor={COLORS.placeceholder}
        />
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            setSortAscending(!sortAscending);
            setParentSortAscending(!sortAscending);
            episode ? context.episodes.reverse() : context.characters.reverse();
          }}>
          <Text>
            <Icon
              name={
                sortAscending
                  ? episode
                    ? 'sort-numeric-asc'
                    : 'sort-alpha-asc'
                  : episode
                  ? 'sort-numeric-desc'
                  : 'sort-alpha-desc'
              }
              size={25}
              color={COLORS.icon}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchHeader;
