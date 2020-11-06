import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { width, height } from '../constant/display'
import ActiveUserOnHome from '../components/ActiveUserOnHome'
import CreateRoom from '../components/CreateRoom'
import Chat from '../components/Chat'

const Home =  ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={{ alignItems : 'center' }} style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchIconContainer}>
                    <Ionicons color="gray" name="ios-search" size={20}/>
                </View>
                <TextInput style={styles.search} placeholder="Search"/>
            </View>
            <View style={styles.activeUsersContainer}>
                <ScrollView style={{height : height / 9, marginVertical : 10}} showsHorizontalScrollIndicator={false} horizontal>
                    <CreateRoom/>
                    <ActiveUserOnHome/>
                    <ActiveUserOnHome/>
                    <ActiveUserOnHome/>
                    <ActiveUserOnHome/>
                    <ActiveUserOnHome/>
                    <ActiveUserOnHome/>
                    <ActiveUserOnHome/>
                    <ActiveUserOnHome/>
                    <ActiveUserOnHome/>
                    <ActiveUserOnHome/>
                </ScrollView>
            </View>
                <Chat navigation={navigation} name="Osandi Abe" message="Hello there"/>
                <Chat navigation={navigation} name="Chanuka Sandeepa" message="Something happening inside ours" isLastMessageIYours={true} isSeen={true}/>
                <Chat navigation={navigation} name="Ishanka Nimantha" message="Damn this is going perfect" isLastMessageIYours={true}/>
                <Chat navigation={navigation} name="Osandi Abe" message="Hello there"/>
                <Chat navigation={navigation} name="Chanuka Sandeepa" message="Something happening inside ours" isLastMessageIYours={true} isSeen={true}/>
                <Chat navigation={navigation} name="Ishanka Nimantha" message="Damn this is going perfect" isLastMessageIYours={true}/>
                <Chat navigation={navigation} name="Osandi Abe" message="Hello there"/>
                <Chat navigation={navigation} name="Chanuka Sandeepa" message="Something happening inside ours" isLastMessageIYours={true} isSeen={true}/>
                <Chat navigation={navigation} name="Ishanka Nimantha" message="Damn this is going perfect" isLastMessageIYours={true}/>
                <Chat navigation={navigation} name="Osandi Abe" message="Hello there"/>
                <Chat navigation={navigation} name="Chanuka Sandeepa" message="Something happening inside ours" isLastMessageIYours={true} isSeen={true}/>
                <Chat navigation={navigation} name="Ishanka Nimantha" message="Damn this is going perfect" isLastMessageIYours={true}/>
                <Chat navigation={navigation} name="Osandi Abe" message="Hello there"/>
                <Chat navigation={navigation} name="Chanuka Sandeepa" message="Something happening inside ours" isLastMessageIYours={true} isSeen={true}/>
                <Chat navigation={navigation} name="Ishanka Nimantha" message="Damn this is going perfect" isLastMessageIYours={true}/>
                <Chat navigation={navigation} name="Osandi Abe" message="Hello there"/>
                <Chat navigation={navigation} name="Chanuka Sandeepa" message="Something happening inside ours" isLastMessageIYours={true} isSeen={true}/>
                <Chat navigation={navigation} name="Ishanka Nimantha" message="Damn this is going perfect" isLastMessageIYours={true}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        flex : 1,
        paddingTop : 10
    },
    searchContainer : {
        width : width - 40,
        height : height / 20,
        backgroundColor : 'rgba(211, 211, 211, 0.2)',
        borderRadius : 30,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    search : {
        flex : 1
    },
    searchIconContainer : {
        paddingHorizontal : 10
    },
    activeUsersContainer : {
        height : height / 7,
        width : width,
        marginVertical : 5
    }
})

export default  Home