import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

function Status({affordability, complexity, duration}) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{affordability.toUpperCase()}</Text>
      <Text style={[styles.text]}>{complexity.toUpperCase()}</Text>
      <View style={{padding: 3, backgroundColor: "#a14", borderRadius: 5, bottom: 2}}>
        <Text style={styles.duration}>{duration}m</Text>
      </View>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
  text: {
    color: "#a14",
    fontWeight: "bold",
    fontSize: 15,
  },
  duration: {
    color: "white",
    fontWeight: "500",
    alignSelf: "center",
  },
  textContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-between",
    marginTop: 5
  }
})