import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalstyles } from '../styles/global'

export default function home({navigation}) {

    const pressHandler = () =>{
        // navigation.navigate('ReviewDetails')
        navigation.push('ReviewDetails')
    }

    return (
        <View style={globalstyles.container}>
            <Text style={globalstyles.titleText}>Home Screen</Text>
            <Button onPress={pressHandler} title='Go to Reviews' />
        </View>
    )
}
