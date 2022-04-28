import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Settings from '../screens/Settings';
import Home from '../screens/Home';
import ImageSelector from '../components/ImageSelector';
import NotificationsComponent from '../components/NotificationsComponent';

const Stack = createNativeStackNavigator();

export const PrivateRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Images" component={ImageSelector} />
      <Stack.Screen name="Notifications" component={NotificationsComponent} />
    </Stack.Navigator>
  )
}