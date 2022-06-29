
import React from 'react'
import { Text, View } from 'react-native'
import Home from './fragments/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Networks from './fragments/Networks'
import Settings from './fragments/Settings'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../styles/Colors'


const Tab = createBottomTabNavigator();

const Main = ({ user }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Home":
              return <Icon name='home' size={size} color={color} />;

            case "Networks":
              return <Icon name='cloud' size={size} color={color} />;

            case "Settings":
              return <Icon name='settings' size={size} color={color} />;

            default:
              return <Icon name='home' size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarItemStyle: {
          padding: 10,
        },
        tabBarStyle: {
          height: 60,
        }
      })}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Networks' component={Networks} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  )
}

export default Main