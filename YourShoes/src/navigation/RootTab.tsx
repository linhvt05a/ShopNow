import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { COLORS, ICONS, SIZES } from '@src/constants/theme';
import Account from '@src/screens/Account';
import DashBoard from '@src/screens/DashBoard';
import Notification from '@src/screens/Notification';
import Setting from '@src/screens/Settings';
import ShopFeed from '@src/screens/ShopFeed';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type MainBottomTabParamList = {
Home: undefined;
ShopFeed: undefined;
Setting: undefined;
Notification: undefined;
Account: undefined;
};
export type RootRouteProps<RouteName extends keyof MainBottomTabParamList> = RouteProp<
  MainBottomTabParamList,
  RouteName
>;
export type Route = {
  key: string
  name?: Extract<MainBottomTabParamList, string>
  params: object | undefined
}
const Tab = createBottomTabNavigator<MainBottomTabParamList>();
export default function RootTab() {
  return (
    <Tab.Navigator tabBar={props => <CustomTabar {...props} />}>
      <Tab.Screen name='Home' component={DashBoard} />
      <Tab.Screen name="ShopFeed" component={ShopFeed} />
      <Tab.Screen name="Setting" component={Setting} />
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
            case 'Setting':
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
    bottom: SIZES.height >= 767 ? 30 : 15,
    width: SIZES.width - 20,
    borderRadius: SIZES.radius,
    shadowColor: COLORS.gray,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignSelf: 'center',
  },
  buttonTab: {
    paddingHorizontal: 16,
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
