import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/button'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Homescreen</Text>
        <CustomButton  onPress={() => {
          alert('Hello')
        }}/>
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
  }
})
