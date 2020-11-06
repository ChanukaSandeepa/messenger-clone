import React from 'react'
import { ActivityIndicator, View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { width } from '../constant/display'

const ActiveUserOnHome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageCotainer}>
                <Image style={styles.image} source={ { uri : 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' } }/>
                <View style={styles.onlineStatus}/>
            </View>
            <Text style={styles.name}>Sandeepa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : width / 5,
        padding : 3,
        justifyContent : 'center',
        alignItems : 'center',
    },
    imageCotainer : {
        height : '65%',
        width : '80%',
        paddingHorizontal : 2,
        position : 'relative',
        paddingBottom : 0
    },
    name : {
        height : '35%',
        textAlign : 'center',
        fontSize : 13,
        lineHeight : 13,
        textAlignVertical : "center"
    },
    image : {
        width : '100%',
        height : '100%',
        borderRadius : 200,
    },
    onlineStatus : {
        width : 15,
        height : 15,
        backgroundColor : 'green',
        borderRadius : 200,
        position : 'absolute',
        bottom : 1,
        right : 1,
        borderWidth : 2,
        borderColor : 'white'
    }
})

export default ActiveUserOnHome