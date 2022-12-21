import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealLists from '../components/MealList/MealsList';

const Meals = ({ route, navigation }) => {

  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  })
  
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

    navigation.setOptions({
      title: categoryTitle,
      animation: 'slide_from_right'
    })
  }, [catId, navigation])

  return (
    <MealLists items={displayedMeals}/>
  )
}

export default Meals