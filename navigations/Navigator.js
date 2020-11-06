import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import { Button, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import Users from '../screens/Users';
import { height } from '../constant/display';
import ChatView from '../screens/ChatView';

export default function Navigator() {

    const Stack = createStackNavigator()
    const Drawer = createDrawerNavigator()
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarIcon : ({ focused, color, size }) => {
                        if (route.name === 'Main') {
                          return <MaterialCommunityIcons name="chat" size={size} color={color} />;
                        } else if (route.name === 'Users') {
                          return <FontAwesome5 name="user-friends" size={size} color={color}/>
                        }
                      }
                })}
                tabBarOptions={
                    {
                        activeTintColor : 'black',
                        inactiveTintColor : 'rgba(211,211,211,0.8)',
                        style : {
                            height : height / 13
                        },
                        tabStyle: {
                            padding : 10
                        },
                        labelStyle : {
                            fontSize : 13,
                        },
                        labelPosition : "below-icon"
                    }
                }

            
            >
            <Tab.Screen options={ { title : 'Chats' } } name="Main">
                {() => {
                    return (
                        <Stack.Navigator>
                            <Stack.Screen options={
                                {
                                    title : "Chats",
                                    headerLeft : () => {
                                        return <Image style={styles.profilePic} source={{ uri : 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' }}/>
                                    },
                                    headerRight : () => {
                                        return <View style={styles.headerLeftContainer}>
                                            <TouchableOpacity style={styles.headerRightButton}>
                                                <Ionicons style={{paddingHorizontal : 3}} size={25} name="ios-camera"/>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.headerRightButton}>
                                                <Ionicons style={{paddingHorizontal : 3}} size={25} name="md-create"/>
                                            </TouchableOpacity>
                                        </View>
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
                                    }
                                }
                            } name="Home" component={Home}/>
                            <Stack.Screen options={ { 
                                title : 'Chat View',
                                headerLeft : (props,data) => {
                                    console.log(data)
                                    return <Image style={styles.profilePic} source={{ uri : 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' }}/>
                                },
                        } } name="ChatView" component={ChatView} />
                        </Stack.Navigator>
                    )
                }}
            </Tab.Screen>
            <Tab.Screen options={ { title : 'People' } } name="Users" component={Users} />
        </Tab.Navigator>
            
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    profilePic : {
        borderRadius : 200,
        width : 35,
        height : 35
    },
    headerRightButton : {
        backgroundColor : 'rgba(211,211,211,0.2)',
        borderRadius : 200,
        padding : 5,
        marginHorizontal : 2
    },
    headerLeftContainer : {
        flexDirection : 'row', 
        display : 'flex' , 
        justifyContent : 'space-around'
    }
})
