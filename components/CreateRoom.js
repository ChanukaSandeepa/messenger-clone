import React from 'react'
import { ActivityIndicator, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { width } from '../constant/display'
import { responsiveFontSize, responsiveHeight, responsiveScreenHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const CreateRoom = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageCotainer}>
                <View style={styles.image}>
                    <MaterialIcons name="video-call" size={responsiveHeight(5)} color="black" />
                </View>
            </TouchableOpacity>
            <Text numberOfLines={2}  style={styles.name}>Create room</Text>
        </View>
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
        width : responsiveHeight(7),
        margin : 2,
    },
    image : {
        width : '100%',
        height : '100%',
        borderRadius : 200,
        backgroundColor : 'rgba(211,211,211,0.3)',
        alignItems :'center',
        justifyContent : 'center',
    },
    name : {
        flex : 1,
        textAlign : 'center',
        fontSize : responsiveFontSize(1.5)
    },
})

export default CreateRoom