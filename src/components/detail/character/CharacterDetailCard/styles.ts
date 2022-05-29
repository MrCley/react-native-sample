import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    padding: '5%',
    marginTop: '23%',
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: '95%',
    height: '40%',
    borderWidth: 4,
    marginTop: '5%',
  },
  nameText: {
    fontFamily: FONTS.general,
    fontSize: 18,
    fontWeight: 'bold',
    shadowColor: COLORS.textShadow,
    shadowOpacity: 0.25,
    shadowOffset: {height: 1, width: 1},
  },
  typeText: {
    fontFamily: FONTS.general,
    fontSize: 17,
    fontWeight: 'bold',
    shadowColor: COLORS.textShadow,
    shadowOpacity: 0.25,
    shadowOffset: {height: 1, width: 1},
  },
  idContainer: {
    zIndex: 1,
    top: '88%',
    left: '87%',
    position: 'absolute',
    backgroundColor: COLORS.background,
    width: '18%',
    height: '4.5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 4,
  },
  idText: {
    fontFamily: FONTS.general,
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusContainer: {
    position: 'absolute',
    left: '87%',
    top: '55%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  episodesText: {fontStyle: 'italic'},
  episodeListContainer: {
    height: '72%',
    shadowColor: COLORS.shadow,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
  },
});
