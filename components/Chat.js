import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Chat = ({isLastMessageIYours, isSeen, message, name,navigation}) => {
    return (
        <TouchableOpacity onPress={ () =>  {
                navigation.navigate('ChatView',{user : 'Osandi'})
            }
        } style={styles.container}>
            <View style={styles.proPicContainer}>
                <Image style={styles.proPic} source={{ uri : 'https://lh3.googleusercontent.com/-ip0x0Nhkrnk/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclaLasCFZ0BnSsnJ5Zxt2DsBc-RrQ/s48-c/photo.jpg' }}/>
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.nameContainer}>
    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={{...styles.detailsContainer, width : isLastMessageIYours ? '75%' : '83%'}}>
    <Text numberOfLines={1} style={styles.message}>{isLastMessageIYours && 'You : '}{message}</Text>
                    <Text style={styles.time}>25 OCt</Text>
                </View>
            </View>
            {isLastMessageIYours && <View style={styles.seenProPicContainer}>
                {isSeen ? <View style={styles.deliveryMarkContainer}>
                    <Ionicons name="ios-checkmark" size={responsiveFontSize(2)} color="white" />
                </View> :
                <Image style={styles.seenProPic} source={{ uri : 'https://lh3.googleusercontent.com/-tEHKy1mO0Tk/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucla6TnZtNKKBT3UXR00-iky4VvXsA/s48-c/photo.jpg' }}/>
                }</View>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        width : '100%',
        height : responsiveHeight(9),
        paddingHorizontal : 8,
        marginVertical : 2
    },
    proPicContainer : {
        width : '17%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    proPic : {
        width : responsiveHeight(7),
        height : responsiveHeight(7),
        borderRadius : 200
    },
    descriptionContainer : {
        flex : 1,
        paddingLeft : responsiveWidth(2)
    },
    nameContainer : {
        height : '50%',
        justifyContent : 'flex-end',
    },
    name : {
        fontSize : responsiveFontSize(2),
        color : 'rgba(0,0,0,0.8)'
    },
    detailsContainer : {
        flexDirection : 'row',
        height : '50%'
    },
    message : {
        color : 'rgba(0,0,0,0.8)',
        fontSize : responsiveFontSize(1.7)
    },
    time : {
        paddingHorizontal : 10,
        color : 'rgba(0,0,0,0.8)',
        fontSize : responsiveFontSize(1.5)
    },
    seenProPicContainer : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    seenProPic : {
        width : responsiveHeight(2),
        height : responsiveHeight(2),
        borderRadius : 200
    },
    deliveryMarkContainer : {
        width : responsiveHeight(2),
        height : responsiveHeight(2),
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'rgba(211,211,211,0.8)',
        borderRadius : 200
    }
})

export default Chat
