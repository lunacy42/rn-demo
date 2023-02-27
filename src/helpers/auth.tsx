import auth from '@react-native-firebase/auth';

export const createUser = (email: string, password: string) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const login = (email: string, password: string) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User signed in!');
    })
    .catch(error => {
      console.error(error);
    });
};

export const logout = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};
