import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function ReceivedMsg({msg}) {
    return (
        <View style={styles.container}>
            <View style={styles.proPicContainer}>
                <Image style={styles.proPic} source={{ uri : 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' }} />
            </View>
            <View style={styles.msgContainer}>
    <Text style={styles.msg}>{msg}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal : 10,
        marginVertical : 5,
        flexDirection : 'row',
        maxWidth : '80%'
    },
    msgContainer : {
        backgroundColor : '#F1F0F0',
        borderRadius : 20,
        padding : 10,
    },
    msg : { 
        color : 'black',
        fontWeight : '500'
    },
    proPicContainer : {
        display : 'flex',
        paddingRight : 10,
        justifyContent : 'flex-end',
        // backgroundColor : 'red'
    },
    proPic : {
        width : 27,
        height : 27,
        borderRadius : 200
    }
})