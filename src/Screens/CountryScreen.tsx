import React, { useState } from "react"
import { StyleSheet, View, Text, TextInput } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'


export default function CountryScreen(){
      const [Country, setCountry] = useState('');
    return(
        <SafeAreaView>
            <View>
                <Text style={{ textAlign:'center', fontSize:20, fontWeight:'bold'}}>Search for a country</Text>
                 <TextInput
                    style={styles.input}
                    onChangeText={setCountry}
                    value={Country}
                    placeholder="Search for a country"
        
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
    marginTop: 30
  },
})