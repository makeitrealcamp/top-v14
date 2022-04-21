import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match').required()
});

export default function Register({ }) {

  return (

    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '', passwordConfirmation: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
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