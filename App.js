import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import Meals from './screens/Meals';
import MealDetail from './screens/MealDetail';
import FavoritesScreen from './screens/FavoritesScreen';
import Ionicons from "@expo/vector-icons/Ionicons"
import AntDesign from "@expo/vector-icons/AntDesign"
import { store } from './store/redux/store';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerHandler() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        drawerContentStyle: {backgroundColor: "#e95274"}, 
        drawerInactiveTintColor: "#a10", 
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: "#a10"
      }}
      >
      <Drawer.Screen 
        name='Categories'
        component={CategoriesScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name='list' color={color} size={size}/>
          )
        }}
      />
      <Drawer.Screen
        name='Favorites' 
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <AntDesign name='heart' color={color} size={size}/>
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Drawer" 
              component={DrawerHandler} 
              options={{
                animation: 'slide_from_left', 
                headerShown: false
              }}
              />

            <Stack.Screen 
              name="Meals" 
              component={Meals} 
              />

            <Stack.Screen
              name='Detail' 
              component={MealDetail}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

