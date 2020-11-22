import { createStackNavigator } from '@react-navigation/stack';

import LinkScreen from "../screens/LinksScreen"
import User from "../screens/User"

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    );
  }
  
  const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  }
  
  export { MainStackNavigator, ContactStackNavigator };