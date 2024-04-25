import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal, Alert, Platform, TextInput, Linking } from 'react-native';
import { BASECOLOR } from '../Assets/colors/colors';
import { Button, CheckBox, Input } from '@ui-kitten/components'
import tw from 'twrnc';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import BASE from '../api/api';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Datepicker } from '@ui-kitten/components';
import { useSelector } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PhonePePaymentSDK from 'react-native-phonepe-pg'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';
import { Spinner } from '@ui-kitten/components';
import sha256 from 'sha256';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Base64 from 'react-native-base64'

const ViewService = ({ navigation, route }) => {

    const [coupon, setCoupon] = useState("");
    const [loading, setLoading] = useState(false);

    const [loading2, setLoading2] = useState(false);

    const [currentHours,setCurrentHours] = useState(new Date().getHours());
    const [currentMinutes,setCurrentMinutes] = useState(new Date().getMinutes());

    const [week, setWeek] = useState(0);
    const [value, setValue] = React.useState(new Date());
    const [sha, setSha] = useState();
    const [slots, setSlots] = useState([]);
    const [selectedTime, setSelectedTime] = useState();
    const Auth = useSelector(state => state.Auth);
    const [modalVisible, setMoalVisible] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [user, setUser] = useState();


    const weeks = React.useMemo(() => {
        const start = moment(start).add(week, "weeks").startOf("week")
        return [-1, 0, 1].map(adj => {
            return (Array.from({ length: 7 })).map((_, index) => {
                const date = moment(start).add(adj, "week").add(index, "day");
                return ({
                    day: date.format("ddd"),
                    date: date.toDate()
                });
            })
        })
    }, [week]);

    const getTimeSlots = () => {
        fetch(`${BASE}/timeslot/all`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(resp => resp.json().then(dta => {
            setSlots(dta.timeslots);
        }).catch(err => console.log(err))).catch(err => console.log(err));
    }

    useEffect(() => {
        getTimeSlots();
        getUser();
    }, []);

    const Closemodal = () => {
        setMoalVisible(false);
    }

    var tid;
    function GenerateTransactionID() {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000000);
        const merchantPrefix = "T";
        tid = `${merchantPrefix}${timestamp}${random}`;
        return tid;
    }

    const [contact, setContactUs] = useState({
        Firstname: "",
        Lastname: "",
        Mobile: "",
        Email: "",
        Date: "",
        Message: ""
    });

    const [contactLoading,setContactLoading] = useState(false);


    const enableLogging = true

    const [merchantId, setMerchantId] = useState('M22KM2UW3PANG');
    const [appId, setAppId] = useState('5c2b1bc1b2bd44ab939a0313da7d4d56');
    const [environment, setEnvironment] = useState('PRODUCTION')

    const [packageName, setPackageName] = useState('com.chaseyourdreamsindia');

    const [appSchema, setAppSchema] = useState("iOSIntentIntegration");

    const [message, setMessage] = useState();

    const [Amount, setAmount] = useState(route.params.price);

    const [contactModal, setContactModal] = useState(false);

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

        setMoalVisible(false);

        requestBody.merchantTransactionId = GenerateTransactionID();

        const saltkey = "ea77a711-2763-41e4-9f9b-11601dc33367";
        const saltIndex = 1;
        const payload = JSON.stringify(requestBody);
        const payloadMain = Base64.encode(payload);
        const string = payloadMain + "/pg/v1/pay" + saltkey;
        const checksum = sha256(string) + '###' + saltIndex;

        // console.log(user);
        axios.post(`${BASE}/book/check`, {
            time: selectedTime,
            date: value.getDate()+"-"+value.getMonth()+1+"-"+value.getFullYear(),
        }).then(resp => {
            if (resp.data.success) {
                PhonePePaymentSDK.startTransaction(
                    payloadMain,
                    checksum,
                    packageName,
                    appSchema
                ).then(resp => {
                    if (resp.status === "SUCCESS") {
                        axios.post(`${BASE}/book`, {
                            time: selectedTime,
                            Email: user.Email,
                            serviceID: route.params._id,
                            date: value.getFullYear()+"-"+(value.getMonth()+1)+"-"+value.getDate(),
                        }).then(resp => {
                            Alert.alert(resp.data.message);
                        }).catch(err => console.log(err));
                    } else {
                        Alert.alert(resp.status);
                    }
                }).catch(err => console.log(err))
            } else {
                Alert.alert(resp.data.message);
            }
        }).catch(err => console.log(err));
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
        if (token !== null) {
            await axios.get(`${BASE}/user/${token}`).then(resp => {
                setUser(resp.data.user);
                // console.log(resp.data.user);
                if (resp.data.message === "jwt expired") {
                    dispatch(Actions.setAuth(false));
                }
            }).catch(err => {
                console.log(err);
            })
        } else {
        }
    }
    const BookAppointment = () => {
        if (Auth) {
            const date = new Date().getDate();
            const selDate = new Date(value).getDate();
            if (selectedTime) {
                if(selDate > date){
                    setAmount(route.params.price);
                    setMoalVisible(true);
                }else{
                    if((selectedTime === `${currentHours}:${currentMinutes}`) || (selectedTime < `${currentHours}:${currentMinutes}`)){
                        Alert.alert("please select a different time slot");
                    }else{
                        setAmount(route.params.price);
                        setMoalVisible(true);
                    }
                }
            } else {
                Alert.alert("please select a time slot");
            }
        } else {
            navigation.navigate("Signin");
        }
    }

    const HandlePayment = () => {
        if (checkbox) {
            initPhonePeSDK();
        } else {
            Alert.alert("please check the checkbox.");
        }
    }

    const ApplyCoupon = (couponCode, serviceID) => {
        setLoading(true);
        if (coupon !== "") {
            coupon.toUpperCase();
            axios.get(`${BASE}/coupons/apply/${couponCode}/${serviceID}`).then(resp => {
                if (resp.data.success) {
                    console.log(resp)
                    setAmount(resp.data.coupon.amount);
                    setLoading(false);
                } else {
                    setLoading(false);
                    Alert.alert(resp.data.message);
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }

    const ApplyCredits = () => {
        if (checkbox) {
            if (user.Credits > 0) {
                setLoading2(true);
                axios.post(`${BASE}/book/check`, {
                    time: selectedTime,
                    date: value.getFullYear()+"-"+(value.getMonth()+1)+"-"+value.getDate(),
                }).then(resp => {
                    if (resp.data.success) {
                        axios.get(`${BASE}/book/withcredit/${user._id}/${route.params._id}`).then(resp => {
                            if (resp.data.success) {
                                axios.post(`${BASE}/book`, {
                                    time: selectedTime,
                                    Email: user.Email,
                                    serviceID: route.params._id,
                                    date: value.getFullYear()+"-"+(value.getMonth()+1)+"-"+value.getDate(),
                                }).then(resp => {
                                    Alert.alert(resp.data.message);
                                    setLoading2(false);
                                }).catch(err => console.log(err));
                            } else {
                                setLoading2(false);
                                Alert.alert(resp.data.message);
                            }
                        }).catch(err => {
                            Alert.alert(err.message);
                            setLoading2(false);

                        })
                    } else {
                        Alert.alert(resp.data.message);
                        setLoading2(false);
                    }
                }).catch(err => console.log(err));
            }
        } else {
            Alert.alert("please check the checkbox.");
        }
    }

    const contactSubmit = () =>{
        setContactLoading(true);
        axios.post(`${BASE}/services/contact`,contact).then(resp=>{
            setContactLoading(false);
            Alert.alert(resp.data.message);
        }).catch(err=>{
            setContactLoading(false);
            Alert.alert(err.message);
        });
    }

    return (
        <ScrollView>
            <Modal visible={contactModal} animationType='slide' transparent>
                <View style={[tw`w-full h-full flex flex-row items-end`, { backgroundColor: "rgba(0,0,0,0.5)" }]}>
                    <View style={[tw`w-full bg-white rounded-xl`, { height: "80%" }]}>
                        <View style={tw`flex flex-row justify-center items-center`}>
                            <MaterialCommunityIcons name="minus-thick" color="gray" size={24} onPress={() => setContactModal(false)} />
                        </View>
                        <View style={tw`p-3`}>
                            <ApplicationProvider {...eva} theme={eva.light}>
                                <View style={tw`flex flex-col gap-2`}>
                                    <Text style={tw`text-xl font-bold text-black`}>Contact Us</Text>
                                    <Input placeholder='Enter First Name' value={contact.Firstname} onChangeText={(txt)=>setContactUs({...contact,Firstname:txt})}/>
                                    <Input placeholder='Enter Last Name' value={contact.Lastname} onChangeText={txt=>setContactUs({...contact,Lastname:txt})}/>
                                    <Input placeholder='Enter Mobile Number' value={contact.Mobile} onChangeText={txt=>setContactUs({...contact,Mobile:txt})}/>
                                    <Input placeholder='Enter Email' value={contact.Email} onChangeText={txt=>setContactUs({...contact,Email:txt})}/>
                                    <Datepicker
                                        date={contact.Date}
                                        onSelect={nextDate => setContactUs({ ...contact, Date: nextDate })}
                                    />
                                    <TextInput placeholder='Enter Message' multiline style={tw`h-30 p-2 border border-gray-300 rounded `} onChangeText={txt=>setContactUs({...contact,Message:txt})}/>
                                    {!contactLoading ? <TouchableOpacity style={tw`p-3 bg-gray-800 text-white rounded`} onPress={contactSubmit}>
                                        <Text style={tw`text-center text-white`}>Submit</Text>
                                    </TouchableOpacity> : <Spinner/>}
                                </View>
                            </ApplicationProvider>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal transparent={true} visible={modalVisible} animationType='slide' onRequestClose={Closemodal}>
                <View style={[tw`flex justify-end flex-col items-center`, { flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }]}>
                    <View style={[tw`p-2 bg-white rounded-xl w-full`,{height:"80%"}]}>
                        <View style={tw`flex flex-row justify-center items-center`}>
                            <MaterialCommunityIcons name="minus-thick" color="gray" size={24} onPress={() => setMoalVisible(false)} />
                        </View>
                        <View style={tw`flex flex-row justify-between items-center flex-wrap`}>
                            <Text style={tw`font-bold text-xl text-black`}>{route.params.name}</Text>
                            <View style={tw`flex flex-row items-center flex-wrap`}>
                                <Text style={tw`text-base text-black`}>INR {Amount}/-</Text>
                                <Text style={tw`text-xs mt-1 text-black`}>(including GST)</Text>
                            </View>
                        </View>
                        <View style={tw`flex flex-row gap-2`}>
                            <Text style={tw`text-xs uppercase text-black`}>{value.toDateString()}</Text>
                            <Text style={tw`text-xs uppercase text-black`}>{selectedTime}</Text>
                        </View>
                        <View style={tw`flex flex-row gap-2 items-center justify-between mt-2`}>
                            <ApplicationProvider {...eva} theme={eva.light}>
                                <Input placeholder='Coupon code' style={[{ width: "75%", borderColor: BASECOLOR, textTransform: "uppercase" }, tw`uppercase`]} value={coupon} onChangeText={(txt) => {
                                    setCoupon(txt);
                                }} />
                                {!loading ? <Button style={[tw`text-white`, { backgroundColor: BASECOLOR }]} onPress={() => ApplyCoupon(coupon, route.params._id)}>Apply</Button> : <View style={tw`pr-5`}><Spinner /></View>}
                            </ApplicationProvider>
                        </View>
                        <View style={tw`p-2`}>
                            <ApplicationProvider {...eva} theme={eva.light}>
                                <CheckBox onChange={val => setCheckbox(val)} checked={checkbox}>
                                    <View style={tw`flex flex-row`}>
                                        <Text style={tw`text-black`}>I have read and agree to your <Text style={tw`text-blue-500`} onPress={() => {
                                            setMoalVisible(false);
                                            navigation.navigate("terms");
                                        }}>terms and conditions,</Text></Text>
                                        <Text style={tw`text-blue-500`} onPress={()=>{
                                            setMoalVisible(false);
                                            navigation.navigate("disclaimer")
                                        }}>Disclaimer</Text>
                                    </View>
                                </CheckBox>
                            </ApplicationProvider>
                        </View>
                        <View style={tw`p-3`}>
                            <TextInput placeholder='Enter GST Number (Optional)' style={[tw`border border-gray-300 p-2 rounded`,{borderBottomWidth:1,borderColor:"black"}]} placeholderTextColor="gray"/>
                        </View>
                        <TouchableOpacity onPress={HandlePayment}>
                            <Text style={[tw`p-3 text-white text-center mt-3 rounded`, { backgroundColor: BASECOLOR }]}>Proceed to pay</Text>
                        </TouchableOpacity>
                            <View style={tw`pt-6 pl-3`}>
                                <Text style={tw`font-bold text-black`}>1 Credit = INR 1,999</Text>
                            </View>
                        {user && <View style={tw`p-3 flex flex-row justify-between items-center`}>
                            <Text style={tw`font-bold text-base text-black`}>Available Credits : {user && user.Credits}</Text>
                            {!loading2 ? <TouchableOpacity style={tw`p-2 border border-gray-300 rounded-xl w-32`} onPress={ApplyCredits}>
                                <Text style={tw`text-center text-black`}>Apply</Text>
                            </TouchableOpacity> : <ApplicationProvider {...eva} theme={eva.light}>
                            <Spinner/></ApplicationProvider>}
                        </View>}
                    </View>
                </View>
            </Modal>
            <View style={[Styles.root, tw``]}>
                <Image source={{ uri: route.params.background }} style={tw`w-full h-60`} />
                <View style={tw`absolute w-full h-60 flex items-center justify-center`}>
                    <Text style={[tw`text-2xl text-white font-bold text-center w-full`, {
                        textShadowColor: "black", textShadowRadius: 1, textShadowOffset: {
                            width: 2, height: 2
                        }
                    }]}>{route.params.name}</Text>
                </View>
                <View style={tw`h-full w-full bg-white p-3`}>
                    <Text style={tw`font-bold text-black text-xl`}>{route.params.name}</Text>
                    {(route.params.name !== "Management" && route.params.name !== "Educational & Professional Institutions") && <Text style={tw`text-black mt-3`}>(INR {route.params.price}/- Per <Text>{route.params.name === "Management" ? "Person" : "Session"}</Text> Per Module)</Text>}
                    <View style={tw`mt-3 flex flex-col gap-2`}>
                        {
                            route.params.keyPoints.map(itm => {
                                return (
                                    <View style={tw`flex flex-row gap-2 items-center p-2 rounded-md`}>
                                        <MaterialIcons color={BASECOLOR} size={22} name="arrow-right-alt" style={tw`font-bold`} />
                                        <Text style={tw`text-black`}>{itm}</Text>
                                    </View>
                                );
                            })
                        }
                    </View>
                    <Text style={tw`p-2 text-xs text-black`}><Text style={{ color: BASECOLOR, fontWeight: "800" }}>Note</Text> : One session: {route.params.duration} minutes</Text>
                    {route.params.name === "Child and Adolescent" && <View style={tw`flex flex-row items-center gap-3 pl-4 mt-3`}><MaterialCommunityIcons name="star" /><Text style={tw`font-bold`}>Parent Consent Mandatory</Text></View>}
                    {route.params.canBook && <Text style={tw`py-3 font-bold text-xl text-black`}>Your Schedule</Text>}
                    {route.params.canBook && <View style={Styles.picker}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={tw`flex flex-row`}>
                                {
                                    weeks.map((dates, index) => {
                                        return <View style={tw`flex flex-row justify-evenly gap-2 mr-3`}>
                                            {dates.map((date, index) => {
                                                const isActive = value.toDateString() === date.date.toDateString();
                                                const dt = new Date();
                                                const not_blocked = (date.date.getTime() >= dt.getTime() || date.date.getDate() === dt.getDate());
                                                return (
                                                    <TouchableWithoutFeedback onPress={() => {
                                                        if (not_blocked) {
                                                            setValue(date.date)
                                                        }
                                                    }}>
                                                        <View style={[tw`border p-2 border-gray-100 rounded w-13`, isActive && { backgroundColor: BASECOLOR }]}>
                                                            <Text style={[tw`text-black text-center`, isActive ? { color: "white" } : { color: !not_blocked ? "gray" : "black" }]}>{date.day}</Text>
                                                            <Text style={[tw`text-black text-center font-bold`, isActive ? { color: "white" } : { color: !not_blocked ? "gray" : "black", fontWeight: !not_blocked ? 300 : 'bold' }]}>{date.date.getDate()}</Text>
                                                        </View>
                                                    </TouchableWithoutFeedback>
                                                );
                                            })}
                                        </View>
                                    })
                                }
                            </View>
                        </ScrollView>
                    </View>}
                    <Text style={tw`mt-3 font-bold text-gray-400`}>{value.toDateString()}</Text>
                    {route.params.canBook && <View style={tw`mt-3`}>
                        <Text style={tw`text-xs text-gray-600 text-center`}>Morning</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={tw`flex flex-row gap-2 p-2`}>
                                {
                                    slots.map(slot => {
                                        if (slot.Active) {
                                            if (slot.time >= "08:00" && slot.time <= "11:45") {
                                                return (
                                                    <Text style={tw`p-2 ${selectedTime === slot.time ? "text-white bg-black rounded border border-black" : "text-black rounded border border-gray-300"}`} onPress={() => setSelectedTime(slot.time)}>{slot.time}</Text>
                                                );
                                            }
                                        }
                                    })
                                }
                            </View>
                        </ScrollView>
                        <Text style={tw`text-xs text-gray-600 text-center`}>Afternoon</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={tw`flex flex-row gap-2 p-2`}>
                                {
                                    slots.map(slot => {
                                        if (slot.Active) {
                                            if (slot.time > "11:45" && slot.time <= "15:00") {
                                                return (
                                                    <Text style={tw`p-2 ${selectedTime === slot.time ? "text-white bg-black rounded border border-black" : "text-black rounded border border-gray-300"}`} onPress={() => setSelectedTime(slot.time)}>{slot.time}</Text>
                                                );
                                            }
                                        }
                                    })
                                }
                            </View>
                        </ScrollView>
                        <Text style={tw`text-xs text-gray-600 text-center`}>Evening</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={tw`flex flex-row gap-2 p-2`}>
                                {
                                    slots.map(slot => {
                                        if (slot.Active) {
                                            if (slot.time > "15:00" && slot.time <= "18:00") {
                                                return (
                                                    <Text style={tw`p-2 ${selectedTime === slot.time ? "text-white bg-black rounded border border-black" : "text-black rounded border border-gray-300"}`} onPress={() => setSelectedTime(slot.time)}>{slot.time}</Text>
                                                );
                                            }
                                        }
                                    })
                                }
                            </View>
                        </ScrollView>
                        <Text style={tw`text-xs text-gray-600 text-center`}>Night</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={tw`flex flex-row gap-2 p-2`}>
                                {
                                    slots.map(slot => {
                                        if (slot.Active) {
                                            if (slot.time > "18:00" && slot.time <= "24:00") {
                                                if (slot.premium) {
                                                    return (
                                                        <View>
                                                            <View style={tw`absolute right-0 bottom-8 z-10`}>
                                                                <MaterialCommunityIcons name="crown" size={15} color="#DEA701" />
                                                            </View>
                                                            <Text style={tw`p-2 rounded border border-yellow-800 text-yellow-800`} onPress={() => setSelectedTime(slot.time)}>{slot.time}</Text>
                                                        </View>
                                                    );
                                                } else {
                                                    return (
                                                        <Text style={tw`p-2 ${selectedTime === slot.time ? "text-white bg-black rounded border border-black" : "text-black rounded border border-gray-300"}`} onPress={() => setSelectedTime(slot.time)}>{slot.time}</Text>
                                                    );
                                                }
                                            }
                                        }
                                    })
                                }
                            </View>
                        </ScrollView>
                    </View>}
                    {route.params.canBook ? <TouchableOpacity style={[tw`p-3 mt-3 rounded`, { backgroundColor: BASECOLOR }]} onPress={BookAppointment}>
                        <Text style={tw`text-center text-white font-bold`}>Book Appointment</Text>
                    </TouchableOpacity> : <View><TouchableOpacity style={[tw`p-3 mt-3 rounded`, { backgroundColor: BASECOLOR }]} onPress={() => setContactModal(true)}>
                        <Text style={tw`text-center text-white font-bold`}>Contact Us</Text>
                    </TouchableOpacity>
                        <View>
                            <TouchableOpacity style={tw`flex flex-row mt-3 items-center gap-3`} onPress={()=>{
                                Linking.openURL('whatsapp://send?text=&phone=919100715688')
                            }}>
                                <FontAwesome name="whatsapp" size={24} color="green" />
                                <Text>Whatsapp</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}
                    <View style={tw`bg-white`}>
                        {(route.params.name === "Management" || route.params.name === "Educational & Professional Institutions") && <Text style={tw`p-3 font-bold underline text-black`}>NOTE : </Text>}
                        {(route.params.name === "Management" || route.params.name === "Educational & Professional Institutions") && <Text style={tw`text-xs px-3 text-black`}>{route.params.note}</Text>}
                    </View>
                    <View>
                        {route.params.name === "Child and Adolescent" && <View style={tw`p-2 bg-white`}>
                            <Text style={tw`font-bold text-black`}>NOTE :</Text>
                            <Text style={tw`mt-2 text-black`}>Child counseling sessions will have additional requirements, which will be shared separately before the session.</Text>
                        </View>}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    root: {
        backgroundColor: BASECOLOR,
        flex: 1,

    }
});

export default ViewService;