import React from 'react'
import { Text, View ,Button} from 'react-native'

import { globalstyles } from '../styles/global'

import Card from '../shared/Card'

export default function ReviewDetails(props) {

   

    return (
        <View style={globalstyles.container}>
            <Card>
            <Text>{ props.route.params.title}</Text>
            <Text>{ props.route.params.body}</Text>
            <Text>{ props.route.params.rating}</Text>
            </Card>
        </View>
    )
}

