import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { height } from '../constant/display';
import { useAppContext } from '../context/Context';
import { CHANGE_HEADER } from '../context/reducer';
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import PeopleTabs from './PeopleTabs';

export default function HomeTabs() {

    const Tab = createBottomTabNavigator();
    const [{haeder}, dispatch] = useAppContext()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
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
                listeners={() => ({
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
                listeners={() => ({
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
                options={{ title: 'People' }} name="Users" component={PeopleTabs}/>
        </Tab.Navigator>
    )
}

