import React, { useEffect } from 'react'
import { View,Text, StyleSheet, ScrollView } from 'react-native'
import ActiveUser from '../components/ActiveUser'

export default function Users({navigation, route}) {

    React.useEffect(() => {
        if(navigation){
            const unsubscribe = navigation.addListener('tabPress', (e) => {
                console.log(e)
                // Prevent default behavior
                // e.preventDefault();
            
                // Do something manually
                // ...
              });
            
              return unsubscribe;
        }
      }, [navigation]);

      useEffect(() => {
        if(navigation.isFocused()){
            console.log('trigger')
            navigation.setParams({user : 'Chanuka'})
        }
      },[navigation])

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