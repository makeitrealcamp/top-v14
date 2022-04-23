
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';

import LoginForm from '../components/LoginForm';


export default function Login() {

  return (
    <View>
      <Text>Login</Text>
      <LoginForm />
    </View>
  )

}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,

  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },

})