import { StyleSheet } from 'react-native'


export const globalstyles = StyleSheet.create({
    container:{
        padding:20,
        flex:1
    },
    titleText:{
        fontSize:18,
        color:'#888'
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20
    },
    icon:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        margin:5
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:6,
        marginVertical:10
    },
    errorText:{
        color:'crimson'
    }
})


export const images = {
    ratings:{
        '1':require('../assets/rating-1.png'),
        '2':require('../assets/rating-2.png'),
        '3':require('../assets/rating-3.png'),
        '4':require('../assets/rating-4.png'),
        '5':require('../assets/rating-5.png'),
    }
}