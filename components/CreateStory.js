import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default function CreateStory({color}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{...styles.content, backgroundColor : `${color}`}}>
                <Image style={styles.image} source={{ uri : 'https://scontent.fcmb3-1.fna.fbcdn.net/v/t1.0-1/p480x480/75588261_2404781076452130_5545727769062670336_o.jpg?_nc_cat=110&ccb=2&_nc_sid=dbb9e7&_nc_ohc=DsNVrmp2L6cAX9fJPl_&_nc_ht=scontent.fcmb3-1.fna&tp=6&oh=ea6411925dbc0c1aa89f5619ff1b3b74&oe=5FCD8E7E' }}/>
                <View style={styles.proPicContainer}>
                    <Entypo name="plus" size={24} color="black" />
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
        backgroundColor: 'white',
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