import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ScreenType } from '../constants/constants'

type AddNoteProps = {
  onExit: (screen: string) => void
  onSave: (note: string) => void
}

const AddNote = ({ onExit, onSave }: AddNoteProps) => {
  const [enteredText, setEnteredText] = useState("")
  const handleChange = (text: string) => {
    setEnteredText(text)
  }
  const handleClick = () => {
    if (enteredText.trim().length > 0) {
      onSave(enteredText)
      onExit(ScreenType.home)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>AddNote</Text>
        <View>
          <TextInput onChangeText={handleChange} style={styles.input} />
        </View>
        <Button onPress={handleClick} title="Add" />
      </View>
    </View>
  )
} 

export default AddNote

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    marginVertical: 20,
    width: "100%",
    borderBottomWidth: 2,
    fontSize: 16,
    padding: 10,
  },
})