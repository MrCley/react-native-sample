import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/types';
import {COLORS} from '../../../constants';

export const HomeButton: React.FC<{}> = () => {
  let navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ListScreen');
      }}>
      <Text>
        <Icon name={'home'} size={30} color={COLORS.icon} />
      </Text>
    </TouchableOpacity>
  );
};
