import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { height } from '../constant/display'
import { AntDesign, Entypo, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import SendMsg from '../components/SendMsg';
import ReceivedMsg from '../components/ReceivedMsg';

export default function ChatView() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.chatContainer}>
                <View style={{flex : 1}}>
                    <SendMsg msg="Hello there"/>
                    <ReceivedMsg msg="Hello there"/>
                    <SendMsg msg="I'm from sri lanka"/>
                    <SendMsg msg="I'd like to have more friends from Canada. Would you also be one of my canadian friend?"/>
                    <ReceivedMsg msg="For sure! Are you using whats app or another social medeia? If you please give me your contacts"/>
                    <SendMsg msg="Of counse."/>
                    <SendMsg msg="+94766471255"/>
                    <ReceivedMsg msg="Thanks mate!"/>
                    <ReceivedMsg msg="I'll contact you later now i'm in a lecture."/>
                    <SendMsg msg="No problem. That means you are still studying."/>
                    <SendMsg msg="I'm too still studying and I'm dong computer sceince"/>
                    <ReceivedMsg msg="That's very cool!"/>
                    <ReceivedMsg msg="I'm a software developer"/>
                    <ReceivedMsg msg="We are in the same field. Such a amaing thing bro!"/>
                </View>
            </ScrollView>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.icon}>
                    <Entypo name="grid" size={24} color="#006AFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <FontAwesome5 name="camera" size={24} color="#006AFF" />
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <AntDesign name="picture" size={24} color="#006AFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <FontAwesome name="microphone" size={24} color="#006AFF" />
                </TouchableOpacity>
                <View style={styles.sendMsgContainer}>
                    <TextInput placeholder="Aa" style={styles.input}/>
                    <Entypo name="emoji-happy" size={20} color="gray" />
                </View>
                <TouchableOpacity style={styles.icon}>
                    <AntDesign name="like1" size={24} color="#006AFF" />
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        flex: 1,
    },
    chatContainer : {

    },
    inputContainer : {
        height : height / 15,
        flexDirection : 'row',
        alignItems : 'center',
        shadowOffset : { width : 2, height : 2 },
        shadowColor : 'black',
        shadowOpacity : 0.5,
        shadowRadius : 20,
        elevation : 3
    },
    input : {
        flex : 1,
    },
    sendMsgContainer : {
        width : '40%',
        backgroundColor : 'rgba(211,211,211,0.5)',
        borderRadius : 20,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 10,
        height : '70%'
    },
    icon : {
        padding : 5,
        width : '12%',
        justifyContent : 'center',
        alignItems : 'center'
    }
}) 