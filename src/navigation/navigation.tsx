// libs
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// navigation
import { navigationRef, mount } from './rootNavigation'
import { StackParamList } from './navigationTypes'

// views
import Home from '../views/Home'
import About from '../views/About'

const Stack = createStackNavigator<StackParamList>()

export default () => {
    useEffect(() => {
        mount()
    }, [])

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                headerMode={'none'}
                initialRouteName="Home"
                screenOptions={{ animationEnabled: false }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
