import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden',
    margin: '1%',
  },
  blurContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  nameText: {
    paddingHorizontal: '5%',
    fontFamily: FONTS.general,
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  image: {width: 140, height: 140},
});
