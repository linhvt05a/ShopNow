import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ICONS, SIZES} from '@src/constants/theme';
import DashBoard from '@src/features/dashBoard/screens';
import Account from '@src/screens/Account';
import Notification from '@src/screens/Notification';
import Settings from '@src/screens/Settings';
import ShopFeed from '@src/screens/ShopFeed';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Tab = createBottomTabNavigator();
export default function RootTab() {
  return (
    <Tab.Navigator tabBar={props => <CustomTabar {...props} />}>
      <Tab.Screen name="Home" component={DashBoard} />
      <Tab.Screen name="ShopFeed" component={ShopFeed} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

const CustomTabar = (props: any) => {
  return (
    <View style={styles.containerTab}>
      {props.state.routes.map((route: any, index: number) => {
        const {options} = props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = props.state.index === index;
        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            props.navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const renderIcon = () => {
          const homeIcon = isFocused ? ICONS.homeActiveIcon : ICONS.homeIcon;
          const settingIcon = isFocused
            ? ICONS.settingActiveIcon
            : ICONS.settingIcon;
          const shopFeedIcon = isFocused
            ? ICONS.shopFeedActiveIcon
            : ICONS.shopFeedIcon;
          const notiIcon = isFocused
            ? ICONS.notificationActiveIcon
            : ICONS.notificationIcon;
          const accountIcon = isFocused
            ? ICONS.accountActiveIcon
            : ICONS.accountIcon;
          switch (route.name) {
            case 'Home':
              return <Image source={homeIcon} style={styles.iconTab} />;
            case 'Settings':
              return <Image source={settingIcon} style={styles.iconTab} />;
            case 'ShopFeed':
              return <Image source={shopFeedIcon} style={styles.iconTab} />;
            case 'Notification':
              return <Image source={notiIcon} style={styles.iconTab} />;
            case 'Account':
              return <Image source={accountIcon} style={styles.iconTab} />;
          }
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.buttonTab}>
            {renderIcon()}
            <Text style={isFocused ? styles.titleActiveTab : styles.titleTab}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerTab: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: COLORS.white,
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 30,
    borderRadius: SIZES.radius,
    shadowColor: COLORS.gray,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonTab: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTab: {
    width: 24,
    height: 24,
  },
  titleActiveTab: {
    color: COLORS.orange,
    fontSize: SIZES.h5,
  },
  titleTab: {
    color: COLORS.black,
    fontSize: SIZES.h5,
  },
});
