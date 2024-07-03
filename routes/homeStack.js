import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/homeScreen';
import GPT from '../screens/GPT';
import Dalle from '../screens/DALLE'
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }} />
      <Stack.Screen name="GPT"  component={GPT} />
      <Stack.Screen name="Dalle"  component={Dalle} />

    </Stack.Navigator>
  </NavigationContainer>
);

export default HomeStack;
