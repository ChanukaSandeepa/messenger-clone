import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CreateStory from '../components/CreateStory'
import Story from '../components/Story'

export default function Stories() {

    const stories = [ <CreateStory key={11}/> ,<Story key={1} color="red"/>, <Story key={2} color="yellow"/>, <Story key={3} color="blue"/>, <Story key={4} color="lightgreen"/>, <Story key={5} color="purple"/>, <Story key={6} color="green"/>, <Story key={7} color="red"/>, <Story key={8} color="yellow"/>, <Story key={9} color="blue"/> ]

    return (
        <View style={styles.cotainer}>
            <FlatList 
                data={stories}
                style={styles.list}
                numColumns={3}
                renderItem={({item}) => item}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cotainer : {
        flex: 1,
        backgroundColor : 'white'
    }
})