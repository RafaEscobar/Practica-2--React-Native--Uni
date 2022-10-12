import React from 'react'

// #1 Importamos todo lo necesario:
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from './src/views/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// #2 Creamos la constante que almacena lo que se obtenga de -createNativeStackNavigator- 
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    // #3 Abrimos un -NavigatorContainer-
    <NavigationContainer>
        {/* #4 Abrimos un -Stack.Navigator- */}
        <Stack.Navigator>
            {/* #% Especificamos una screen */}
            <Stack.Screen name='Principal' component={ HomeScreen } />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
