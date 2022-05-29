import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 4,
  },
  blur: {width: '100%', height: '100%', position: 'absolute'},
});
