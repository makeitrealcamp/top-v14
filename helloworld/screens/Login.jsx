
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import { useForm, Controller } from "react-hook-form";


export default function Login() {
  const { register, formState: { errors }, handleSubmit, control } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View>
      <Text>Login</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )

}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
  }

})