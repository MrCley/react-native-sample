import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';

export const styles = StyleSheet.create({
  statusText: {
    fontSize: 24,
    fontFamily: FONTS.stamp,
    position: 'absolute',
    transform: [{rotate: '30deg'}],
  },
});
