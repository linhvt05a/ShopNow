import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@src/navigation/AuthStack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type signInScreenProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn = () => {
   const navigation = useNavigation<signInScreenProp>();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('UserExist')}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
