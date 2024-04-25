import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApplicationProvider, Spinner } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import axios from 'axios';
import BASE from '../api/api';

const MembershipCard = ({navigation}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const [membershipType,setMembershipType] = useState({
        BRONZE:require("../Assets/MemberShipCards/6.png"),
        SILVER:require("../Assets/MemberShipCards/2.png"),
        GOLD:require("../Assets/MemberShipCards/1.png"),
        PLATINUM:require("../Assets/MemberShipCards/3.png"),
        DIAMOND:require("../Assets/MemberShipCards/4.png"),
        STUEMP:require("../Assets/MemberShipCards/5.png")
    });

    const getUser = async () => {
        const token = JSON.parse(await AsyncStorage.getItem("cydi_TK"));
        console.log(token);
        if (token !== null || token != false) {
            await axios.get(`${BASE}/user/${token}`).then(resp => {
                setLoading(false);
                setUser(resp.data.user);
                // Alert.alert(resp.data.user.Name)
            }).catch(err => {
                setLoading(false);
                console.log(err);
            })
        } else {
            console.log("no user")
            setLoading(false);
            navigation.navigate("Signin");
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <View style={Styles.root}>
            {(!loading && user) ? <View style={{ width: "100%", padding: 3, overflow: "hidden" }}>
                <Text style={tw`p-3 text-2xl font-bold text-black mb-4`}>Membership Card</Text>
                {user && user.Membership.Status ?
                    <ImageBackground source={user.Membership.Type === "BRONZE" ? membershipType.BRONZE : user.Membership.Type === "SILVER" ? membershipType.SILVER : user.Membership.Type === "GOLD" ? membershipType.GOLD : user.Membership.Type === "PLATINUM" ? membershipType.PLATINUM : user.Membership.Type === "DIAMOND" ? membershipType.DIAMOND : user.Membership.Type === "STUDENTEMP" ? membershipType.STUEMP : ""} style={[{
                        width: "98%",
                        height: Platform.OS === "android" ? 213 : 203,
                    },tw`mx-auto`]} imageStyle={tw`rounded-xl overflow-hidden`}>
                        <View style={tw`p-4`}>
                            <Text style={tw`text-xs text-white`} numberOfLines={1}>USER ID : {user._id.slice(0,10)}..</Text>
                        </View>
                        <Text style={tw`${(user.Membership.Type === "GOLD" || user.Membership.Type === "PLATINUM" || user.Membership.Type === "SILVER") ? "text-black" : "text-white"} text-right absolute right-13 font-bold top-32`}>Credits : {user.Credits}</Text>
                        <View style={tw`flex flex-row absolute bottom-0 p-5 items-center justify-between w-full`}>
                            <Text style={tw`font-bold uppercase ${(user.Membership.Type === "GOLD" || user.Membership.Type === "PLATINUM" || user.Membership.Type === "SILVER") ? "text-black" : "text-white"}`}>{user.Name}</Text>
                            <Text style={[tw`${(user.Membership.Type === "GOLD" || user.Membership.Type === "PLATINUM" || user.Membership.Type === "SILVER") ? "text-black" : "text-white"}`, { fontSize: 8 }]}>{user.Membership.Validity}</Text>
                        </View>
                    </ImageBackground>
                    : <View>
                        <Text style={tw`text-center mt-5 text-base text-black`}>You Don't Have an Active Membership Plan 😕</Text>
                        <View style={tw`flex flex-row justify-center items-center mt-10`}>
                            <TouchableOpacity style={tw`bg-black rounded p-2 w-52`} onPress={()=>navigation.navigate("Membership")}>
                                <Text style={tw`text-white text-center`}>Browse Membership Plans</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}
            </View> : <View>
                <ApplicationProvider {...eva} theme={eva.dark}>
                    <View style={tw`w-full h-full flex flex-row justify-center items-center`}>
                        <Spinner />
                    </View>
                </ApplicationProvider>
            </View>}
        </View>
    );
}

const Styles = StyleSheet.create({
    root: {
        paddingTop: Platform.OS === 'ios' ? 70 : 20,
        backgroundColor: "white",
        flex: 1,
    }
});

export default MembershipCard;