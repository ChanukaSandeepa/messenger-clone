import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function LetterIncrement({letter}) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{letter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        paddingHorizontal : 10,
        paddingVertical : 15
    },
    name : {
        color : 'gray'
    }
})