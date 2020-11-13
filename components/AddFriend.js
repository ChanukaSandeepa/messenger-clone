import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions'

export default function AddFriend() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={ { uri : 'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9edaab3587706b3a5d3a816a313c569f-1591660947173/26586bbd-a648-4572-ac5e-05bdd1059f98.jpg' } }/>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>Chanuka Sandeepa</Text>
                <Text style={styles.mutual}>6 mutual friends</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.addBtnText}>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <AntDesign style={styles.icon} name="close" size={responsiveFontSize(2.5)} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        // justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
        padding : 10
    },
    image : {
        width : responsiveHeight(6),
        height :responsiveHeight(6),
        borderRadius : 200
    },
    name : {
        fontSize : responsiveFontSize(1.9)
    },
    addBtnText : {
        paddingVertical : 5,
        fontSize : responsiveFontSize(1.6)
    },
    button : {
        backgroundColor : 'rgba(211,211,211,0.5)',
        paddingHorizontal : 10,
        marginHorizontal : 5,
        borderRadius : 20
    },
    mutual : {
        fontSize :responsiveFontSize(1.5),
        color : 'gray'
    },
    detailsContainer : {
        paddingHorizontal : 10,
        flex: 1,
    },
    icon : {
        paddingVertical : 5
    }
})