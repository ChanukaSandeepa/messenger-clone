import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

export default function SendMsg({ msg }) {
    return (
        <View style={styles.container}>
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
        width : '100%',
        justifyContent : 'flex-end'
    },
    msgContainer : {
        backgroundColor : '#006AFF',
        borderRadius : 20,
        padding : 10,
        maxWidth : '80%'
    },
    msg : { 
        color : 'white',
        fontWeight : '500',
        fontSize : responsiveFontSize(1.9)
    }
})