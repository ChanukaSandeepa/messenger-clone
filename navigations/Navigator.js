import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import { Button, View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Navigator() {

    const Stack = createStackNavigator()
    const Drawer = createDrawerNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={
                    {
                        title : "Chats",
                        headerLeft : () => {
                            return <Image style={styles.profilePic} source={{ uri : 'https://lh3.googleusercontent.com/a-/AOh14GjFaBav6WujfOcQwyJIAqzA8U9vNiKykRFcfxnAjA=s88-c-k-c0x00ffffff-no-rj-mo' }}/>
                        },
                        headerRight : () => {
                            return <View style={{flexDirection : 'row', display : 'flex' , justifyContent : 'space-around'}}>
                                <Ionicons style={{paddingHorizontal : 3}} size={25} name="md-create"/>
                                <Ionicons style={{paddingHorizontal : 3}} size={25} name="ios-camera"/>
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
                        }
                    }
                } name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    profilePic : {
        borderRadius : 200,
        width : 35,
        height : 35
    }
})
