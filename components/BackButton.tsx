import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenType } from '../constants/constants'

type BackButtonProps = {
  onButtonClick: (screenType: string) => void
}

const BackButton = (props: BackButtonProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          onPress={() => props.onButtonClick(ScreenType.home)}
          color={"purple"}
          title="< Back"
        />
      </View>
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  button: {
    margin: 10,
  },
})