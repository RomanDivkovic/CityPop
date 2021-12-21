import React, { useEffect, useState} from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import CustomButton from '../components/button'
import { useNavigation } from '@react-navigation/native'
import {RootStackParamList} from '../utils/RootStackParam'
import {StackNavigationProp} from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'

interface Provider {
  name: string;
  fcode: string;
  population: string;
  geonames: string;
 
}

interface Props {
    route: string;
}

type authScreenProp = StackNavigationProp<RootStackParamList, 'CountryResult'>;

export default function CountryResultScreen({ ...Props }) {
    const country = Props.route.params.countrySearch
    const [result, setResult] = useState<Provider[]>([])
    const [thisCountry, setThisCountry] = useState<Provider[]>([])
    const [City, setCity] = useState('')
    const navigation = useNavigation<authScreenProp>();

        useEffect(() => {
            const searchApi = async () => {
                try {
                    const response = await axios.get('http://api.geonames.org/searchJSON?q='+country+'&username=romandivkovic')
                    setResult(response.data.geonames)
                    setThisCountry(response.data.geonames[0].countryName)
                   console.log('Country result in acios call: ',result)
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
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>{thisCountry}</Text>
                 <FlatList
                 style={styles.List}
                    data={result}
                    renderItem={({ item }) => (
                        <View >
                            <CustomButton title={item.name} onPress={() => {
                                setCity(item.name)
                                navigation.navigate('Result', {
                                    city: City
                                })
                            }}/>
                        </View>
                    )}
                keyExtractor={(key) => key.name}
                />
            </View>
        </SafeAreaView>
        
    )
}

// Design
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:'100%',
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
  List: {
      marginTop: 50,
  }
})