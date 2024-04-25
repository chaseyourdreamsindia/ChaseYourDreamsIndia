import React, { useState } from 'react';
import { Alert, Clipboard, Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios';
import BASE from '../api/api';
import { ApplicationProvider, Spinner } from '@ui-kitten/components';
import * as eva from '@eva-design/eva'

const ViewBooking = ({ route, navigation }) => {

    const [review, setReview] = useState({
        Name: "",
        Message: "",
        Rating: 0
    });

    const [loading,setLoading] = useState(false);

    const [modalView, setModalView] = useState(false);

    const submitHandler = ()=>{
        axios.post(`${BASE}/review/add-review`,{...review,userID:route.params.userID,serviceID:route.params.serviceId._id,bookingID:route.params._id}).then(resp=>{
            setLoading(false);
            Alert.alert(resp.data.message);
        }).catch(err=>{
            setLoading(false);
            Alert.alert(err.message);
        })
    }

    return (
        <ScrollView>
            <View style={Styles.root}>
                <Modal transparent={true} visible={modalView} animationType='slide' onRequestClose={() => setModalView(false)}>
                    <View style={[tw`flex flex-row items-end`, { flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }]}>
                        <View style={tw`w-full h-52 bg-white`}>
                            <View style={tw`flex flex-row justify-center items-center mt-3`}>
                                <MaterialCommunityIcons name="minus-thick" color="gray" size={24} onPress={() => setModalView(false)} />
                            </View>
                            <View style={tw`p-3`}>
                                <Text style={tw`text-base font-bold text-black`}>Please use this meet link to attend the session</Text>
                                <TouchableOpacity onPress={async ()=>{
                                    Clipboard.setString(route.params.meetLink);
                                    if (Platform.OS === 'android') { 
                                        ToastAndroid.show('URL copied to clipboard!', 
                                            ToastAndroid.SHORT); 
                                    } else if (Platform.OS === 'ios') { 
                                        Alert.alert('URL copied to clipboard!'); 
                                    } 
                                }}>
                                    <View style={tw`p-3 flex flex-row items-center gap-2`}>
                                        <Image source={require("../Assets/Icons/meet.png")} style={tw`w-10 h-10`}/>
                                        <Text style={tw`text-black`}>{route.params.meetLink}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Image source={{ uri: route.params.serviceId.background }} style={tw`w-full h-52`} />
                <ImageBackground source={require("../Assets/bg-6.jpeg")}>
                    <View style={tw`p-2 mt-4`}>
                        <Text style={tw`text-2xl font-bold text-black`}>{route.params.serviceId.name}</Text>
                        <Text style={tw`text-base font-bold mt-2 text-black`}>Date : {route.params.date}</Text>
                        <Text style={tw`text-base font-bold mt-2 text-black`}>Time : {route.params.time}</Text>
                        <Text style={tw`text-base font-bold mt-2 text-black`}>Price : {route.params.totalPrice}/-</Text>
                        <View style={tw`flex flex-row gap-2`}>
                            <TouchableOpacity style={tw`p-2 bg-black rounded mt-3 w-full`} onPress={()=>setModalView(true)}>
                                <Text style={tw`text-white text-center`}>View Meet Link</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity style={tw`p-2 border rounded mt-3 w-1/2 mx-auto`}>
                                <Text style={tw`text-black text-center`}>View Invoice</Text>
                            </TouchableOpacity> */}
                        </View>
                        <View style={tw`p-2 mt-2`}>
                            <Text style={tw`text-black font-bold`}>We'd love your Feedback !</Text>
                            <TextInput style={[tw`mt-2 w-full p-3 rounded border-gray-300 text-black`, {
                                borderWidth: 1,
                                // borderColor:"gray"
                            }]} placeholder='Enter Name ( Optional )' value={review.Name} onChangeText={txt => setReview({ ...review, Name: txt })} />
                            <Text style={tw`mt-3 text-black font-bold`}>Message</Text>
                            <TextInput style={[tw`mt-2 w-full p-3 rounded border-gray-300 h-30`, {
                                borderWidth: 1,
                                // borderColor:"gray"
                            }]} placeholder='Enter Message' multiline={true} value={review.Message} onChangeText={txt => setReview({ ...review, Message: txt })} />
                            <View style={tw`mt-3`}>
                                <Text style={tw`mb-3 text-black font-bold`}>Rate Your Experience</Text>
                                <View style={tw`flex flex-row w-full justify-evenly`}>
                                    <TouchableOpacity onPress={() => setReview
                                        ({ ...review, Rating: 1 })}><FontAwesome name={review.Rating >= 1 ? "star" : "star-o"} size={23} color="#ffb300" /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setReview
                                        ({ ...review, Rating: 2 })}><FontAwesome name={review.Rating >= 2 ? "star" : "star-o"} size={23} color="#ffb300" /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setReview
                                        ({ ...review, Rating: 3 })}><FontAwesome name={review.Rating >= 3 ? "star" : "star-o"} size={23} color="#ffb300" /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setReview
                                        ({ ...review, Rating: 4 })}><FontAwesome name={review.Rating >= 4 ? "star" : "star-o"} size={23} color="#ffb300" /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setReview
                                        ({ ...review, Rating: 5 })}><FontAwesome name={review.Rating >= 5 ? "star" : "star-o"} size={23} color="#ffb300" /></TouchableOpacity>
                                </View>
                            </View>
                            {!loading ? <TouchableOpacity style={tw`mt-3 border border-gray-500 p-3 rounded`} onPress={submitHandler}>
                                <Text style={tw`text-center text-black`}>Submit</Text>
                            </TouchableOpacity> : <ApplicationProvider {...eva} theme={eva.light}>
                                <View style={tw`flex flex-col items-center justify-center p-7`}>
                                    <Spinner style={tw`border-black`}/>
                                </View>
                                </ApplicationProvider>}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "white",
    }
});

export default ViewBooking;
