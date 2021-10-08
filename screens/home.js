import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24
    }
})
