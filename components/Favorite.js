import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Hearto from "react-native-vector-icons/AntDesign"

function Favorite({icon, onPress}) {

  return (
    <View>
      <Pressable onPress={onPress} style={({pressed}) => pressed && styles.opacity}>
        <Hearto name={icon} style={{color: "red"}} size={24}/>
      </Pressable> 
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({
  opacity: {
    opacity: 0.25
  }
})
