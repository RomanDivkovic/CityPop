import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/button'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import {RootStackParamList} from './RootStackParam';
import {StackNavigationProp} from '@react-navigation/stack';


// For navigation
type authScreenProp = StackNavigationProp<RootStackParamList, 'City'>;

interface Provider {
  toponymName: string;
  countryId: string;
  population: string;
}

/* CityScreen to Search for city and get data from geonams api to send to resultscreen, using axios */

export default function HomeScreen() {
    // Navigation
    const navigation = useNavigation<authScreenProp>();
    // To get the data
    const [City, setCity] = useState('');
    const [result, setResult] = useState<Provider[]>()
    
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Search by City</Text>
         <TextInput
            style={styles.input}
            onChangeText={setCity}
            value={City}
            placeholder="Search for city"
        
        />
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
  function getCityFromSearch() {
    // Calling axios to get data from geonames API here and storing it in usestate result
    const searchApi = async () => {
      try {
        const response = await axios.get('http://api.geonames.org/searchJSON?q=' +City+'s&username=romandivkovic')
        setResult(response.data)
        console.log(response.data)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Data fetching cancelled')
        } else {
          console.log('Error when calling axios: ' +error)
        }
      }
    }
    searchApi()
    navigation.navigate('Result', {
           city: City
    })

    
  }
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
