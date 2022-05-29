import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {marginTop: '3%'},
  touchable: {flexDirection: 'row', alignItems: 'center'},
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: '2%',
  },
  blurContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blur: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  name: { 
    padding: '2%',
    fontFamily: FONTS.general,
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 18,
  },
});