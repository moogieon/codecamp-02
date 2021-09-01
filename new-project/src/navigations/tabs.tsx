import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import React from 'react';
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="1" component={Screen1} />
      <Tab.Screen name="2" component={Screen2} />
      <Tab.Screen name="3" component={Screen3} />
    </Tab.Navigator>
  );
}
