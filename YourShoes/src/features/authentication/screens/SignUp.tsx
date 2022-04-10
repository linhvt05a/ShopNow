import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AuthStore from '../authenStore';

const SignUp = () => {
  useEffect(() => {
    AuthStore.signUp('ccc', 'cczxczxczx');
  }, []);
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
