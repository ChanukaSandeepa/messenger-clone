import React, { useEffect } from 'react'
import { View,Text, StyleSheet, ScrollView, Button } from 'react-native'
import ActiveUser from '../components/ActiveUser'
import { useAppContext } from '../context/Context'
import { CHANGE_HEADER } from '../context/reducer'

export default function Users({navigation, route}) {

    return (
        <View style={styles.container}>
            <ScrollView>
                <ActiveUser/>
                <ActiveUser/>
                <ActiveUser/>
                <ActiveUser/>
                <ActiveUser/>
                <ActiveUser/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        flex: 1,
    }
})