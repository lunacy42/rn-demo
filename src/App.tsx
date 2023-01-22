import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import UserCheck from './UserCheck';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <UserCheck />
    </NavigationContainer>
  );
}

export default App;
