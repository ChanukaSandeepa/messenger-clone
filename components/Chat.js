import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { height, width } from '../constant/display'

const Chat = ({isLastMessageIYours, isSeen, message, name,navigation}) => {
    return (
        <TouchableOpacity onPress={ () =>  navigation.navigate('ChatView')} style={styles.container}>
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
                    <Ionicons name="ios-checkmark" size={17} color="white" />
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
        height : height / 12,
        paddingHorizontal : 8,
        marginVertical : 5
    },
    proPicContainer : {
        width : '17%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    proPic : {
        width : '90%',
        height : '90%',
        borderRadius : 200
    },
    descriptionContainer : {
        flex : 1,
        paddingLeft : 10
    },
    nameContainer : {
        height : '50%',
        justifyContent : 'flex-end',
    },
    name : {
        fontSize : 16,
        color : 'rgba(0,0,0,0.8)'
    },
    detailsContainer : {
        flexDirection : 'row',
        height : '50%',
        // justifyContent :'center',
        // alignItems : 'center'
    },
    message : {
        color : 'rgba(0,0,0,0.8)'
    },
    time : {
        paddingHorizontal : 10,
        color : 'rgba(0,0,0,0.8)'
    },
    seenProPicContainer : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    seenProPic : {
        width : 15,
        height : 15,
        borderRadius : 200
    },
    deliveryMarkContainer : {
        width : 15,
        height : 15,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'rgba(211,211,211,0.8)',
        borderRadius : 200
    }
})

export default Chat
