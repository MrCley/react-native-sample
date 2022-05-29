import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants';

export const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%',
    height: 40,
  },
  blurContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    height: '100%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  episodeNumberBlur: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  episodeNumber: {
    fontFamily: FONTS.general,
    fontSize: 18,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  episodeNameBlur: {
    borderRadius: 5,
    position: 'absolute',
    width: '84%',
    height: '100%',
    left: '16%',
  },
  episodeNameContainer: {
    width: '70%',
    overflow: 'hidden',
    marginLeft: '6%',
  },
  episodeName: {
    fontFamily: FONTS.general,
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  activityIndicator: {
    paddingRight: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
