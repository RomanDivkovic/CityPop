import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import axios from 'axios'
import api from '../api/api'

/* ResultScreen to show Search for popluation in an City from a user search */

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
    // The city that is passed on from cityscreen that user searched for
    const city = Props.route.params.city
    // to get the API result and display it
    const [result, setResult] = useState<Provider[]>([])

    // API call to get population from the city
    useEffect(() => {
        const citySearch = async () => {
            try {
                const response = await api.get(city+'&username=romandivkovic')
                 setResult(response.data.geonames[0].population)
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

    // What is shown in this screen
    return (
        <View>       
            <Text style={styles.city}>{city}</Text>
            <View style={styles.borderContainer}>
                <View style={styles.border}>
                    <Text style={styles.text}>Population</Text> 
                    <Text style={styles.population}>{result}</Text> 
                    <Text style={{marginTop: 20}}></Text> 
                </View>
            </View>   
        </View>
    )
}
const styles = StyleSheet.create({
city: {
    marginTop: 150, 
    fontSize: 25, 
    fontWeight: 'bold', 
    textAlign: 'center'
    },
population: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 25
 },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
  borderContainer:{
    marginTop: 70,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  border:{
    flex:0.9,
    borderWidth: 2.5,
    borderColor: 'black',
  },
})

