import React, { useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Services from "../screens/Services";
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actions } from '../redux/store';
import HomeRoutes from '../screens/HomeRoutes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { BASECOLOR } from '../Assets/colors/colors';
import Membership from '../screens/Membership';
import { BlurView } from '@react-native-community/blur';
import { ImageBackground, View } from 'react-native';
import tw from 'twrnc'

//color #7C68A8 -->purple

const Routes = () => {

    const Tab = createBottomTabNavigator();

    const Auth = useSelector(state => state.Auth);
    const dispatch = useDispatch();

    const getAuth = async () => {
        const token = JSON.parse(await AsyncStorage.getItem("cydi_TK"));
        if (token !== null) {
            dispatch(Actions.setAuth(true));
            // console.warn(Auth);
        }
    }

    useEffect(() => {
        getAuth();
    }, []);

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                    let icon;
                    let color = "black";
                    if (route.name === "Home") {
                        icon = focused ? "home-sharp" : "home-outline"
                    } else if (route.name === "Profile") {
                        icon = focused ? "person-circle" : "person-circle-outline"
                    } else if (route.name === "Services") {
                        icon = focused ? "grid-sharp" : "grid-outline"
                    } else if (route.name === "Membership") {
                        icon = focused ? "card-membership" : "card-membership"
                        return (<MaterialIcons name={icon} size={size} color={color} />);
                    }
                    return <Ionicons name={icon} size={size} color={color} />
                },
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    borderColor: "black",
                    borderTopWidth: 0,
                    
                },
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle:{
                    fontWeight:"bold",
                }
                
                // tabBarBackground: () =><ImageBackground source={require("../Assets/tabbarbg.jpg")} style={tw`w-full h-full`}></ImageBackground>
            })}
            >
                <Tab.Screen name="Home" component={HomeRoutes} />
                <Tab.Screen name="Services" component={Services} />
                <Tab.Screen name="Membership" component={Membership} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
