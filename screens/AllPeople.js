import React, { useState } from 'react'
import { View, StyleSheet, Modal, ScrollView, Image, Text, Button, TouchableOpacity, StatusBar } from 'react-native'
import Friend from '../components/Friend'
import LetterIncrement from '../components/LetterIncrement'
import { Zocial, FontAwesome, AntDesign } from '@expo/vector-icons'

export default function AllPeople({ navigation }) {

    const [modelVisibility, setModelVisibility] = useState(false)

    const onFriendClick = () => [
        setModelVisibility(true)
    ]

    return (
        <ScrollView style={styles.container}>
            <LetterIncrement letter='A' />
            <Friend
                image='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9edaab3587706b3a5d3a816a313c569f-1591660947173/26586bbd-a648-4572-ac5e-05bdd1059f98.jpg'
                name='Chanuka Sandeepa'
                userName='chanukasandeepa1997'
                onPress={onFriendClick}
            />
            <Friend
                image='https://media.istockphoto.com/photos/headshot-of-a-teenage-boy-picture-id1158014305?k=6&m=1158014305&s=612x612&w=0&h=wJghV5wVzO8_88a808t7kVK2VBPp3TqEm6g2OYk19v4='
                name='Chinthaka Deshan'
                userName='chanukasandeepa1997'
                onPress={onFriendClick}
            />
            <LetterIncrement letter='R' />
            <Friend
                image='https://lh3.googleusercontent.com/ogw/ADGmqu-PPNtRAMk9L9PD8BfyedadmzJLZMH9TA0RqGgbwA=s192-c-mo'
                name='Roshan Gunathilaka'
                userName='roshangun'
                onPress={onFriendClick}
            />
            <LetterIncrement letter='S' />
            <Friend
                image='https://lh3.googleusercontent.com/ogw/ADGmqu_0ido8smNqS8Elx7RiIcw8x87rhrs9aky7Sa6J=s48-c-mo'
                name='Sana S Kumara'
                userName='sanaskuara.789'
                onPress={onFriendClick}
            />
            <LetterIncrement letter='A' />
            <Friend
                image='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9edaab3587706b3a5d3a816a313c569f-1591660947173/26586bbd-a648-4572-ac5e-05bdd1059f98.jpg'
                name='Chanuka Sandeepa'
                userName='chanukasandeepa1997'
                onPress={onFriendClick}
            />
            <Friend
                image='https://media.istockphoto.com/photos/headshot-of-a-teenage-boy-picture-id1158014305?k=6&m=1158014305&s=612x612&w=0&h=wJghV5wVzO8_88a808t7kVK2VBPp3TqEm6g2OYk19v4='
                name='Chinthaka Deshan'
                userName='chanukasandeepa1997'
                onPress={onFriendClick}
            />
            <LetterIncrement letter='R' />
            <Friend
                image='https://lh3.googleusercontent.com/ogw/ADGmqu-PPNtRAMk9L9PD8BfyedadmzJLZMH9TA0RqGgbwA=s192-c-mo'
                name='Roshan Gunathilaka'
                userName='roshangun'
                onPress={onFriendClick}
            />
            <LetterIncrement letter='S' />
            <Friend
                image='https://lh3.googleusercontent.com/ogw/ADGmqu_0ido8smNqS8Elx7RiIcw8x87rhrs9aky7Sa6J=s48-c-mo'
                name='Sana S Kumara'
                userName='sanaskuara.789'
                onPress={onFriendClick}
            />
            <Modal
                visible={modelVisibility}
                transparent
            >
                {/* <Button title="Close" onPress={() => setModelVisibility(false)}/> */}
                {/* <TouchableOpacity onPress={() => setModelVisibility(false)} style={styles.close}> */}
                    
                {/* </TouchableOpacity> */}
                <View style={styles.model}>
                    {/* {setModelVisibility && <StatusBar backgroundColor="rgba(52, 52, 52, 0.5)"/>} */}
                    <AntDesign onPress={() => setModelVisibility(false)} style={styles.close} name="close" size={30} color="black" />
                    <View style={styles.content}>
                        <View style={styles.topContainer}>
                            <Zocial style={styles.icon} name="call" size={24} color="#006AFF" />
                            <FontAwesome style={styles.icon} name="video-camera" size={24} color="#006AFF" />
                        </View>
                        <View style={styles.centerContainer}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri: 'https://www.foleon.com/hubfs/Images/Team%20Images/sean-filidis.png' }} />
                            </View>
                            <Text style={styles.name}>Ogasteen</Text>
                            <Text style={styles.facebookTitle}>Facebook</Text>
                            <Text style={styles.caption}>You're friend on Facebok</Text>
                        </View>
                        <TouchableOpacity style={styles.bottomBtn}>
                            <Text style={styles.btnText}>MESSAGE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    model: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        // backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '80%',
        height: '60%',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 200,
        // paddingBottom : 20,
    },
    topContainer: {
        height: '10%',
        justifyContent: 'flex-end',
        flexDirection : 'row',
        padding : 10
    },
    icon: {
        paddingHorizontal: 10
    },
    centerContainer: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    bottomBtn: {
        height : 60,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#006AFF'
    },
    btnText: {
        color : 'white',
        fontSize : 18
    },
    name: {
        fontSize : 20
    },
    facebookTitle: {
        fontSize : 13
    },
    caption: {
        color : 'gray',
        fontSize : 14
    },
    close : {
        width : 35,
        height : 35,
        backgroundColor : 'transparent',
        flexDirection : 'column',
        position: 'absolute',
        top : 20,
        left : 20,
        color : 'white'
    },
    imageContainer : {
        paddingBottom : 20
    }
})