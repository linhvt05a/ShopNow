import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {AuthStore} from '@src/features/authentication/authenStore';
const App = () => {
  useEffect(() => {
    AuthStore.signUp('hoang', 'quang linh');
  }, []);
  return (
    <View style={styles.container}>
      <Text>{`my name is ${AuthStore.getFullName}`}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
