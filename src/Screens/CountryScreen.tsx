import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/button'
import { useNavigation } from '@react-navigation/native'
import {RootStackParamList} from '../utils/RootStackParam'
import {StackNavigationProp} from '@react-navigation/stack'
import TextInput from '../components/textInput'

// Navigation
type authScreenProp = StackNavigationProp<RootStackParamList, 'Country'>;

export default function CountryScreen(){
    // Getting the country from the textinput from the user
      const [Country, setCountry] = useState('');
    // To navigate
    const navigation = useNavigation<authScreenProp>();

    // What this screen displays
    return(
        <SafeAreaView>
            <View>
                <Text style={{ textAlign:'center', fontSize:20, fontWeight:'bold'}}>Search for a country</Text>
                 <TextInput onChangeText={setCountry}
                    value={Country}
                    placeholder="Search for a country"
                />
                <CustomButton title="Search" onPress={() => {
                    navigation.navigate("CountryResult", {
                        countrySearch: Country
                    })
                }}/>
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
    
  }
})
