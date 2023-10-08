import { StyleSheet } from 'react-native';
import { hp, responsiveFontSize } from '../../utils/responsiveSizes';
import { MAIN_COLOR, WHITE } from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    width: hp(350),
    height: hp(50),
    backgroundColor: MAIN_COLOR,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: WHITE,
    fontWeight: '700',
    fontSize: responsiveFontSize(14),
  },
});
