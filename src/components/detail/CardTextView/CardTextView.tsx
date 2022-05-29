import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {Props} from './types';

export const CardTextView: React.FC<Props> = props => {
  return (
    <View style={[styles.descriptionContainer, {height: props.height}]}>
      <Image
        style={styles.descriptionBackgroundImage}
        source={require('../../../assets/images/card_background.png')}
      />
      <View style={styles.childrenContainer}>{props.children}</View>
    </View>
  );
};
