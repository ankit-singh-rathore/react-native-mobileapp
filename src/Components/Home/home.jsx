import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Login/Login';
import CakesList from "../CakesComp/CakesList";
import Cart from '../Cart/Cart';

const Tab = createBottomTabNavigator();

function Home() {
    
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="CakesList" component={CakesList} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}

export default Home