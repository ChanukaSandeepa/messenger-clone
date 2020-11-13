import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import AddFriend from '../components/AddFriend'

export default function AddContacts() {
    return (
        <ScrollView style={styles.container}>
            <AddFriend/>
            <AddFriend/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    }
})