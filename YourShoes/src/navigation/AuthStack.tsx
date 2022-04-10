import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '@src/features/authentication/screens/SignIn';
import SignUp from '@src/features/authentication/screens/SignUp';

const AuthStackNavigator = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen name="SignIn" component={SignIn} />
      <AuthStackNavigator.Screen name="SignUp" component={SignUp} />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStack;
