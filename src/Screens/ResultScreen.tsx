import React from "react"
import { StyleSheet, View, Text } from "react-native"


export default function ResultScreen() {
    return (
        <View>
            <Text style={styles.text}>ResultScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    
  }
})