import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, Input, TextInput, Alert } from 'react-native';
import tw from 'twrnc'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { BASECOLOR } from '../Assets/colors/colors';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, CheckBox, Spinner } from '@ui-kitten/components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios';
import BASE from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sha256 from 'sha256';
import Base64 from 'react-native-base64'
import PhonePePaymentSDK from 'react-native-phonepe-pg'
import { useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'

const Viewmembership = ({ route,navigation }) => {

    const { CardImg, Name, KeyPoints, Description, Credits, Price, Validity, _id } = route.params;

    const [coupon, setCoupon] = useState("");

    const [user,setUser] = useState();

    const [loading,setLoading] = useState(false);

    const Auth = useSelector(state => state.Auth);

    const [Amount, setAmount] = useState(Price);

    const [modalVisible, setModalVisible] = useState(false);

    const [checkbox,setCheckbox] = useState(false);

    var tid;
    function GenerateTransactionID() {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000000);
        const merchantPrefix = "T";
        tid = `${merchantPrefix}${timestamp}${random}`;
        return tid;
    }

    const enableLogging = true

    const [merchantId, setMerchantId] = useState('M22KM2UW3PANG');
    const [appId, setAppId] = useState('5c2b1bc1b2bd44ab939a0313da7d4d56');
    const [environment, setEnvironment] = useState('PRODUCTION')

    const [packageName, setPackageName] = useState('com.chaseyourdreamsindia');

    const [appSchema, setAppSchema] = useState("iOSIntentIntegration");

    const [message, setMessage] = useState();

    const Closemodal = () => {
        setModalVisible(false);
    }

    const handleStartTransaction = () => {

        const requestBody = {
            merchantId: merchantId,
            merchantTransactionId: "",
            merchantUserId: "MUID9EFW8E9F89EWF8C",
            amount: Amount * 100,
            mobileNumber: user.Mobile,
            callbackUrl: "https://webhook.site/bbe51bad-3ac5-4746-9d88-fafa4b9d908a",
            paymentInstrument: {
                type: "PAY_PAGE",
            },
        }

        setModalVisible(false);

        requestBody.merchantTransactionId = GenerateTransactionID();

        const saltkey = "ea77a711-2763-41e4-9f9b-11601dc33367";
        const saltIndex = 1;
        const payload = JSON.stringify(requestBody);
        const payloadMain = Base64.encode(payload);
        const string = payloadMain + "/pg/v1/pay" + saltkey;
        const checksum = sha256(string) + '###' + saltIndex;

        PhonePePaymentSDK.startTransaction(
            payloadMain,
            checksum,
            packageName,
            appSchema
        ).then(resp => {
            if(resp.status === "SUCCESS"){
                axios.post(`${BASE}/membership/purchase/${_id}/${user.Email}`).then(resp=>{
                    setLoading(false);
                    if(resp.data.success){
                        Alert.alert(resp.data.message);
                        setModalVisible(false);
                    }else{
                        Alert.alert(resp.data.message);
                    }
                }).catch(err=>{
                    setLoading(false);
                })
            }else{
                Alert.alert(resp.status);
            }
        }).catch(err => console.log(err))
    };

    const initPhonePeSDK = () => {

        PhonePePaymentSDK.init(
            environment,
            merchantId,
            appId,
            enableLogging
        ).then(result => {
            console.log("Message: SDK Initialisation ->" + JSON.stringify(result));
            handleStartTransaction();
        }).catch(error => {
            setMessage("error:" + error.message);
        })
    };

    const getUser = async () => {

        const token = JSON.parse(await AsyncStorage.getItem("cydi_TK"));
        if (token !== null || token != false) {
            await axios.get(`${BASE}/user/${token}`).then(resp => {
                setUser(resp.data.user);
            }).catch(err => {
                console.log(err);
            })
        } else {
            navigation.navigate("Signin");
        }
    }

    const PurchaseMembership = () => {
        if (Auth) {
            setAmount(Price);
            setModalVisible(true);
        } else {
            navigation.navigate("Signin");
        }
    }

    const HandlePayment = () => {
        initPhonePeSDK();
    }

    const ApplyCoupon = () => {
        setLoading(true);
        if (coupon !== "") {
            if(user){
                coupon.toUpperCase();
                if(Name==="Student Empowerment Card"){
                    axios.get(`${BASE}/membershipcoupon/redeem/${coupon}/${_id}/${user.Email}`).then(resp=>{
                        if(resp.data.success){
                            setAmount(resp.data.coupon.Amount);
                            setLoading(false);
                        }else{
                            Alert.alert(resp.data.message);
                        }
                    }).catch(err=>{
                        console.log(err);
                        setLoading(false);
                    })
                }else{
                    axios.get(`${BASE}/membershipcoupon/redeem/${coupon}/${_id}/${user.Email}`).then(resp => {
                        if (resp.data.success) {
                            axios.post(`${BASE}/membership/purchase/${_id}/${user.Email}`).then(resp=>{
                                setLoading(false);
                                if(resp.data.success){
                                    Alert.alert(resp.data.message);
                                    setModalVisible(false);
                                }else{
                                    Alert.alert(resp.data.message);
                                }
                            }).catch(err=>{
                                setLoading(false);
                            })
                            setLoading(false);
                        } else {
                            setLoading(false);
                            Alert.alert(resp.data.message);
                        }
                    }).catch(err => {
                        console.log(err);
                        setLoading(false);
                    })
                }
            }else{
                navigation.navigate("Signin");
                setModalVisible(false);
                console.log("User not Found !")
            }
        }else{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getUser();
        // console.warn(Na)
    },[]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Modal transparent={true} visible={modalVisible} animationType='slide' onRequestClose={Closemodal}>
                    <View style={[tw`flex justify-end flex-col items-center`, { flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }]}>
                        <View style={[tw`w-full bg-white p-3`,{height:"70%"}]}>
                            <View style={tw`flex flex-row justify-center`}>
                                <TouchableOpacity onPress={() => Closemodal()}>
                                    <MaterialCommunityIcons name="minus" size={24} color="gray" />
                                </TouchableOpacity>
                            </View>
                            <Text style={tw`font-bold uppercase text-black`}>{Name}</Text>
                            <View style={tw`flex flex-row items-center`}>
                                <Text style={tw`font-bold uppercase text-2xl text-black mt-1`}>INR {Amount}/- </Text>
                                <Text style={tw`text-xs mt-1 text-black`}>(including GST)</Text>
                            </View>
                            {Name !== "Student Empowerment Card" && <Text style={tw`mt-2 font-bold text-black`}>{Credits} {Credits === 1 ? "Session" : "Sessions"} <Text style={tw`font-normal`}>(1 Credit = INR {Name === "Student Empowerment Card" ? 1000 : "1,999"})</Text></Text>}
                            <View style={tw`flex flex-row gap-2 items-center justify-between mt-2`}>
                                <ApplicationProvider {...eva} theme={eva.light}>
                                    <TextInput style={tw`w-70 h-10 p-2 border border-gray-400 rounded`} value={coupon} onChangeText={txt=>setCoupon(txt)}/>
                                    {!loading ? <Button style={[tw`text-white`, { backgroundColor: BASECOLOR }]} onPress={ApplyCoupon}>Apply</Button> : <View style={tw`pr-5`}>
                                            <Spinner/>
                                        </View>}
                                </ApplicationProvider>
                            </View>
                            <View style={tw`p-2`}>
                            <ApplicationProvider {...eva} theme={eva.light}>
                                <CheckBox onChange={val => setCheckbox(val)} checked={checkbox}>
                                    <View style={tw`flex flex-row gap-2`}>
                                        <Text style={tw`text-black`}>I have read and agree to your <Text style={tw`text-blue-500`} onPress={() => {
                                            setModalVisible(false);
                                            navigation.navigate("terms");
                                        }}>terms and conditions</Text>
                                        <Text style={tw`text-blue-500 ml-2 pl-2`} onPress={()=>{
                                            setModalVisible(false);
                                            navigation.navigate("disclaimer")}}> Disclaimer</Text>
                                        <Text style={tw`text-blue-500 ml-2`} onPress={()=>{
                                            setModalVisible(false);
                                            navigation.navigate("policy")}}> Privacy Policy</Text></Text>
                                    </View>
                                </CheckBox>
                            </ApplicationProvider>
                        </View>
                        <View style={tw`p-3`}>
                            <TextInput placeholder='Enter GST Number (Optional)' style={[tw`border border-gray-300 p-2 rounded`,{borderBottomWidth:1,borderColor:"black"}]} placeholderTextColor="gray"/>
                        </View>
                            <TouchableOpacity style={tw`mt-2 bg-black p-3 rounded`} onPress={HandlePayment}>
                                <Text style={tw`text-white text-center`}>Proceed to Pay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View style={{
                    width: "100%",
                    height: 230,
                    paddingTop:Name === "Student Empowerment Card" ? 80 : 0 
                }}>
                    <Image source={{ uri: CardImg }} style={[styles.image,tw`mx-auto`]} />
                </View>
                <View style={[styles.dataContainer,{
                    paddingTop:Name === "Student Empowerment Card" ? 80 : 0
                }]}>
                    {Name === "Student Empowerment Card" && <Text style={[styles.title, tw`text-xl`]}>{Name}</Text>}
                    <Text style={[styles.title, tw`font-normal mt-2`]}>Price : INR {Price}/- </Text>
                    <Text style={[styles.title, tw`font-normal`]}>Credits : {Credits}</Text>
                    <Text style={[styles.title, tw`font-normal`]}>Validity : {Validity} {Number(Validity) > 1 ? "Months" : Validity === "" ? <Entypo name="infinity" size={23} color="black"/> : "Months"}</Text>
                    {Name !== "Student Empowerment Card" && <Text style={tw`mt-2 text-xs text-black`}><Text style={{ color: BASECOLOR, fontWeight: "800" }}>Note</Text> : One session: 60 minutes</Text>}
                    {Name === "Student Empowerment Card" && <Text style={tw`mb-3 mt-2 text-black`}><Text style={tw`p-2 text-xs`}><Text style={{ color: BASECOLOR, fontWeight: "800" }}>Note</Text> : One session: 30 minutes</Text></Text>}
                    {KeyPoints.map((point, index) => (
                        <View style={tw`flex flex-row gap-2 my-2 items-center pr-6`}>
                            <AntDesign name="caretright" color={BASECOLOR} size={20} />
                            <Text key={index} style={styles.dataPoint}>{point}</Text>
                        </View>
                    ))}
                    <Text style={tw`leading-1 text-base text-black mt-4`}>{Description}</Text>
                    {Name !== "Student Empowerment Card" && <View style={[tw`flex flex-col gap-2 mt-6 mb-2 border border-gray-700 rounded mx-auto h-15 flex-wrap pl-3 pt-1 bg-white`,{width:"100%"}]}>
                    <Text style={tw`font-bold text-xs mt-1 text-black`}>NOTE :- </Text>
                    <Text style={tw`text-base -mt-1 font-bold text-xs text-black`}>With one credit, you can avail a session worth INR 1999</Text>
                    </View>}
                    {Name === "Student Empowerment Card" && <View style={[tw`flex flex-row gap-2 mt-6 mb-2 border border-gray-700 rounded mx-auto h-15 flex-wrap pl-3 pt-1 bg-white`,{width:"100%"}]}>
                    <Text style={tw`font-bold text-xs mt-1 text-black`}>NOTE :- </Text>
                    <Text style={tw`text-base font-bold text-xs -mt-1 text-black`}>With one credit, you can avail a session worth INR 1000</Text>
                    </View>}
                    <TouchableOpacity onPress={PurchaseMembership}>
                        <View style={tw`w-full p-2 bg-black rounded-md mt-5`}>
                            <Text style={tw`text-white text-center uppercase`}>Buy now</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '98%',
        height: 215,
    },
    dataContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textTransform: "uppercase",
        color: "black"
    },
    dataPoint: {
        fontSize: 16,
        marginBottom: 3,
        color: "black"
    },
});

export default Viewmembership;
