import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/button'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import {RootStackParamList} from './RootStackParam';
import {StackNavigationProp} from '@react-navigation/stack';



type authScreenProp = StackNavigationProp<RootStackParamList, 'City'>;

export default function HomeScreen() {
    const navigation = useNavigation<authScreenProp>();
    const [City, setCity] = useState('');
    const [result, setResult] = useState([])
    //     useEffect(() => {
    //         const searchApi = async () => {
    //   try {
    //     const response = await axios.get('http://api.geonames.org/search?q=Paris&username=romandivkovic')
    //     // setResult(response.data)
    //     console.log(response.data)
    //   } catch (error) {
    //     if (axios.isCancel(error)) {
    //       console.log('Data fetching cancelled')
    //     } else {
    //       console.log('Error: '+error)
    //     }
    //   }
    // }
    // searchApi()
    //     }, [])
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
          onPress={() => {
          navigation.navigate('Result')
          
        }}
        />
      </View>
    </SafeAreaView>

  )
  function getCityFromSearch() {
    const searchApi = async () => {
      try {
        const response = await axios.get('http://api.geonames.org/search?q=' +City+'s&username=romandivkovic')
        setResult(response.data)
        console.log(result)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Data fetching cancelled')
        } else {
          console.log('Error when calling axios: ' +error)
        }
      }
    }
    searchApi()


    
  }
}

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
