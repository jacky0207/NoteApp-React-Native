import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Note } from '../constants/constants'

type ItemProps = {
  note: string
}

const ListItem = ({ note }: ItemProps) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.noteText}>{ note }</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 4,
    borderColor: "purple",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff000",
    marginTop: 10,
  },
  noteText: {
    fontSize: 20,
    fontWeight: "400",
  },
})