import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/Screens/HomeScreen'
import CityScreen from './src/Screens/CityScreen'
import ResultScreen from './src/Screens/ResultScreen'
import CountryScreen from './src/Screens/CountryScreen'
import CountryResultScreen from './src/Screens/CountryResultScreen'

const Stack = createNativeStackNavigator()

/* My app starts here with my screens */
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Home"
          component={HomeScreen} />
        <Stack.Screen
         name="City"
          component={CityScreen}
          options={{
                title: ''
        }} />
        <Stack.Screen
         name="Result"
          component={ResultScreen}
          options={{
                title: ''
        }} />
        <Stack.Screen 
        name="Country"
         component={CountryScreen}
         options={{
                title: ''
        }}/>
        <Stack.Screen 
        name="CountryResult" 
        component={CountryResultScreen} 
        options={{
                title: ''
        }}/>
      </Stack.Navigator>
    </NavigationContainer>

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
