import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View} from 'react-native';
import BackButton from '../BackButton/BackButton';
import {HomeButton} from '../HomeButton/HomeButton';
import {styles} from './styles';

export const NavigationHeader: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <BlurView blurType="regular" style={styles.blur} />
      <BackButton />
      <HomeButton />
    </View>
  );
};
