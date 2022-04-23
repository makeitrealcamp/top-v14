
import React from 'react'
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Formik } from 'formik';

import { loginSchema } from '../validationSchema/login.schema';
import { useAuth } from '../hooks/useAuth';

export default function LoginForm() {

  const { login, error } = useAuth();
  const navigation = useNavigation();
  const handleSubmit = async (values, actions) => {
    await login(values.email, values.password);
    actions.resetForm();
    navigation.navigate('Settings');
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
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

          <Button color='blue' title="Login" onPress={props.handleSubmit} />
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