import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../utils/RootStackParam'
import { StackNavigationProp } from '@react-navigation/stack'
import TextInput from '../components/textInput'


// For navigation
type authScreenProp = StackNavigationProp<RootStackParamList, 'City'>;

/* CityScreen to Search for city and get data from geonams api to send to resultscreen, using axios */

export default function HomeScreen() {
    // Navigation
    const navigation = useNavigation<authScreenProp>();
    // To get the data
    const [City, setCity] = useState('');
    // const [result, setResult] = useState<Provider[]>()
    
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Search by City</Text>
        <TextInput onChangeText={setCity} value={City} placeholder='Search for a city'/>
         {/* <TextInput
            style={styles.input}
            onChangeText={setCity}
            value={City}
            placeholder="Search for city"
        
        /> */}
        <CustomButton title="Search"
        // onPress={getCityFromSearch}
          onPress={() => {
            navigation.navigate('Result', {
              city: City
            })
          
          }}
        />
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
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold'
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 200
  },
})
