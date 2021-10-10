import React from "react";
import { StyleSheet,Button,TextInput,View,Text } from "react-native";
import { globalstyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm(){

    return(
        <View style={globalstyles.container}>
            <Formik
            initialValues={{title:'',body:'',rating:''}}
            onSubmit={(values) => {
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
                    />
                    <TextInput
                        multiline
                        style={globalstyles.input}
                        placeholder='Review Body'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                    />
                    <TextInput
                        style={globalstyles.input}
                        placeholder='Rating (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'
                    />

                    <Button title='Submit' color='maroon' onPress={props.handleSubmit} />

                </View>
            )}
            </Formik>
        </View>
    )

}