
import React from 'react'
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import { registerSchema } from '../validationSchema/register.schema';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core';

export default function RegisterForm() {
  const navigation = useNavigation();
  const handleSubmit = async (values, actions) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      actions.resetForm();
      navigation.navigate('Home');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Formik
      initialValues={{ email: '', password: '', passwordConfirmation: '' }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <View>
          <TextInput
            style={styles.input}
            placeholder='Email'
            onChangeText={props.handleChange('email')}
            value={props.values.email}
          />
          <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>
          <TextInput
            style={styles.input}
            placeholder='password'
            onChangeText={props.handleChange('password')}
            value={props.values.password}
            secureTextEntry={true}
          />
          <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>

          <TextInput
            style={styles.input}
            placeholder='Confirm Password'
            onChangeText={props.handleChange('passwordConfirmation')}
            value={props.values.passwordConfirmation}
            secureTextEntry={true}
          />
          <Text style={styles.errorText}>{props.touched.passwordConfirmation && props.errors.passwordConfirmation}</Text>

          <Button color='maroon' title="Submit" onPress={props.handleSubmit} />
        </View>
      )}
    </Formik>
  )
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