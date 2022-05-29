import {StyleSheet} from 'react-native';
import { COLORS } from '../../../constants';

export const styles = StyleSheet.create({
  descriptionContainer: {
    marginTop: '6.5%',
    backgroundColor: COLORS.background,
    width: '95%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 4,
    alignItems: 'center',
  },
  descriptionBackgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.05,
  },
  childrenContainer: {padding: '4%', width: '100%'},
});
