import { PixelRatio, Dimensions } from 'react-native';
import { I18nManager } from 'react-native';
const { isRTL } = I18nManager;
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const dimensionPercentToDP = (valuePercent: number, dimensionValue: number) =>
  PixelRatio.roundToNearestPixel(
    (dimensionValue * Number(valuePercent.toFixed(5))) / 100
  );

const wp = (width: number) => {
  const widthPercent = (width / 375) * 100;
  return dimensionPercentToDP(widthPercent, SCREEN_WIDTH);
};

const hp = (height: number) => {
  const heightPercent = (height / 813) * 100;
  return dimensionPercentToDP(heightPercent, SCREEN_HEIGHT);
};

const responsiveFontSize = (fontSize: number) => {
  if (!isRTL) {
    return PixelRatio.roundToNearestPixel(fontSize / PixelRatio.getFontScale());
  }
  return (
    PixelRatio.roundToNearestPixel(fontSize / PixelRatio.getFontScale()) - 2
  );
};

export { wp, hp, responsiveFontSize };
