import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { height } from '../constant/display'

export default function SendMsg() {
    return (
        <View style={styles.container}>
            <View style={styles.msgContainer}>
                <Text style={styles.msg}>Hello there</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal : 10
    },
    msgContainer : {
        backgroundColor : '#006AFF',
        borderRadius : 20,
        padding : 10,
    },
    msg : { 
        color : 'white',
        backgroundColor : 'red'
    }
})