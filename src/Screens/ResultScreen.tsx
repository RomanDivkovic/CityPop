import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'
import {RootStackParamList} from './RootStackParam'
import {StackNavigationProp} from '@react-navigation/stack'
import axios from 'axios'

/* ResultScreen to show Search for popluation in an City from a user search */

type authScreenProp = StackNavigationProp<RootStackParamList, 'Result'>;

interface Provider {
  toponymName: string;
  fcode: string;
  population: string;
  geonames: string;
 
}

interface Props {
    route: string;
}


export default function ResultScreen({ ...Props }) {
    const navigation = useNavigation<authScreenProp>();
    const city = Props.route.params.city
    const [result, setResult] = useState<Provider[]>([])

        useEffect(() => {
            const searchApi = async () => {
                try {
                    const response = await axios.get('http://api.geonames.org/searchJSON?q=' +city+'&username=romandivkovic')
                    setResult(response.data.geonames[0].population)
                   console.log('Population: ',result)
                } catch (error) {
                    if (axios.isCancel(error)) {
                    console.log('Data fetching cancelled')
                    } else {
                    console.log('Something went wrong here is an error message: '+error)
                    }
                }     
            }           
    searchApi()
        }, [])

    return (
        <View>       
            <Text style={{marginTop: 50, fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>{city}</Text>
            <Text style={styles.text}>{result}</Text>    
        </View>
    )
}
const styles = StyleSheet.create({
  text: {
    marginTop: 100,
    fontSize: 20,
    textAlign: 'center',
  }
})

