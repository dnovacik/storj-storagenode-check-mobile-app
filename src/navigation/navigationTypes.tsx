// libs
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type StackParamList = {
    Home: undefined
    About: undefined
    User: { id: number }
}

type UserScreenRouteProp = RouteProp<StackParamList, 'User'>
type UserScreenNavigationProp = StackNavigationProp<StackParamList, 'User'>

export type UserProps = {
    route: UserScreenRouteProp
    navigation: UserScreenNavigationProp
}
