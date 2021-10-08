import React from 'react'
import { Text, View ,Button} from 'react-native'

import { globalstyles } from '../styles/global'

export default function reviewDetails(props) {

   

    return (
        <View style={globalstyles.container}>
            <Text>{ props.route.params.title}</Text>
            <Text>{ props.route.params.body}</Text>
            <Text>{ props.route.params.rating}</Text>
        </View>
    )
}

