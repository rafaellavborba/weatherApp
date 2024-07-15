import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CitySelectionScreen from './src/screens/CitySelectionScreen';
import WeatherScreen from './src/screens/WeatherScreen';
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='CitySelection'>
            <Stack.Screen name='CitySelection' component={CitySelectionScreen}></Stack.Screen>
            <Stack.Screen name='Weather' component={WeatherScreen}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
  );
}
export default App;