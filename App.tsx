import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen'
import CityScreen from './src/Screens/CityScreen'

const Stack = createNativeStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="City" component={CityScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View>
    //   <Text>Hello</Text>
    // </View>
    // <NavigationContainer>
    //   <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //     />
    // </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
