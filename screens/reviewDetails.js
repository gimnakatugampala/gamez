import React from 'react'
import { Text, View ,Button} from 'react-native'

import { globalstyles } from '../styles/global'

export default function reviewDetails({navigation}) {

    const pressHandler = () =>{
        // navigation.push('Home')
        navigation.goBack()
    }

    return (
        <View style={globalstyles.container}>
            <Text>review Details</Text>
            <Button title='Back to home screen' onPress={pressHandler} />
        </View>
    )
}

