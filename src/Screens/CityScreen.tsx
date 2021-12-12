import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/button'

export default function HomeScreen() {
    const [userName, setUserName] = useState('');

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Search by City</Text>
         <TextInput
            style={styles.input}
            onChangeText={setUserName}
            value={userName}
            placeholder="useless placeholder"
        
        />
      </View>
    </SafeAreaView>

  )
}

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
    marginTop: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
