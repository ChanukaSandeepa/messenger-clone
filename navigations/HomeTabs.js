import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Users from '../screens/Users';
import { height } from '../constant/display';
import Stories from '../screens/Stories';
import Animated from 'react-native-reanimated';
import { useAppContext } from '../context/Context';
import { CHANGE_HEADER } from '../context/reducer';
import { responsiveFontSize, responsiveHeight  } from 'react-native-responsive-dimensions'

export default function HomeTabs() {

    const Tab = createBottomTabNavigator();
    const TopTab = createMaterialTopTabNavigator()
    const [{haeder}, dispatch] = useAppContext()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    if (route.name === 'Main') {
                        return <MaterialCommunityIcons name="chat" size={responsiveFontSize(3)} color={color} />;
                    } else if (route.name === 'Users') {
                        return <FontAwesome5 name="user-friends" size={responsiveFontSize(3)} color={color} />
                    }
                },
                
            })}
            tabBarOptions={
                {
                    activeTintColor: 'black',
                    inactiveTintColor: 'rgba(211,211,211,0.8)',
                    style: {
                        height: height / 13
                    },
                    tabStyle: {
                        padding: 10
                    },
                    labelStyle: {
                        fontSize: responsiveFontSize(1.5),
                    },
                    labelPosition: "below-icon",

                }
            }

        >
            <Tab.Screen
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // e.preventDefault()
                        dispatch({
                            type : CHANGE_HEADER,
                            payload : {
                                status : false,
                                title : 'Chats'
                            }
                        })
                    }
                })}
                options={{ title: 'Chats' }} name="Main" component={Home} />
            <Tab.Screen
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // e.preventDefault()
                        dispatch({
                            type : CHANGE_HEADER,
                            payload : {
                                status : true,
                                title : 'Users'
                            }
                        })
                    }
                })}
                options={{ title: 'People' }} name="Users">
                {
                    () => {
                        return (
                            <TopTab.Navigator
                                tabBar={({ state, descriptors, navigation, position }) => {
                                    return (
                                        <View style={styles.topTabContainer}>
                                            {state.routes.map((route, index) => {
                                                const { options } = descriptors[route.key];
                                                const label =
                                                    options.tabBarLabel !== undefined
                                                        ? options.tabBarLabel
                                                        : options.title !== undefined
                                                            ? options.title
                                                            : route.name;

                                                const isFocused = state.index === index;

                                                const onPress = () => {
                                                    console.log(route.name)
                                                    const event = navigation.emit({
                                                        type: 'tabPress',
                                                        target: route.key,
                                                    });

                                                    if (!isFocused && !event.defaultPrevented) {
                                                        navigation.navigate(route.name);
                                                    }
                                                };

                                                const onLongPress = () => {
                                                    navigation.emit({
                                                        type: 'tabLongPress',
                                                        target: route.key,
                                                    });
                                                };


                                                return (
                                                    <TouchableOpacity
                                                        key={index}
                                                        accessibilityRole="button"
                                                        accessibilityState={isFocused ? { selected: true } : {}}
                                                        accessibilityLabel={options.tabBarAccessibilityLabel}
                                                        testID={options.tabBarTestID}
                                                        onPress={onPress}
                                                        onLongPress={onLongPress}
                                                        style={{ ...styles.topTab, backgroundColor: isFocused ? 'rgba(211,211,211,0.3)' : 'white' }}
                                                    >
                                                        <Animated.Text style={{ ...styles.topTabTitle, color: isFocused ? 'black' : 'gray' }}>{label}</Animated.Text>
                                                    </TouchableOpacity>
                                                );
                                            })}
                                        </View>)
                                }}

                            >
                                <TopTab.Screen name="USERS" component={Users} />
                                <TopTab.Screen name="STORIES" component={Stories} />
                            </TopTab.Navigator>
                        )
                    }
                }
            </Tab.Screen>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    topTabContainer: {
        flexDirection: 'row',
        paddingVertical: 20,
        backgroundColor: 'white'
    },
    topTab: {
        flex: 1, backgroundColor: 'red',
        marginHorizontal: 10,
        backgroundColor: 'rgba(211,211,211,0.3)',
        borderRadius: 20,
        alignItems: 'center'
    },
    topTabTitle: {
        padding : 5,
        fontSize: responsiveFontSize(1.8)
    }
})