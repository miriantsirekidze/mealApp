import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'

import MealItem from '../MealList/MealItem'

function MealLists({items}) {

  function MealsItem(item) {
    return <MealItem 
      mealName={item.item.title} 
      imageUrl={item.item.imageUrl} 
      affordability={item.item.affordability}
      complexity={item.item.complexity}
      duration={item.item.duration}
      id={item.item.id}
    />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={MealsItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default MealLists

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})