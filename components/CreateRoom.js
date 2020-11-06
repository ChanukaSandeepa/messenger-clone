import React from 'react'
import { ActivityIndicator, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { width } from '../constant/display'

const CreateRoom = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageCotainer}>
                <MaterialIcons name="video-call" size={30} color="black" />
            </TouchableOpacity>
            <Text numberOfLines={2}  style={styles.name}>Create room</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : width / 5,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 3
    },
    imageCotainer : {
        height : '65%',
        width : '80%',
        position : 'relative',
        borderRadius : 200,
        backgroundColor : 'rgba(211,211,211,0.2)',
        justifyContent : 'center',
        alignItems : 'center',margin : 2
    },
    name : {
        height : '35%',
        textAlign : 'center',
        fontSize : 13,
        lineHeight : 15
    },
})

export default CreateRoom