import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

function CategoryGridTile(props) {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Pressable 
        android_ripple={{color: "white"}} 
        android_disableSound={true} 
        style={({pressed}) => [styles.button, pressed ? styles.pressedButton : null]} 
        onPress={() => navigation.navigate("Meals", {
          categoryId: props.id
        })}
      >
        <View style={[styles.grid, {backgroundColor: props.color}]}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, 
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible"
  },
  button: {
    flex: 1,
  },
  pressedButton: {
    opacity: 0.5
  },
  grid: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  title: {
    fontWeight: "bold",
    fontSize: 16
  }
})