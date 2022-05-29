import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    marginBottom: '4.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blur: {
    borderRadius: 5,
    position: 'absolute',
    width: '100%',
    padding: '5%',
  },
  seasonText: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontFamily: FONTS.general,
    fontSize: 18,
  },
});
