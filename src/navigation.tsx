// libs
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// views
import Onboarding from './views/Onboarding'
import AddNodes from './views/AddNodes'

const Stack = createStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="AddNodes" component={AddNodes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
