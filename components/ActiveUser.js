import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function ActiveUser() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri : 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' }}/>
                <View style={styles.activeStatus}/>
            </View>
            
            <Text style={styles.name}>Chanuka Sandeepa</Text>
        </View>
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
        width : 35,
        height : 35,
        borderRadius : 200
    },
    name : {
        paddingHorizontal : 10,
        fontSize : 15,
        fontWeight : 'bold'
    },
    activeStatus : {
        position : 'absolute',
        width : 13,
        height : 13,
        backgroundColor : '#03C003',
        bottom : -1,
        right: -1,
        borderRadius : 200,
        borderColor : 'white',
        borderWidth : 2
    }
})