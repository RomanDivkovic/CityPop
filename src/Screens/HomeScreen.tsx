import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/button'
import { useNavigation } from '@react-navigation/native'
import {RootStackParamList} from '../utils/RootStackParam';
import {StackNavigationProp} from '@react-navigation/stack';


// Navigation
type authScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

/* HomeScreen where user should have option to choose to search for population either by city by country and then choosing city */
export default function HomeScreen() {
  // Navigation
  const navigation = useNavigation<authScreenProp>();
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Homescreen</Text>
        <CustomButton  onPress={() => {
          navigation.navigate('City')
        }}
        title="Search for city"/>
        <CustomButton  onPress={() => {
          navigation.navigate('Country')
        }}
        title="Search for country"/>
      </View>
      
    </SafeAreaView>

  )
}

// Design
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50
  }
})
