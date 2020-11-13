import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions'

export default function ActiveUser() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri : 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' }}/>
                <View style={styles.activeStatus}/>
            </View>
            <Text style={styles.name}>Chanuka Sandeepa</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        marginVertical : 10,
        paddingHorizontal : 10,
        alignItems : 'center'
    },
    imageContainer : {
        position : 'relative'
    }, 
    image : {
        width : responsiveHeight(5),
        height : responsiveHeight(5),
        borderRadius : 200
    },
    name : {
        paddingHorizontal : 10,
        fontSize : responsiveFontSize(1.8),
        fontWeight : 'bold'
    },
    activeStatus : {
        position : 'absolute',
        width : responsiveHeight(2),
        height : responsiveHeight(2),
        backgroundColor : '#03C003',
        bottom : -1,
        right: -1,
        borderRadius : 200,
        borderColor : 'white',
        borderWidth : 2
    }
})