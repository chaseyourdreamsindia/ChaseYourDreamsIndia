import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
    ImageBackground,
    Modal,
    Alert,
    Image,
    Platform,
    ToastAndroid,
} from 'react-native';
import { Avatar, ApplicationProvider, Input, Button, Spinner } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Actions } from '../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import BASE from '../api/api';
import Fearher from 'react-native-vector-icons/Feather'
import { BASECOLOR } from '../Assets/colors/colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo';


const Profile = ({ navigation }) => {

    const dispatch = useDispatch();

    const Auth = useSelector(state => state.Auth);
    const [user, setUser] = React.useState();
    const [loading, setLoading] = useState(false);
    const [coupon, setCoupon] = useState("");
    const [contactModal, setContactModal] = useState(false);
    const [inc, setInc] = useState(0);
    const [couponLoading, setCouponLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const onRefresh = React.useCallback(() => {
        getUser();
    }, [Auth]);

    const getUser = async () => {
        setLoading(true);
        const token = JSON.parse(await AsyncStorage.getItem("cydi_TK"));
        if (token !== null) {
            await axios.get(`${BASE}/user/${token}`).then(resp => {
                setLoading(false);
                setUser(resp.data.user);
                if (resp.data.message === "jwt expired") {
                    dispatch(Actions.setAuth(false));
                }
            }).catch(err => {
                console.log(err);
            })
        } else {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUser();
    }, [Auth]);

    const ApplyCoupon = () => {
        if (coupon !== "") {
            setCouponLoading(true);
            axios.get(`${BASE}/couponcredits/redeem/${coupon}/${user.Email}`).then(resp => {
                Alert.alert(resp.data.message);
                setCouponLoading(false);

            }).catch(err => {
                console.log(err);
                setCouponLoading(false);
            })
        }
    }

    const Logout = async () => {
        dispatch(Actions.setAuth(false));
        await AsyncStorage.removeItem("cydi_TK");
        setUser(false);
        navigation.navigate("HomeMain");
    }

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <View style={{ flex: 1, height: "100%" }}>
                <ImageBackground source={require("../Assets/bg.jpg")} imageStyle={tw`w-full h-full`} style={[tw`w-full h-full`, { flex: 1 }]} resizeMode="cover">
                    <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}>
                        <View style={[Styles.root, tw`h-full`]}>
                            <View style={tw`flex flex-row items-center justify-between p-3`}>
                                <View style={tw`flex flex-row gap-3 items-center w-1/2 ml-2`}>
                                    <Avatar
                                        size="large"
                                        source={(Auth && user && user.Profile) ? { uri: user.Profile } : require('../Assets/Home/avatar.png')}
                                    />
                                    <View style={tw`flex flex-col gap-2`}>
                                        <Text style={tw`text-gray-800 uppercase font-bold`}>
                                            {(Auth && user) ? user.Name : "Guest"}
                                        </Text>
                                        {/* <TouchableOpacity>
                                            <View
                                                style={tw`rounded-md border border-gray-400 p-1 flex flex-row gap-1 w-14 justify-center items-center`}>
                                                <MaterialIcons
                                                    name="workspace-premium"
                                                    color="black"
                                                    size={8}
                                                />
                                                <Text style={[tw`text-black text-center`, { fontSize: 10 }]}>
                                                    Go pro
                                                </Text>
                                            </View>
                                        </TouchableOpacity> */}
                                        {(Auth && user) && user.Membership.Status && <Text style={tw`uppercase text-xs text-black`}>{user.Membership.Name}</Text>}
                                    </View>
                                </View>
                                <View style={tw`flex flex-col mr-4`}>
                                    <Text style={[tw`text-black text-center text-xl`, {
                                        textShadowColor: "black",
                                        textShadowRadius: 1,
                                        textShadowOffset: {
                                            width: 1,
                                            height: 1
                                        }
                                    }]}>
                                        {!loading && user ? user.Credits : 0}
                                    </Text>
                                    <Text style={tw`text-gray-700 text-center font-bold`}>Credits</Text>
                                </View>
                            </View>
                            <View style={tw`flex flex-row justify-between p-2 mt-4 pl-0`}>
                                {/* <TouchableOpacity>
                                    <View style={tw`flex flex-row gap-2 items-center ml-4`}>
                                        <MaterialCommunityIcons
                                            name="tag-text"
                                            color="gray"
                                            size={23}
                                        />
                                        <Text style={tw`text-black font-bold`}>Coupons</Text>
                                    </View>
                                </TouchableOpacity> */}
                                {/* <TouchableOpacity>
                                    <View style={tw`flex flex-row gap-2 items-center mr-4`}>
                                        <FontAwesome name="gift" color="gray" size={23} />
                                        <Text style={tw`text-black font-bold`}>Rewards</Text>
                                    </View>
                                </TouchableOpacity> */}
                            </View>
                            <View
                                style={[
                                    tw`p-3 flex flex-col gap-2 h-full`,
                                ]}>
                                {(!Auth) && <View
                                    style={tw`flex flex-row gap-2 items-center p-2 border-gray-200 rounded mt-13`}>
                                    <MaterialCommunityIcons
                                        name="account-key-outline"
                                        size={23}
                                        color={BASECOLOR}
                                    />
                                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                                        <Text style={[tw`text-black`, {
                                            textShadowColor: "black",
                                            textShadowRadius: 1,
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1
                                            }
                                        }]}>Sign in</Text>
                                    </TouchableOpacity>
                                </View>}
                                {Auth && <View
                                    style={tw`flex flex-row gap-2 items-center p-2 border-gray-200 rounded`}>
                                    <MaterialIcons name="person-outline" size={29} color={BASECOLOR} />
                                    <TouchableOpacity onPress={() => navigation.navigate("editprofile")}>
                                        <Text style={[tw`text-black`, {
                                            textShadowColor: "black",
                                            textShadowRadius: 1,
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1
                                            }
                                        }]}>Edit Profile</Text>
                                    </TouchableOpacity>
                                </View>}
                                {(Auth) && <View
                                    style={tw`flex flex-row gap-2 items-center p-2 border-gray-200 rounded`}>
                                    <MaterialCommunityIcons
                                        name="card-account-details-outline"
                                        size={23}
                                        color={BASECOLOR}
                                    />
                                    <TouchableOpacity onPress={() => navigation.navigate('MembershipCard')}>
                                        <Text style={[tw`text-black`, {
                                            textShadowColor: "black",
                                            textShadowRadius: 1,
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1
                                            }
                                        }]}>Membership Card</Text>
                                    </TouchableOpacity>
                                </View>}

                                {Auth && <View
                                    style={tw`flex flex-row gap-2 items-center p-2 border-gray-200 rounded`}>
                                    <SimpleLineIcons
                                        name="notebook"
                                        size={23}
                                        color={BASECOLOR}
                                    />
                                    <TouchableOpacity onPress={() => navigation.navigate("bookings")}>
                                        <Text style={[tw`text-black`, {
                                            textShadowColor: "black",
                                            textShadowRadius: 1,
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1
                                            }
                                        }]}>My Bookings</Text>
                                    </TouchableOpacity>
                                </View>}
                                {Auth && <View
                                    style={tw`flex flex-row gap-2 items-center p-2 border-gray-200 rounded`}>
                                    <MaterialIcons
                                        name="redeem"
                                        size={23}
                                        color={BASECOLOR}
                                    />
                                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                                        <Text style={[tw`text-black`, {
                                            textShadowColor: "black",
                                            textShadowRadius: 1,
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1
                                            }
                                        }]}>Redeem Coupon</Text>
                                    </TouchableOpacity>
                                </View>}
                                <View
                                    style={tw`flex flex-row gap-2 items-center p-2 border-gray-200 rounded`}>
                                    <MaterialCommunityIcons
                                        name="message-question-outline"
                                        size={23}
                                        color={BASECOLOR}
                                    />
                                    <TouchableOpacity onPress={() => navigation.navigate("faq")}>
                                        <Text style={[tw`text-black`, {
                                            textShadowColor: "black",
                                            textShadowRadius: 1,
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1
                                            }
                                        }]}>FAQs</Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={tw`flex flex-row gap-2 items-center p-2 border-gray-200 rounded`}>
                                    <MaterialCommunityIcons
                                        name="file-document-multiple-outline"
                                        size={23}
                                        color={BASECOLOR}
                                    />
                                    <TouchableOpacity onPress={() => navigation.navigate("terms")}>
                                        <Text style={[tw`text-black`, {
                                            textShadowColor: "black",
                                            textShadowRadius: 1,
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1
                                            }
                                        }]}>Terms & Conditions</Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={tw`flex flex-row gap-2 items-center p-2 border-gray-200 rounded`}>
                                    <MaterialIcons
                                        name="privacy-tip"
                                        size={23}
                                        color={BASECOLOR}
                                    />
                                    <TouchableOpacity onPress={() => navigation.navigate("policy")}>
                                        <Text style={[tw`text-black`, {
                                            textShadowColor: "black",
                                            textShadowRadius: 1,
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1
                                            }
                                        }]}>Privacy & Policy</Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={tw`flex flex-row gap-2 items-center p-2 border-gray-200 rounded`}>
                                    <Fearher
                                        name="message-square"
                                        size={23}
                                        color={BASECOLOR}
                                    />
                                    <TouchableOpacity onPress={() => navigation.navigate("disclaimer")}>
                                        <Text style={[tw`text-black`, {
                                            textShadowColor: "black",
                                            textShadowRadius: 1,
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1
                                            }
                                        }]}>Disclaimer</Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={tw`flex flex-row gap-2 items-center p-2 border-gray-200 rounded`}>
                                    <MaterialCommunityIcons
                                        name="alert-circle-outline"
                                        size={23}
                                        color={BASECOLOR}
                                    />
                                    <TouchableOpacity onPress={() => navigation.navigate("about")}>
                                        <Text style={[tw`text-black`, {
                                            textShadowColor: "black",
                                            textShadowRadius: 1,
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1
                                            }
                                        }]}>About us</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={tw`flex flex-row items-center gap-2 p-2 border-gray-200 rounded`}>
                                    <MaterialIcons name="contact-support" size={23} color="black" />
                                    <TouchableOpacity onPress={() => setContactModal(true)}>
                                        <Text style={[tw`text-black`, {
                                            textShadowColor: "black",
                                            textShadowRadius: 1,
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1
                                            }
                                        }]}>Contact us</Text>
                                    </TouchableOpacity>
                                </View>
                                {(Auth) && <View
                                    style={tw`flex flex-row gap-2 items-center p-2 border-gray-200 rounded`}>
                                    <Ionicons name="exit-outline" size={23} color="red" />
                                    <TouchableOpacity onPress={Logout}>
                                        <Text style={[tw`text-black`, {
                                            textShadowColor: "black",
                                            textShadowRadius: 1,
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1
                                            }
                                        }]}>Log out</Text>
                                    </TouchableOpacity>
                                </View>}
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
            <View style={tw`w-full mb-5 bg-transparent`}>
                <TouchableOpacity onPress={() => {
                    setInc(inc + 1);
                    if (inc === 10) {
                        Alert.alert("Designed and Developed by Vishwas Thangella")
                        setInc(0);
                        if (Platform.OS === "android") {
                            ToastAndroid.show("Developed by texswirl", ToastAndroid.LONG);
                        }
                    }
                }}>
                    <Text style={tw`text-gray-500 text-center text-xs`}>Chase Your Dreams India Pvt Ltd . All rights reserved © 2024-25</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={[tw`w-full h-full flex flex-col justify-end`, { backgroundColor: "rgba(0,0,0,0.5)" }]}>
                    <View style={tw`w-full h-52 bg-white rounded-xl`}>
                        <View style={tw`flex flex-row justify-center items-center mt-2`}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Entypo name="minus" size={25} />
                            </TouchableOpacity>
                        </View>
                        <Text style={tw`p-3 text-xl font-bold`}>Redeem a Coupon</Text>
                        <View style={tw`p-2 flex flex-row gap-2 items-center justify-center`}>
                            <Input eva={eva.light} style={{ width: "70%" }} placeholder='Enter Coupon Code' value={coupon} onChangeText={txt => setCoupon(txt)} />
                            {!couponLoading ? <Button style={{ width: "24%", backgroundColor: "black" }} onPress={ApplyCoupon}>Apply</Button> : <View>
                                <Spinner /></View>}
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal visible={contactModal} animationType='slide'>
                <View style={[tw`w-full h-full flex flex-col items-end justify-end rounded-xl gap-5`, { backgroundColor: "rgba(0,0,0,0.5)" }]}>
                    <View style={tw`w-full h-60 bg-white p-2 rounded-xl`}>
                        <View style={tw`flex flex-row items-center justify-center`}>
                            <TouchableOpacity onPress={() => setContactModal(false)}>
                                <Entypo name="minus" size={23} color="black"/>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`p-3 flex flex-col gap-3`}>
                            <Text style={tw`font-bold text-base text-black`}>"Need assistance? Reach out to us via email or phone, and we'll be happy to help."</Text>
                            <Text style={tw`text-black`}>Email : info@chaseyourdreamsindia.com</Text>
                            <Text style={tw`text-black`}>Mobile : +91-7799777013 , +91-7799777014</Text>
                            <View style={tw`flex flex-row items-center gap-3`}>
                                <Image style={tw`w-7 h-7`} source={require("../Assets/Icons/whatsapp.png")} />
                                <Text style={tw`text-black`}>Whatsapp</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </ApplicationProvider>
    );
};

const Styles = StyleSheet.create({
    root: {
        paddingTop: Platform.OS === 'ios' ? 65 : 20,
        flex: 1,
        // backgroundColor: BASECOLOR,
    },
});

export default Profile;
