import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { useAppContext } from '../context/Context'

export default function HomeHeaderButton({navigation, changeToUserPanel}) {

    const cameraHanlder = () => {
        console.log('camera')
    }

    const createHandler = () => {
        console.log('create')
    }

    const usersHanlder = () => {
        navigation.navigate('AllPeople')
    }

    const addContactHandler = () => {
        navigation.navigate('AddContacts')
    }

    return (
        <View style={styles.headerLeftContainer}>
            <TouchableOpacity onPress={changeToUserPanel ? usersHanlder : cameraHanlder} style={styles.headerRightButton}>
                { !changeToUserPanel ?  <Ionicons style={{paddingHorizontal : 3}} size={25} name="ios-camera"/> :
                <MaterialIcons name="perm-contact-calendar" style={{paddingHorizontal : 3}} size={20} color="black" />}
            </TouchableOpacity>
            <TouchableOpacity onPress={changeToUserPanel ? addContactHandler : createHandler} style={styles.headerRightButton}>
                {!changeToUserPanel ? <Ionicons style={{paddingHorizontal : 3}} size={25} name="md-create"/> :
                <FontAwesome5 name="user-plus" size={15} color="black" />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerLeftContainer : {
        flexDirection : 'row', 
        display : 'flex' , 
        justifyContent : 'space-around'
    },
    headerRightButton : {
        backgroundColor : 'rgba(211,211,211,0.2)',
        borderRadius : 200,
        padding : 5,
        marginHorizontal : 5,
        justifyContent : 'center',
        alignItems : 'center',
        width : 35,
        height : 35
    },
})
