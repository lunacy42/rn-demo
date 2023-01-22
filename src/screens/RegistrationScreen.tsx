import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {createUser, login} from '../helpers/auth';
import Navigation from '../Navigation';

const RegistrationScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const onPressRegistration = () => {
    createUser(email, password);
  };

  return (
    <View>
      <Text>Registration</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <Button
        onPress={onPressRegistration}
        title="Registration"
        color="#841584"
        accessibilityLabel="Login Button"
      />
      <Button
        onPress={onPressRegistration}
        title="Registriere Dich"
        color="#841584"
        accessibilityLabel="Registriere Dich Button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  input: {
    flexDirection: 'row',
  },
});

export default RegistrationScreen;
