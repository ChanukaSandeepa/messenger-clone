import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons'
import ChatView from '../screens/ChatView';
import HomeTabs from './HomeTabs';
import HomeHeaderButton from './HomeHeaderButton';

export default function Navigator() {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                    <Stack.Screen 
                        options={
                            ({navigation, route}) => {
                                console.log(route.params, "damn")
                                return {
                                    title : "Chats",
                                    headerLeft : () => {
                                        return <Image style={styles.profilePic} source={{ uri : 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' }}/>
                                    },
                                    headerRight : () => {
                                        return <HomeHeaderButton/>
                                    },
                                    headerLeftContainerStyle : {
                                        paddingLeft : 10
                                    },
                                    headerRightContainerStyle : {
                                        paddingRight : 10
                                    },
                                    headerTitleContainerStyle : {
                                        margin : 0
                                    },
                                    headerStyle : {
                                        elevation : 0
                                    },
                                    
                                }
                            }
                        } 
                        name="Home" component={HomeTabs} />
                    <Stack.Screen options={ ({ navigation, route }) => { 
                        return {
                            title : null,
                            headerLeft : () => {
                                return (<View style={styles.chatViewHeaderLeftContainer}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <Ionicons name="md-arrow-back" size={30} color="#006AFF" />
                                    </TouchableOpacity>
                                    <View style={styles.chatViewProPicContainer}>
                                        <Image style={styles.profilePic} source={{ uri : 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' }}/>
                                    </View>
                                    <View>
                                        <Text style={styles.name}>{route.params.user}</Text>
                                        <Text style={styles.lastOnlineText}>Active 12 hour ago</Text>
                                    </View>
                                    
                                </View>)
                            },
                            headerRight : () => {
                                return (
                                    <View style={styles.chatViewHeaderRightContainer}>
                                        <TouchableOpacity style={styles.call}>
                                            <Ionicons name="ios-call" size={24} color="#006AFF" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.video}>
                                            <FontAwesome name="video-camera" size={24} color="#006AFF" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.info}>
                                            <FontAwesome5 name="info-circle" size={24} color="#006AFF" />
                                        </TouchableOpacity>
                                    </View>
                                )
                            },
                            headerLeftContainerStyle : {
                                paddingLeft : 20,
                                width : 'auto'
                            },
                            headerRightContainerStyle : {
                                paddingRight : 15
                            }
                        }
                    } } name="ChatView" component={ChatView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    profilePic : {
        borderRadius : 200,
        width : 35,
        height : 35,
    },
    chatViewHeaderLeftContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    name : {
        fontSize : 18,
        fontWeight : 'bold'
    },
    chatViewProPicContainer : {
        padding : 10
    },
    lastOnlineText : {
        fontSize : 12,
        color : 'gray'
    },
    chatViewHeaderRightContainer : {
        flexDirection : 'row'
    },
    call : {    
        paddingHorizontal : 10
    },
    video : {
        paddingHorizontal : 10
    },
    info : {
        paddingHorizontal : 10
    }
})
