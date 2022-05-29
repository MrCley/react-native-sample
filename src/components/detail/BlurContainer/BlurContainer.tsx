import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Props} from './types';

export const BlurContainer: React.FC<Props> = props => {
  return (
    <View style={[styles.container, {top: props.top}]}>
      <BlurView blurType="light" style={styles.blur} />
      {props.children}
    </View>
  );
};
