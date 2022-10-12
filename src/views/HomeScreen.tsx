import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HomeScreen = () => {
  return (
    <View style={ styles.container }>
        {/* <Text style={ styles.title_name } >Rafael</Text> */}
        <Text style={ styles.title }>Hola desde mi primer app...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aqua',
    },
    title: {
        fontSize: 22,
        color: 'black'
    },
    title_name: {
        fontSize: 18,
        color: 'black'
    }
});
