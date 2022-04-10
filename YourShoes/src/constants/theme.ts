import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  black: '#1E1F20',
  white: '#FFFFFF',
  gray: '#6A6A6A',
  blue: '#0682FE',
  orange: '#E67E22',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h5, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
};

export const ICONS = {
  homeIcon: require('@src/assets/icons/icons8-smart-home-checked-50.png'),
  homeActiveIcon: require('@src/assets/icons/icons8-smart-home-checked-50-active.png'),
  shopFeedIcon: require('@src/assets/icons/icons8-copy-50.png'),
  shopFeedActiveIcon: require('@src/assets/icons/icons8-copy-50-feed-active.png'),
  accountIcon: require('@src/assets/icons/icons8-contacts-50.png'),
  accountActiveIcon: require('@src/assets/icons/icons8-contacts-50-active.png'),
  settingIcon: require('@src/assets/icons/icons8-cogwheel-64.png'),
  settingActiveIcon: require('@src/assets/icons/icons8-cogwheel-active.png'),
  notificationIcon: require('@src/assets/icons/icons8-jingle-bell-100.png'),
  notificationActiveIcon: require('@src/assets/icons/icons8-jingle-bell-100-active.png'),
};
