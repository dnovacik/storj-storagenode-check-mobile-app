// libs
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// views
import Home from './views/Home'
import Onboarding from './views/Onboarding'

const Stack = createStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName="Onboarding">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
