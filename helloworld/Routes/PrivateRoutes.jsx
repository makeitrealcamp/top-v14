import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Settings from '../screens/Settings';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export const PrivateRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}