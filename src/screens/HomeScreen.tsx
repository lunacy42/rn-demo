import React from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import {logout} from '../helpers/auth';

const HomeScreen: React.FC = () => {
  const onPressLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Pressable
        onPress={onPressLogout}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#db65db' : '#841584',
          },
          styles.button,
        ]}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  title: {
    flex: 1,
    marginVertical: 8,
  },
  button: {
    width: '40%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  buttonText: {
    color: 'white',
  },
});

export default HomeScreen;
