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
  biggest: 72,
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
  // TAB ICON
  homeIcon: require('@src/assets/icons/icons8-smart-home-checked-50.png'),
  homeActiveIcon: require('@src/assets/icons/icons8-smart-home-checked-50-active.png'),
  shopFeedIcon: require('@src/assets/icons/icons8-copy-50.png'),
  shopFeedActiveIcon: require('@src/assets/icons/icons8-copy-50-feed-active.png'),
  accountIcon: require('@src/assets/icons/icons8-contacts-50.png'),
  accountActiveIcon: require('@src/assets/icons/icons8-contacts-50-active.png'),
  liveIcon: require('@src/assets/icons/icons8-no-video-24.png'),
  liveActiveIcon: require('@src/assets/icons/icons8-no-video-active.png'),
  notificationIcon: require('@src/assets/icons/icons8-jingle-bell-100.png'),
  notificationActiveIcon: require('@src/assets/icons/icons8-jingle-bell-100-active.png'),

  // ONBOARDING ICON
  shoeIcon: require('@src/assets/icons/icons8-footwear-50.png'),
  shoppingBagIcon: require('@src/assets/icons/icons8-shopping-bag-50.png'),
  quickSearchIcon: require('@src/assets/icons/icons8-opera-glasses-50.png'),
  wishListIcon: require('@src/assets/icons/icons8-wish-list-50.png'),
  trackingOrderIcon: require('@src/assets/icons/icons8-truck-50.png'),
  alarmIcon: require('@src/assets/icons/icons8-add-reminder-50.png'),
  paymentIcon: require('@src/assets/icons/icons8-mastercard-credit-card-50.png'),
  appleIcon: require('@src/assets/icons/apple-logo.png'),
  nextIcon: require('@src/assets/icons/next.png'),
  backIcon: require('@src/assets/icons/left-arrow.png'),

  // SOCIAL NETWORK ICON
  google: require('@src/assets/icons/google.png'),
  apple: require('@src/assets/icons/apple.png'),
  facebook: require('@src/assets/icons/facebook.png')
};
