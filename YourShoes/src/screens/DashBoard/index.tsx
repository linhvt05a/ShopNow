import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/AuthStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '@src/navigation/RootTab';
type DashBoardScreenProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'UserExist'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'Home'>
>;

export interface DashBoardProps {
    navigation: DashBoardScreenProp
}
const DashBoard = ({navigation}:DashBoardProps) => {
  return (
    <View>
      <TouchableOpacity onPress={()=> navigation.navigate('Account')}>
          <Text>DashBoard</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DashBoard

const styles = StyleSheet.create({})