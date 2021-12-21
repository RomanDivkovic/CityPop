
import React, { } from "react"
import { StyleSheet, View, TextInput } from "react-native"

export default function textInput(props: { onChangeText: ((text: string) => void) | undefined; value: string | undefined; placeholder: string | undefined }){
    return(
        <View>
            <TextInput
            style={styles.input}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
        
        />
        </View>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 30
  },
})