import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ToastAndroid } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { MEALS } from './../data/dummy-data';
import Status from '../components/Status';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import Favorite from '../components/Favorite';
import { addFavorites, removeFavorites } from '../store/redux/favorites';


const MealDetail = ({route, navigation}) => {

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
  const dispatch = useDispatch()

  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealTitle = selectedMeal.title;

  const mealIsFavorite = favoriteMealIds.includes(mealId)

  function changeFavoriteStatusHandler() {
    if(mealIsFavorite){
      dispatch(removeFavorites({id: mealId}))
    }else {
      dispatch(addFavorites({id: mealId}))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      animation: 'slide_from_right',
      title: mealTitle,
      headerRight: () => {
        return <Favorite icon={mealIsFavorite ? "heart" : "hearto"} onPress={changeFavoriteStatusHandler}/>
      }
    })
  }, [changeFavoriteStatusHandler, mealTitle, navigation])


  return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/> 
          <Text style={styles.title}>{mealTitle}</Text>
          <Status affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} duration={selectedMeal.duration}/>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients}/>
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps}/>
          </ScrollView>
        </View>
      </View>
  )
}

export default MealDetail

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  background: {
    backgroundColor: "white",
    width: "90%",
    height: "95%",
    borderRadius: 25,
    marginVertical: 20,
    elevation: 2
  },
  image: {
    height: "50%",
    width: "90%",
    borderRadius: 20,
    marginTop: "5%",
    alignSelf: "center",

  },
  title: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold'
  },
})