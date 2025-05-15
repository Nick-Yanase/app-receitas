import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from
'@react-navigation/native-stack';
import HomeScreen from
'./screens/HomeScreen';
import DetailsScreen from
'./screens/DetailsScreen';

export default function App() {
const Stack = createNativeStackNavigator();
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: '🍔 Outdoor recipes 🍪', headerTitleAlign: 'center' }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes da Receita', headerTitleAlign: 'center' }} />      
    </Stack.Navigator>
  </NavigationContainer>
);
}