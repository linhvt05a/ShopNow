import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/AuthStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '@src/navigation/RootTab';
type SettingScreenProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'UserExist'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'Setting'>
>;
const Setting = () => {
  const navigation = useNavigation<SettingScreenProp>()
  return (
    <View>
      <TouchableOpacity>
        <Text>SETTINGS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
