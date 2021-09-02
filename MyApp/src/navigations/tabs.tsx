import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Screen4 from '../screen/Screen4';

const Tab = createBottomTabNavigator();
// const HomeStack = creacteStackNavigator();
export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          }
          if (route.name === 'Picked') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }
          if (route.name === 'MyPage') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
            size = 30;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: '#FFBE2B',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      })}>
      <Tab.Screen name="Home" component={Screen1} />
      <Tab.Screen name="Map" component={Screen2} />
      <Tab.Screen name="Picked" component={Screen3} />
      <Tab.Screen name="MyPage" component={Screen4} />
    </Tab.Navigator>
  );
}
