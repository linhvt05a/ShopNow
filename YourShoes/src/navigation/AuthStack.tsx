import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '@src/features/authentication/screens/SignIn';
import SignUp from '@src/features/authentication/screens/SignUp';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  UserExist: undefined;
  UserNotExist: undefined;
  Authentication: undefined;
};
const AuthStackNavigator = createNativeStackNavigator<RootStackParamList>();
const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen name="SignIn" component={SignIn} />
      <AuthStackNavigator.Screen name="SignUp" component={SignUp} />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStack;
