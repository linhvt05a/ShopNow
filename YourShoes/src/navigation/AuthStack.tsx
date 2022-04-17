import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, ICONS } from '@src/constants/theme';
import GetStarted from '@src/features/Auth/screens/GetStarted';
import OnBoarding from '@src/features/Auth/screens/OnBoarding';
import SignIn from '@src/features/Auth/screens/SignIn';
import SignUp from '@src/features/Auth/screens/SignUp';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  UserExist: undefined;
  UserNotExist: undefined;
  Authentication: undefined;
  OnBoarding: undefined;
  GetStarted: undefined;
};
const AuthStackNavigator = createNativeStackNavigator<RootStackParamList>();
const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen name="OnBoarding" options={{ headerShown: false, gestureEnabled: false }} component={OnBoarding} />
      <AuthStackNavigator.Screen name="GetStarted" options={{headerShown: false, gestureEnabled: false}} component={GetStarted} />
      <AuthStackNavigator.Screen name="SignIn"
        options={{
        header: (props) => <HeaderCommon {...props} />
      }} component={SignIn} />
      <AuthStackNavigator.Screen name="SignUp" component={SignUp}
        options={{
        header: (props) => <HeaderCommon {...props} />
      }}/>
    </AuthStackNavigator.Navigator>
  );
};

export const HeaderCommon = (props: any) => {
  const renderHeaderView = () => {
    if (props.route.name === 'SignIn' || props.route.name === 'SignUp') {
       return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.leftBtn} onPress={()=> props.navigation.goBack()}>
          <Image source={ICONS.backIcon}/>
        </TouchableOpacity>
      </View>
    )
  }else
    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.leftBtn}>
          <Text>left</Text>
        </TouchableOpacity>
        <Text>{props.route.name}</Text>
        <TouchableOpacity style={styles.rightBtn}>
          <Text>right</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      {renderHeaderView()}
   </SafeAreaView>
  )
}
export default AuthStack;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.white
  },
  header: {
    height: 20,
    // backgroundColor: COLORS.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems:'center'
  },
  leftBtn: {
    
  },
  rightBtn: {
    
  }
})