import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AVATAR_URL} from '../../../../constants';
import {RootStackParamList} from '../../../../routes/types';
import {getCharacterById} from '../../../../services/rickAndMortyApi';
import {styles} from './styles';
import {Props} from './types';

export const CharacterListItem: React.FC<Props> = ({character}) => {
  let navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false); 

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={async () => {
          setLoading(true);
          getCharacterById(character.id).then(response => {
            setLoading(false);
            navigation.push('CharacterDetailScreen', {
              characterDetails: response,
            });
          });
        }}>
        <Image 
          style={styles.image}
          source={{
            uri: AVATAR_URL + character.id + '.jpeg',
          }}
        />
        <View style={styles.blurContainer}>
          <BlurView style={styles.blur} />
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.name}>{character.name}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
