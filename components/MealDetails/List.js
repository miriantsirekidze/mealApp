import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

function List({data}) {
  return data.map((dataPoint) => 
    <View key={dataPoint}>
      <Text style={styles.ingredients}> • {dataPoint}</Text>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  ingredients: {
    marginHorizontal: 15,
    fontSize: 15.5,
    fontWeight: "500"
  },
})