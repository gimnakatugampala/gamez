import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const header = () => {

    const openMenu = () =>{
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
                <Text style={styles.icon}>X</Text>
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
    },
    cross:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        marginLeft:-30
    },
    icon:{
        position:'absolute',
        left:16
    }
})
