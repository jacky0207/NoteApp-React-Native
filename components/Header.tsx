import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
    {/* <View style={{width: 50}}> */}
      <Text style={styles.headerTitle}>Your Sticky Node</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: "13%",
    backgroundColor: "white",
    paddingTop: 68,
    alignItems: "center",
  },
  headerTitle: {
    color: "purple",
    fontSize: 18,
    fontWeight: "600",
  }
})