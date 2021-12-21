import React, { useEffect, useState} from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import CustomButton from '../components/button'
import { useNavigation } from '@react-navigation/native'
import {RootStackParamList} from '../utils/RootStackParam'
import {StackNavigationProp} from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import api from '../api/api'
import axios from "axios"

interface Provider {
  name: string;
  fcode: string;
  population: string;
  geonames: string;
  geonameId: Number;
}

interface Props {
    route: string;
}

// For navigation
type authScreenProp = StackNavigationProp<RootStackParamList, 'CountryResult'>;

export default function CountryResultScreen({ ...Props }) {
    // Getting the country that user searched from CountryScreen
    const country = Props.route.params.countrySearch
    const [result, setResult] = useState<Provider[]>([])
    const [thisCountry, setThisCountry] = useState<Provider[]>([])
    // Navigation
    const navigation = useNavigation<authScreenProp>();

    // API call to get countrys cities from geonames
    useEffect(() => {
        const citySearch = async () => {
            try {
                const response = await api.get(country+'&username=romandivkovic')
                 setResult(response.data.geonames)
                 setThisCountry(response.data.geonames[0].countryName)
            } catch(error) {
                if (axios.isCancel(error)) {
                    console.log('Data fetching cancelled')
                    } else {
                    console.log('Something went wrong here is an error message: '+error)
                    }
            }
        }
        citySearch()
    }, [])

    // What is displayed on this screen
    return (
        <SafeAreaView>
            <View >
                <Text style={styles.text}>{thisCountry}</Text>
                 <FlatList
                 style={styles.List}
                    data={result}
                    renderItem={({ item }) => (
                        <View >
                            <CustomButton title={item.name} onPress={() => {
                                navigation.navigate('Result', {
                                    city: item.name
                                })
                            }}/>
                        </View>
                    )}
                keyExtractor={(key) => key.geonameId.toString()}
                />
            </View>
        </SafeAreaView>
        
    )
}

// Design
const styles = StyleSheet.create({
  container: {
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