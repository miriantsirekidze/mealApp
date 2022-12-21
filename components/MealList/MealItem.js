import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Status from '../Status';


function MealItem({imageUrl, mealName, affordability, complexity, duration, id}) {

  const navigation = useNavigation();

  function navigationHandler() {
    navigation.navigate('Detail', {
      mealId: id
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.mealContainer}>
        <Pressable 
          android_ripple={{color: "gray"}} 
          style={styles.mealContainer} 
          onPress={navigationHandler}
        >
          <Image source={{uri: imageUrl}} style={styles.image}/>
          <Text style={styles.name}>{mealName}</Text>
          <Status affordability={affordability} complexity={complexity} duration={duration}/>
        </Pressable>
      </View>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 16,
  },
  mealContainer: {
    width: '100%',
    height: 250,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
    overflow: "hidden"
  },
  image: {
    width: '100%',
    height: 175,
  },
  name: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: "bold",
    color: "#ccc",
    margin: 5
  },
  textContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-between"

  },
  text: {
    color: "#a14",
    fontWeight: "bold",
    fontSize: 15,
  },
  duration: {
    color: "white",
    fontWeight: "500",
    alignSelf: "center",
  }

})