import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import NetworksHome from './screens/NetworksHome';
import NetworkDashboard from './screens/NetworkDashboard';


const NetworkStack = createNativeStackNavigator();

const Networks = () => {
  return (
    <NetworkStack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      <NetworkStack.Screen component={NetworksHome} name="NetworksHome" />
      <NetworkStack.Screen component={NetworkDashboard} name="NetworkDashboard" />
    </NetworkStack.Navigator>
  )
}

export default Networks