import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  textInput: {
    textAlign: 'center',
    color: COLORS.searchText,
    width: '60%',
  },
  searchBar: {
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingTop: '10%',
    paddingHorizontal: '10%',
  },
  touchable: {
    paddingLeft: '14%',
  },
});
