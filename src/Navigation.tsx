import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const getStack = () =>
    loggedIn ? (
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: true,
          animation: 'fade',
        }}
      />
    ) : (
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          headerShown: true,
          animation: 'fade',
        }}
      />
    );

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        animation: 'fade',
      }}>
      {getStack()}
    </Stack.Navigator>
  );
};

export default Navigation;
