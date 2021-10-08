import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalstyles } from '../styles/global'

export default function home() {
    return (
        <View style={globalstyles.container}>
            <Text style={globalstyles.titleText}>Home</Text>
        </View>
    )
}
