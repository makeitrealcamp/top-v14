import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
  return (
    <View style={styles.mainContainer} >
      <Text>Home</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
