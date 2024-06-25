import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/homeScreen';
import GPT from '../screens/GPT';
import Prodia from '../screens/Prodia'
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }} />
      <Stack.Screen name="GPT"  component={GPT} />
      <Stack.Screen name="Prodia"  component={Prodia} />

    </Stack.Navigator>
  </NavigationContainer>
);

export default HomeStack;
