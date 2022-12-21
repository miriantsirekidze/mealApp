import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import MealLists from '../components/MealList/MealsList'
import { MEALS } from "../data/dummy-data"

function FavoritesScreen() {

  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id))

  if (favoriteMeals === 0) {
    return (
      <View>
        <Text>No Favorites</Text>
      </View>
    )
  }else {
    return <MealLists items={favoriteMeals} />
  }
}

export default FavoritesScreen