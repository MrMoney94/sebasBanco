import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export const widthSize = width;

export const heightSize = height;

export const FontSize = (size: number) => {
  return PixelRatio.getFontScale() * size;
};
