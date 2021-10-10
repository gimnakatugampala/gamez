import React,{useState} from 'react'
import {  Text, View ,TouchableOpacity,FlatList,Modal,StyleSheet, Keyboard } from 'react-native'
import { globalstyles } from '../styles/global'

import ReviewForm from './reviewForm'

import Card from '../shared/Card'

export default function home({navigation}) {

    const [modalOpen, setmodalOpen] = useState(false)

    const [reviews, setReviews] = useState([
        {title:'Test 1',rating:5,body:'lorem lorem',key:'1'},
        {title:'Test 2',rating:3,body:'lorem lorem',key:'2'},
        {title:'Test 3',rating:5,body:'lorem lorem',key:'3'},
        {title:'Test 4',rating:2,body:'lorem lorem',key:'4'},
    ])


    const addReview = (review) =>{
        review.key = Math.random().toString()
        setReviews((currentReviews) =>{
            return [review, ...currentReviews]
        })

        setmodalOpen(false)
    }

    
    return (
        <View style={globalstyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
           
                <View style={styles.modalContent}>
             <Text onPress={() => setmodalOpen(false)} style={globalstyles.icon}>X</Text>
                    <ReviewForm addReview={addReview} />
                </View>
            
            </Modal>

            <Text  style={globalstyles.icon} onPress={() => setmodalOpen(true)}>+</Text>

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

const styles = StyleSheet.create({
    modalContent:{
        flex:1
    }
})