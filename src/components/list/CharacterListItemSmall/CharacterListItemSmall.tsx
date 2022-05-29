import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {AVATAR_URL} from '../../../constants';
import {RootStackParamList} from '../../../routes/types';
import {getCharacterById} from '../../../services/rickAndMortyApi';
import {styles} from './styles';
import {Props} from './types';

export const CharacterListItemSmall: React.FC<Props> = ({character}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setLoading(true);
        getCharacterById(character.id).then(response => {
          setLoading(false);
          navigation.push('CharacterDetailScreen', {
            characterDetails: response,
          });
        });
      }}
      style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: AVATAR_URL + character.id + '.jpeg',
        }}>
        <View style={styles.blurContainer}>
          <BlurView style={styles.blurView} />
          <Text style={styles.nameText}>
            {loading ? <ActivityIndicator /> : character.name}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
