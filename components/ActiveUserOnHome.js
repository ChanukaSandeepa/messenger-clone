import React from 'react'
import { View, Text, Image, StyleSheet, PixelRatio, TouchableOpacity } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const ActiveUserOnHome = () => {


    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageCotainer}>
                <Image style={styles.image} source={ { uri : 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' } }/>
                <View style={styles.onlineStatus}/>
            </View>
            <Text style={styles.name}>Chanuka Sandeepa</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        width : responsiveWidth(20),
        justifyContent : 'center',
        alignItems : 'center'
    },
    imageCotainer : {
        height : responsiveHeight(7),
        width : responsiveHeight(7)
    },
    name : {
        flex : 1,
        textAlign : 'center',
        fontSize : responsiveFontSize(1.5),
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