import React, { useState, useEffect } from 'react';
import { Text, View, Stylesheet, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import SubscriptionPlans from '../components/SubscriptionPlans';
import MatrialIcons from 'react-native-vector-icons/MaterialIcons'
import tw from 'twrnc'
import axios from 'axios';
import BASE from '../api/api';
import { Spinner } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

const Membership = ({ navigation }) => {

    const [Membership, setMemberships] = useState([]);
    const [loading, setLoading] = useState(false);

    const FetchMemberships = () => {
        setLoading(true);
        axios.get(`${BASE}/membership`).then(resp => {
            setLoading(false);
            if (resp.data.success) {
                setMemberships(resp.data.memberships);
            } else {
                Alert.alert(resp.data.message);
            }
        }).catch(err => {
            setLoading(false);
            console.log(err);
        })
    }

    useEffect(() => {
        FetchMemberships();
    }, [])

    return (
        <ApplicationProvider {...eva} theme={eva.dark}>
            <View style={Styles.root}>
                {!loading ? <ScrollView>
                    <ImageBackground source={require("../Assets/bg.jpg")}>
                        <Text style={Styles.title}>Memberships</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={tw`flex flex-row gap-2 p-3`}>
                                {
                                    !loading && Membership.map(membership=>{
                                        if(membership.Type !== "STUDENTEMP")
                                        return(
                                            <TouchableOpacity>
                                                <View style={{borderRadius:15}}>
                                                    <Image source={{uri:membership.Bg}} style={tw`w-40 h-72 rounded-xl border border-gray-400`}/>
                                                </View>
                                            </TouchableOpacity>
                                        );
                                    })
                                }
                            </View>
                        </ScrollView>
                        <Text style={tw`text-2xl font-bold mt-3 mb-3 text-black pl-5`}>Benifits of Membership</Text>
                        {
                            !loading && Membership.map(membership=>{
                                if(membership.Type !== "STUDENTEMP")
                                return(
                                    <TouchableOpacity onPress={() => navigation.navigate("viewmembership",{...membership})}>
                                        <View style={tw`border mt-3 h-12 rounded-md border-gray-100 flex flex-row justify-between items-center`}>
                                            <View style={tw`flex flex-row items-center gap-2 pl-2`}>
                                                <Image source={{uri:membership.Icon}} style={tw`w-6 h-6`} />
                                                <Text style={tw`mt-1 text-black uppercase`}>{membership.Name}</Text>
                                            </View>
                                            <MatrialIcons name="arrow-right" size={22} color="black" style={tw`mt-1`} />
                                        </View>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </ImageBackground>
                </ScrollView> : <View style={tw`w-full h-full flex flex-col items-center justify-center`}>
                    <Spinner /></View>}
            </View>
        </ApplicationProvider>
    );
};

const Styles = StyleSheet.create({
    root: {
        // paddingTop: Platform.OS === "ios" ? 60 : 20,
        height: "100%",
        // padding: 10,
        // backgroundColor: "white",
        // paddingLeft: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "black",
        marginTop: 60,
        marginLeft: 20
    },
    answer: {
        fontSize: 16,
        marginBottom: 15,
        color: "black"
    },
    membership: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: "black"
    },
    details: {
        fontSize: 16,
        marginLeft: 10,
        color: "black"
    },
});



export default Membership;