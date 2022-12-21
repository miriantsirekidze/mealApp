import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

function Subtitle({children}) {
  return (
    <View>
      <Text style={styles.instruction}>{children}</Text>
      <View style={styles.borderStyle}/>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
  instruction: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: '600'
  },
  borderStyle: {
    borderBottomWidth: 2,
    borderBottomColor: "#a14", 
    marginHorizontal: 10, 
    marginBottom: 5
  }
})