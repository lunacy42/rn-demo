import React from 'react';
import {View, Text, Button} from 'react-native';
import {logout} from '../helpers/auth';

const HomeScreen: React.FC = () => {
  const onPressLogout = () => {
    logout();
  };

  return (
    <View>
      <Text>Hello</Text>
      <Button
        onPress={onPressLogout}
        title="Logout"
        color="#841584"
        accessibilityLabel="Login Button"
      />
    </View>
  );
};

export default HomeScreen;
