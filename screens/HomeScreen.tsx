import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScreenType } from '../constants/constants'

type HomePrpos = {
  onExit: (screenType: string) => void,
}

const HomeScreen = (props: HomePrpos) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => props.onExit(ScreenType.addNote)}>
        <View style={styles.itemButton}>
          <Text style={styles.title}>ADD NEW NOTE</Text>
          <Icon style={styles.icon} name="arrow-forward-outline"/>
        </View>
      </Pressable>
      <Pressable onPress={() => props.onExit(ScreenType.allNotes)}>
        <View style={styles.itemButton}>
          <Text style={styles.title}>VIEW ALL NOTES</Text>
          <Icon style={styles.icon} name="arrow-forward-outline"/>
        </View>
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 40,
  },
  itemButton: {
    width: Dimensions.get("screen").width - 100,
    height: "50%",
    marginVertical: 30,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    elevation: 10,
    shadowOffset: { width: 2, height: 10 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    fontSize: 25,
    paddingTop: 20,
  }
})