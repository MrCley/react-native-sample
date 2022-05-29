import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../constants';

export const BackButton: React.FC<{}> = () => {
  let navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Text>
        <Icon name={'caret-left'} size={30} color={COLORS.icon} />
      </Text>
    </TouchableOpacity>
  );
};

export default BackButton;
