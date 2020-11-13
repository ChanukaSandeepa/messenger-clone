import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'

export default function Story({color}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content}>
                <Image style={styles.image} source={{ uri : 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }}/>
                <View style={styles.proPicContainer}>
                    <Image source={ { uri : 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' } } style={styles.proPic}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        height : responsiveHeight(30),
        padding : 5
    },
    content : {
        flex : 1,
        borderRadius : 10,
        position : 'relative',
        overflow: 'hidden',
    },
    proPicContainer : {
        position: 'absolute',
        width : responsiveHeight(6),
        height : responsiveHeight(6),
        backgroundColor: 'transparent',
        borderColor : 'blue',
        borderWidth : 2,
        borderRadius : 200,
        top : 3,
        left : 3,
        justifyContent : 'center',
        alignItems : 'center'
    },
    proPic : {
        width : responsiveHeight(5),
        height : responsiveHeight(5),
        borderRadius : 200
    },
    image : {
        width : '100%',
        height : '100%'
    }
})