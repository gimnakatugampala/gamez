import React,{useState} from 'react'
import {  Text, View ,TouchableOpacity,FlatList } from 'react-native'
import { globalstyles } from '../styles/global'

import Card from '../shared/Card'

export default function home({navigation}) {

    const [reviews, setReviews] = useState([
        {title:'Test 1',rating:5,body:'lorem lorem',key:'1'},
        {title:'Test 2',rating:3,body:'lorem lorem',key:'2'},
        {title:'Test 3',rating:5,body:'lorem lorem',key:'3'},
    ])

    
    return (
        <View style={globalstyles.container}>
           <FlatList 
           data={reviews}
           renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails',item)}>
                <Card>
                <Text style={globalstyles.titleText}>{item.title}</Text>
                </Card>
            </TouchableOpacity>
           )}
            />
            
        </View>
    )
}
