import { View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from './../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryComponent(item) {
  return <CategoryGridTile title={item.item.title} color={item.item.color} id={item.item.id}/>
}

function CategoriesScreen() {
  return (
    <View>
      <FlatList data={CATEGORIES} 
      keyExtractor={(item) => item.id} 
      renderItem={renderCategoryComponent} 
      numColumns={2}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CategoriesScreen