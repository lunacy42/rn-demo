import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import auth from '@react-native-firebase/auth';
import RegistrationScreen from './screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

export type Props = {
  user: any;
};

const Navigation: React.FC<Props> = ({user}) => {
  const getStack = () =>
    user ? (
      <>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerShown: true,
            animation: 'fade',
          }}
        />
      </>
    ) : (
      <>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerShown: true,
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            title: 'Registration',
            headerShown: true,
            animation: 'fade',
          }}
        />
      </>
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
