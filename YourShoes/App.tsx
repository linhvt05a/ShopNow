import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack, { RootStackParamList } from '@src/navigation/AuthStack';
import RootTab from '@src/navigation/RootTab';
import React from 'react';
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Authentication'>
        <Stack.Screen
          component={AuthStack}
          name="UserNotExist"
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          component={RootTab}
          name="UserExist"
          options={{headerShown: false, gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
