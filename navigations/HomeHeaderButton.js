import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { useAppContext } from '../context/Context'

export default function HomeHeaderButton({navigation}) {

    const [{ header }, dispatch] = useAppContext()

    
    // React.useEffect(() => {
    //     const unsubscribe = navigation.addListener('tabPress', (e) => {
    //         console.log(e)
    //     });
    //     return unsubscribe;
    //   }, []);

    useEffect(() => {
        console.log(header,"header tag value")
    },[navigation])

    return (
        <View style={styles.headerLeftContainer}>
            <TouchableOpacity style={styles.headerRightButton}>
                <Ionicons style={{paddingHorizontal : 3}} size={25} name="ios-camera"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerRightButton}>
                <Ionicons style={{paddingHorizontal : 3}} size={25} name="md-create"/>
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
        marginHorizontal : 5
    },
})
