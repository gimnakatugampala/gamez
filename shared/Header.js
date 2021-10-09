import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const header = () => {
    return (
        <View style={styles.header}>
          <View>
              <Text style={styles.headerText}>Gamezone</Text>
          </View>
        </View>
    )
}

export default header

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1
    }
})
