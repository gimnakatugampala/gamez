import React from 'react'
import { StyleSheet,Text, View ,Image} from 'react-native'

import { globalstyles ,images } from '../styles/global'

import Card from '../shared/Card'

export default function ReviewDetails(props) {

    const rating =  props.route.params.rating

   

    return (
        <View style={globalstyles.container}>
            <Card>
            <Text>{ props.route.params.title}</Text>
            <Text>{ props.route.params.body}</Text>
            <Text>{ props.route.params.rating}</Text>

            <View style={styles.rating}>
                <Text>Gamezone Rating : </Text>
                <Image source={images.ratings[rating]}  />
            </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{

    }
})
