import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/homeScreen';
import GPT from '../screens/GPT';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }} />
      <Stack.Screen name="GPT" component={GPT} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default HomeStack;
