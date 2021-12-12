import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/button'
import { useNavigation } from '@react-navigation/native'
import {RootStackParamList} from './RootStackParam';
import {StackNavigationProp} from '@react-navigation/stack';



type authScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;


export default function HomeScreen() {
  const navigation = useNavigation<authScreenProp>();
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Homescreen</Text>
        <CustomButton  onPress={() => {
          navigation.navigate('City')
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
    margin: 50
  }
})
