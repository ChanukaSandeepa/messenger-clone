import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons'
import ChatView from '../screens/ChatView';
import HomeTabs from './HomeTabs';
import HomeHeaderButton from './HomeHeaderButton';
import { useAppContext } from '../context/Context'
import AllPeople from '../screens/AllPeople'
import AddContacts from '../screens/AddContacts'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

export default function Navigator() {

    const Stack = createStackNavigator()
    const [{ header, headerTitle }, dispatch] = useAppContext()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={
                        ({ navigation }) => {
                            return {
                                title: headerTitle,
                                headerLeft: () => {
                                    return <Image style={styles.profilePic} source={{ uri: 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' }} />
                                },
                                headerRight: () => {
                                    return !header ? <HomeHeaderButton navigation={navigation} /> : <HomeHeaderButton navigation={navigation} changeToUserPanel={true} />
                                },
                                headerLeftContainerStyle: {
                                    paddingLeft: 10
                                },
                                headerRightContainerStyle: {
                                    paddingRight: 10
                                },
                                headerTitleContainerStyle: {
                                    margin: 0
                                },
                                headerStyle: {
                                    elevation: 0
                                },
                            }
                        }
                    }
                    name="Home" component={HomeTabs} />
                <Stack.Screen
                    options={({ navigation, route }) => {
                        return {
                            title: null,
                            headerLeft: () => {
                                return (<View style={styles.chatViewHeaderLeftContainer}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <Ionicons name="md-arrow-back" size={responsiveFontSize(3)} color="#006AFF" />
                                    </TouchableOpacity>
                                    <View style={styles.chatViewProPicContainer}>
                                        <Image style={styles.profilePic} source={{ uri: 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' }} />
                                    </View>
                                    <View>
                                        <Text style={styles.name}>{route.params.user}</Text>
                                        <Text style={styles.lastOnlineText}>Active 12 hour ago</Text>
                                    </View>

                                </View>)
                            },
                            headerRight: () => {
                                return (
                                    <View style={styles.chatViewHeaderRightContainer}>
                                        <TouchableOpacity style={styles.call}>
                                            <Ionicons name="ios-call" size={responsiveFontSize(3)} color="#006AFF" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.video}>
                                            <FontAwesome name="video-camera" size={responsiveFontSize(3)} color="#006AFF" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.info}>
                                            <FontAwesome5 name="info-circle" size={responsiveFontSize(3)} color="#006AFF" />
                                        </TouchableOpacity>
                                    </View>
                                )
                            },
                            headerLeftContainerStyle: {
                                paddingLeft: 20,
                                width: 'auto'
                            },
                            headerRightContainerStyle: {
                                paddingRight: 15
                            }
                        }
                    }} name="ChatView" component={ChatView} />
                <Stack.Screen name="AllPeople" component={AllPeople}
                    options={
                        {
                            title: "All People"
                        }
                    }
                />
                <Stack.Screen name="AddContacts" component={AddContacts}
                    options={
                        {
                            title: "Add Contacts"
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    profilePic: {
        borderRadius: 200,
        width: responsiveHeight(5),
        height: responsiveHeight(5),
    },
    chatViewHeaderLeftContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },
    chatViewProPicContainer: {
        padding: 10
    },
    lastOnlineText: {
        fontSize: responsiveFontSize(1.5),
        color: 'gray'
    },
    chatViewHeaderRightContainer: {
        flexDirection: 'row'
    },
    call: {
        paddingHorizontal: 10
    },
    video: {
        paddingHorizontal: 10
    },
    info: {
        paddingHorizontal: 10
    }
})
