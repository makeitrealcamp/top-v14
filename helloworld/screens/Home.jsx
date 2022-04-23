import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth';

export default function Home({ navigation }) {
  const { user, logout } = useAuth();
  return (
    <View style={styles.mainContainer} >
      <Text>Home</Text>
      {
        user ?
          (
            <>
              <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
              <Button title="logout" onPress={logout} />
            </>
          )
          :
          (
            <>
              <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
              <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
            </>
          )
      }

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
