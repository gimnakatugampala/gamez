import React from "react";
import { StyleSheet,Button,TextInput,View,Text } from "react-native";
import { globalstyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from 'yup'

const ReviewSchema = yup.object({
    title:yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating:yup.string()
        .required()
        .test('is-num-1-5','Rating must be a number 1 - 5',(val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})

export default function ReviewForm({addReview}){

    return(
        <View style={globalstyles.container}>
            <Formik
            initialValues={{title:'',body:'',rating:''}}
            validationSchema={ReviewSchema}
            onSubmit={(values,actions) => {
                actions.resetForm()
                addReview(values)
                console.log(values)
            }}
            >
            {(props) => (
                <View>
                    <TextInput
                        style={globalstyles.input}
                        placeholder='Review Title'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        onBlur={props.handleBlur('title')}
                    />
                    <Text style={globalstyles.errorText}>{props.touched.title && props.errors.title}</Text>
                    <TextInput
                        multiline
                        style={globalstyles.input}
                        placeholder='Review Body'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        onBlur={props.handleBlur('body')}
                    />
                    <Text style={globalstyles.errorText}>{props.touched.body && props.errors.body}</Text>

                    <TextInput
                        style={globalstyles.input}
                        placeholder='Rating (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'
                        onBlur={props.handleBlur('rating')}
                    />
                    <Text style={globalstyles.errorText}>{props.touched.rating && props.errors.rating}</Text>


                    <Button title='Submit' color='maroon' onPress={props.handleSubmit} />

                </View>
            )}
            </Formik>
        </View>
    )

}