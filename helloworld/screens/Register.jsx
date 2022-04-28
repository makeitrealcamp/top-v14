import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import RegisterForm from '../components/RegisterForm';
export default function Register({ }) {

  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
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
});
