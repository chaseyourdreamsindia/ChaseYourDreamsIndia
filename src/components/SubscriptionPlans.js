import React from 'react';
import { View, StyleSheet, ScrollView, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { BASECOLOR } from '../Assets/colors/colors';
import tw from 'twrnc';


const SubscriptionPlans = () => {

    const PLANS = [
        {
            name: "Silver Membership",
            price: "5,999",
            sessions: 4,
            features: ["MembershipCard","4 sessions"],
            popular: false,
            color: "#BABABA",
            desc:"The Silver membership includes 4 online sessions designed to provide personalized support and guidance.",
            planBG:"2.jpg",
            icon:""
        },
        {
            name: "Gold Membership",
            price: "11,999",
            sessions: 9,
            features: ["MembershipCard","9 sessions"],
            popular: true,
            color: "#DFB14D",
            desc:"With the Gold membership, you will have access to 9 online sessions aimed at facilitating your personal growth and development.",
            planBG:"1.jpg",
            icon:""
        },
        {
            name: "Platinum Membership",
            price: "19,999",
            sessions: 20,
            features: ["MembershipCard","20 sessions"],
            popular: false,
            color: "#9B9B9B",
            desc:"The Platinum membership offers 20 online sessions to help you achieve your goals and unlock your full potential.",
            planBG:"3.jpg",
            icon:""
        },
        {
            name: "Diamond Membership",
            price: "34,999",
            sessions: 40,
            features: ["MembershipCard", "Gift to your loved ones","40 Sessions"],
            popular: false,
            color: "#0C0D09",
            desc:"For those seeking comprehensive support and long-term transformation, the Diamond membership includes 40 online sessions to guide you on your journey to success.",
            planBG:"4.jpg",
            icon:""
        },
        {
            name: "Bronze Membership",
            price: "1,999",
            sessions: 1,
            features: ["MembershipCard","1 Session"],
            popular: false,
            color: "#0C0D09",
            desc:"For those seeking comprehensive support and long-term transformation, the Diamond membership includes 40 online sessions to guide you on your journey to success.",
            planBG:"5.jpg",
            icon:""
        },
    ];

    return (
        <View style={[Styles.root]}>
            <Text style={tw`text-center text-black font-bold`}>Membership Plans</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={tw`flex flex-row gap-2 mt-5`}>
                    <TouchableOpacity>
                        <View style={{borderRadius:15}}>
                            <Image source={require("../Assets/Plans/5.png")} style={tw`w-40 h-72 rounded-xl border border-gray-400`}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{borderRadius:15}}>
                            <Image source={require("../Assets/Plans/2.png")} style={tw`w-40 h-72 rounded-xl border border-gray-400`}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{borderRadius:15}}>
                            <Image source={require("../Assets/Plans/1.png")} style={tw`w-40 h-72 rounded-xl border border-gray-400`}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{borderRadius:15}}>
                            <Image source={require("../Assets/Plans/3.png")} style={tw`w-40 h-72 rounded-xl border border-gray-400`}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{borderRadius:15}}>
                            <Image source={require("../Assets/Plans/4.png")} style={tw`w-40 h-72 rounded-xl border border-gray-400`}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    root: {
        paddingLeft: 10,
        paddingTop: 10,
        flex: 1,
        // backgroundColor: "white",
    },
    card: {

    }
});


export default SubscriptionPlans;