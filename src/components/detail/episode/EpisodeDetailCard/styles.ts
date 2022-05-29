import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: '17%',
    paddingHorizontal: '3%',
    height: '100%',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  headerText: {
    letterSpacing: 0.5,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: FONTS.general,
  },
  descriptionContainer: {
    height: '100%',
    paddingTop: '10%',
  },
  charactersContainer: {
    height: '80.5%',
    marginTop: '2%',
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: COLORS.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    elevation: 4,
  },
  charactersText: {fontStyle: 'italic'},
});
